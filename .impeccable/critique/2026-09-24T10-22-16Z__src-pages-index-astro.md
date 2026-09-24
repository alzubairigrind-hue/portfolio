---
target: the whole page (/ and /en)
total_score: 27
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 1
target_identity: "file:/home/alzubairi/02_Profession/Projects/01_Personal/005_myPortfolio/src/pages/index.astro"
target_fingerprint: "sha256:bc42e64606bb6422bcd0e5dbca193813af0017e44441cb407da26c4b4f3f2e8f"
target_path: /home/alzubairi/02_Profession/Projects/01_Personal/005_myPortfolio/src/pages/index.astro
timestamp: 2026-09-24T10-22-16Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + in-page scan)

## Design Health Score: 27/32 (84%, Good). Heuristics 7 and 10 scored n/a (single-goal Persuade page). Previous: 25/32.
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 4 | Chat plays once, holds, replays on re-entry/tap/Replay; WhatsApp glyph on both CTAs |
| 2 | Match with real world | 4 | WhatsApp idiom, café example, RTL-correct chat sides |
| 3 | User control & freedom | 3 | Language switch only in the footer (~5,300px down on phones) |
| 4 | Consistency & standards | 3 | Contact: sr-only h2 + visible h3; «الخدمات» the only bare-label heading |
| 5 | Error prevention | 3 | Chat chips look tappable (tap only replays); EN contact pill wraps on phones |
| 6 | Recognition over recall | 4 | Written price at the ask; both CTAs pre-filled |
| 7 | Flexibility & efficiency | n/a | Single-goal page |
| 8 | Aesthetic & minimalist | 3 | Sparse full-width Work card on desktop; steps 2–3 restate commitments 1–2 |
| 9 | Error recovery | 3 | Email fallback present, 46px target |
| 10 | Help & docs | n/a | How-the-work-is-done serves as help |

## Design specificity
Mostly authored: hero chat, service drawings, scroll-lit path, «منذ 2022» pill, browser project card. Generic stretch: the lower third (dark panel → white card → dark panel). Detector: 40 CLI advisories (13 radius, 12 color, 11 font-size, 4 bounce-easing), all illustration-internal or owner-approved except 7 minor token drifts (.sig-name 1.35rem, .num 1.1rem, commit-title clamp, project badge 0.8rem, .art 20px, .browser 22px, rail 2px). In-page overlay: 15 patterns, all expected or false positives. DOM: all controls ≥44px, contrast ≥8.5:1 (label 10.5:1), measure ≤64 cpl, no overflow, no errors, hero CTA in first phone viewport.

## Priority issues
1. [P1] The ask follows the weakest section, and phones go ~4,600px (≈5.5 screens) with no CTA after the hero; the commitments panel (trust peak) has no action. Fix: reorder Services → Work → How-we-work+commitments → Contact, or a quiet WhatsApp text link under the commitments panel (new copy). -> /impeccable layout
2. [P2] «ادريس» without hamza in hero name, title and footer; standard «إدريس». Owner's call. -> /impeccable clarify
3. [P2] EN contact CTA wraps to two lines at 390px. Fix: nowrap with smaller padding/size below 24rem, or a shorter EN label (copy change). -> /impeccable adapt
4. [P2] No visible language switch for recruiters landing on `/` until the footer. Fix: small switch pill in the hero signature row. -> /impeccable layout
5. [P3] Chat chips («عرض السعر», «yourcafe.sa») styled like buttons. Fix: attachment look (outline/lilac tint). -> /impeccable polish

## Persona red flags
- Jordan: «ماذا نبني» full-size second pill on phones; "Bin Mahyub" chat vs "Edres" hero.
- Riley: EN pill wrap; chip tap replays; footer-only language switch; sparse desktop Work card.
- Casey: interrupted at commitments must scroll to the end to act.
- Saudi referral owner: no confirmation it's the right Edres; «قريبًا» right before the ask.

## Minor observations
- Stale: DESIGN.md "replays every 11 s"; brief history mentions brass button and CV facts.
- Hero sub «صفحات هبوط ومتاجر ووردبريس» / "WordPress stores" vs service «مواقع ووردبريس ومتاجر ووكومرس».
- Services desktop: second title wraps, card texts start at different heights.
- «وميزانيتي تقريبية» could read «ولديّ ميزانية تقريبية».

## Questions to consider
1. What if the commitments panel were the ask itself?
2. Does one unfinished project earn its own section yet?
3. What answers "is this the Edres I was told about?" without a photo?
