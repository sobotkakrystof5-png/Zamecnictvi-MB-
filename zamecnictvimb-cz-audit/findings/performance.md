# Performance (Core Web Vitals) — nálezy

Lab data z Lighthouse 13.4.1, lokální server (bez CDN/produkční sítě). Reálná pole data (CrUX) nejsou dostupná, dokud web neběží na produkci a nemá provoz.

## Skóre

| Kategorie | Desktop | Mobil |
|---|---|---|
| Performance | 99 | 83 |
| Accessibility | 100 | 100 |
| Best Practices | 100 | 100 |
| SEO | 100 | 100 |

| Metrika (mobil) | Hodnota | Práh "Good" |
|---|---|---|
| LCP | 4,1 s | ≤ 2,5 s |
| CLS | 0,017 | ≤ 0,1 |
| TBT | 0 ms | ≤ 200 ms |
| Speed Index | 2,4 s | – |

Desktop je bez problémů (LCP 1,0 s). Mobil je nad prahem hlavně kvůli velikosti obrázků při simulované pomalejší síti — layout shift a JS blocking nejsou problém (CLS a TBT jsou v pořádku).

## Nálezy k opravě

### 1. Galerie: 64 fotek, průměr 313 KB, bez responsive verzí — Critical
Toto je zdaleka největší nález celého auditu. Ve `/images/galerie/` je 64 WebP fotek, průměrná velikost 313 KB, několik přes 700 KB (`20260529_140439.webp` 774 KB, `20210428_122433.webp` 729 KB atd.), celkem 19,6 MB. `js/gallery.js` vkládá pro každou dlaždici v gridu i pro lightbox **stejný, plnorozměrný soubor** (`img.src = item.src`) — žádný `srcset`/menší náhled pro mřížku.

Grid dlaždice se v layoutu zobrazují jen v řádu stovek pixelů šířky, takže se stahují fotky o 4–8× větší, než je potřeba. Lighthouse to na hlavní stránce zachytil jen u jednoho konkrétního obrázku (`o-nas.webp`, viz níže), protože zbytek galerie je lazy-loaded a mimo viewport při testu — ale jakmile uživatel scrolluje galerii nebo otevře lightbox, stáhne se tenhle přebytek naplno.

**Doporučení:** vygenerovat ke každé fotce dvě odvozené velikosti:
- **grid thumbnail** ~ 500–600 px na delší straně (pro dlaždice v mřížce),
- **lightbox verze** ~ 1600–1920 px na delší straně (pro zvětšený náhled), zachovat kvalitní kompresi WebP.

`gallery.js` pak pro `<img>` v mřížce použije thumbnail, `data-src` pro lightbox zůstane odkaz na větší verzi. Dá se to udělat buď staticky (skript, který z originálů vygeneruje `*_thumb.webp` do stejné složky), nebo přes Vercel/Cloudinary image optimalizaci za běhu — druhá varianta je jednodušší na údržbu, ale je to už závislost na externí službě, takže bych to nechal na tvém rozhodnutí, ne že to tiše zvolím za tebe.

### 2. `images/about/o-nas.webp`: 1920×1440 px, zobrazeno 651×488 px — High
Lighthouse: *"This image file is larger than it needs to be... Use responsive images"* — odhadovaná úspora 422 KB z 477 KB souboru jen kvůli zbytečnému rozlišení, dalších 16 KB jde vytěžit lepší kompresí.

**Doporučení:** zmenšit na cca 1300 px na šířku (pokrývá i 2× retina displeje při zobrazovací šířce 651 px) a mírně zvýšit kompresi.

### 3. Logo: 791×114 px PNG, zobrazeno max 236×34 px — Medium
Lighthouse odhaduje 43 KB úspory (34,9 KB z předimenzování, 33 KB z formátu/komprese) na `logo-transparent.png`, který se používá v hlavičce i patičce.

**Doporučení:** exportovat logo v rozlišení odpovídajícím max. zobrazované šířce (× 2 pro retina, tedy ~480 px šířka stačí), případně převést na WebP se zachovanou průhledností — u loga s ostrými hranami/textem ověřit, že komprese nezpůsobí artefakty.

### 4. Chybí `preload` pro LCP-kritický font — Low
Viz `technical.md`, bod 4 — LCP prvek na mobilu je nadpis `<h1>`, 525 ms z toho je "element render delay" čekáním na font.

## Co funguje dobře
- `font-display: swap` nastaven pro všechny 4 fonty — žádné neviditelné texty při načítání (FOIT).
- Skryté položky galerie (`is-hidden`/`is-collapsed`) mají `display: none`, takže se nestahují zbytečně — lazy-loading funguje správně.
- `width`/`height` atributy na obrázcích brání layout shiftu (CLS 0,017 — v podstatě nulový).
- Žádný render-blocking JS (všechny skripty `defer`), TBT 0 ms.
