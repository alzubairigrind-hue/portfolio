---
target: Wethaq demo homepage
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/home/alzubairi/02_Profession/Projects/01_Personal/005_myPortfolio/public/work/wethaq/index.html"
target_fingerprint: "sha256:c644ef1d6a3796064144f83b5605796d58fdd11f59602c579ec57fa5039ec711"
target_path: /home/alzubairi/02_Profession/Projects/01_Personal/005_myPortfolio/public/work/wethaq/index.html
timestamp: 2026-09-24T22-15-46Z
slug: public-work-wethaq-index-html
---
Method: A = isolated Codex read-only design review (source + screenshots 390/768/1440 + mobile menu open; no detector output) · B = parent context after A finished (CLI detector 56 findings + in-browser overlay 40/41). A and B isolated; not a two-sub-agent run.
Scope: public/work/wethaq/ is a vanilla copy of the Wethaq Laravel homepage (client's own design) with owner-approved sample content. Portfolio DESIGN.md does not govern it; detector design-system-* findings are out of scope.

## Design Health Score: 20/32 (Acceptable). n/a: 7, 10
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of status | 2 | Inert actions give no feedback; no active nav state |
| 2 | Match real world | 4 | Clear Arabic, Saudi family-association language and imagery |
| 3 | User control | 2 | Many no-op controls; phone dropdowns don't open (original bug) |
| 4 | Consistency | 3 | Strong visual system; three repeated sample tiles flatten sections |
| 5 | Error prevention | 2 | Action-looking controls don't signal they're unavailable |
| 6 | Recognition | 3 | Clear sections; 10 top-level nav items |
| 7 | Flexibility | n/a | Showcase page |
| 8 | Aesthetic/minimalist | 2 | Strong hero; long, repetitive sample body |
| 9 | Error recovery | 2 | No explanation when inert controls are used |
| 10 | Help | n/a | Homepage |

## Priority issues
1. [P1][original] Phone nav dropdowns don't open (landing.js:11-18 selector ".navbar .dropdown .dropbtn" doesn't match markup). /impeccable adapt
2. [P1][demo] Sample action buttons ("عرض المزيد", course/program buttons) look real but do nothing. Relabel/mark as sample or give them a demo-safe state. /impeccable clarify
3. [P1][original] Accessibility: two h1 (index.html:84,96); no focus styles in any stylesheet; menu toggle lacks aria-expanded; social icons are images not links; contrast #33a5a0 on white 3.0:1 and white on #33a5a0 3.0:1 (20 detector hits), footer accent #3db8a9 2.3:1. /impeccable audit
4. [P2][demo] Six sample sections reuse the same three illustration tiles; long, repetitive scroll on phones. Fewer items, more distinct treatments. /impeccable distill
5. [P2][demo] The sample label appears only in the top bar; the statistics at the bottom read as real. Repeat a compact «بيانات تجريبية» by the stats. Counters use en-US digits (original landing.js:23). /impeccable clarify

## Detector
CLI 56: low-contrast 20 (real, original palette), icon-tile-stack 7 (section header icon tiles, original design), cramped-padding 5 (nav/dropdown lists, original), side-tab 3 (news cards border-right accent, original), justified-text 2 (original about + footer text), dark-glow 1; design-system-* 17 = out of scope (portfolio DESIGN.md). Browser overlay 40 (1440) / 41 (390).

## Persona red flags
- Prospective client on a phone: 10-row menu, dropdowns fail, long repetitive scroll, inert course buttons.
- Recruiter on desktop: repeated tiles, sample stats and dead-looking buttons read as filler.
- Keyboard/screen-reader user: no focus ring, duplicate h1, menu state not announced.

## Minor
- Gallery styled as a scroller but rendered as a static grid.
- Empty footer column leaves desktop gap (index.html:345).
- Mobile intro media query targets .container not .containertext (landing.css:463) — original.
