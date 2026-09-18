name: seo-collabim-keyword-loop
description: Runs an iterative, human-in-the-loop keyword research process for a website, page by page. Claude proposes a small batch of candidate keywords for one page/section, the user checks real search volume, difficulty and trend in an external SEO tool (Collabim by default; also works with Ahrefs, SEMrush, Marketing Miner, Google Keyword Planner, DataForSEO), reports the numbers back, and Claude picks the best primary + secondary keywords before moving to the next page. Repeats until the whole site has a validated, non-cannibalized, strategically-ordered keyword map. Use when the user wants to go through keyword research together step by step with a live SEO tool rather than dumping a finished keyword list at once — trigger phrases include "let's go through keywords with Collabim", "propose keywords and I'll verify them", "keyword research loop", "ověřovat klíčová slova v Collabim", or "build a site-wide keyword map iteratively".
SEO Collabim Keyword Loop
A repeatable process for building a validated, site-wide keyword map through a tight feedback loop between Claude and a human who has access to a live SEO keyword tool. Claude never has direct access to real search volume or difficulty data — this skill exists specifically to structure the back-and-forth so that never becomes a problem: Claude proposes, the human verifies, Claude decides, and the result gets recorded before moving on.
The end product is a keyword-to-page map: one approved primary keyword + a few secondary keywords per page, ready to drive titles, H1s, meta descriptions, URL slugs and content once the page is written or rebuilt.
0. Strategic frame — read this before proposing anything
The goal is not "every page has a keyword." The goal is getting the whole site to rank — every per-page decision is judged against that, not in isolation. A locally perfect keyword choice that cannibalizes another page or ignores the site's overall positioning is a bad choice even if it tests well in isolation.
Keywords are never picked in a vacuum. Before proposing anything, pull in the actual context of the project: what the business does, who it serves, where it operates, its tone/positioning, and its current state (brand-new domain with no backlink history behaves very differently from an established site). If the project has its own rules/context docs (a CLAUDE.md, AGENTS.md, brief, brand doc, existing memory/notes system), read them first and let them constrain the proposals — don't propose something that fits generic SEO theory but ignores what this specific project actually is.
Think strategically, not academically. Prefer what actually works over what is theoretically "correct." For a new or low-authority domain, a realistic long-tail keyword that can actually rank beats a broad, high-volume keyword the site has no realistic shot at. If the tool's data points somewhere unexpected, follow the data over the original hypothesis.
Weigh every new pick against the map so far, not just against the page at hand — that's the only way to catch cannibalization before it's baked into five pages of content.
1. Roles
Who
Does what
Claude
Proposes 5–8 candidate keywords per page/section, with a one-line reason each. Never invents search volume, difficulty, or trend data.
User
Enters the candidates into their SEO tool (Collabim or equivalent), reads back volume/difficulty/trend/related terms.
Claude
Evaluates the real data, picks 1 primary + 2–4 secondary keywords (or asks for another round if nothing fits), checks against the running map for cannibalization, and records the approved row.
Claude never marks a keyword "final" without tool data behind it. An untested guess does not go into the map.
2. Before the first round — what Claude needs to know
Gather this before proposing anything; ask rather than guess if it's missing:
What the business actually offers — services/products, not a guess at what it "probably" does.
Geography, if it's a local/regional business — exact service area, not "somewhere in that country."
The site's page list — existing sitemap, planned route structure, or a project doc describing it (AGENTS.md, a brief, a CMS page list). If none exists yet, ask the user for the intended page list before starting.
Known competitors, if any — helps judge realistic difficulty. If unknown, say so plainly rather than inventing competitors.
Domain authority state — brand-new domain, low-authority existing domain, or established site with backlink history. This materially changes which keywords are realistic (see section 0).
3. Page processing order (general heuristic)
Work from commercially critical to least critical — polishing blog topics before the money pages are locked in wastes rounds.
Homepage
Core service/product pillar pages (the pages that directly drive revenue or leads)
Detail subpages nested under those pillars
Trust/context pages — About, Testimonials/Reviews, Partners
Contact / conversion pages
Blog / informational content — lowest priority, handled continuously rather than "closed" like the rest
Adjust this order on the spot if the project's actual structure or business priorities say otherwise — this is a default, not a rule.
4. The loop — step by step, per page
Claude proposes 5–8 candidate keywords for the page (mix of core industry term, long-tail phrasing, and a local modifier if relevant), each with a one-line reason tied to that page's search intent.
User checks the tool — search volume/month, difficulty or competition score, trend direction, and any related-term suggestions the tool surfaces.
User reports the numbers back — raw numbers, a pasted list, or a screenshot description all work.
Claude evaluates:
Picks 1 primary keyword — best balance of volume, difficulty, and intent match, weighted for the site's actual authority level (see section 0).
Picks 2–4 secondary keywords for H2s and body copy.
Cross-checks the running map for overlap with an already-closed page (cannibalization) — if found, resolve it before moving on rather than leaving two pages competing for the same term.
If nothing in the batch is good enough, goes back to step 1 with adjusted candidates instead of forcing a weak pick.
Once approved, the row gets recorded in the keyword map (section 6) and the page is marked done.
Move to the next page per the order in section 3.
One round = one page, or a clearly scoped section of a large page (e.g. a homepage hero vs. its later sections can be separate rounds).
5. What makes a keyword good
Matches the page's actual search intent — transactional for service/product pages, informational for blog/guide content.
Realistic ranking chance given the site's actual authority — long-tail and specific phrasing over broad, high-competition terms on a new or low-authority domain.
No primary-keyword duplication across pages.
A local modifier where the business is genuinely local and it fits naturally.
Reads like something a person would type or a person would write, not a stiff literal translation or keyword-stuffed phrase.
Prefers what's proven to work over what's theoretically ideal — see section 0.
6. Where results get stored
A single running table: Page | Primary keyword | Secondary keywords | Search volume | Difficulty | Date approved.
If the project already has a memory/notes system (a memory/ folder, a project wiki, a docs convention), put this table there using its existing conventions rather than inventing a new location. Otherwise, default to a dedicated file (e.g. docs/seo/keywords.md or memory/keywords.md) and say where it went.
This table becomes the source of truth for on-page implementation — titles, H1s, meta descriptions, URL slugs, content — once the page is actually built or rewritten.
If the project has its own change-log/memory rules (e.g. a rule that every SEO decision gets logged), follow those rules too — this skill governs the keyword process, not a project's own record-keeping conventions.
7. Handoff to other SEO work
Once a page (or the whole map) is approved, this is the point to hand off to whatever comes next in that project:
Site/URL architecture or cluster planning — if the project has a keyword-cluster/architecture skill or process, feed it this approved map rather than raw candidate keywords.
On-page implementation checklists — general SEO/content-quality skills or processes for turning approved keywords into actual titles/meta/content.
New-domain-specific caution — if the site is brand-new with no backlink history, keep re-checking picks against that constraint rather than assuming a keyword that "should" work will actually rank soon.
8. Done condition
The process is done when every page on the agreed page list has an approved primary + secondary keyword set in the map. Blog/informational content is the exception — it keeps getting new entries over time even after the rest of the map is "closed."