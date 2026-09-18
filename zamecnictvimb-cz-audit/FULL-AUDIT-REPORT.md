# SEO audit — Zámečnictví MB s.r.o. (nový web, pre-launch)

Datum: 2026-09-09
Zdroj: lokální build tohoto repozitáře (`index.html` + statické assety), testováno přes `python3 -m http.server` + Lighthouse 13.4.1 (mobil + desktop).

## Kontext auditu — proč ne živá doména

`zamecnictvimb.cz` dnes servíruje **starý web** (firma "Josef Antoš", staré tabulkové řešení, jQuery), ne tenhle projekt — nový web ještě nebyl nasazen. Standardní nástroje SEO skillu navíc mají zabudovanou SSRF ochranu, která blokuje fetch na `localhost`/privátní IP adresy (záměrně, nešel jsem to obcházet) — takže tento audit místo automatizovaného crawleru kombinuje:
- **Lighthouse** (mobil + desktop) proti lokálně servírovanému buildu,
- **ruční přečtení zdroje** (`index.html`, CSS, JS, `robots.txt`, `sitemap.xml`, `vercel.json`),
- **inventuru souborů** (`images/`) mimo to, co Lighthouse vidí v jednom page loadu.

Protože jde o **jednu stránku** (scroll s kotvami, ne multi-page), odpadají celé kategorie, které dávají smysl jen u větších webů — crawl 500 stránek, duplicity mezi URL, hloubka interního prolinkování, hreflang. Byly vynechány záměrně, ne přehlédnuty.

## SEO Health Score: 70 / 100

Skóre odráží **rozpracovaný, ještě nespuštěný web** — část kategorií (obsah, obrázky, GEO) je penalizována nálezy, které jsou přímým důsledkem toho, že projekt je podle `CLAUDE.md` záměrně ve fázi návrhu. To není finální hodnocení produktu, je to hodnocení aktuálního stavu buildu.

| Kategorie | Váha | Skóre | Poznámka |
|---|---|---|---|
| Technical SEO | 22 % | 80 | chybí CSP/HSTS, dlouhý meta description |
| Content Quality | 23 % | 65 | tenčí obsah, chybí E-E-A-T signály |
| On-Page SEO | 20 % | 78 | title/H1/H2 v pořádku, chybí og:image |
| Schema | 10 % | 55 | LocalBusiness bez openingHours/geo/sameAs |
| Performance (CWV) | 10 % | 75 | desktop 99, mobil 83, galerie neoptimalizovaná |
| AI Search Readiness | 10 % | 60 | dobrý základ, chybí Q&A obsah |
| Images | 5 % | 50 | neunikátní alt texty, 20MB neoptimalizované galerie |

## Top 5 kritických/nejdůležitějších nálezů

1. **Galerie: 64 fotek, průměr 313 KB, žádné responsive verze** — `gallery.js` posílá do mřížky i lightboxu identický plnorozměrný soubor. 19,6 MB dat pro fotky, které se v mřížce zobrazují v řádu stovek pixelů. *(Performance, Critical)*
2. **Chybí CSP a HSTS hlavičky** — `vercel.json` řeší jen cache, žádné bezpečnostní hlavičky. *(Technical, High)*
3. **`o-nas.webp`: 1920×1440 px zobrazeno na 651×488 px** — 422 KB zbytečně stažených dat jen na jedné fotce z "O nás". *(Performance, High)*
4. **Meta description 200 znaků** — ořízne se v Google SERPu. *(On-Page, Medium)*
5. **Neunikátní alt texty v galerii** — všech 35 fotek kategorie "Schody a zábradlí" má identický alt text. *(Images, Medium)*

## Rychlé výhry (quick wins)

- Zkrátit meta description na ~150 znaků (5 minut, žádné podklady navíc netřeba).
- Přidat `preload` na hlavní font pro nadpis (technical.md, bod 4) — pár řádků v `<head>`.
- Doplnit bezpečnostní hlavičky do `vercel.json` (schema/hodnoty viz technical.md, bod 1) — otestovat, ať nerozbije Google Maps iframe.
- Zmenšit logo PNG na reálně zobrazovanou velikost.

Zbytek (galerijní responsive obrázky, og:image, schema pole vyžadující reálná data) potřebuje buď víc práce, nebo podklady od klienta — rozepsáno v `ACTION-PLAN.md`.

## Co je hotové a funguje dobře

- Lighthouse Accessibility, Best Practices i SEO: **100/100** na desktopu i mobilu.
- Sémantická struktura HTML, jedno `<h1>`, žádné přeskočené úrovně nadpisů, skip-link.
- JSON-LD `LocalBusiness` přítomné a s konzistentními NAP údaji napříč stránkou.
- `robots.txt` nic neblokuje, žádné omezení pro AI crawlery.
- `font-display: swap`, `width`/`height` na obrázcích → CLS prakticky 0.
- Žádný render-blocking JS, formulář má honeypot i GDPR souhlas.
- Reálné fotky z galerie jsou už nahrané (63 fotek + peek náhledy) — obsahová stránka projektu pokročila dál, než by naznačovalo "jen placeholdery" v `CLAUDE.md`; jen technicky nejsou ještě optimalizované pro výkon.

## Detailní nálezy podle kategorie

- [`findings/technical.md`](findings/technical.md) — hlavičky, meta description, og:image, preload
- [`findings/performance.md`](findings/performance.md) — Core Web Vitals, galerie, o-nas.webp, logo
- [`findings/schema.md`](findings/schema.md) — LocalBusiness rozšíření (vyžaduje vstup od klienta)
- [`findings/content.md`](findings/content.md) — E-E-A-T, alt texty, GEO/AI čitelnost

## Prioritizovaný plán

Viz [`ACTION-PLAN.md`](ACTION-PLAN.md).

## Syrová data

- `lighthouse-mobile.html` / `lighthouse-mobile.json` — plný Lighthouse report, mobil
- `lighthouse-desktop.json` — plný Lighthouse report, desktop
