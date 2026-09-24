---
target: English portfolio page
total_score: 24
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/alzubairi/02_Profession/Projects/01_Personal/005_myPortfolio/src/pages/en/index.astro"
target_fingerprint: "sha256:55d102347337b064870efc25cdb1dcbe51e3b8676da49409b260103b822393ec"
target_path: /home/alzubairi/02_Profession/Projects/01_Personal/005_myPortfolio/src/pages/en/index.astro
timestamp: 2026-09-24T20-40-13Z
slug: src-pages-en-index-astro
---
Method: A = isolated Codex read-only design review (source + orchestrator screenshots at 390/768/1440, no detector output) · B = parent context after A finished (CLI detector + in-browser detect.js overlay). Not a two-sub-agent run; A and B stayed isolated.

## Design Health Score (English page, /en/)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Chat demo stages clearly; the mini-site payoff lands at ~5.6s (Hero.astro:15,58-68) |
| 2 | Match system / real world | 3 | WhatsApp, written price, ownership are concrete; "How the work is done" reads translated |
| 3 | User control and freedom | 3 | Replay exists; the aria-hidden phone is still clickable (Hero.astro:41,96,149) |
| 4 | Consistency and standards | 2 | «العربية» pill hugs the name; Work heading says "building now" beside "Live demo" |
| 5 | Error prevention | 4 | No forms; explicit CTA labels and WhatsApp prefill |
| 6 | Recognition rather than recall | 3 | Clear headings and labelled actions; long single scroll |
| 7 | Flexibility and efficiency | n/a | Static portfolio, no repeat workflow |
| 8 | Aesthetic and minimalist design | 3 | Strong hierarchy; single Work card leaves a desktop void |
| 9 | Error recovery | 3 | No transactional states to recover from |
| 10 | Help and documentation | n/a | Self-explanatory landing page |
| **Total** | | **24/32** | **Good** |

## Design Specificity Verdict
Authored, not interchangeable: the hero shows the actual WhatsApp-to-website service. The middle white sections (About, Services) are the most template-like part. Detector: 38 CLI findings (4 warnings, 34 advisories); browser overlay 14. All 4 warnings are the documented spring easing (DESIGN.md "bubbly", "spring rise") = false positives by brief. Browser-only flags "side-tab accent" (.btn--light inset bottom shade) and "pulsing status dot" (typing indicator) are documented choices = false positives. 34 advisories: literal font sizes, radii and colours off the DESIGN.md scales (Hero, Contact, etc.): documentation drift, not visible defects.

## Priority Issues
1. [P1] «العربية» pill misplaced in the English hero. LanguageSwitch.astro:17-22 sets dir="rtl" on the <a>, so .lang's margin-inline-start:auto (Hero.astro:130) resolves to margin-right and the pill sits beside the name (x≈349 instead of the far edge). Footer pill is fine (SiteFooter.astro:19-21, space-between). Fix: dir on an inner <span>. /impeccable layout
2. [P1] Work heading "What we're building now" contradicts the "Live demo" card; project is delivered. Fix: "Selected work" / «من أعمالنا» (approved, in progress). /impeccable clarify
3. [P2] English copy reads translated in places: hero sub "looked after long after handover" (copy.ts:144), section title "How the work is done" (copy.ts:174). Hero sub says "WordPress stores" while Services says "WordPress sites & WooCommerce stores" (copy.ts:137,162). /impeccable clarify
4. [P2] Hero proof arrives late: the mini-site appears at ~5.6s; a skimming recruiter may leave before the payoff. /impeccable animate

## Persona Red Flags
- Saudi small-business owner, phone: WhatsApp CTA is prominent at the top, but no persistent contact action through a long scroll (OnePage.astro:21-31).
- Recruiter, English desktop: the misplaced pill and the "building now" heading are the two visible credibility defects.
- Screen-reader/keyboard user: phone is aria-hidden yet clickable; Replay is the accessible path, so impact is low but the model is inconsistent.

## Minor Observations
- 768px Services: one card alone on the second row.
- Single Work card leaves a large desktop void (grid is future-ready; resolves with the second project).
- Honesty note (owner decision pending): the demo is the pitch design ("Pitch mock only" footer, placeholder faculty), not the delivered WordPress site.

## Questions to Consider
- Should the English page lean recruiter-first (a case-study path) instead of mirroring the Arabic service page?
- Is the 5.6s hero payoff earning attention, or hiding the strongest proof from skimmers?
