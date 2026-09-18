# Technical SEO — nálezy

Testováno lokálně (`index.html` přes `http.server`), audit proti produkční doméně nebyl možný — `zamecnictvimb.cz` teď servíruje starý web (viz FULL-AUDIT-REPORT.md, sekce "Kontext").

## Co funguje

- `lang="cs"`, `viewport`, `charset` v pořádku.
- Canonical `<link rel="canonical" href="https://www.zamecnictvimb.cz/">` nastaven správně.
- `robots.txt` povoluje vše (`Allow: /`), včetně AI crawlerů (žádné explicitní blokace GPTBot/ClaudeBot/CCBot — v pořádku, nechceme je blokovat).
- `sitemap.xml` obsahuje jedinou URL kořene — odpovídá tomu, že jde o skutečně jednostránkový web. Chybí `lastmod`, ale u single-page webu to není zásadní.
- Skip-link, sémantické HTML5 (`header`, `main`, `nav`, `footer`, `section`), jedno `<h1>`, logická hierarchie `h2`/`h3` bez přeskočených úrovní.
- Lighthouse: Accessibility 100/100, Best Practices 100/100, SEO 100/100 (desktop i mobil).
- Formulář má honeypot proti spamu, GDPR checkbox, žádné trackovací skripty (žádný cookie banner není potřeba).

## Nálezy k opravě

### 1. Chybí bezpečnostní hlavičky (CSP, HSTS) — High
Lighthouse hlásí `No CSP found in enforcement mode` a `No HSTS header found` (severity High v obou případech). `vercel.json` dnes nastavuje jen `Cache-Control` pro fonty a obrázky, žádné bezpečnostní hlavičky.

**Doporučení:** do `vercel.json` přidat hlavičky pro všechny cesty (`source: "/(.*)"）`:
- `Strict-Transport-Security: max-age=31536000; includeSubDomains`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: geolocation=(), camera=(), microphone=()`
- `Content-Security-Policy` — vzhledem k tomu, že stránka používá Google Maps iframe a žádné inline skripty mimo JSON-LD, dá se sestavit rozumně přísná politika. Tohle bych navrhoval napsat a otestovat společně, ať nerozbije mapu nebo font loading.

Nejde o penalizaci v Googlu, ale o důvěryhodnost webu (prohlížeče, Safe Browsing signály) a je to snadné doplnit před spuštěním.

### 2. Meta description je 200 znaků — Medium
Google ořízne kolem 155–160 znaků na desktopu, na mobilu ještě dřív. Aktuální popis se v SERPu utne uprostřed věty.

**Doporučení:** zkrátit na ~150–155 znaků, např.: *„Zámečnictví MB s.r.o. – atypická kovovýroba, ocelové konstrukce, vrata, ploty, schody a zábradlí na míru. Na trhu od roku 1999, Březno u Mladé Boleslavi."* (152 znaků). Přesné znění nechávám na schválení, jde jen o ukázku délky.

### 3. Chybí `og:image` a `twitter:image` — Medium
V `<head>` jsou OG tagy (`og:title`, `og:description`, `og:url`, `og:type`, `og:locale`), ale žádný `og:image`. `twitter:card` je nastaven na `summary` (ne `summary_large_image`) a bez `twitter:image`. Sdílení odkazu na Facebooku, LinkedInu nebo přes WhatsApp/iMessage zobrazí kartu bez náhledového obrázku.

**Doporučení:** připravit jeden OG obrázek 1200×630 px (typicky hero fotka + logo/nadpis) a doplnit `og:image`, `og:image:width`, `og:image:height`, přepnout `twitter:card` na `summary_large_image` + `twitter:image`. Tohle prakticky vyžaduje hotový vizuál, takže dává smysl řešit až s finálními podklady, ne teď s placeholdery.

### 4. Chybí `preload` pro klíčový font — Low
Nadpis (`<h1>`) používá font Space Grotesk, který se načítá až z CSS `@font-face` (bez `rel="preload"`). Lighthouse breakdown ukazuje 525 ms "element render delay" na LCP prvku (H1) — částečně dané tím, že prohlížeč font objeví pozdě.

**Doporučení:** přidat do `<head>`:
```html
<link rel="preload" as="font" type="font/woff2" href="/fonts/space-grotesk/space-grotesk-latin.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/space-grotesk/space-grotesk-latin-ext.woff2" crossorigin>
```
(latin-ext je potřeba kvůli české diakritice v nadpisu "Přesná".)

## Bez nálezu (u jednostránkového webu se netýká)
Multi-page crawl, duplicitní meta tagy napříč URL, hloubka interního prolinkování, hreflang, stránkování sitemapy — u single-page struktury s kotvami tyto kategorie nedávají smysl a nekontroloval jsem je.
