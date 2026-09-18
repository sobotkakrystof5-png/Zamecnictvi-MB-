# Akční plán — SEO audit Zámečnictví MB

## Fáze 1: Kritické opravy (před spuštěním webu)

- [ ] **Vygenerovat responsive verze galerijních fotek** — grid thumbnail (~500–600 px) + lightbox verze (~1600–1920 px) pro všech 64 fotek; upravit `gallery.js`, aby mřížka používala thumbnail a lightbox teprve velkou verzi. *(performance.md #1 — největší dopad z celého auditu)*
- [ ] **Zmenšit `images/about/o-nas.webp`** na ~1300 px šířky. *(performance.md #2)*
- [ ] **Doplnit CSP + HSTS + další bezpečnostní hlavičky** do `vercel.json`, otestovat že nerozbijí Google Maps iframe a font loading. *(technical.md #1)*

## Fáze 2: Vysoký dopad (týden po fázi 1)

- [ ] **Zkrátit meta description** na ~150–155 znaků. *(technical.md #2)*
- [ ] **Připravit a doplnit `og:image` (1200×630) + přepnout `twitter:card` na `summary_large_image`** — potřebuje hotový vizuál, ne jen kód. *(technical.md #3)*
- [ ] **Zmenšit logo PNG** na reálně zobrazovanou velikost (~480 px šířka). *(performance.md #3)*
- [ ] **Přidat `preload` na Space Grotesk font** (latin + latin-ext). *(technical.md #4, performance.md #4)*

## Fáze 3: Obsah a strukturovaná data (potřebují vstup od klienta — nedoplňovat bez podkladů)

- [ ] **Doplnit do JSON-LD:** `openingHoursSpecification`, `geo` (GPS souřadnice), `priceRange`, `areaServed`, `sameAs` (Google Business Profile / sociální sítě, pokud existují). *(schema.md)*
- [ ] **Potvrdit, že `josef.antos@zamecnictvimb.cz` je platná, sledovaná schránka** pod novou doménou před spuštěním. *(schema.md)*
- [ ] **Rozšířit alt texty galerie na unikátní popisky za fotku** (ne jen podle kategorie) — vyžaduje, aby někdo fotky prošel a stručně popsal. *(content.md)*
- [ ] **Zvážit doplnění E-E-A-T signálů** — certifikace, konkrétní reference, případně krátký Q&A blok pro AI vyhledávače. *(content.md)*
- [ ] **Přejmenovat soubory galerie** na popisné slug názvy při generování zmenšených verzí. *(content.md)*

## Fáze 4: Po spuštění — monitoring

- [ ] Zaregistrovat doménu v Google Search Console, odeslat `sitemap.xml`.
- [ ] Zkontrolovat, že produkční nasazení (Vercel) skutečně posílá nastavené hlavičky (`curl -I`) — lokální test to neověří.
- [ ] Po spuštění spustit tento audit znovu proti živé doméně pro reálná CrUX pole data a plný crawl (aktuální audit je z lokálního buildu jedné stránky).
- [ ] Zvážit přidání privacy-friendly analytics (web zatím nemá žádné) pro sledování návštěvnosti.

---
*Bez zaškrtnutí: fáze 1–2 lze provést bez dalších podkladů. Fáze 3 vyžaduje vstupy od klienta/majitele firmy — needomýšlet.*
