(function () {
  "use strict";

  var form = document.getElementById("contact-form");
  if (!form) return;

  var submitBtn = document.getElementById("cf-submit");
  var statusEl = document.getElementById("cf-status");

  var fields = {
    name: document.getElementById("cf-name"),
    email: document.getElementById("cf-email"),
    phone: document.getElementById("cf-phone"),
    message: document.getElementById("cf-message"),
  };

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setFieldError(field, hasError) {
    var wrapper = field.closest(".form-field");
    if (wrapper) wrapper.classList.toggle("has-error", hasError);
  }

  function validate() {
    var valid = true;

    var nameValid = fields.name.value.trim().length >= 2;
    setFieldError(fields.name, !nameValid);
    valid = valid && nameValid;

    var emailValid = EMAIL_RE.test(fields.email.value.trim());
    setFieldError(fields.email, !emailValid);
    valid = valid && emailValid;

    var messageValid = fields.message.value.trim().length >= 10;
    setFieldError(fields.message, !messageValid);
    valid = valid && messageValid;

    var gdprValid = form.gdprConsent.checked;
    valid = valid && gdprValid;

    return valid;
  }

  function showStatus(kind, message) {
    statusEl.className = "form-status form-status--" + kind;
    statusEl.textContent = message;
  }

  function clearStatus() {
    statusEl.className = "form-status";
    statusEl.textContent = "";
  }

  ["input", "change"].forEach(function (evt) {
    form.addEventListener(evt, function (e) {
      var wrapper = e.target.closest(".form-field");
      if (wrapper) wrapper.classList.remove("has-error");
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearStatus();

    if (!validate()) {
      showStatus("error", "Zkontrolujte prosím zvýrazněná pole a zkuste to znovu.");
      return;
    }

    var payload = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      phone: fields.phone.value.trim(),
      message: fields.message.value.trim(),
      gdprConsent: form.gdprConsent.checked,
      website: form.website.value, // honeypot, u reálného uživatele vždy prázdné
    };

    form.classList.add("is-submitting");
    submitBtn.disabled = true;
    submitBtn.textContent = "Odesílám…";

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(function (res) {
        return res.json().then(function (data) {
          return { ok: res.ok, data: data };
        });
      })
      .then(function (result) {
        if (result.ok && result.data.ok) {
          showStatus("success", "Děkujeme za poptávku. Ozveme se vám co nejdříve zpět.");
          form.reset();
        } else {
          showStatus(
            "error",
            "Poptávku se nepodařilo odeslat. Zkuste to prosím znovu, nebo nám zavolejte na 773 603 377."
          );
        }
      })
      .catch(function () {
        showStatus(
          "error",
          "Poptávku se nepodařilo odeslat: zkontrolujte připojení a zkuste to znovu, nebo nám zavolejte na 773 603 377."
        );
      })
      .finally(function () {
        form.classList.remove("is-submitting");
        submitBtn.disabled = false;
        submitBtn.textContent = "Odeslat poptávku";
      });
  });
})();
