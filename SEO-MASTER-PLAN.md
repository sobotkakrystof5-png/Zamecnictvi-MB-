# SEO Master plán — Zámečnictví MB s.r.o.

Datum: 2026-09-09. Účel: rozfázovaný plán pro dokončení SEO optimalizace + SEO clusteru + Collabim keyword loopu, navržený tak, aby jednotlivé fáze šly rozdělit mezi víc Claude Code sessions (i souběžně). Každá fáze má vlastní kontext, takže ji jde otevřít v nové session bez znalosti historie téhle konverzace — stačí nasměrovat session na konkrétní fázi (`P1.1`, `P6.3` atd.).

Zdroje pravdy, na které se tento plán odkazuje:
- `zamecnictvimb-cz-audit/` — SEO audit (Health Score 70/100), `ACTION-PLAN.md`, `findings/*.md`
- `zamecnictvimb-cz-audit/gallery-manifest.json` — hotová data pro 64 fotek galerie
- `zamecnictvimb-cz-audit/seo-cluster-plan.md` — hotový návrh 5 spoke stránek (SERP-based clustering)
- `CLAUDE.md` (root) — závazná pravidla projektu (jednostránkový hub, žádný framework, nedomýšlet fakta/texty)

Pravidlo napříč všemi fázemi: **nikdy nevymýšlet business fakta, ceny, certifikace ani texty prezentované jako fakt** — pokud fáze potřebuje reálný údaj od klienta a nemá ho, zastavit a zeptat se, ne odhadnout.

---

## Stav k 2026-09-09 (co už je hotové, nic necommitnuto)

- [x] Audit přečten, pochopen kontext (pre-launch, lokální Lighthouse test)
- [x] `index.html` — `preload` pro Space Grotesk font
- [x] `vercel.json` — bezpečnostní hlavičky (HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- [x] SEO cluster research hotový (5 navržených spoke stránek, SERP overlap matice, internal link matice, 2 otevřené judgment-cally) — čeká na schválení, nic se nestavělo.
- [x] **P1.1** — `gallery-manifest.json` zapojen do `gallery.js`: mřížka táhne `_thumb` verze (ověřeno Playwright: 2,36 MB celkem místo ~20 MB), lightbox plnou verzi, každá fotka má individuální alt text. Vizuálně i síťově ověřeno lokálně.
- [x] **Bonus fix mimo plán** — hero obrázek na `index.html:157` (eager/fetchpriority high) odkazoval na starý název souboru smazaný přejmenováním v gitu → 404 na nejdůležitějším obrázku stránky. Opraveno na nový slug.
- [x] **P1.2** — `width`/`height` u `o-nas.webp` v `index.html` opraveno na skutečných 1300×975.
- [x] **P1.3** — meta description i og:description zkráceny na schválenou 152znakovou verzi (byly 200 znaků, ořízly by se v SERP).
- [x] **P4** — všechna 4 rozhodnutí o clusteru odsouhlasena klientem (architektura 5 spoke stránek, lokální rámování Spoke 5, `areaServed` = Mladá Boleslav a okolí, rozdělení schody/zábradlí).
- [x] **P5** — 35 fotek `schody-a-zabradli/` roztříděno a fyzicky přesunuto do `images/galerie/schodiste/` (20) a `images/galerie/zabradli/` (15). `gallery.js`, `gallery-manifest.json`, filtr v `index.html` i CSS grid (nově 5 karet) aktualizované a ověřené.
- [x] **P6.1** — první spoke stránka `sluzby/ocelove-konstrukce.html` postavena a ověřena (1401 slov, 3 JSON-LD bloky, 0 JS chyb/404). Nový sdílený `css/spoke.css` jako šablona pro zbylé 4 spoke stránky.
- [x] **P6.2-P6.5** — zbylé 4 spoke stránky postavené a ověřené 2026-09-09: `sluzby/vrata-a-ploty.html` (1357 slov), `sluzby/schodiste.html` (1349 slov), `sluzby/zabradli.html` (1315 slov), `sluzby/atypicka-vyroba.html` (1246 slov) — všechny v cílovém rozsahu slov z `seo-cluster-plan.md` §4. Každá má 3 JSON-LD bloky (BreadcrumbList, Service s `areaServed`, FAQPage), stejnou strukturu sekcí jako P6.1, fotky+alt texty z `gallery-manifest.json`. Cross-linky doplněné podle §6 matice: schodiste↔zabradli (v Materiál sekci obou), ocelove-konstrukce↔vrata-a-ploty (obousměrně, včetně doplnění zpětného odkazu do už hotové P6.1), atypicka-vyroba→ocelove-konstrukce a →vrata-a-ploty. U `atypicka-vyroba.html` dodrženo P4.2/§3.1: rámování čistě lokální/řemeslné, automotive/prototypové fráze vůbec nerozvíjeny (P2#7 stále nezodpovězeno), bez vymyšlených faktů o rozsahu automotive zakázek. Ověřeno Playwright na všech 4 stránkách (mobile 390px + desktop 1280px): 0 JS chyb, 0 síťových 404, FAQ accordion funguje, mobilní menu funguje, JSON-LD validní (`json.loads`). Homepage/sitemap zatím vědomě needolinkuje (patří do P7).
- [x] **P7** — cluster zapojen do hubu 2026-09-09. `index.html` sekce `#sluzby`: do existující dlaždice "Výroba ocelových konstrukcí" (bento layout se záměrně nerozšiřoval na 5 dlaždic, jen doplněn seznam odkazů uvnitř) přidán mandatorní seznam 5 odkazů na všechny spoke stránky přesně s anchor texty ze `seo-cluster-plan.md` §6. Sekce `#galerie`: protože jsou karty filtru `<button>` (nelze do nich vnořit `<a>`, nevalidní HTML), přidán kompaktní řádek 5 doporučených odkazů "Více o..." pod kartami místo odkazu v každé jednotlivé kartě — funkčně stejný výsledek, jiné umístění než doslovný návrh plánu. Cross-linking mezi spoke stránkami zkontrolován — už odpovídal §6 matici z P6, nic se nedoplňovalo. `sitemap.xml` rozšířen o 5 nových URL (priority 0.8, monthly). Žádná spoke stránka není sirotek (všechny dosažitelné z hubu v 1 kliku). Ověřeno Playwright (mobile 390px + desktop 1280px): 0 JS chyb, 0 síťových chyb, všech 10 nových odkazů (5× Služby, 5× Galerie) vede na správné URL.

Neřešeno vůbec zatím: P1.4 (ověření hlaviček, blokováno nasazením), P2 (fakta od klienta — otevírací doba, GPS, sameAs, automotive reference atd.), schema.org rozšíření, og:image, logo/schema-image sladění, nasazení (P8), Collabim (P9).

---

## Jak číst závislosti

`🔓 nezávislé` = může začít hned, nic to neblokuje.
`🔒 blokováno: X` = potřebuje nejdřív dokončit/schválit X.
`❓ potřebuje vstup od klienta` = nejde to udělat bez reálných dat/rozhodnutí od tebe.

---

## Fáze P1 — Doladit technické základy 🔓

Nezávislé na všem ostatním, dá se pustit hned v samostatné session.

### P1.1 — Zapojit `gallery-manifest.json` do `gallery.js`
**Kontext pro novou session:** `zamecnictvimb-cz-audit/gallery-manifest.json` obsahuje pro všech 64 fotek `{old_file, slug, w, h, alt}` po kategoriích. Fyzické soubory na disku už jsou přejmenované (`git mv` proběhlo) na `<kategorie>/<slug>.webp` (plná verze, pro lightbox) a vedle nich existuje `<kategorie>/<slug>_thumb.webp` (~550-600px, pro mřížku). `js/gallery.js` má pole `CATEGORY_FILES` (řádky ~17-83) s starými názvy souborů (`20180723_155324.webp` apod.) — potřebuje přepsat na nové slugy a rozlišit thumb/plná verze.

**Úkol:**
1. Přepsat `CATEGORY_FILES`: každá položka `{ file, w, h }` → `{ slug, w, h, alt }` podle manifestu.
2. V renderu mřížky (`img.src = ...`) použít `/images/galerie/<kategorie>/<slug>_thumb.webp`.
3. `data-src` pro lightbox (a `button.setAttribute("data-src", ...)`) použít plnou verzi `/images/galerie/<kategorie>/<slug>.webp`.
4. `img.alt` i `lightboxImg.alt` použít individuální `alt` z manifestu místo generického `CATEGORIES[item.category] + " – realizace..."`.
5. Zachovat round-robin prokládání kategorií (funguje na `CATEGORY_FILES` poli, nezávisí na obsahu položek).
6. Ověřit lokálně (`python3 -m http.server`) — vizuálně mřížku i lightbox, a v DevTools Network zkontrolovat, že se do mřížky stahují `_thumb` soubory, ne plné.

**Hotovo, když:** mřížka i lightbox fungují, síťový přenos při scrollu galerií řádově klesne (cíl auditu: z ~20 MB na ~2-3 MB), každá fotka má jiný alt text.

### P1.2 — Opravit rozměry `o-nas.webp` v HTML
`index.html` řádek ~217 má `width="1920" height="1440"`, soubor je teď fyzicky 1300×975. Opravit atributy na `width="1300" height="975"`, jinak hrozí drobný layout shift.

### P1.3 — Meta description ❓ čeká na schválení textu
Navrženo (152 znaků, bez pomlčky kvůli zavedené konvenci webu):
> „Zámečnictví MB s.r.o., atypická kovovýroba, ocelové konstrukce, vrata, ploty, schody a zábradlí na míru. Na trhu od roku 1999, Březno u Mladé Boleslavi."

Po schválení (nebo úpravě) promítnout do `<meta name="description">` a `og:description` v `index.html`.

### P1.4 — Ověřit hlavičky po nasazení 🔒 blokováno nasazením
`curl -I https://<produkční-doména>` po deployi na Vercel — ověřit, že CSP/HSTS opravdu chodí a nerozbily Google Maps iframe ani fonty. Patří spíš do P8, uvedeno i tady pro úplnost technického balíku.

---

## Fáze P2 — Data od klienta ❓ (nejde odhadnout, blokuje P3 a částečně P4)

Otázky, na které potřebuju reálnou odpověď, ne domněnku:

1. **Otevírací doba** (`openingHoursSpecification`) — bez ní Google nezobrazí Otevřeno/Zavřeno.
2. **GPS souřadnice** Židněves 65, nebo stačí potvrzení adresy a dohledám si je sám z veřejné mapy.
3. **`areaServed`** — jen Mladá Boleslav, celý Středočeský kraj, nebo (u atypické výroby/prototypů) fakticky celá ČR? **Tohle přímo ovlivňuje i P4 (rámování clusteru).**
4. **`priceRange`** — orientační cenová hladina, nepovinné.
5. **`sameAs`** — Google Business Profile / Facebook / Instagram firmy, pokud existují.
6. Potvrzení, že `josef.antos@zamecnictvimb.cz` je pod novou doménou reálně sledovaná schránka.
7. **Reálné automotive reference/certifikace** (VDA/PPAP, jmenovaný klient) k tvrzení "prototypové díly (automotive)" na homepage — ovlivňuje Spoke 5 v clusteru (P4, P6.5).
8. Orientační cenová hladina / typický rozsah zakázky pro FAQ obsah na spoke stránkách (P6) — nepovinné, ale pomáhá konverzi.

**Výstup:** až dorazí odpovědi, zapsat 1-6 do JSON-LD `LocalBusiness` v `index.html`; 7-8 promítnout do cluster plánu a spoke obsahu.

---

## Fáze P3 — Logo/schema image + OG obrázek 🔒 blokováno rozhodnutím (malé, rychlé)

### P3.1 — Logo vs. schema `image`
`images/logo/logo-transparent.png` (791×114) se používá v headeru, patičce, **i** jako JSON-LD `"image"`. Audit chce zmenšit logo na reálně zobrazovanou velikost (~480px) kvůli výkonu, ale Google pro `LocalBusiness.image` preferuje větší reprezentativní obrázek (700px+, ideálně 1200px), ne drobné logo z hlavičky.

**Navržené řešení (čeká na potvrzení):** logo v headeru/patičce zmenšit na výkon; JSON-LD `image` pole přesměrovat na hero fotku (až bude k dispozici) nebo minimálně nezmenšovat pod ~700px.

### P3.2 — `og:image` / `twitter:image`
Chybí úplně (audit: Medium). Potřebuje hotový vizuál 1200×630. Buď dodá klient, nebo vygenerovat přes skill `seo-image-gen` (Gemini/nanobanana) — rozhodnutí na tobě.

---

## Fáze P4 — SEO Cluster: rozhodnutí klienta ✅ ROZHODNUTO 2026-09-09

Kompletní plán: `zamecnictvimb-cz-audit/seo-cluster-plan.md` (SERP-based keyword clustering, 5 navržených spoke stránek pod `/sluzby/`, internal link matice, cannibalization check — vše hotové, nic se nestavělo).

**Rozhodnutí (odpovězeno 2026-09-09):**

1. **Souhlas s architekturou** — ✅ ANO. 5 spoke stránek přesně podle plánu: `ocelove-konstrukce.html`, `vrata-a-ploty.html`, `schodiste.html`, `zabradli.html`, `atypicka-vyroba.html` (§4), bez úprav rozsahu/pojmenování.
2. **Rámování Spoke 5** — ✅ Lokální/řemeslné rámování primárně, "prototypové díly"/automotive jen jako sekundární fráze, dokud nedorazí reálné automotive reference (P2#7 — stále čeká na klienta).
3. **`areaServed`** — ✅ Mladá Boleslav a okolí (úzké lokální rámování, ne kraj ani celá ČR).
4. **Rozdělení "schody-a-zabradli"** (35 fotek, ne 34 jak psáno původně — opraveno) — ✅ ANO, rozdělit na `schodiste.html` a `zabradli.html` samostatně.

---

## Fáze P5 — Roztřídit fotky schody vs. zábradlí ✅ HOTOVO 2026-09-09

**Provedeno:** 35 fotek fyzicky přesunuto (`git mv` u trackovaných plných verzí, `mv` u zatím netrackovaných `_thumb` verzí) z `images/galerie/schody-a-zabradli/` do dvou nových složek `images/galerie/schodiste/` (20 fotek) a `images/galerie/zabradli/` (15 fotek). 21 fotek bylo jednoznačných podle slugu/alt, 14 sporných případů (fotka ukazuje obojí) rozhodnuto ručně podle gramatického podmětu alt textu a podle udržení fotosad z jednoho místa pohromadě (např. 3 fotky "obchodní centrum" nebo 3 fotky "diagonální vzor" zůstaly v jedné kategorii). Rozdělení je vidět přímo v `gallery-manifest.json` a `js/gallery.js`.

**Navazující práce, kterou plán nezmiňoval, ale bylo potřeba:**
- `js/gallery.js` — `CATEGORIES`/`CATEGORY_FILES` rozdělené na `schodiste`/`zabradli` místo `schody-a-zabradli`.
- `index.html` — filtr galerie má teď 5 karet místo 4 (`Schodiště`, `Zábradlí` zvlášť).
- Chyběly "peek" náhledové fotky (360×480 + 480×360 crop) pro nové karty filtru — vygenerovány cover-crop skriptem (Pillow) ze 2 reálných klientských fotek za kategorii, žádný fabrikovaný obsah, jen ořez existujících schválených fotek. Soubory: `images/galerie/peek/peek-schodiste-{a,b}.jpg`, `peek-zabradli-{a,b}.jpg`.
- CSS `.gallery__areas` grid byl pevně na 4 sloupce (`repeat(4,1fr)`) — s 5 kartami by 5. karta osiřela na vlastním řádku. Opraveno na plynulý postup 2→3→5 sloupců (`640px`/`1000px` breakpointy), ověřeno Playwright screenshoty na 390/640/700/1280px bez přetečení.
- Hero obrázek na homepage (viz P1.1 bonus fix) musel být znovu přesměrován, protože fyzicky přesunutá fotka změnila složku podruhé (nejdřív z datumového názvu na slug, pak ze `schody-a-zabradli/` do `zabradli/`).

Vše ověřeno Playwright: filtr `schodiste` ukáže 20 fotek, `zabradli` 15, lightbox navigace funguje, 0 JS chyb, 0 síťových 404.

**Výstup:** návrh rozdělení `schody-a-zabradli/` na dvě podkategorie (v datové struktuře, fyzické přesuny souborů volitelné) + aktualizace `js/gallery.js` filtru (nová kategorie/tlačítko místo jedné spojené).

---

## Fáze P6 — Stavba 5 spoke stránek 🔒 blokováno P4.1 (paralelizovatelné mezi sebou)

Pro každou spoke stránku: nová statická `.html` pod `/sluzby/`, sdílející existující CSS/design systém (`css/tokens.css`, `base.css`, `layout.css`, `components.css`, `sections.css` — žádný framework, žádný build krok), obsah podle `seo-cluster-plan.md` §4 (title/H1/meta/keywords/word count/FAQ), vlastní nebo sdílené JSON-LD, a internal linky podle §6 matice plánu.

Těchto 5 úkolů je vzájemně nezávislých (jiné soubory, jiný obsah) — **ideální pro souběžné sessions**, jakmile P4.1 schválí architekturu.

| # | Spoke | URL | Fotky | Stav |
|---|---|---|---|---|
| P6.1 | Ocelové konstrukce | `/sluzby/ocelove-konstrukce.html` | 15 | ✅ **HOTOVO 2026-09-09** — postaveno, 1401 slov, ověřeno |
| P6.2 | Vjezdové brány a ploty | `/sluzby/vrata-a-ploty.html` | 9 | ✅ **HOTOVO 2026-09-09** — postaveno, 1357 slov, ověřeno |
| P6.3 | Kovová schodiště | `/sluzby/schodiste.html` | 20 (viz P5) | ✅ **HOTOVO 2026-09-09** — postaveno, 1349 slov, ověřeno |
| P6.4 | Kovová zábradlí | `/sluzby/zabradli.html` | 15 (viz P5) | ✅ **HOTOVO 2026-09-09** — postaveno, 1315 slov, ověřeno |
| P6.5 | Atypická výroba | `/sluzby/atypicka-vyroba.html` | 5 | ✅ **HOTOVO 2026-09-09** — postaveno, 1246 slov, ověřeno, rámováno jen lokálně (P4.2) |

**Rozhodnutí 2026-09-09:** Všech 5 spoke stránek je hotových a ověřených. Fáze P6 jako celek je uzavřená — další v pořadí je P7 (zapojit cluster do hubu). Následující sekce zůstává jako referenční návod pro to, jak byly P6.2-P6.5 postavené.

### Návod pro session, která staví P6.2-P6.5

1. **Otevři `sluzby/ocelove-konstrukce.html` jako referenční vzor** — struktura sekcí (subhero → Co vyrábíme → Proč [produkt] → Typová i atypická výroba → Pro koho stavíme → Jak zakázka probíhá → Materiál a povrchová úprava → Realizace/foto → FAQ → Proč Zámečnictví MB → Jak si připravit poptávku → CTA pás → footer) je opakovatelná šablona, jen obsah a fotky se mění podle `seo-cluster-plan.md` §4 pro dané spoke.
2. **`css/spoke.css` už existuje a je hotový** — nekopírovat, jen linkovat (`<link rel="stylesheet" href="/css/spoke.css" />` za `sections.css`). Obsahuje `.subhero`, `.breadcrumb`, `.feature-grid`, `.process-list`, `.spoke-gallery`, `.faq-item`, `.cta-band`.
3. **Fotky a alt texty** — brát z `zamecnictvimb-cz-audit/gallery-manifest.json` (klíče `vrata-a-ploty`, `schodiste`, `zabradli`, `atypicka-vyroba`), cesty `/images/galerie/<kategorie>/<slug>_thumb.webp` pro mřížku.
4. **Word count cíle podle plánu:** P6.2 1200-1600, P6.3 1300-1700, P6.4 1300-1700, P6.5 1200-1500 slov. Postup pro dosažení cíle: napsat obsahové jádro, přeměřit (`python3 -c` regex strip tagů + `split()`), pak dorovnávat reálným, negenerickým obsahem (ne opakováním frází) — u P6.1 to trvalo několik kol postupného rozšiřování.
5. **Nevymýšlet fakta.** Ceny/dodací lhůty ve FAQ řešit obecně jako u P6.1 ("odvíjí se od..., konkrétní nabídku připravíme na základě poptávky"). U P6.5 (atypická výroba) navíc: cílit primárně na lokální/řemeslné rámování (P4.2), automotive/prototypové fráze nechat sekundární a nerozvádět bez reálných referencí (P2#7 stále nezodpovězeno).
6. **JSON-LD:** kopírovat 3-blokový vzor z P6.1 (`BreadcrumbList`, `Service` s `areaServed: "Mladá Boleslav a okolí"`, `FAQPage` 1:1 s viditelným FAQ obsahem) a upravit hodnoty.
7. **Cross-linky mezi spoke stránkami (§6 matice)** — teď už dává smysl je doplňovat, protože cílové stránky začnou existovat. Doporučené páry: schodiste↔zabradli (nejsilnější), ocelove-konstrukce↔vrata-a-ploty, atypicka-vyroba→ocelove-konstrukce + vrata-a-ploty (a volitelně →schodiste/zabradli). Až budou postavené, doplnit chybějící cross-link i zpátky do P6.1 (v Materiál/Proč sekci, přirozeně, ne vynuceně).
8. **Po dokončení všech 4:** teprve pak P7 (zapojit do hubu — Služby sekce, Galerie sekce, sitemap.xml) — ne dřív, ať homepage nezíská nesourodě jen část odkazů.
9. **Ověřit stejně důkladně jako P6.1:** word count skriptem, JSON-LD validitou (`json.loads`), Playwright (0 JS chyb, 0 404, FAQ accordion, mobilní menu, screenshoty 390/1280px).

### P6.1 — Ocelové konstrukce — dokončeno, detaily

**Postaveno:** `sluzby/ocelove-konstrukce.html` + nový sdílený `css/spoke.css` (šablona pro všechny spoke stránky — subhero, breadcrumb, feature-grid, process-list, spoke-gallery, FAQ `<details>`, cta-band; načítá se jen na spoke stránkách, homepage ho netáhne).

**Obsah:** 1401 slov (v cíli 1400-1800), žádná vymyšlená fakta — ceny/dodací lhůty ve FAQ řešené obecně ("odvíjí se od...", bez čísel), povrchová úprava (pozinkování) doložená reálnými fotkami z galerie, `areaServed` (Mladá Boleslav a okolí, dle P4.3) zapracováno do FAQ i Service schema.

**Schema:** 3 platné JSON-LD bloky — `BreadcrumbList`, `Service` (s `areaServed`), `FAQPage` (4 otázky, 1:1 s viditelným obsahem).

**Ověřeno Playwright:** 0 JS chyb, 0 síťových 404, FAQ accordion funguje, mobilní menu funguje, responzivní 390/1280px, všech 15 fotek z galerie `ocelove-konstrukce` vykresleno (thumb verze).

**Vědomě NEudělané (podle plánu, ne opomenutí):**
- Homepage (`index.html`, sekce Služby/Galerie) zatím **needolinkuje** na tuto stránku — plán řadí zapojení do hubu až do P7, sekvenčně po dokončení všech 5 spoke stránek, aby homepage nezískala 1 z 5 odkazů dřív než zbytek. Až budou hotové další spoke stránky, přidat "více o ocelových konstrukcích" odkaz podle §6 matice.
- `sitemap.xml` needoplněn (také P7).
- Cross-linky na sourozenecké spoke stránky (§6, "vjezdové brány a ploty") vynechány — cílová stránka `/sluzby/vrata-a-ploty.html` ještě neexistuje, nechtěl jsem zavést mrtvý odkaz. Doplnit při stavbě P6.2, nebo zpětně do P6.1.

Detailní obsahové zadání (title, H1, meta, keywords, word count target, FAQ témata) je v `seo-cluster-plan.md` §4 pro každý spoke zvlášť — nová session ho najde tam, nemusí se ptát znovu.

**Důležité:** nevymýšlet reference/case studies/certifikace v textu (zvlášť u P6.5) — pokud plán počítá s FAQ o ceně (P2#8) nebo automotive referencích (P2#7) a ty nedorazily, tu část vynechat, ne fabulovat.

---

## Fáze P7 — Zapojit cluster do hubu ✅ HOTOVO 2026-09-09

- [x] Dlaždice v sekci `#sluzby` na `index.html` — odkazy na jednotlivé spoke stránky (mandatory links, viz `seo-cluster-plan.md` §6).
- [x] Odkazy ze sekce `#galerie` na odpovídající spoke stránky (recommended, jiné umístění než doslovný návrh — viz "Stav" výše).
- [x] Cross-linking mezi spoke stránkami podle §6 zkontrolován — hotovo už z P6, beze změny.
- [x] `sitemap.xml` aktualizován — přidáno 5 nových URL.
- [x] Ověřeno, že žádná spoke stránka není sirotek (dosažitelná z hubu v 1 kliku).

---

## Fáze P8 — Nasazení a monitoring 🔒 čeká na tvé rozhodnutí — nasazení je produkční/nevratná akce, nepouštím se do ní bez potvrzení

Z původního `ACTION-PLAN.md`, fáze 4:
- Deploy na Vercel, `curl -I` ověření hlaviček (P1.4).
- Zaregistrovat doménu v Google Search Console, odeslat `sitemap.xml`.
- Znovu spustit SEO audit proti živé doméně (reálná CrUX pole data, ne jen lokální Lighthouse).
- Zvážit přidání privacy-friendly analytics (web zatím nemá žádné).

**Zjištěno 2026-09-09:** Vercel projekt `zamecnictvi-mb` už existuje a je propojený s GitHub repem `sobotkakrystof5-png/Zamecnictvi-MB-` (stejný repo jako `origin`). Lokálně ale nic není commitnuté ani pushnuté — aktuální working tree (P1, P5, P6, P7 změny) zatím existuje jen lokálně. Registrace v Google Search Console navíc vyžaduje přístup k tvému Google účtu, to za tebe neudělám.

---

## Fáze P9 — Collabim keyword loop (poslední krok podle tvého zadání)

Až bude cluster postavený/schválený, projít stránku po stránce (hub + 5 spoke stránek) přes skill `seo-collabim-keyword-loop`: navrhnu kandidátní klíčová slova pro danou stránku, ty ověříš reálný search volume/obtížnost/trend v Collabimu, společně vybereme finální primary + secondary klíčová slova a zkontrolujeme kanibalizaci.

**Poznámka k pořadí, ne rozhodnutí za tebe:** logicky by dávalo smysl pustit P9 ještě před psaním finálního textu spoke stránek (P6) — ať se nepíše 5× 1500 slov na klíčová slova, která se pak v Collabimu ukážou jako nízkoobjemová nebo horší varianta než čekaný synonym. Řadím to ale tak, jak jsi zadal (audit + cluster nejdřív, Collabim až pak) — pokud chceš prohodit pořadí (P9 před P6), stačí říct.

---

## Souhrn závislostí

```
P1 (technika)          🔓 nezávislé — spustit hned
P2 (data od klienta)   ❓ nezávislé — spustit hned (jen čekání na odpověď)
P3 (logo/OG)           🔒 čeká na tvoje rozhodnutí (rychlé)
P4 (cluster rozhodnutí)❓ nezávislé — spustit hned (jen čekání na odpověď)
  └─ P5 (roztřídit fotky)     🔒 čeká na P4.4
  └─ P6.1-P6.5 (celé P6)      ✅ HOTOVO 2026-09-09 — všech 5 spoke stránek postavených a ověřených
            └─ P7 (zapojit do hubu)   ✅ HOTOVO 2026-09-09
                 └─ P8 (nasazení)     🔒 čeká na tvoje potvrzení + GSC přístup
P9 (Collabim)           volitelně kdykoliv po P4, doporučeno před P6 — tvoje volba pořadí
```

## Doporučení pro souběžné sessions

- **Session A — hned:** P1 (technické doladění, nic neblokuje).
- **Ty:** odpovědět na P2 (data) — otevírací doba, GPS, sameAs, automotive reference — pořád čeká a blokuje jen doplnění LocalBusiness schema a případné rozšíření Spoke 5.
- ~~Session B-E (P6.1-P6.5)~~ — **hotovo 2026-09-09**, celé P6 postavené a ověřené.
- ~~P7 (zapojit cluster do hubu)~~ — **hotovo 2026-09-09**.
- **Další na řadě:** P8 (nasazení) — čeká na tvé rozhodnutí, jestli a kdy commitnout/pushnout a spustit deploy (Vercel projekt už existuje a je propojený s GitHub repem), a na tvůj přístup ke Google Search Console.
- P9 (Collabim) — společně, kdykoliv se rozhodneš zařadit ho do pořadí.
