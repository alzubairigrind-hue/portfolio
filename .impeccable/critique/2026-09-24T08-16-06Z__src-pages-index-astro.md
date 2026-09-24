---
target: the whole page (/ and /en)
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:/home/alzubairi/02_Profession/Projects/01_Personal/005_myPortfolio/src/pages/index.astro"
target_fingerprint: "sha256:bc42e64606bb6422bcd0e5dbca193813af0017e44441cb407da26c4b4f3f2e8f"
target_path: /home/alzubairi/02_Profession/Projects/01_Personal/005_myPortfolio/src/pages/index.astro
timestamp: 2026-09-24T08-16-06Z
slug: src-pages-index-astro
closed: true
---
Method: dual-agent (A: design review · B: detector + in-page scan)

## Design Health Score: 25/32 (78%, Good). Heuristics 7 and 10 scored n/a (single-goal Persuade page).
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 3 | Hero chat wipes itself every 11 s, even mid-read |
| 2 | Match with real world | 4 | WhatsApp idiom, Saudi café example, plain MSA |
| 3 | User control & freedom | 3 | Chat can't be paused; replays on its own |
| 4 | Consistency & standards | 3 | Two WhatsApp buttons word it differently; only one pre-fills |
| 5 | Error prevention | 3 | Honest coming-soon badge; email link only 20 px tall |
| 6 | Recognition over recall | 3 | Written-price promise repeated at the point of action |
| 7 | Flexibility & efficiency | n/a | Single-goal page |
| 8 | Aesthetic & minimalist | 3 | Desktop dead band above headline; lone Work card at 1/3 width |
| 9 | Error recovery | 3 | Only the WhatsApp hand-off can fail; email fallback present |
| 10 | Help & docs | n/a | How-the-work-is-done serves as help |

## Design specificity
The hero is authored (the WhatsApp chat demonstrates the real process, honestly labelled). Below it the page falls back to a familiar agency pattern (card grid, timeline, two look-alike dark panels); the chat language never returns. Detector: 41 flags, mostly expected or false alarms (37 illustration-internal design-system advisories; side-tab on the pill edge, nested-cards on chat bubbles, pulsing-dot on the typing indicator, ai-palette on a mint tile). Real: paragraph line length about 85 characters; spring easing spread beyond the approved buttons (chat, mini site, steps, every reveal, and an infinitely bouncing cart badge).

## Priority issues
1. [P1] Hero chat loop erases content mid-read; on phones it sits below the first screen. Fix: play once and hold the final state; replay on re-entry or tap. -> /impeccable animate
2. [P1] WhatsApp CTAs don't read as WhatsApp (no glyph; the hero opens an empty chat; «راسلنا» under one person's name is ambiguous). Fix: WhatsApp glyph inside both pills, pre-fill the hero link. -> /impeccable clarify
3. [P2] Work valley: «أعمال مختارة» with one unfinished project as an orphan 1/3-width card, right before the ask. Fix: honest title (e.g. «أحدث مشاريعنا»), full-width feature row. -> /impeccable layout
4. [P2] Generic structure below the hero; the chat idea doesn't carry. Fix: bring the chat language into commitments/contact. Owner decision (touches the 6B pick). -> /impeccable bolder
5. [P3] Faint small label (12.5 px at 55% white, about 4.3:1), 20 px email tap target, paragraphs about 85 characters per line. Fix: raise the label, pad the email to 44 px, cap the measure at about 65–70ch. -> /impeccable harden

## Persona red flags
- Jordan: on phones the «ماذا نبني» ghost pill is the same size as the primary.
- Riley: Work is orphaned at one project; EN desktop mini site overlaps the last bubble's corner.
- Casey: the chat is gone after a pause; about 5,400 px page with the next WhatsApp CTA only at the bottom.
- Saudi referral owner: no confirmation it's the person the friend mentioned (no photo, small name); «راسلنا» is ambiguous; doubt peaks at Work.

## Minor observations
- «فاخر» survives in the landing-page service text and the meta description (leftover from the luxury direction).
- Steps 2–3 repeat the commitments below them.
- Desktop hero: about 180 px of empty purple above the headline; the «مثال توضيحي» label sits far from the chat.
- The hidden contact h2 makes visible heading levels skip one.

## Questions to consider
1. Why does the conversation stop at the hero instead of running through the page?
2. Would a real sign of Edres (photo or voice note) build more referral trust than the «ب» tile?
3. Is one unfinished project better shown as "selected work" or as "what we're building now"?
