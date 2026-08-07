// Vercel serverless function (Node.js runtime).
// Přijímá poptávku z kontaktního formuláře a odešle ji přes Resend REST API.
// Bez npm balíčku "resend" — jen přímé volání fetch, žádné externí závislosti.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Jednoduchý in-memory rate limiter (best-effort — serverless instance není sdílená napříč regiony/studenty).
const submissionsByIp = new Map();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const entry = submissionsByIp.get(ip);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    submissionsByIp.set(ip, { windowStart: now, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function validate(body) {
  const errors = {};

  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (name.length < 2 || name.length > 100) errors.name = "invalid";

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = "invalid";

  const phone = typeof body.phone === "string" ? body.phone.trim().slice(0, 30) : "";

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (message.length < 10 || message.length > 5000) errors.message = "invalid";

  if (body.gdprConsent !== true) errors.gdprConsent = "invalid";

  return { errors, values: { name, email, phone, message } };
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false, error: "method_not_allowed" });
    return;
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      res.status(400).json({ ok: false, error: "invalid_json" });
      return;
    }
  }
  if (!body || typeof body !== "object") {
    res.status(400).json({ ok: false, error: "invalid_json" });
    return;
  }

  // Honeypot: reálný uživatel pole nikdy nevyplní. Bota potichu "odbudeme" úspěchem.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    res.status(200).json({ ok: true });
    return;
  }

  const ip = (req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "unknown")
    .toString()
    .split(",")[0]
    .trim();

  if (isRateLimited(ip)) {
    res.status(429).json({ ok: false, error: "rate_limited" });
    return;
  }

  const { errors, values } = validate(body);
  if (Object.keys(errors).length > 0) {
    res.status(400).json({ ok: false, error: "validation", fields: errors });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !toEmail) {
    console.error("Chybí RESEND_API_KEY nebo CONTACT_TO_EMAIL v environment proměnných.");
    res.status(500).json({ ok: false, error: "server" });
    return;
  }

  const fromAddress = process.env.CONTACT_FROM_EMAIL || "Web Zámečnictví MB <onboarding@resend.dev>";

  const textBody = [
    "Nová poptávka z webu Zámečnictví MB",
    "",
    `Jméno: ${values.name}`,
    `E-mail: ${values.email}`,
    values.phone ? `Telefon: ${values.phone}` : null,
    "",
    "Zpráva:",
    values.message,
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = `
    <h2>Nová poptávka z webu</h2>
    <p><strong>Jméno:</strong> ${escapeHtml(values.name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(values.email)}</p>
    ${values.phone ? `<p><strong>Telefon:</strong> ${escapeHtml(values.phone)}</p>` : ""}
    <p><strong>Zpráva:</strong></p>
    <p>${escapeHtml(values.message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toEmail],
        reply_to: values.email,
        subject: "Poptávka z webu — Zámečnictví MB",
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error("Resend API error:", resendRes.status, errText);
      res.status(502).json({ ok: false, error: "email_provider" });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Odeslání přes Resend selhalo:", err);
    res.status(500).json({ ok: false, error: "server" });
  }
};
