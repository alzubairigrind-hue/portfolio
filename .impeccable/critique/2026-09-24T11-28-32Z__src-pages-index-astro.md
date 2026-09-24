---
target: the whole page (/ and /en), all screen sizes
total_score: 28
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/alzubairi/02_Profession/Projects/01_Personal/005_myPortfolio/src/pages/index.astro"
target_fingerprint: "sha256:bdc18bf6ed6c3740816aafbd52291ed1eda7716d4ce1db93adf69b728750c7cb"
target_path: /home/alzubairi/02_Profession/Projects/01_Personal/005_myPortfolio/src/pages/index.astro
timestamp: 2026-09-24T11-28-32Z
slug: src-pages-index-astro
---
Method: dual-agent via Codex (A: design review · B: detector + measurements), isolated parallel sessions; capture by orchestrator at 320/390/430/768/1024/1280/1440/1920 × ar/en + reduced motion.

## Design Health Score: 28/32 (88%, Good). Heuristics 7 and 10 n/a. Previous: 27/32.
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 4 | Chat state, Replay, label, scroll path clear |
| 2 | Match with real world | 4 | WhatsApp idiom, written quote, café example |
| 3 | User control & freedom | 3 | Auto-play demo has no pause |
| 4 | Consistency & standards | 4 | Coherent pill/card system, RTL mirroring |
| 5 | Error prevention | 3 | 320px overflow; 1024px mini-site collision |
| 6 | Recognition over recall | 4 | Clear labels, WhatsApp glyphs |
| 7 | Flexibility & efficiency | n/a | Single-goal page |
| 8 | Aesthetic & minimalist | 3 | Lower-page dead space on wide desktops; repeated trust claims |
| 9 | Error recovery | 3 | Email fallback |
| 10 | Help & docs | n/a | No documentation task |

## Per size
- 320: horizontal overflow 12px AR / 26px EN (sig row: nowrap name + language pill; EN CTA and pill offscreen).
- 390–430: clean; very tall page (5.5–5.9k px); chat below first viewport.
- 768: one-column hero ~1,100px tall; third service card alone on a second row.
- 1024: AR mini-site overlaps a chat bubble (new); EN overlaps at 1024 and 1280 (EN accepted at 820–1440).
- 1280–1920: lone card-sized project and narrow How rail leave large empty areas.
- Reduced motion: passes.
Detector: 42 CLI advisories (new: ProjectCard.astro:44 preview radius, expected; Contact.astro:35 0.95rem, minor drift). Overlay: 15 patterns, known false positives. No small targets, wrapped buttons, measure violations or errors at any size.

## Priority issues
1. [P1] 320px horizontal overflow from the nowrap hero name + language pill. Fix: below ~22rem let the name wrap or move the pill to its own line. -> /impeccable adapt
2. [P1] AR 1024px (and EN 1024/1280) mini-site overlaps a chat bubble. Fix: at ~820–1100px put the mini-site in flow under the phone. -> /impeccable adapt
3. [P2] Store drawing uses orange/pink/mint tiles outside the purple palette. Fix: purple/lilac tones, same drawing and motion. -> /impeccable polish
4. [P2] Wide-desktop lower-page dead space (owner-chosen card-sized project stays). Fix: use the space, e.g. Work heading beside the card. -> /impeccable layout
5. [P2] WhatsApp CTAs 77–87% of page height apart at every size; owner chose the reorder over a mid-page link — noted.

## Persona red flags
- Jordan: Edres (hero) vs Bin Mahyub (chat).
- Riley: 320 overflow; 1024 overlap.
- Casey: strongest proof (chat) below the first viewport.
- Saudi referral owner: no live work yet.

## Questions to consider
1. At 1920px, is the empty canvas confidence or a spotlight on one unfinished project?
2. On small phones, should the chat demo come before the lede?
