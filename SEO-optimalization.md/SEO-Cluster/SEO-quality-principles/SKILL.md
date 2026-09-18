name: seo-quality-principles
description: "Universal checklist and integrity rules for doing effective, honest SEO work on any website — technical SEO, structured data/schema.org, content quality and E-E-A-T, local SEO, and AI-search (GEO) visibility, plus process discipline for working with real clients (never fabricate business facts or reviews, flag architecture decisions before implementing, verify live before marking anything done). Use this whenever planning, implementing, or reviewing SEO work — not just when running an audit tool. Complements (does not replace) dedicated audit/analysis skills like seo, seo-technical, seo-schema, seo-local, etc."
license: MIT
metadata:
category: seo
language: cs
SEO: zásady pro efektivní a poctivou práci
Tenhle skill není audit nástroj (na to jsou seo, seo-technical, seo-schema, seo-local a další). Je to kontrolní seznam a sada zásad, které se osvědčily při reálné práci na SEO pro menší/lokální firmu, a mají platit napříč projekty: kdy je něco skutečně hotové, čemu se vyhnout, a na co se nesmí zapomenout, i když to zrovna žádný audit nástroj nenahlásí jako chybu.
Použij ho jako referenci při plánování SEO práce, psaní/úpravě obsahu se SEO dopadem, review cizích SEO změn, nebo kdykoliv se rozhoduje, jestli je úkol "hotový".
0. Nejvyšší princip: nikdy nevymýšlet fakta
Tohle je nadřazené všemu ostatnímu v tomhle dokumentu.
Obchodní fakta (roky praxe, materiály, lokality zakázek, ceny, certifikace, počet realizací) se nikdy neodhadují ani nezaokrouhlují "aby to znělo dobře". Pokud fakt není k dispozici, buď se vyžádá od klienta, nebo se daný řádek/tvrzení z obsahu odstraní úplně — nikdy nezůstává placeholder (......, TODO, [FOTO: ...], Lorem ipsum) živý na produkci.
Recenze a hodnocení se nikdy nefingují. Žádné Review/AggregateRating schema, žádný "100% spokojených zákazníků" claim, dokud za tím nestojí ověřitelná reálná data. Poctivý placeholder ("zatím nemáme recenze") je lepší než fingovaný důkaz — ten je zjistitelný a poškodí důvěryhodnost víc než jeho absence.
Certifikace/kvalifikace/pojištění se na web píšou, jen když existují a jsou ověřené. Implicitní tvrzení (např. že firma dělá potravinářský/farma standard) bez podložené kvalifikace je stejně riskantní jako přímá lež.
Než se cokoliv o klientovi/firmě "domyslí", raději se zeptej — jedna krátká otázka teď je levnější než přepisování hotové práce později.
1. Než něco označíš za hotové
next build (nebo ekvivalent buildu daného frameworku) musí projít bez chyb.
Pokud šlo o úpravu, kterou lze ověřit živě (hlavičky, redirecty, robots.txt, sitemap, schema) — ověř to na skutečně nasazené produkci, ne jen lokálně. curl -I na hlavičky/redirecty, Google Rich Results Test na schema, Lighthouse/PageSpeed na výkon.
Projdi stránku vizuálně po nasazení, ne jen v kódu — placeholdery, rozbité obrázky a layout shifty se v diffu snadno přehlédnou.
Zapiš do plánovacího dokumentu datum + jednu větu, co přesně bylo uděláno (ne jen zaškrtávátko) — bez toho se příští session neví, jestli šlo o skutečné ověření, nebo jen o commit.
2. Technické SEO — checklist
Indexovatelnost ověřuj proti skutečnému produkčnímu hostname, ne proti předpokladu. Klasická chyba: middleware/robots logika porovnává hostname s hodnotou z konfigurace (např. apex doména), ale produkce běží na jiném hostu (např. www.) — výsledkem je tichý noindex/Disallow na celém živém webu, bez jakékoli viditelné chyby. Ověř curl -I na produkční URL, ne jen že middleware "vypadá správně".
Po opravě indexační chyby nezapomeň na re-indexaci — kódová oprava sama historii už zaindexovaného noindex nesmaže. Odešli sitemapu do Google Search Console i Bing Webmaster Tools a vyžádej indexaci klíčových URL ručně (URL Inspection).
Sitemapa: validní XML, obsahuje jen indexovatelné URL, lastmod odpovídá realitě.
Core Web Vitals / LCP: priority/fetchpriority="high" patří jen na hlavní obrázek nad ohybem — a jen na první/nejvýraznější položku v gridu/galerii, ne plošně na všechny obrázky (to by LCP naopak zhoršilo přetížením sítě).
Bezpečnostní hlavičky: X-Content-Type-Options: nosniff, Referrer-Policy, X-Frame-Options (nebo CSP frame-ancestors) — nejde o SEO ranking faktor přímo, ale bezpečnostní scannery a některé crawlery/AI agenty to reportují, a web s formulářem/mailerem by je měl mít.
Mobilní UX: tap targety u ikonových tlačítek (hamburger, zavřít, X) minimálně ~44–48px — u vizuálně malé ikony řeš přidáním paddingu + kompenzujícím záporným marginem, ne zvětšením ikony samotné. Formulářová pole pod 16px font-size spouští na iOS Safari auto-zoom při focusu — použij text-base (16px) na mobilu, zmenši až na desktopu.
Canonical tagy, metadataBase, Open Graph/Twitter metadata — konzistentní a bez duplicit napříč jazykovými/URL variantami.
3. Structured data (schema.org) — checklist
Vyber správný typ podle reality, ne podle šablony. Produkt s jedinou variantou/cenou = Product + Offer. Produkt s víc variantami (velikosti, barvy) = ProductGroup + hasVariant. Nucení jedné varianty do ProductGroup je sémanticky špatně, i kdyby to validátor propustil.
LocalBusiness (nebo specifický subtyp): doplň i doporučená, ne jen povinná pole — @id (stabilní URL kotva pro propojení s dalším schema), geo (GeoCoordinates na 5 desetinných míst — pokud nejsou po ruce, dají se dohledat přes veřejný geocoding, ne odhadovat), priceRange, areaServed, sameAs (odkazy na skutečně ověřené profily — Facebook stránka, ne skupina; Google Business Profile).
BreadcrumbList na všech vnitřních stránkách, konzistentní s navigační strukturou.
FAQPage jen k obsahu, který je skutečně viditelný na stránce jako Q&A — ne k tichým datům, co nikde nejsou vidět (Google to penalizuje).
Review/AggregateRating — viz bod 0, jen s reálnými daty.
Po nasazení ověř přes Google Rich Results Test, ne jen vizuální kontrolou JSON-LD.
4. Obsah a E-E-A-T — checklist
Hloubka obsahu má odpovídat obchodní prioritě. Pokud vedlejší produktová linka má 300–450 slov na stránku a hlavní služba/byznys jen 100, je to obrácené pořadí priorit a signál pro Google i pro čtenáře, že hlavní nabídka není podložená.
Case studies / portfolio položky potřebují konkrétní čísla a fakta (materiál, rozměr, technologie, proč zvolené), ne jednu obecnou větu opakovanou v šabloně přes všechny položky. Cílové pásmo: 100–250+ slov na položku, víc než jedna fotka, pokud existují.
Vnitřní konzistence napříč stránkami: stejný fakt (roky praxe, počet realizací, kontaktní údaje) musí znít stejně všude. Rozpor mezi dvěma čísly na homepage čte návštěvník i AI systém jako chybu, i když obě čísla mohou být pravdivá v jiném kontextu (viz bod 0 — dovysvětlit, ne jen nechat viset).
Named/reálné reference (konkrétní klienti, konkrétní zakázky) jsou silnější E-E-A-T signál než obecné fráze — ale musí být podložené fakty, jinak jsou jen jméno bez důkazu.
Necituj/needeklaruj standard (potravinářský, farmaceutický, zdravotnický…), který obsah jen naznačuje, aniž je formálně podložený.
5. Lokální SEO — checklist (firmy s provozovnou / service area business)
Google Business Profile je nejsilnější jednotlivá páka pro lokální SEO — silnější než cokoliv na samotném webu. Pokud neexistuje nebo není ověřený, je to priorita číslo jedna, ne kosmetická položka na konci seznamu.
NAP (Name/Address/Phone) musí být byte-for-byte konzistentní napříč patičkou, kontaktní stránkou, schema JSON-LD i externími profily (GBP, Facebook, katalogy).
Facebook skupina nenahrazuje stránku — skupiny nemají recenze, otevírací dobu ani propojení na mapové výsledky.
Service area musí být řečená v přítomném čase, konkrétně (jaké město/okolí/rádius firma reálně obsluhuje) — historická zmínka nebo obecná fráze "jezdíme kamkoliv" nepokrývá reálné vyhledávací dotazy okolních měst.
Systém žádosti o recenzi po dokončené zakázce (SMS/e-mail) je to, co dělá rozdíl mezi "0 recenzí navždy" a rostoucím reputačním signálem — bez aktivního procesu recenze samy nepřibudou.
Lokální citace (v ČR: Firmy.cz, Seznam Firmy/Mapy.cz; mimo ČR ekvivalent Yelp/BBB) — NAP musí sedět přesně, ne přibližně.
6. AI vyhledávání / GEO (AI Overviews, ChatGPT, Perplexity)
Nejsilnější jednotlivá páka pro citovatelnost v AI vyhledávání u lokálních/řemeslných dotazů je zpravidla otázková struktura obsahu (H2/H3 formulované jako otázka + konkrétní odpověď v jednom odstavci) + odpovídající FAQPage schema — a přitom se často nevyužívá vůbec.
AI systémy citují konkrétní, vytrhnutelné fakty pod jasným nadpisem (číslo, materiál, rozměr, cena) mnohem ochotněji než obecný marketingový text. Produktové/technické stránky s konkrétními parametry jsou z hlediska GEO silnější než obecné "o nás" texty.
Stránka s placeholder texty (viz bod 0) je z pohledu AI systému hůř než nic — vrátí jako "fakt" doslovné tečky nebo "....", což je horší výsledek než žádná citace.
7. Proces práce s klientem
Před implementací rozliš u každého úkolu: [KÓD] — bezpečné, nezávislé na obsahu, jde dělat rovnou. [OBSAH] — potřebuje reálná data od klienta, nesmí se domýšlet (viz bod 0).
Architektonická rozhodnutí (nová podstránka vs. rozšíření stávající, změna struktury navigace, změna tech stacku) mají dopad, který přesahuje jeden úkol — potvrď je s klientem/zadavatelem před implementací, ne po ní. Neimplementuj obě varianty "pro jistotu".
Když je potřeba sbírat podklady od někoho netechnického (řemeslník, majitel malé firmy), připrav dva dokumenty: pracovní verzi s odkazy na kód/plán (pro sebe), a čistou, žargonu zbavenou verzi v běžném jazyce, kterou lze rovnou poslat (pro klienta). Konkrétní, uzavřené otázky ("materiál / lokalita / rok pro zakázku X") se vyplňují mnohem ochotněji než obecná výzva "pošlete mi podklady".
Veď živý plánovací dokument s stavem úkolů (hotovo/otevřeno), datem a jednou větou co bylo uděláno — SEO práce běží přes víc sessions/týdnů a bez toho se ztrácí kontext, co už bylo ověřeno a co ne.