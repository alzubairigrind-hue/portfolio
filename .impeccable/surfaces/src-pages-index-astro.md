---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/en/index.astro"]
---

# Portfolio one-pager — `/` (Arabic, RTL) and `/en`

## Scope and mode

Persuade. One production page per language, both static, built from the same components. Copy in `COPY.md`, used verbatim. Arabic at `/` is the main page; `/en` exists for recruiters.

## Audience and job

Saudi small-business owners who arrive through a referral, mostly on a phone and already half-convinced. They decide one thing: whether to trust this developer and message him. Success is the WhatsApp tap. Email is a quiet fallback.

## Proof

Only the CV facts from COPY.md: first in class, MIS 2023; building for the web since 2022; taught 50+ students. Adab Al-Furusia is the one project, and it stays marked "coming soon" with no live link. No invented metrics or testimonials.

## Structure

Hero → About → Services → Work → Contact (Work moved after Services because its single project is unfinished).

- Hero: the promise headline is the largest text on screen; the WhatsApp button sits right under it in brass; the name is a smaller signature above; a quiet secondary link, «ماذا نبني» / "What we build", jumps to Services.
- About carries the trust facts. Services: three plain offers. Work: one card with a clearly visible "coming soon" state. Contact repeats WhatsApp and the clear-price promise.

## States and ranges

- Project card: coming-soon (now), live (later), GitHub link only when the repo is public. The layout must hold 1 card now and 3–5 later.
- Hover and focus states for WhatsApp, email and the language switch.
- The no-motion version (touch devices, prefers-reduced-motion) must look just as complete.

## Constraints

- RTL: logical CSS properties throughout, mirrored directional icons, no per-letter spans on Arabic text, and rendered checks at desktop and mobile widths.
- Astro static output; Vue islands only where motion needs them. Cloudflare Pages.
- Must not happen: a generic dark developer portfolio with a neon accent, template-looking layouts, or any claim the demo is live.

## Decided

- Type (2026-09-23): HT Moshreq Pro (HadiType, paid) for headings, in Arabic and in its Latin on `/en`. Alexandria (SIL OFL) for all body and UI text in both scripts.
- Moshreq licence: Edres buys the HadiType Webfont Licence; the Desktop Licence does not cover websites. No Moshreq files are committed until the licence is confirmed. Convert to WOFF2 or subset only if the licence terms allow it. Until then, headings use a fallback face and the layout must not depend on Moshreq's metrics.

- Hero secondary link (2026-09-23): «ماذا نبني» / "What we build", pointing to Services, not Work. COPY.md updated.
- Sadu motif (2026-09-23): العويرجان Uwairjan, a chain of stepped dot-pyramids. Ornament only: its meaning is never stated on the page (it rests on a single study). Source and caveats: `SADU.md`. Parked after round 2: not used on the page unless the user brings it back.
- Build prerequisite: draw the motif from a real photographed Uwairjan reference (e.g. the UNESCO element gallery for file 02158), not from text descriptions. Never ship the photo; it is a drawing reference only. Avoid tribal brands (wasm) and figurative motifs.
- Hero atmosphere (2026-09-23): texture and type only. No photography anywhere on the page.

## Reference picks (2026-09-23)

The first prototype (three heroes on flat walnut with thin Sadu bands) was rejected in full. A board of 14 real sites from outside developer portfolios was then answered by number; method and board in `REFERENCE_BOARD_METHOD.md`.

- Liked: Diriyah Hotels, Experience AlUla, Ithra, Red Sea Global (all four Saudi sites), Edgewood Studio, HadiType, Anderson & Sheppard.
- Hated: Fernweh, Studio Moe, Benchmark, 29LT, Aman, Toteme (pale, sparse, minimal) and A. Lange & Söhne (cold, precise dark).
- What the picks share: rich and immersive rather than quiet; warm and earthy (sand, dusk, wood, brass); Arabic-first and Saudi; bold colour or huge type welcome; the headline set inside a full-screen scene. "Calm" and sparse minimalism are out, and so is the flat, empty dark field of the first prototype.

## Reference picks, round 2 (2026-09-23)

A board of 11 texture- and type-led design projects (Behance), lettered A–K, in `reference-board/round-2.html`.

- Liked: F (huge white Arabic letters on dark crumpled fabric), J (black, huge Arabic and Latin type, small colour pops), K (plain warm charcoal, small copper logo).
- Not picked: all five Sadu and Najdi pattern cards (A–E), the calligraphy-on-wood poster (G), and both saturated colour fields (H, I).
- Resolved:
  - Texture: subtle dark material (fabric or grain), full-screen, not pattern.
  - Bold move: giant Arabic type.
  - Ground: near-black to warm charcoal. This replaces the walnut browns, since no dark pick was brown.
  - Accent: warm metal (copper/brass), optionally with small colour pops.
  - Sadu: left out of the page for now (no pattern card was picked). `SADU.md` stays for reference.

## Open decisions

1. Which of the three round-2 directions (Fabric / Poster / Copper) wins, from the second hero prototype.

## Direction contract

THESIS: A developer you can trust with your business, shown as an immersive dark scene carried by giant Arabic type on a subtle material texture, instead of photography or ornament. The page refuses both the sparse white minimal portfolio and the cold, precise dark tech look.

OWN-WORLD: A near-black to warm-charcoal ground with a subtle full-screen material texture (fabric or grain). Off-white type, a warm copper/brass accent reserved for the WhatsApp action, and at most small pops of colour. The Arabic headline at poster scale is the image. Components feel like fitted joinery: solid, precise, few.

STORY: The visitor lands inside a warm, familiar scene, reads the promise, sees the WhatsApp button, then reads the real facts (first in class, teaching, since 2022), the three services and an honest unfinished project, and messages knowing a clear price comes first.

FIRST VIEWPORT: A full-screen dark field with its material texture. The Arabic promise headline is set at poster scale and dominates the screen, and the headline's Moshreq kashida elongation is the typographic signature, used once, in the hero only. The copper/brass WhatsApp button sits directly under it, with the secondary link beside it. The name is a small sand signature at the top inline-start. On a phone the button is visible without scrolling.

FORM: Derived from the user's two reference-board rounds (round 1: rich, immersive, Arabic-first; round 2: F, J, K). No concept-seed roll; no seed key. Code-led, because no image generation is available.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
