# SEO Cluster Plan — Zámečnictví MB s.r.o.

Planning document only. Nothing in this file has been implemented — `index.html` is
untouched and no `/sluzby/*.html` pages exist yet. This is the basis for a client
decision before any build work starts.

Scope: single-page site (`index.html`) as the **hub**, 5 proposed static **spoke**
pages under `/sluzby/`. This is not a blog/magazine cluster — no further sub-posts
per spoke.

---

## 0. Methodology note (how this was actually run)

Full pairwise SERP comparison of ~40 keywords would require ~780 WebSearch calls.
Per the skill's own optimization rule, keywords were pre-grouped by head term and
intent, then a set of 14 **anchor keywords** (one per candidate spoke, plus local vs.
national variants and two risk keywords) were SERP-compared directly. Long-tail
variants sharing a head term and intent with an anchor were assigned to that anchor's
group without an individual SERP fetch (per the skill's documented skip rule).
Wikipedia and other clearly irrelevant ubiquitous results (e.g. the FK/BK Mladá
Boleslav football club pages that surface on every `Mladá Boleslav` query) were
filtered out of overlap counts as noise, per the anti-pattern guidance in the
methodology reference.

All SERP snapshots were pulled 2026-09-09 via WebSearch (Czech-language queries).
WebSearch result rankings can drift session to session — treat the overlap scores
below as directionally reliable, not as a locked DataForSEO-grade dataset. If the
client wants harder numbers before committing budget, a DataForSEO pass on the same
14 anchors would tighten this.

---

## 1. Keyword expansion (39 kept / 1 excluded)

| # | Keyword | Intent | Local/National | Cluster assignment |
|---|---|---|---|---|
| 1 | zámečnictví Mladá Boleslav | Commercial | Local | Hub (secondary — see §3 risk) |
| 2 | zámečnictví a kovovýroba Mladá Boleslav | Commercial | Local | Hub (primary) |
| 3 | kovovýroba Mladá Boleslav | Commercial | Local | Hub (primary) |
| 4 | kovovýroba na zakázku | Commercial | National | Hub / Spoke 5 secondary |
| 5 | kovovýroba Středočeský kraj | Commercial | Local (regional) | Hub secondary |
| 6 | zámečnictví Březno | Commercial | Hyperlocal | Hub secondary (low volume, flag) |
| 7 | zámečník Mladá Boleslav | Commercial | Local | Excluded from clustering — same pollution risk as #1, do not target |
| 8 | zamecnictvi mb / zámečnictví mb | Navigational | Brand | **Excluded** (own brand, no clustering value) |
| 9 | ocelové konstrukce na míru | Commercial | National | Spoke 1 primary |
| 10 | výroba ocelových konstrukcí | Commercial | National | Spoke 1 secondary |
| 11 | ocelové konstrukce Mladá Boleslav | Commercial | Local | Spoke 1 primary (local variant) |
| 12 | ocelové konstrukce Středočeský kraj | Commercial | Local (regional) | Spoke 1 secondary |
| 13 | žárově zinkované ocelové konstrukce | Informational/Commercial | National | Spoke 1 secondary |
| 14 | cena ocelové konstrukce za kg | Informational | National | Spoke 1 secondary (FAQ content) |
| 15 | přístřešky a haly na míru | Commercial | National | Adjacent, not targeted (different product line, would dilute spoke) |
| 16 | vjezdová brána na míru | Commercial | National | Spoke 2 primary |
| 17 | kovaná vjezdová brána | Commercial | National | Spoke 2 secondary |
| 18 | kovový plot na míru | Commercial | National | Spoke 2 secondary |
| 19 | plotové pole kov | Commercial | National | Spoke 2 secondary |
| 20 | posuvná brána na míru | Commercial | National | Spoke 2 secondary |
| 21 | kovová vrata na míru | Commercial | National | **Excluded as primary** — SERP risk, see §3 |
| 22 | brány a ploty Mladá Boleslav | Commercial | Local | Spoke 2 primary (local variant) |
| 23 | mříže na okna na míru | Commercial | National | Spoke 2 secondary (no dedicated photo evidence, see §7 open question) |
| 24 | kovové schodiště na míru | Commercial | National | Spoke 3 primary |
| 25 | venkovní kovové schodiště | Commercial | National | Spoke 3 secondary |
| 26 | ocelové schody cena | Informational | National | Spoke 3 secondary (FAQ) |
| 27 | schodiště Mladá Boleslav | Commercial | Local | Spoke 3 primary (local variant) |
| 28 | zámečnictví schody na zakázku | Commercial | National | Spoke 3 secondary |
| 29 | kovové zábradlí na míru | Commercial | National | Spoke 4 primary |
| 30 | nerezové zábradlí na míru | Commercial | National | Spoke 4 secondary |
| 31 | zábradlí na terasu kov | Commercial | National | Spoke 4 secondary |
| 32 | balkonové zábradlí kov | Commercial | National | Spoke 4 secondary |
| 33 | zábradlí na schodiště cena | Informational | National | Spoke 4 secondary (FAQ) |
| 34 | zábradlí Mladá Boleslav | Commercial | Local | Spoke 4 primary (local variant) |
| 35 | atypická kovovýroba na zakázku | Commercial | Local-leaning | Spoke 5 primary (recommended default, see §3) |
| 36 | atypická výroba na míru | Commercial | Local-leaning | Spoke 5 secondary |
| 37 | kombinace materiálů kov dřevo sklo | Informational/Commercial | National | Spoke 5 secondary |
| 38 | prototypové díly kovoobrábění | Commercial | **National** | Spoke 5 — conditional, see §3 |
| 39 | výroba prototypů automotive | Commercial | **National** | Spoke 5 — conditional, see §3 |
| 40 | výroba prototypů zahradní technika | Commercial | National (mixed) | Spoke 5 secondary — conditional |

Dominant intent across the whole set is **Commercial** (SERPs are almost entirely
company service pages, not blog/media content) — expected for a local B2B/B2C
fabrication business. A handful of pricing/comparison queries (#14, #26, #33) lean
informational and are best served as FAQ sections within their spoke rather than
standalone pages (their overlap with the spoke's main keyword is high enough that a
separate page would just cannibalize).

---

## 2. SERP overlap matrix (14 anchor keywords)

Scores = shared organic top-10 URLs (Wikipedia/football-club noise filtered out).
Thresholds: 7-10 same post · 4-6 same cluster · 2-3 interlink · 0-1 separate.

| Anchor | A1 kovovýroba MB | A2 zámečnictví MB | A3 ocel.konstr. (nat) | A4 ocel.konstr. MB (local) | A5 vjezdová brána | A6 kovové ploty | A7 kovová vrata (risk) | A8 kov. schodiště | A9 kov. zábradlí | A10 nerez zábradlí | A11 atyp. kovovýroba | A12 prototypy automotive (nat) | A13 kovovýroba na zakázku | A14 mříže na okna |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **A1** kovovýroba MB | 10 | 1 | 0 | 3 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 |
| **A2** zámečnictví MB | 1 | 10 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |
| **A3** ocel.konstr. (nat) | 0 | 0 | 10 | 0 | 1 | 1 | 0 | 2 | 1 | 0 | 1 | 0 | 3 | 0 |
| **A4** ocel.konstr. MB (local) | 3 | 1 | 0 | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 1 | 0 |
| **A5** vjezdová brána | 0 | 0 | 1 | 0 | 10 | 5 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
| **A6** kovové ploty | 0 | 0 | 1 | 0 | 5 | 10 | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 1 |
| **A7** kovová vrata (risk) | 0 | 0 | 0 | 0 | 1 | 1 | 10 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **A8** kov. schodiště | 0 | 0 | 2 | 0 | 0 | 0 | 0 | 10 | 1 | 0 | 0 | 0 | 1 | 0 |
| **A9** kov. zábradlí | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 10 | 4 | 0 | 0 | 0 | 1 |
| **A10** nerez zábradlí | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 4 | 10 | 0 | 0 | 0 | 0 |
| **A11** atypická kovovýroba | 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 4 | 0 |
| **A12** prototypy automotive (nat) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 10 | 0 | 0 |
| **A13** kovovýroba na zakázku | 2 | 1 | 3 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 4 | 0 | 10 | 0 |
| **A14** mříže na okna | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 10 |

**Key reads from this matrix:**

- **A1 vs A2 = 1, A3 vs A4 = 0.** Local-modified queries return almost entirely
  different domains than their unmodified national counterparts — real local
  directories/competitors, not just "the same page ranking with a local pack
  bolted on." This confirms local and national variants must be treated as
  genuinely separate targeting decisions per category, not just a title-tag
  suffix.
- **A5 vs A6 = 5** (vjezdová brána × kovové ploty) — the highest cross-topic score
  in the matrix, driven by 5 shared *domains* (lamark.cz, mmploty.cz, nokov.cz,
  prowerk.cz, bubik-vrata.cz all sell brány and ploty as one bundled category).
  This is the strongest evidence for keeping "vrata a ploty" merged into one
  spoke — it matches how the market itself packages the two products.
- **A8 vs A9/A10 ≈ 0-1.** Kovové schodiště and kovové/nerez zábradlí are
  near-disjoint SERPs — dedicated national specialists exist for each
  independently (ischodiste.cz, moduloveschody.cz, swn-schody.cz vs. zabradli.cz,
  nerezspecial.cz, nereznet.cz, motrom.cz). This is the evidence for **splitting**
  the existing "schody-a-zabradli" gallery category into two spokes — see §4.
- **A11 vs A12 = 0.** Atypická kovovýroba (garden/architectural custom work) and
  prototypové díly pro automotive (industrial CNC prototyping with VDA/PPAP-level
  QA) are completely disjoint competitive sets. This is the local-vs-national
  decision point — see §3.
- **A7 (kovová vrata) barely overlaps with anything relevant** (score 1 against
  vjezdová brána / kovové ploty) because its SERP is dominated by garážová/sekční
  vrata (garage doors — LOMAX, Kružík, oknamacek.cz), a different product category
  this client doesn't make. Confirmed exclude as a primary keyword.

---

## 3. Two judgment calls flagged for the client (not decided here)

### 3.1 Local vs. national scope for Spoke 5 (atypická výroba / prototypové díly) — the big one

The client's own service description pairs "atypická kusová výroba" with
"prototypové díly (automotive, zahradní technika)" as if they're one offering. The
SERP data says they are not:

- **"Atypická kovovýroba na zakázku"** (A11) SERPs are small/regional custom-fab
  shops — the same competitive tier this client is in (artsmith.cz, kovo-kulda.cz,
  zamecnictvi-mitro.cz, termetal.cz). Overlaps moderately (score 4) with the
  generic "kovovýroba na zakázku" head term.
- **"Prototypové díly / výroba prototypů automotive"** (A12) SERPs are a
  completely different, more specialized field — CNC machining shops that quote
  VDA/PPAP standards and named automotive-industry sampling processes
  (at-machining.com, xandorconnectors.com, lakum.cz). Zero URL/domain overlap
  with A11.

Only 5 photos exist in the `atypicka-vyroba` gallery category (vs. 15/9/34 in the
others) — the thinnest evidence base of the four categories, and nothing in the
current site content demonstrates an actual automotive-industry case study,
certification, or named client.

**Recommendation:** build Spoke 5 around the *local/craft* framing (A11: "atypická
kovovýroba na zakázku") as the primary keyword, since that's what current photo
evidence and competitive tier actually support, and fold "prototypové díly" in only
as a secondary/descriptive phrase, not a keyword the page tries to rank nationally
for. If the client has real automotive-industry projects (named client, drawings,
tolerances met, repeat orders) they haven't yet surfaced to us, that would justify a
dedicated national-facing page later — but that's a decision requiring facts we
don't have, not something to assume into the plan.

### 3.2 Local modifier strategy for the hub and Spokes 1-4

Every local-modified anchor (A2, A4, and the "kovovýroba Mladá Boleslav" check) came
back with SERPs dominated by different domains than the national-only version. Two
sub-findings worth flagging together:

- **"Zámečnictví Mladá Boleslav" is polluted by 24/7 emergency-lockout competitors**
  (zamecnicimladaboleslav.cz, zamecnictvi-stredni-cechy.cz — "zámečnická
  pohotovost," i.e. locked-out-of-your-car/house services). This client does not
  do lockout/emergency work. Leading the hub's title/H1 with bare "zámečnictví +
  Mladá Boleslav" risks getting lumped into that category's intent both in
  rankings and in the searcher's head. "Kovovýroba Mladá Boleslav" and "kovovýroba
  a zámečnictví Mladá Boleslav" return the actual competitive set (Reskom,
  Kovostafl, Hlaváč — real fabrication shops), and is the safer primary framing.
  Current `index.html` `<title>` already leads with "kovovýroba" over
  "zámečnictví," which is good — but it doesn't include a location term at all,
  and the LocalBusiness schema has no `areaServed` set. This is exactly the open
  `areaServed` question the client hasn't confirmed (see §7) — worth resolving
  before touching title/meta/schema.
- **A close direct local competitor surfaced organically:** "Hlaváč zámečnictví a
  kovovýroba" (hlavacmb.cz) serves an almost identical service line (mříže, brány,
  zábradlí, schodiště, ocelové konstrukce) in the same micro-region (MB, Mnichovo
  Hradiště, Bakov nad Jizerou, Kosmonosy, Bělá pod Bezdězem). Not asked for in this
  task, so no teardown was done — just flagging it as a useful reference point if
  the client wants competitive benchmarking later.

---

## 4. Hub-and-spoke architecture

```
                         [index.html — HUB]
                    (O nás / Služby / Galerie / Kontakt)
                                  |
        +---------------+--------+--------+---------------+
        |               |                 |               |
  /sluzby/         /sluzby/         /sluzby/         /sluzby/         /sluzby/
  ocelove-        vrata-a-         schodiste.        zabradli.        atypicka-
  konstrukce.     ploty.html       html               html            vyroba.html
  html
```

5 spokes, flat (no sub-posts). This **diverges from the existing 4-category gallery
split** in one place: `schody-a-zabradli` (34 photos, the largest category by far)
is split into two spokes, `schodiste.html` and `zabradli.html`, because the SERP
data shows they're near-disjoint markets with different specialist competitors and
different buyer moments (a full staircase replacement vs. adding/upgrading a
railing on an existing terrace/balcony — often bought independently). 34 photos is
also comfortably enough raw material to support two genuinely deep 1,200-1,800 word
pages rather than one page that's shallow on both. The other three categories
(`ocelove-konstrukce`, `vrata-a-ploty`, `atypicka-vyroba`) map 1:1 to spokes — the
SERP data supports keeping those merged/separate exactly as the client's existing
photo taxonomy already has them (see §2, A5×A6=5 finding for why vrata+ploty stay
merged).

**Implementation note (not in scope to build, but worth flagging now):** if this
split is approved, the gallery's `data-filter="schody-a-zabradli"` category and
`CATEGORY_FILES` entry in `js/gallery.js` would eventually need re-sorting into two
sub-categories to keep the gallery's filter UI aligned with the two new spoke pages
— the 34 filenames currently give no indication which are schody vs. which are
zábradlí, so that's manual sorting work for whoever has the source photos, not
something inferable from this data.

### Spoke 1 — Ocelové konstrukce

| Field | Value |
|---|---|
| URL slug | `/sluzby/ocelove-konstrukce.html` |
| Primary keyword | ocelové konstrukce na míru Mladá Boleslav |
| Secondary keywords | výroba ocelových konstrukcí, ocelové konstrukce Středočeský kraj, žárově zinkované ocelové konstrukce, cena ocelové konstrukce za kg |
| Intent | Commercial (local service investigation) |
| Template | `landing-page` with an FAQ block (cena/kg, dodací lhůta, povrchová úprava) |
| Word count target | 1,400-1,800 |
| Title | Ocelové konstrukce na míru | Zámečnictví MB Mladá Boleslav |
| H1 | Ocelové konstrukce na míru |
| Meta description | Výroba ocelových konstrukcí na míru: návrh, svařování, žárové zinkování i montáž. Zámečnictví MB, Mladá Boleslav — na trhu od 1999. (~155 znaků, upravit dle finálního textu) |
| Photo evidence | 15 photos in `ocelove-konstrukce` gallery category — solid |

### Spoke 2 — Vjezdové brány a ploty

| Field | Value |
|---|---|
| URL slug | `/sluzby/vrata-a-ploty.html` |
| Primary keyword | vjezdové brány a ploty na míru |
| Secondary keywords | kovaná vjezdová brána, kovový plot na míru, posuvná brána na míru, plotové pole kov, mříže na okna na míru, brány a ploty Mladá Boleslav |
| Intent | Commercial |
| Template | `landing-page` |
| Word count target | 1,200-1,600 |
| Title | Vjezdové brány a kovové ploty na míru | Zámečnictví MB |
| H1 | Vjezdové brány a ploty na míru |
| Meta description | Kovové vjezdové brány, ploty, plotová pole a branky na míru. Návrh, výroba i montáž. Zámečnictví MB, Mladá Boleslav. |
| Photo evidence | 9 photos in `vrata-a-ploty` — adequate for 1,200-1,600 words, not enough to stretch further |
| Keyword to actively avoid as primary | "kovová vrata" — SERP dominated by garážová/sekční vrata (garage doors), a different, unrelated product this client doesn't sell. Using it as primary keyword would target the wrong buyers and the wrong competitive set. |

### Spoke 3 — Kovová schodiště

| Field | Value |
|---|---|
| URL slug | `/sluzby/schodiste.html` |
| Primary keyword | kovové schodiště na míru Mladá Boleslav |
| Secondary keywords | venkovní kovové schodiště, ocelové schody cena, zámečnictví schody na zakázku |
| Intent | Commercial |
| Template | `landing-page` with an FAQ block (cena, žárové zinkování vs. lak, vnitřní/venkovní) |
| Word count target | 1,300-1,700 |
| Title | Kovová schodiště na míru | Zámečnictví MB Mladá Boleslav |
| H1 | Kovová schodiště na míru |
| Meta description | Venkovní i vnitřní kovová schodiště na míru: zaměření, výroba, montáž. Zámečnictví MB, Mladá Boleslav — na trhu od 1999. |
| Photo evidence | Part of the 34 combined `schody-a-zabradli` photos — needs manual re-sort (see implementation note above) before this page can be illustrated |

### Spoke 4 — Kovová zábradlí

| Field | Value |
|---|---|
| URL slug | `/sluzby/zabradli.html` |
| Primary keyword | kovové zábradlí na míru |
| Secondary keywords | nerezové zábradlí na míru, zábradlí na terasu kov, balkonové zábradlí kov, zábradlí na schodiště cena, zábradlí Mladá Boleslav |
| Intent | Commercial |
| Template | `landing-page` with an FAQ block (ocel vs. nerez cena, výška dle normy) |
| Word count target | 1,300-1,700 |
| Title | Kovová a nerezová zábradlí na míru | Zámečnictví MB |
| H1 | Kovová zábradlí na míru |
| Meta description | Kovová a nerezová zábradlí na schodiště, terasy i balkony. Návrh, výroba, montáž. Zámečnictví MB, Mladá Boleslav. |
| Photo evidence | Part of the 34 combined `schody-a-zabradli` photos — same re-sort dependency as Spoke 3 |

### Spoke 5 — Atypická výroba (+ prototypové díly, conditional)

| Field | Value |
|---|---|
| URL slug | `/sluzby/atypicka-vyroba.html` |
| Primary keyword | atypická kovovýroba na zakázku (recommended default — see §3.1) |
| Secondary keywords | atypická výroba na míru, kombinace materiálů kov dřevo sklo, kovovýroba na zakázku podle výkresu |
| Conditional keywords (only if client confirms real automotive projects — do not add speculatively) | prototypové díly kovoobrábění, výroba prototypů automotive |
| Intent | Commercial |
| Template | `landing-page` |
| Word count target | 1,200-1,500 (thinnest photo evidence of the five — do not overstate scope in copy beyond what can be shown) |
| Title | Atypická kovovýroba na zakázku | Zámečnictví MB |
| H1 | Atypická výroba na zakázku |
| Meta description | Nestandardní kovové díly a konstrukce na míru dle výkresu nebo návrhu. Kombinace kovu, dřeva, skla i plastu. Zámečnictví MB, Mladá Boleslav. |
| Photo evidence | Only 5 photos in `atypicka-vyroba` — thinnest of the four gallery categories; content depth here is genuinely limited until more case examples exist |

---

## 5. Cannibalization check

No two pages share a primary keyword. Checked specifically:

- Hub's "kovovýroba Mladá Boleslav" / "zámečnictví a kovovýroba Mladá Boleslav" vs.
  the five spoke primaries: A1/A2 score 0-3 against every spoke anchor (A3-A12) —
  no merge required, hub stays the broad umbrella, spokes stay the specific
  service targets.
- Spoke 1 (ocelové konstrukce) vs. Spoke 2/3/4/5 primaries: all scores 0-2 — clear.
- Spoke 3 (schodiště) vs. Spoke 4 (zábradlí): score 1 — below the 4-6 "same
  cluster" band, confirms they're correctly split, not merged (see §2).
- "Kovová vrata" (A7, excluded as primary) does not collide with any assigned
  primary keyword because it isn't assigned to any page as primary.
- "Kovovýroba na zakázku" (A13) scores 4 against Spoke 5's "atypická kovovýroba"
  (A11) — same-cluster range, not same-post. Correctly kept as a *secondary*
  keyword on Spoke 5, not promoted to its own page.

---

## 6. Internal link matrix

Mandatory link rules applied: every spoke links to the hub, the hub links to every
spoke, every page has 3+ planned incoming links, no orphans.

| From | To | Type | Anchor text | Placement |
|---|---|---|---|---|
| Hub — Služby section | Spoke 1 (ocelove-konstrukce.html) | Mandatory | "ocelové konstrukce na míru" | New service-tile or link under existing "Výroba ocelových konstrukcí" tile |
| Hub — Služby section | Spoke 2 (vrata-a-ploty.html) | Mandatory | "vjezdové brány a ploty na míru" | New service tile/link |
| Hub — Služby section | Spoke 3 (schodiste.html) | Mandatory | "kovová schodiště na míru" | New service tile/link |
| Hub — Služby section | Spoke 4 (zabradli.html) | Mandatory | "kovová zábradlí na míru" | New service tile/link |
| Hub — Služby section | Spoke 5 (atypicka-vyroba.html) | Mandatory | "atypická kovovýroba na zakázku" | New service tile/link |
| Hub — Galerie section, `ocelove-konstrukce` filter area | Spoke 1 | Recommended | "více o ocelových konstrukcích" | Small link/button under the gallery area panel |
| Hub — Galerie section, `vrata-a-ploty` filter area | Spoke 2 | Recommended | "více o vjezdových branách a plotech" | Same pattern |
| Hub — Galerie section (post-split) | Spoke 3 | Recommended | "více o kovových schodištích" | Same pattern, pending gallery re-sort |
| Hub — Galerie section (post-split) | Spoke 4 | Recommended | "více o kovových zábradlích" | Same pattern, pending gallery re-sort |
| Hub — Galerie section, `atypicka-vyroba` filter area | Spoke 5 | Recommended | "více o atypické výrobě" | Same pattern |
| Spoke 1 | Hub (#kontakt) | Mandatory | "nezávazná poptávka" | CTA at end of page |
| Spoke 1 | Hub (#o-nas or index) | Mandatory | "Zámečnictví MB" | Breadcrumb / "zpět na hlavní stránku" |
| Spoke 2 | Hub (#kontakt) | Mandatory | "nezávazná poptávka" | CTA at end of page |
| Spoke 2 | Hub | Mandatory | "Zámečnictví MB" | Breadcrumb |
| Spoke 3 | Hub (#kontakt) | Mandatory | "nezávazná poptávka" | CTA at end of page |
| Spoke 3 | Hub | Mandatory | "Zámečnictví MB" | Breadcrumb |
| Spoke 4 | Hub (#kontakt) | Mandatory | "nezávazná poptávka" | CTA at end of page |
| Spoke 4 | Hub | Mandatory | "Zámečnictví MB" | Breadcrumb |
| Spoke 5 | Hub (#kontakt) | Mandatory | "nezávazná poptávka" | CTA at end of page |
| Spoke 5 | Hub | Mandatory | "Zámečnictví MB" | Breadcrumb |
| Spoke 3 (schodiste) | Spoke 4 (zabradli) | Recommended (strongest sibling pair — see §2 buyer-overlap note) | "kovové zábradlí na schodiště" | In-body, "schodiště se často doplňuje zábradlím" section |
| Spoke 4 (zabradli) | Spoke 3 (schodiste) | Recommended | "kovová schodiště na míru" | In-body |
| Spoke 1 (ocelove-konstrukce) | Spoke 2 (vrata-a-ploty) | Recommended | "vjezdové brány a ploty" | In-body — shared surface-finish process (žárové zinkování) |
| Spoke 2 (vrata-a-ploty) | Spoke 1 (ocelove-konstrukce) | Recommended | "ocelové konstrukce na míru" | In-body |
| Spoke 5 (atypicka-vyroba) | Spoke 1 | Recommended | "ocelové konstrukce" | In-body, "atypické projekty často kombinují..." |
| Spoke 5 (atypicka-vyroba) | Spoke 2 | Recommended | "vjezdové brány a ploty" | In-body |
| Spoke 5 (atypicka-vyroba) | Spoke 3 | Optional (cross-cluster) | "kovová schodiště" | In-body, only if natural |
| Spoke 5 (atypicka-vyroba) | Spoke 4 | Optional (cross-cluster) | "kovová zábradlí" | In-body, only if natural |

Incoming-link count per page: Hub receives 5 (one per spoke, mandatory) + optional
Kontakt CTAs. Each spoke receives at minimum: 1 from Hub Služby (mandatory) + 1 from
Hub Galerie (recommended) + 1-2 from sibling spokes (recommended) = 3+ incoming
links each, satisfying the minimum-3 rule. No orphan pages — every spoke reachable
from the hub in 1 click, and from every other spoke in at most 2 clicks.

---

## 7. Open questions — do not build on assumptions

These need the client's answer before content is written, not an invented answer
from us:

1. **`areaServed` / service radius.** Is the real service area Mladá Boleslav
   city, the wider Středočeský kraj, or (for atypická výroba / prototypy)
   effectively national? This decides whether local-modified keywords (§3.2) or a
   broader national framing (§3.1) is the right primary target, and whether
   `LocalBusiness` schema should declare an explicit `areaServed`. It's currently
   unset in `index.html`'s JSON-LD.
2. **Real automotive-industry case studies, certifications, or named clients** for
   the "prototypové díly" claim already on the homepage. Without this, Spoke 5
   should not try to compete for the national automotive-prototyping SERP (§3.1) —
   that would be writing content the business can't back up.
3. **Photo sub-sorting for the schody/zábradlí split.** The 34 combined photos
   need to be manually divided into "schodiště" vs. "zábradlí" subsets before
   Spokes 3 and 4 can be illustrated — filenames give no signal either way.
4. **Any pricing tier or typical project size** worth mentioning (even a range) —
   several of the informational secondary keywords (#14, #26, #33) are
   price-comparison queries; vague/no pricing content underperforms specific
   ranges, but we won't fabricate numbers.

---

## 8. Machine-readable plan

```json
{
  "version": "2.2.5-adapted-hub-spoke-flat",
  "seed_keyword": "zámečnictví / kovovýroba Mladá Boleslav",
  "created_at": "2026-09-09",
  "pillar": {
    "title": "Zámečnictví MB s.r.o. — přesná kovovýroba na míru od roku 1999",
    "keyword": "kovovýroba a zámečnictví Mladá Boleslav",
    "template": "existing-single-page-hub",
    "url": "/",
    "status": "existing — not to be edited by this task"
  },
  "spokes": [
    {
      "id": "spoke-1-ocelove-konstrukce",
      "title": "Ocelové konstrukce na míru",
      "keyword": "ocelové konstrukce na míru Mladá Boleslav",
      "secondary_keywords": ["výroba ocelových konstrukcí", "ocelové konstrukce Středočeský kraj", "žárově zinkované ocelové konstrukce", "cena ocelové konstrukce za kg"],
      "intent": "commercial",
      "template": "landing-page",
      "word_count_target": [1400, 1800],
      "url": "/sluzby/ocelove-konstrukce.html",
      "status": "planned",
      "photo_evidence_count": 15
    },
    {
      "id": "spoke-2-vrata-a-ploty",
      "title": "Vjezdové brány a ploty na míru",
      "keyword": "vjezdové brány a ploty na míru",
      "secondary_keywords": ["kovaná vjezdová brána", "kovový plot na míru", "posuvná brána na míru", "plotové pole kov", "mříže na okna na míru", "brány a ploty Mladá Boleslav"],
      "excluded_keyword": "kovová vrata (garage-door SERP collision, see §3)",
      "intent": "commercial",
      "template": "landing-page",
      "word_count_target": [1200, 1600],
      "url": "/sluzby/vrata-a-ploty.html",
      "status": "planned",
      "photo_evidence_count": 9
    },
    {
      "id": "spoke-3-schodiste",
      "title": "Kovová schodiště na míru",
      "keyword": "kovové schodiště na míru Mladá Boleslav",
      "secondary_keywords": ["venkovní kovové schodiště", "ocelové schody cena", "zámečnictví schody na zakázku"],
      "intent": "commercial",
      "template": "landing-page",
      "word_count_target": [1300, 1700],
      "url": "/sluzby/schodiste.html",
      "status": "planned",
      "photo_evidence_count": "part of 34 combined — needs manual re-sort",
      "diverges_from_gallery_category": "schody-a-zabradli split into schodiste + zabradli, see §4"
    },
    {
      "id": "spoke-4-zabradli",
      "title": "Kovová zábradlí na míru",
      "keyword": "kovové zábradlí na míru",
      "secondary_keywords": ["nerezové zábradlí na míru", "zábradlí na terasu kov", "balkonové zábradlí kov", "zábradlí na schodiště cena", "zábradlí Mladá Boleslav"],
      "intent": "commercial",
      "template": "landing-page",
      "word_count_target": [1300, 1700],
      "url": "/sluzby/zabradli.html",
      "status": "planned",
      "photo_evidence_count": "part of 34 combined — needs manual re-sort",
      "diverges_from_gallery_category": "schody-a-zabradli split into schodiste + zabradli, see §4"
    },
    {
      "id": "spoke-5-atypicka-vyroba",
      "title": "Atypická kovovýroba na zakázku",
      "keyword": "atypická kovovýroba na zakázku",
      "secondary_keywords": ["atypická výroba na míru", "kombinace materiálů kov dřevo sklo", "kovovýroba na zakázku podle výkresu"],
      "conditional_keywords_pending_client_confirmation": ["prototypové díly kovoobrábění", "výroba prototypů automotive"],
      "intent": "commercial",
      "template": "landing-page",
      "word_count_target": [1200, 1500],
      "url": "/sluzby/atypicka-vyroba.html",
      "status": "planned",
      "photo_evidence_count": 5
    }
  ],
  "links": [
    { "from": "pillar", "to": "spoke-1-ocelove-konstrukce", "type": "mandatory", "anchor": "ocelové konstrukce na míru" },
    { "from": "spoke-1-ocelove-konstrukce", "to": "pillar", "type": "mandatory", "anchor": "Zámečnictví MB" },
    { "from": "pillar", "to": "spoke-2-vrata-a-ploty", "type": "mandatory", "anchor": "vjezdové brány a ploty na míru" },
    { "from": "spoke-2-vrata-a-ploty", "to": "pillar", "type": "mandatory", "anchor": "Zámečnictví MB" },
    { "from": "pillar", "to": "spoke-3-schodiste", "type": "mandatory", "anchor": "kovová schodiště na míru" },
    { "from": "spoke-3-schodiste", "to": "pillar", "type": "mandatory", "anchor": "Zámečnictví MB" },
    { "from": "pillar", "to": "spoke-4-zabradli", "type": "mandatory", "anchor": "kovová zábradlí na míru" },
    { "from": "spoke-4-zabradli", "to": "pillar", "type": "mandatory", "anchor": "Zámečnictví MB" },
    { "from": "pillar", "to": "spoke-5-atypicka-vyroba", "type": "mandatory", "anchor": "atypická kovovýroba na zakázku" },
    { "from": "spoke-5-atypicka-vyroba", "to": "pillar", "type": "mandatory", "anchor": "Zámečnictví MB" },
    { "from": "spoke-3-schodiste", "to": "spoke-4-zabradli", "type": "recommended", "anchor": "kovové zábradlí na schodiště" },
    { "from": "spoke-4-zabradli", "to": "spoke-3-schodiste", "type": "recommended", "anchor": "kovová schodiště na míru" },
    { "from": "spoke-1-ocelove-konstrukce", "to": "spoke-2-vrata-a-ploty", "type": "recommended", "anchor": "vjezdové brány a ploty" },
    { "from": "spoke-2-vrata-a-ploty", "to": "spoke-1-ocelove-konstrukce", "type": "recommended", "anchor": "ocelové konstrukce na míru" },
    { "from": "spoke-5-atypicka-vyroba", "to": "spoke-1-ocelove-konstrukce", "type": "recommended", "anchor": "ocelové konstrukce" },
    { "from": "spoke-5-atypicka-vyroba", "to": "spoke-2-vrata-a-ploty", "type": "recommended", "anchor": "vjezdové brány a ploty" },
    { "from": "spoke-5-atypicka-vyroba", "to": "spoke-3-schodiste", "type": "optional", "anchor": "kovová schodiště" },
    { "from": "spoke-5-atypicka-vyroba", "to": "spoke-4-zabradli", "type": "optional", "anchor": "kovová zábradlí" }
  ],
  "cannibalization_check": "pass — no shared primary keywords, see §5",
  "open_questions": [
    "areaServed / real service radius (local vs regional vs national)",
    "automotive-industry case studies/certifications backing 'prototypové díly' claim",
    "manual photo re-sort needed to split schody-a-zabradli into two illustrated spokes",
    "any pricing tier/range to include in FAQ content"
  ]
}
```

---

## 9. Pre-delivery validation

- [x] No two spokes (or the hub) share a primary keyword — §5
- [x] Every spoke has ≥3 planned incoming links — §6
- [x] Every spoke links to the hub (mandatory) — §6
- [x] Hub links to every spoke (mandatory) — §6
- [x] No orphan pages — §6
- [x] Template matches intent (all Commercial → `landing-page`) — §4
- [x] Word count targets within spec (spokes 1,200-1,800) — §4
- [x] 5 spokes, flat structure, within the approved 4-6 scope — §4
- [x] SERP overlap data supports every cluster grouping (no spoke merged/split
      without a supporting score) — §2, §4
- [x] No fabricated business facts — open items listed in §7 instead of guessed
