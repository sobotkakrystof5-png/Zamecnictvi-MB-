# Schema / strukturovaná data — nálezy

## Co je hotovo
JSON-LD `LocalBusiness` je přítomný a validní:
```json
{
  "@type": "LocalBusiness",
  "name": "Zámečnictví MB s.r.o.",
  "image": "...",
  "telephone": "+420773603377",
  "email": "josef.antos@zamecnictvimb.cz",
  "foundingDate": "1999",
  "address": { ... },
  "vatID": "CZ14051435",
  "taxID": "14051435",
  "url": "..."
}
```
Adresa, telefon i IČO/DIČ odpovídají tomu, co je vidět v patičce a kontaktní sekci — konzistentní NAP údaje (name/address/phone), což je pro lokální SEO důležitější než samotné schema.

## Chybějící doporučená pole — Medium

Tohle jsou pole, která `LocalBusiness` typicky má a Google/AI vyhledávače je využívají, ale **nemůžu je vyplnit sám** — potřebuju od tebe reálné údaje, ne si je domýšlet:

- **`openingHoursSpecification`** — otevírací/pracovní doba. Bez ní Google nemůže zobrazit "Otevřeno/Zavřeno" v knowledge panelu.
- **`geo`** (`latitude`/`longitude`) — přesné GPS souřadnice Židněves 65. Pomáhá přesnosti na mapě.
- **`priceRange`** — orientační cenová hladina (např. `"$$"` nebo textově), nepovinné, ale často se ptají AI asistenti.
- **`areaServed`** — jaké okolí/region firma reálně obsluhuje (jen Mladá Boleslav? celý Středočeský kraj? celá ČR?). Tohle je obchodní rozhodnutí, ne technické — potřebuju vstup od tebe.
- **`sameAs`** — odkazy na Google Business Profile, případně Facebook/Instagram firmy, pokud existují. Pomáhá Googlu propojit web s existující firemní entitou.

**Nezavádím žádné z těchto polí s vymyšlenými hodnotami** — to by bylo v rozporu s pravidlem "nedoplňovat chybějící informace vlastní domněnkou". Až budou podklady, doplním.

## Volitelné rozšíření — Low
- `hasOfferCatalog` / `makesOffer` se seznamem služeb (ocelové konstrukce, návrh, montáž) — zlepšuje čitelnost pro AI vyhledávače (GEO), ale je to nadstavba, ne nutnost.
- Specifičtější `@type` než generický `LocalBusiness` — schema.org nemá přesný typ pro "zámečnictví/kovovýrobu", takže `LocalBusiness` je v pořádku; alternativa `HomeAndConstructionBusiness` by sémanticky sedla o něco líp, ale rozdíl v praxi je zanedbatelný.

## Poznámka k e-mailu ve schema
JSON-LD `email` je `josef.antos@zamecnictvimb.cz` — stejný, jaký je v kontaktní sekci webu. Jen pro jistotu potvrdit, že tahle schránka pod novou doménou reálně existuje a je sledovaná, než web spustíte — schema s neplatným kontaktem je horší než žádné.
