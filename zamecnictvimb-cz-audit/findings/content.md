# Content Quality, Images, GEO — nálezy

## Content / E-E-A-T

Statický text stránky (bez JS-generovaného obsahu galerie) má cca 415 slov. Pro jednostránkovou prezentaci zavedené řemeslné firmy to je v pořádku jako minimum, ale je to na spodní hranici — sekce "Služby" má po nedávném zeštíhlení jen 3 dlaždice s krátkými popisky.

**Signály důvěryhodnosti (E-E-A-T), které web zatím nemá a mohl by:**
- Konkrétní reference/case studies (kdo si nechal co vyrobit — i bez jmen zákazníků, jen "ocelové schodiště pro rodinný dům, 2024").
- Certifikace, svářečské průkazy, pojištění odpovědnosti — pokud firma něco takového má, je to silný důvěryhodnostní signál pro B2B i B2C poptávky (automotive prototypy zvlášť).
- Žádné recenze/hodnocení na stránce (to je v pořádku nevymýšlet — jen konstatuji, že chybí, jako podklad pro budoucí Google Business Profile provázání).

Tohle nejsou opravy, spíš podněty k zvážení až budete plnit reálný obsah — nedoplňuj nic z toho bez podkladů od klienta.

## Obrázky

### Neunikátní alt texty napříč galerií — Medium
`js/gallery.js` generuje alt text podle kategorie, ne podle konkrétní fotky:
```js
img.alt = CATEGORIES[item.category] + " – realizace Zámečnictví MB";
```
Výsledek: všech 35 fotek v kategorii "Schody a zábradlí" má **identický** alt text `"Schody a zábradlí – realizace Zámečnictví MB"`, stejně tak 15 fotek v "Ocelové konstrukce" atd. Pro obrazové vyhledávání to znamená, že Google nemá jak jednotlivé fotky odlišit, a pro uživatele čtečky obrazovky to je zbytečně repetitivní — neposkytuje info, kterou z 35 podobných fotek zrovna prohlíží.

**Doporučení:** rozšířit datovou strukturu v `gallery.js` o krátký popisek na fotku (i jen 3-5 slov navíc, např. "Ocelové schodiště se skleněnou výplní" místo obecného "Schody a zábradlí"). Vyžaduje to ale, aby někdo fotky prošel a popsal — je to spíš na tebe/klienta než na mě si to vymýšlet.

### Názvy souborů bez SEO hodnoty — Low
Fotky mají názvy z fotoaparátu/telefonu (`20250710_081203.webp`), žádné popisné klíčové slovo v URL. Malý, ale reálný signál pro vyhledávání obrázků.

**Doporučení:** při generování zmenšených verzí (viz `performance.md`, bod 1) rovnou přejmenovat na popisné slug názvy, např. `ocelove-schodiste-zabradli-01.webp`.

## AI Search Readiness (GEO)

- `robots.txt` nic neblokuje — AI crawlery (GPTBot, ClaudeBot, PerplexityBot atd.) mají přístup. Správně, nedoporučuju nic blokovat.
- Obsah je čistý sémantický HTML bez JS-závislého renderování hlavního textu (galerie je JS, ale hlavní fakta o firmě — založení 1999, nabídka, kontakt — jsou přímo v HTML), takže je snadno parsovatelný i pro non-JS crawlery.
- Fakta o firmě (rok založení, IČO, adresa, telefon) jsou na stránce uvedena konzistentně na více místech (hero stat-strip, O nás, kontakt, patička, JSON-LD) — to je přesně to, co pomáhá AI asistentům citovat firmu přesně.
- Chybí strukturovaný Q&A/FAQ obsah — AI vyhledávače (Perplexity, AI Overviews) často citují pasáže formulované jako otázka-odpověď. Není to nutnost pro jednostránkovou prezentaci, ale je to reálná příležitost (např. "Jak dlouho trvá zakázka?", "Jaké materiály kombinujete?") — zvážit až s finálním obsahem.
- `llms.txt` chybí — nepovinné, Google ho ignoruje, u malé lokální firmy nízká priorita.
