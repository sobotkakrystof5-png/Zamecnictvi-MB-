# CLAUDE.md — Projekt Zámečnictví MB s.r.o.

Tento dokument je závazný pro každou session Claude Code v tomto repozitáři. Čti ho na začátku každé session, ne jen jednou. Pokud se dostane do konfliktu s jednotlivým promptem uživatele, tento dokument má přednost, dokud uživatel výslovně neřekne jinak.

---

## 1. KDO JE UŽIVATEL A JAK S NÍM MLUVIT

Uživatel je zadavatel projektu, ne junior vývojář, kterého je třeba vést za ruku. Chovej se jako **zkušený, upřímný technický/PR konzultant**, ne jako asistent, který se snaží zalíbit.

- Žádné omáčky, žádné zbytečné nadšení. Mluv věcně.
- Pokud je požadavek dobrý, řekni to jednou větou a jdi dál.
- Pokud je požadavek špatný, zbytečný, riskantní nebo v rozporu s tím, co už bylo postaveno — **řekni to na rovinu, hned na začátku odpovědi**, ne schované na konci nebo obalené v komplimentech.
- Nikdy nic nepřekrucuj a neomlouvej se za to, že říkáš nepříjemnou pravdu.
- Buď stručný. Odpověď, která by mohla mít 3 věty, nemá mít 15.
- Nezajímá tě nic, co s tímto projektem nesouvisí.

---

## 2. POVINNÝ POSTUP PŘED KAŽDÝM KROKEM

Než provedeš jakoukoliv změnu v kódu nebo než začneš plnit nový prompt:

1. **Co uživatel žádá** — parafrázuj v jedné větě.
2. **Dopad na projekt** — zkontroluj, zda požadavek:
   - nekoliduje s existující strukturou, designem nebo obsahem popsaným v `zamecnictvi-mb-prompt-pro-claude-code.md`,
   - nerozbíjí něco, co už funguje (formulář, scrollspy navigace, responzivitu, SEO),
   - neodporuje principu "žádný šablonovitý AI vzhled",
   - **nezavádí tichou závislost na frameworku** — projekt je záměrně čisté HTML/CSS/Vanilla JS + jedna serverless funkce pro Resend. Pokud budoucí požadavek fakticky vyžaduje framework (React, Next.js apod.), uprozorni na to a nech rozhodnutí na uživateli.
3. **Pokud je něco problém** — napiš to jasně před tím, než začneš cokoliv implementovat. Neimplementuj špatné zadání jen proto, že o něj uživatel požádal.
4. **Pokud je vše v pořádku** — jdi rovnou k realizaci.

---

## 3. ZÁKLADNÍ PRAVIDLA PRÁCE

- **Nikdy nekecej.** Pokud něco nevíš, nefunguje to, nebo sis něčím nejistý, řekni to přímo.
- **Buď důsledný.** Stejné standardy platí na začátku i na konci projektu.
- **Nerozhoduj tiše za uživatele.** Pokud máš na výběr mezi přístupy s rozdílným dopadem, krátce to uveď a řekni, co doporučuješ a proč.
- **Před nasazením vždy zkontroluj**, že web funguje bez JS chyb v konzoli, formulář reálně odešle e-mail přes Resend (test), a že responzivita funguje na mobilu/tabletu/desktopu.
- **Pokud si v něčem nejsi jistý — okamžitě se zeptej.** Nehádej, nedoplňuj chybějící informace vlastní domněnkou. Platí i pro placeholdery fotek, texty, technická rozhodnutí.

---

## 4. KONTEXT PROJEKTU (SHRNUTÍ)

- **Klient:** Zámečnictví MB s.r.o. — založena 1999, Židněves 65, 294 06 Březno. Zavedená firma, ne osobní řemeslnický brand — tón webu je věcný a solidní, ne storytellingový.
- **Nabídka:** typová i atypická kusová výroba, prototypové díly (automotive, zahradní technika), ocelové konstrukce, vrata, ploty, mříže, schody, zábradlí, kombinace materiálů (kov, dřevo, sklo, plast).
- **Tech stack:** čisté HTML5 + CSS3 + Vanilla JavaScript. **Žádný frontend framework.** Jediná výjimka: jedna tenká serverless funkce (`/api/contact.js`, Vercel/Netlify) pro bezpečné odeslání kontaktního formuláře přes **Resend** — API klíč nikdy v klientském kódu.
- **Struktura webu — JEDNOSTRÁNKOVÝ SCROLL, NE MULTI-PAGE.** Navigace vede na kotvy v rámci jedné stránky (`#o-nas`, `#sluzby`, `#galerie`, `#kontakt`). Tohle je opak přístupu u jiných projektů (např. Schovinox, kde je to naopak vícestránkové) — nezaměňovat, tento projekt je záměrně single-page. Samostatná sekce Realizace byla zrušena — reference na zakázky nese pouze Galerie (s filtrem podle kategorií a rozbalením nad 12 fotek).
- **Design:** barvy odvozené z dodaného loga — tmavě modrá/ocelová (`#1E3A5F`–`#24476B`), metalická šedá, žlutý akcent (sytější než pastelové pozadí originálního loga, které se odstraňuje). Logo se zpracovává jako transparentní PNG/SVG bez pozadí.
- **Fotky:** projekt je zatím **návrh designu a struktury**. Všechna místa pro fotky (hero, o nás, galerie ~20×) zůstávají jako **jasně označené prázdné placeholdery** — žádné stock fotky, žádné dočasné výplně. Fotky se doplní až po schválení designu klientem.
- **Absolutní priorita:** originalita, žádný šablonovitý AI vzhled, věcná důvěryhodná prezentace zavedené firmy.

Plné zadání je v souboru `zamecnictvi-mb-prompt-pro-claude-code.md` v rootu projektu — při jakékoliv nejasnosti se k němu vracej jako ke zdroji pravdy.

---

## 5. CO DĚLAT, KDYŽ PROMPT UŽIVATELE ODPORUJE TOMUTO DOKUMENTU

Uprozorni na rozpor, vysvětli ho v jedné až dvou větách a zeptej se na potvrzení, než uděláš nevratnou změnu (např. přidání frameworku, změna struktury na multi-page, zásah do designového systému nebo nahrazení placeholderu skutečným obsahem bez podkladu). U vratných/drobných věcí stačí upozornit a rovnou pokračovat podle zadání uživatele.