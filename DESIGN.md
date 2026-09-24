---
name: Bin Mahyub
description: Arabic-first one-page studio site; a deep purple night scene, bubbly pill controls, and motion that shows the real WhatsApp-to-website process.
colors:
  hero-ground: "#2b1463"
  brand: "#2b1463"
  brand-2: "#4a2aa0"
  lilac: "#b69cff"
  lilac-soft: "#ddd2ff"
  hero-ink: "#ffffff"
  hero-ink-2: "#d4caf5"
  page: "#ffffff"
  ink: "#1a1233"
  ink-2: "#4a4263"
  card: "#f6f3ff"
  card-line: "rgb(43 20 99 / 0.07)"
typography:
  display:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 4.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.32
    letterSpacing: "0"
  display-latin:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.8vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.18
    letterSpacing: "0"
  headline:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.3rem)"
    fontWeight: 800
    lineHeight: 1.4
  headline-panel:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.35
  lead:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 2.2vw, 1.6rem)"
    fontWeight: 700
    lineHeight: 1.6
  title:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 800
    lineHeight: 1.5
  body:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.85
  label:
    fontFamily: "Alexandria, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
rounded:
  card: "28px"
  pill: "999px"
  tile: "30%"
spacing:
  pad: "clamp(1.25rem, 5vw, 5rem)"
  section-block: "4.5rem"
  card: "1.75rem"
  grid-gap: "1.25rem"
  measure: "52ch"
  container: "72rem"
components:
  button-light:
    backgroundColor: "linear-gradient(180deg, #ffffff, #ece6ff)"
    textColor: "{colors.brand}"
    rounded: "{rounded.pill}"
    padding: "0 2rem"
    height: "3.4rem"
  button-brand:
    backgroundColor: "linear-gradient(180deg, #4a2aa0, #2b1463)"
    textColor: "{colors.hero-ink}"
    rounded: "{rounded.pill}"
    padding: "0 2rem"
    height: "3.4rem"
  button-ghost:
    backgroundColor: "rgb(255 255 255 / 0.1)"
    textColor: "{colors.hero-ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.6rem"
    height: "3.4rem"
  button-ghost-hover:
    backgroundColor: "rgb(255 255 255 / 0.16)"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  panel-purple:
    backgroundColor: "{colors.hero-ground}"
    textColor: "{colors.hero-ink}"
    rounded: "{rounded.card}"
    padding: "clamp(1.5rem, 3vw, 2.25rem)"
  badge-coming-soon:
    backgroundColor: "{colors.page}"
    textColor: "{colors.brand}"
    rounded: "{rounded.pill}"
    padding: "0.3rem 0.9rem"
  language-switch:
    backgroundColor: "{colors.card}"
    textColor: "{colors.brand}"
    rounded: "{rounded.pill}"
    padding: "0 1.1rem"
    height: "2.5rem"
  step-number:
    backgroundColor: "linear-gradient(180deg, #4a2aa0, #2b1463)"
    textColor: "{colors.hero-ink}"
    rounded: "50%"
    size: "2.6rem"
  brand-tile:
    backgroundColor: "linear-gradient(150deg, #ffffff, #d9ceff)"
    textColor: "{colors.brand}"
    rounded: "{rounded.tile}"
    size: "2.75rem"
---

# Design System: Bin Mahyub

## Overview

**Creative North Star: "The Evening Chat"**

The page is a conversation that happens after hours: a deep purple scene where a business owner sends a WhatsApp message and a website comes back. Everything in the system supports that feeling of a friendly, modern tech studio you can simply message. The hero is the night, the white page below is the daylight explanation, and the purple returns in panels exactly where trust is asked for (written commitments, the final call to message).

It is Arabic-first and right-to-left by default, with English as a mirrored twin built from the same components. Density is generous and calm on white, lively in the hero. Controls are round, soft and springy ("bubbly"); cards are soft lavender with large corners; motion is expected, not decorative garnish, and it disappears completely under reduced motion without the page looking unfinished.

The world was chosen through reference boards and five prototype rounds. Rejected on sight and still binding: the sparse pale minimal portfolio, the static poster, the charcoal-and-copper craft palette, the generic dark developer portfolio with a neon accent, the soft purple radial glow of stock AI heroes, and decorative characters unrelated to the offer. No photography anywhere.

**Key Characteristics:**
- One deep purple (#2b1463) carries the hero, the brand buttons and the two trust panels; lilac is its light companion.
- A single rounded Arabic-and-Latin sans (Alexandria) at heavy weights for all headings.
- Pill buttons and 28px cards; nothing on the page has a sharp corner.
- Spring easing on anything the visitor touches or that pops in.
- Hero art demonstrates the real service and is always labelled as an illustrative example.
- Logical properties everywhere; the RTL and LTR pages mirror cleanly.

## Colors

A two-register palette: a saturated deep purple night for scenes and calls to action, and a white page with lavender-tinted surfaces for reading.

### Primary
- **Night Purple** (`hero-ground` / `brand`): the hero ground, the Commitments and Contact panels, the brand button's base, chips, avatar, step numbers when lit, text on light buttons, and the browser theme colour. It is the one colour of the brand.
- **Violet Lift** (`brand-2`): the top stop of every purple gradient (brand button, step numbers), the start of the How-we-work progress line, and the focus ring on white sections.

### Secondary
- **Lilac** (`lilac`): the focus ring on purple grounds, the dashed border and dot of the coming-soon badge, the end of the progress line. Lilac is for purple grounds; on white it is too faint for a focus ring.
- **Lilac Mist** (`lilac-soft`): the client's own chat bubbles in the hero demo, the unfilled progress track, the idle step-number ring, link hover on purple.

### Neutral
- **Paper White** (`page`): the page ground below the hero; also the ground of badges and the idle step numbers.
- **Moonlit Ink** (`hero-ink`) and **Soft Lavender Ink** (`hero-ink-2`): headline and body text on purple grounds respectively.
- **Aubergine Ink** (`ink`): headings and body text on white.
- **Dusk Grey** (`ink-2`): paragraph text in sections and the footer.
- **Lavender Card** (`card`) with **Card Hairline** (`card-line`): the fill and 1px edge of every card and of the language switch.

### Named Rules
**The One Purple Rule.** The brand has one hue. Deep purple grounds, violet-to-purple gradients and lilac tints are all the same family; no second accent hue enters the system.

**The Night Returns Rule.** Purple grounds appear only in the hero and in panels that ask for trust or action (commitments, contact). Ordinary content sits on white or lavender.

**The Ring Matches Its Ground Rule.** Focus rings are lilac (3px, 3px offset, pill-rounded) on purple grounds and Violet Lift on white, so the ring always clears 3:1.

## Typography

**Display Font:** Alexandria (with system-ui, sans-serif)
**Body Font:** Alexandria (with system-ui, sans-serif)

**Character:** One variable, rounded, geometric sans that speaks Arabic and Latin with the same voice: heavy and friendly in headings (800), plain and open in body (400 at a tall 1.85 line height for Arabic). Self-hosted as two subset files (Arabic and Latin), weight range 100–900.

### Hierarchy
- **Display** (800, `display`): the hero promise only; max 15ch in Arabic. English uses `display-latin` (tighter line height 1.18, max 22ch) because Latin needs less vertical room.
- **Headline** (800, `headline`): section headings; `headline-panel` is the larger heading inside the Contact panel.
- **Lead** (700, `lead`): the one heading-font sentence that opens About.
- **Title** (800, `title`): card and step titles.
- **Body** (400, `body`): paragraphs, capped at 52ch; hero lede 1.05–1.2rem at 42ch in Soft Lavender Ink.
- **Label** (700, `label`): badges, chips, the language switch, the owner's role line (400) under his name.

### Named Rules
**The Whole Word Rule.** Headline animation splits on spaces only. Never wrap individual Arabic letters in spans: it breaks letter joining.

**The Moderate Headline Rule.** The headline is confident, not poster scale (tops out at 4rem). The user rejected a larger one.

**The No Tracking Rule.** Letter spacing stays 0 on headings; Arabic must never be tracked.

## Layout

A single centred column: sections cap at 72rem with fluid inline padding (`pad`, 1.25rem to 5rem) and 4.5rem block padding, stacked in a grid with a 1.1rem gap. Paragraphs cap at 52ch (about 57–63 characters per line in Alexandria, since `ch` is narrower than the average Arabic letter).

Page order: Hero → About → Services → Work → How the work is done (with the commitments) → Contact, so the commitments run straight into the ask. The hero's signature row also carries the language switch pill at its inline-end (translucent white on purple, 44px), mirroring the footer one.

The hero fills the first screen (100svh, capped at 52rem so tablets in portrait keep no empty band above the headline) as a two-column grid (1.05fr text, 0.95fr art) with the brand signature (tile plus name and role) spanning the top at inline-start. Below 48rem it becomes one column: signature, text, then the phone with the mini site stacked beneath it at the inline-end, and the illustrative label under both. The WhatsApp button stays inside the first viewport on phones.
Between 48rem and 69rem the mini site sits in flow under the phone (as on phones) so it never covers a chat bubble, and below 22rem the hero name row may wrap.

Card grids use auto-fit or auto-fill with `minmax` (Services 16rem; Work `min(100%, 18rem)` in auto-fill so one card stays card-sized and 3–5 later fill rows). Commitments use auto-fit at 15rem, and from 60rem wide sit in three columns split by thin lilac dividers (round 8C). How-we-work is a numbered list capped at 46rem with a vertical rail on the inline-start.

**The Logical Properties Rule.** Every margin, padding, inset, size and corner is written with logical properties (`inline`, `block`, `start`, `end`), so the Arabic and English pages mirror from one stylesheet. Physical left/right is not used.

## Elevation & Depth

A soft, lifted hybrid. Surfaces are tinted (lavender on white, purple on white), and every raised object gets a long, low-opacity drop shadow with a large negative spread, so it floats without a visible edge. Buttons and tiles add an inset bottom shade (and the brand button an inset top highlight) for a glossy, pressable look. The hero ground adds depth through a faint fractal-noise grain (7% opacity, overlay blend), never through a glow.

### Shadow Vocabulary
- **Card float** (`box-shadow: 0 18px 40px -28px rgb(0 0 0 / 0.3)`): every card at rest.
- **Button gloss, light** (`inset 0 -3px 0 rgb(43 20 99 / 0.12), 0 14px 30px -12px rgb(0 0 0 / 0.55)`): the white pill on purple.
- **Button gloss, brand** (`inset 0 2px 0 rgb(255 255 255 / 0.18), inset 0 -3px 0 rgb(0 0 0 / 0.2), 0 14px 30px -12px rgb(43 20 99 / 0.6)`): the purple pill on white.
- **Panel float** (`0 30px 60px -36px rgb(43 20 99 / 0.8)` commitments; `0 40px 80px -40px rgb(43 20 99 / 0.9)` contact): purple panels cast a purple shadow.
- **Device float** (`0 40px 80px -30px rgb(0 0 0 / 0.6)`): the hero phone and mini site.

### Named Rules
**The No Glow Rule.** Depth on purple comes from grain and cast shadows. Radial glows behind the hero were rejected as a stock AI trope.

## Shapes

Everything is round. Buttons, chips, badges and the language switch are full pills (999px). Cards and purple panels use a large 28px corner. The brand tile and chat avatar are squircle-like tiles (30% radius); step numbers and ticks are circles. Chat bubbles are 16px with one tucked corner (4px) on the speaker's side, set with logical corner properties so the tail mirrors with direction. The only hairline is the card's 1px lavender edge; the coming-soon badge uses a dashed lilac border to read as "not yet".

## Components

### Buttons
Bubbly, glossy and springy: the user's explicit choice.
- **Shape:** full pill, min height 3.4rem, 800 weight.
- **Light** (`button-light`): white-to-lavender gradient with Night Purple text. The primary WhatsApp action on purple grounds (hero, contact panel).
- **Brand** (`button-brand`): violet-to-purple gradient with white text. The primary action on white (live demo on project cards).
- **Ghost** (`button-ghost`): 10% white on purple, 700 weight; the quiet secondary hero link.
- **Hover / Active:** scale to 1.06 (ghost 1.05) and back to 0.96 on press, 0.35s on the spring curve. Focus per the Ring Matches Its Ground Rule.

### Cards / Containers
- **Corner Style:** 28px.
- **Background:** Lavender Card with a 1px Card Hairline border.
- **Shadow Strategy:** Card float.
- **Internal Padding:** 1.75rem.
- **Hover:** only cards containing a link scale (1.02, spring). A card that grows but is not clickable misleads.

### Purple Panel
The night ground reused as a block: Night Purple fill, white headings, Soft Lavender Ink body, large corner, purple cast shadow. Used for the written-commitments block and the contact call to action. In the commitments block (round 8C, 2026-09-24) each promise has a white circle tick (2.4rem, inline SVG check) with a soft lilac ring; on wide screens thin lilac dividers split the three columns; on reveal the promises pop in one by one with the spring and each tick draws itself (off under reduced motion). Buttons inside use the Light variant; focus rings inside revert to lilac.

### Chips and Badges
- **Chat chip:** small Night Purple pill with white 700 text inside chat bubbles (price, domain).
- **Coming-soon badge:** white pill, dashed lilac border, lilac dot, Night Purple text. The honest state of an unfinished project.

### Navigation
There is no top navigation. The footer carries the copyright and the language switch: a lavender pill (`language-switch`) with Night Purple text that scales to 1.05 on hover, marked with the target language and direction.

### Hero WhatsApp Demo (signature)
A phone-shaped card (330px, 34px corners, pale lavender body) holding a WhatsApp-style chat that plays once when well in view and holds its final state (it replays after leaving the screen, on a tap, or via the Replay pill beside the label): the client's messages (Lilac Mist) on the end side, the studio's replies (white) on the start side, a three-dot typing indicator, chips that read as attachments (Lilac Mist tint, Night Purple text, not filled buttons), then a small browser-window mini site that pops in slightly rotated. Messages enter with a spring rise; the mini site pops. It is decorative (`aria-hidden`) and always captioned «مثال توضيحي» / "Illustrative example".

### Brand Signature
The «ب» (Latin "B") tile, a white-to-lilac gradient squircle with Night Purple letter at 900, sits beside the owner's name (800) and a role line in Soft Lavender Ink. The tile is a placeholder mark for Bin Mahyub until a real logo exists.

### About Statement and Since Badge
The intro section has no visible "About" heading. Its lead question *is* the section heading (an `h2` labelling the section), set as a statement: 800 weight, clamp(1.6rem, 3.2vw, 2.6rem), Night Purple, about 20ch (26ch in English). The paragraph opens with an inline brand-gradient pill, «منذ 2022» / "Since 2022", in the heading face at 800. The sentence continues straight from it («ونحن نضع لكل موقع…» / "we've been giving every site…"), so the pill is part of the line, never a floating label. It never wraps (`white-space: nowrap`), and the paragraph's line height is 2.1 to seat it. Chosen in prototype round 6 (6B).

### Service Drawings (signature)
Each service card opens with a 150px lavender-gradient art well holding a small drawing built from CSS/SVG, one per service:
- **Landing pages:** a phone outline that bobs, its button pulsing.
- **WordPress & WooCommerce:** a store tile of four gradient product blocks with a bouncing cart badge (Arabic-Indic «٢» on `/`, "2" on `/en`).
- **Maintenance:** a purple shield with a white check inside a slowly turning dashed lilac ring.

The drawings are decorative (`aria-hidden`) and stop under reduced motion. Chosen in prototype round 6 (6B). They answer the review finding that the page below the hero read as a template.
The store tiles use lilac-to-purple tones only; no orange, pink or mint.

### Project Browser Card
A project is shown inside a browser window: 22px corners, a lavender bar with three dots, the coming-soon badge pushed to the bar's inline-end, and the name and description in the body. A live project adds a Brand button to `/work/<slug>/`; GitHub appears only when the repo is public. Cards sit in an auto-fill grid (min 18rem), so 3–5 projects lay out without redesign.
Between the top bar and the text is a 120px lavender-gradient well (16px corners) holding two lilac-mist bars (70% and 45%) and a small Night Purple pill; it is decorative (`aria-hidden`), abstract, and never a screenshot (chosen in prototype round 9, 9C, 2026-09-24).

### How-we-work Path (signature)
Numbered steps with Arabic-Indic digits on the Arabic page. A 2px rail runs down the inline-start; a violet-to-lilac line fills it as the visitor scrolls, and each step number turns from an idle white circle (lilac ring) to the purple gradient with a spring bump when the line reaches it. Under reduced motion the path is fully filled and all steps lit.

### Motion
- **Spring** (`cubic-bezier(0.34, 1.56, 0.64, 1)`): buttons, card hover, pop-ins, chat messages, step bumps.
- **Out** (`cubic-bezier(0.16, 1, 0.3, 1)`): rises, reveals, shadow transitions.
- **Headline rise:** each word rises 0.9s, staggered 70ms; lede and actions follow at 0.75s and 0.9s.
- **Scroll reveal:** elements rise 32px and scale from 0.97 over 0.8s, siblings staggered 80ms. Hidden only when JavaScript runs, so the page reads without it.
- **Reduced motion:** every animation and transition is off, reveals show at rest, the typing indicator is hidden, and the chat shows its final state.

## Do's and Don'ts

### Do:
- **Do** keep every hue in the purple family: Night Purple, Violet Lift, Lilac, Lilac Mist, and lavender tints.
- **Do** use pill shapes for every control and 28px corners for every card and panel.
- **Do** use the spring curve for anything touched or popping in; this bounce is the chosen character, not a defect.
- **Do** write layout with logical properties and check both the Arabic and English renders.
- **Do** animate Arabic text by whole words only.
- **Do** make the reduced-motion page look complete: final states visible, nothing waiting on an animation.
- **Do** label any mocked product, chat or site as an illustrative example.
- **Do** switch the focus ring to Violet Lift on white and lilac on purple.

### Don't:
- **Don't** add photography; the hero is texture, type and the demo.
- **Don't** put a radial glow behind the hero or decorative characters in it.
- **Don't** introduce a second accent hue, copper/brass/charcoal, or a neon-on-dark developer palette.
- **Don't** use sharp-cornered or flat rectangular buttons.
- **Don't** scale a card on hover unless it contains a link.
- **Don't** set the headline at poster scale or track Arabic letters.
- **Don't** show invented proof: no fake metrics, testimonials or live-looking demos without the illustrative label.
