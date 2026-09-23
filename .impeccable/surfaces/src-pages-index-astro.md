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

- Type (revised 2026-09-23): Alexandria (SIL OFL, self-hosted) for headings and body in both scripts. HT Moshreq Pro was chosen earlier for the luxury direction, then dropped when round 3 settled on playful and rounded; no licence is bought.

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

## Prototype round 2 verdict (2026-09-23)

The user first picked C · Copper (warm charcoal, faint grain, centred restrained headline, copper accents), then rejected it on sight. Record: branch `prototype/hero`, commit `085c976`. Their reasons, which now bind the direction:

1. The headline was too big.
2. The colouring didn't feel techie: charcoal and copper read as craft or luxury, not technology.
3. There was no motion.
4. There were no scroll effects.
5. The buttons weren't "bubbly": flat rectangles instead of rounded, soft, lively controls.

Overall it looked static. Still standing from earlier rounds: dark grounds are fine, Arabic-first, no photography, no sparse pale minimalism.

## Reference picks, round 3 (2026-09-23)

A board of 14 live tech sites recorded as scroll videos, in `reference-board/round-3.html`.

- Liked: 1 Tabby, 2 Tamara, 5 Zid (Saudi, Arabic), 8 Raycast, 13 Spline, 14 LottieFiles.
- Not picked: Salla, Foodics, Linear, Vercel, Framer, Stripe, Resend, Arc.
- What the picks share:
  - Playful and rounded over precise: pill buttons, soft cards, rounded panels. Every "serious tech" site was passed over.
  - Vivid colour, not monochrome.
  - Motion carried by playful objects: floating soft 3D shapes, glowing forms, animated characters, and cards that animate in on scroll.
  - Saudi fintech and e-commerce feel.
- Consequence for the no-photos rule: animated shapes (CSS/SVG, no heavy 3D runtime) do the atmospheric job photography does on those sites.
- Type flag: the picks all use bold, rounded, modern Arabic sans. HT Moshreq Pro (calligraphic, chosen for the earlier luxury direction) may no longer fit, so hold the licence purchase until the direction settles.

## Prototype round 3 verdict (2026-09-23)

All rounds are viewable on branch `prototype/hero` at `/proto` (round 3 at `/proto/round-3`, rebranded to Bin Mahyub in `0e55078`).

- **C · Playful light wins**: a light ground; rounded white cards that pop in on scroll; glossy black pill WhatsApp button with spring hover; playful animated characters that bob, blink and follow the cursor; headline rising word by word; brand mark tile beside بن مهيوب.
- **Except its colouring:** the mint-green ground is "too hype for an agency". Everything else in C stays.
- **Heading typeface:** Alexandria (SIL OFL) for everything. HT Moshreq Pro is dropped: its calligraphic character belongs to the abandoned luxury direction, and no licence will be bought.

## Open decisions

1. C's colour palette: a calmer, agency-credible ground and accent set that keeps C's playfulness. Choose from references or palette variants of C, not invented from adjectives.

## Direction contract

THESIS: A developer you can trust with your business, shown as a lively, modern tech page: Arabic-first, alive with motion and scroll effects, friendly rounded controls. The page refuses the sparse white minimal portfolio, the static poster, and the craft/luxury palette. (Pending round 3; revise from the picks.)

OWN-WORLD: Pending round 3. Known so far: dark grounds are welcome, the palette must read as technology rather than craft, buttons are rounded and soft ("bubbly"), headline size is moderate rather than poster scale, and motion and scroll effects are expected, not optional (still off under prefers-reduced-motion).

STORY: The visitor lands inside a warm, familiar scene, reads the promise, sees the WhatsApp button, then reads the real facts (first in class, teaching, since 2022), the three services and an honest unfinished project, and messages knowing a clear price comes first.

FIRST VIEWPORT: Pending round 3. Fixed so far: the Arabic promise headline at a confident but moderate size (not poster scale), the WhatsApp button as a rounded, lively primary control directly under it with the secondary link beside it, and visible motion on load. The name is a small sand signature at the top inline-start. On a phone the button is visible without scrolling.

FORM: Derived from the user's reference-board rounds (round 1: rich, immersive, Arabic-first; round 2: F, J, K; round 3: pending) and the round-2 prototype verdict. No concept-seed roll; no seed key. Code-led, because no image generation is available.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
