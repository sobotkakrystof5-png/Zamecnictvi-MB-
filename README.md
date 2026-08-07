# Zámečnictví MB s.r.o. — web

Jednostránková prezentace firmy Zámečnictví MB s.r.o. (kovovýroba na zakázku, Židněves u Března, na trhu od roku 1999). Čisté HTML5 + CSS3 + vanilla JS, žádný framework, žádný build krok. Kontaktní formulář odesílá poptávky přes Resend pomocí jedné tenké serverless funkce na Vercelu.

## Spuštění lokálně

Stránka používá cesty k fontům a obrázkům začínající `/` (root-relative), proto **nejde spolehlivě otevřít přímo dvojklikem** (`file://`) — je potřeba lokální server:

```bash
npx serve .
# nebo
python3 -m http.server 8000
```

Pro test kontaktního formuláře (serverless funkce) je potřeba Vercel CLI:

```bash
npm i -g vercel
vercel dev
```

## Struktura projektu

```
index.html              — celá stránka (8 sekcí, viz níže)
css/
  tokens.css             — barvy, typografie, spacing, proměnné
  base.css               — reset, @font-face, přístupnost
  layout.css             — header, mobilní menu, footer
  components.css         — tlačítka, formulář, placeholder fotky, signature motiv
  sections.css           — kompozice jednotlivých sekcí
js/
  nav.js                 — sticky header, scrollspy, hamburger menu
  reveal.js              — scroll-reveal (respektuje prefers-reduced-motion)
  gallery.js             — generování 20 galerijních dlaždic, filtr, sbalení nad 12 fotek, lightbox
  contact-form.js        — validace a odeslání formuláře přes fetch
api/
  contact.js             — Vercel serverless funkce, volá Resend REST API
images/
  logo/                  — zpracované logo (transparentní PNG)
  hero/, about/          — 1 placeholder fotka každá
  galerie/{4 kategorie}/ — složky pro budoucích ~20 fotografií
fonts/
  space-grotesk/, inter/ — self-hosted woff2 (latin + latin-ext, česká diakritika)
favicon.ico, favicon-*.png, apple-touch-icon.png — odvozeno z reálného loga firmy
sitemap.xml, robots.txt
.env.example             — šablona pro Resend env proměnné
vercel.json              — region funkce (fra1), cache hlavičky pro fonty/obrázky
```

## Sekce stránky

1. **Header** — sticky, průhledný nad hero, po scrollu bílý se stínem
2. **Hero** (`#hero`) — asymetrický layout, CTA, číselný pruh (25+ let / 1999)
3. **O nás** (`#o-nas`) — text + placeholder fotka, 4 hodnotové bloky
4. **Služby** (`#sluzby`) — asymetrický bento grid, 5 nabídek
5. **Galerie** (`#galerie`) — masonry, filtr kategorií, lightbox, sbalení nad 12 fotek (20 placeholderů)
6. **Kontakt** (`#kontakt`) — kontaktní údaje + mapa + formulář
7. **Footer** — logo, rychlé odkazy, kontakt

## Nahrazení placeholder fotek reálnými

Každý slot fotky používá třídu `.photo-frame` s CSS proměnnou `--ar` (poměr stran) — po schválení designu stačí `<figure class="photo-frame">...</figure>` nahradit za `<img>` se stejným poměrem stran, layout se nezmění. Galerie (`#galerie`) se generuje dynamicky v `js/gallery.js` (pole `RATIOS` a kategorie) — až budou fotky k dispozici, buď doplňte `src` do generovaného pole, nebo sekci přepište na statické HTML.

## Nastavení kontaktního formuláře (Resend + Vercel)

1. Vytvořte účet na [resend.com](https://resend.com) a API klíč.
2. V Resend přidejte a DNS-ověřte doménu `zamecnictvimb.cz` (SPF/DKIM) — bez toho lze odesílat jen ze sandboxové adresy `onboarding@resend.dev`.
3. Ve Vercel projektu (Settings → Environment Variables) nastavte:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` = `josef.antos@zamecnictvimb.cz`
   - `CONTACT_FROM_EMAIL` = `Web Zámečnictví MB <poptavka@zamecnictvimb.cz>` (až bude doména ověřená)
4. Nasaďte (`vercel` nebo přes Git integraci) — formulář posílá `POST /api/contact`.

Formulář obsahuje honeypot pole proti spamu a jednoduchý rate limiting (5 odeslání/minutu/IP, best-effort).

## Otevřené body ke schválení klientem

- **Hlavní nadpis hero sekce** — v `index.html` je použitá varianta A ("Přesná kovovýroba na míru. Od roku 1999.") Dvě alternativy (B, C) jsou uvedené jako HTML komentář přímo nad `<section class="hero">` pro snadné porovnání a přepnutí.
- **GDPR** — u souhlasu ve formuláři je krátký text o účelu zpracování údajů. Web zatím nemá samostatnou stránku se zásadami ochrany osobních údajů — brief o ni explicitně nežádal, ale stojí za zvážení, pokud bude formulář sbírat citlivější data.
- **Logo** — zdrojový soubor `logo zamecnicgvi mb.jpeg` byl zpracován (odstranění žlutého pozadí, ořez, favicon). Pokud existuje vektorová/vyšší rozlišení verze loga, lze ji použít místo aktuálního rastru pro ještě ostřejší zobrazení na velkých plochách.
- **Mapa** — použitý je Google Maps embed s textovým dotazem na adresu (`q=Židněves 65, 294 06 Březno`), který si polohu dohledá sám bez nutnosti ručně zadávat souřadnice — nehrozí tak špatně umístěný špendlík. Pokud dáváte přednost Mapy.cz, doporučuji vygenerovat embed kód přímo na mapy.cz ("Vložit mapu" u vyhledaného místa), aby měl přesné souřadnice/ID z jejich systému.

## Přístupnost a výkon

- Fokus viditelný (`:focus-visible`), `prefers-reduced-motion` respektováno v CSS i JS.
- Formulářová pole mají viditelné labely, chybové stavy i kontrast dle WCAG AA.
- Fonty self-hosted (žádná runtime závislost na Google Fonts), `font-display: swap`.
- Obrázky (až budou doplněny) používat `loading="lazy"` mimo hero.
