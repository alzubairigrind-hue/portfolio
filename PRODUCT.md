# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro static output, with the Vue integration installed but no page using a Vue island, deployed to Cloudflare Pages at portfolio.binmahyub.uk.

## Users

Primary: small-business owners in Saudi Arabia looking to commission a website, arriving mostly through referrals. Secondary: recruiters evaluating Edres as a candidate. Both land on the same one-page site; the primary user's job is to decide quickly whether to trust this developer and message him.

## Product Purpose

A one-page personal portfolio for Edres Al-Zubairi (ادريس الزبيري), a web developer in Saudi Arabia. The product's single job is converting a visit into a WhatsApp message (`https://wa.me/966501374100`). Success is measured by that tap, not by time on page or scroll depth.

## Positioning

Arabic-first, teaching-rooted, plain-language technical trust: sites built to keep running after launch, explained without jargon, with the price known before any work starts. This directly answers the client worries the copy was drafted against: a cheap/template look, breaking on phones, being slow or invisible on Google, and unclear pricing.

## Operating Context

Saudi small-business referral market — most visitors arrive already primed by word of mouth, not cold search. WhatsApp is the native, expected contact channel in this market, not a fallback. Arabic is the default language and culturally primary; English exists for the recruiter audience, not as an equal-priority parallel track.

## Capabilities and Constraints

- Bilingual delivery is two separate static pages, not a runtime language toggle: Arabic at `/` (`dir="rtl"`), English at `/en/`.
- Copy is finalized in `COPY.md` and must be used verbatim, in both languages — not paraphrased during build.
- Project cards show name + short explanation + a "Demo" link (a copy hosted at `/work/<slug>/`) + a "GitHub" link only when the repo is actually public. No screenshots.
- Only one project ships at launch — "Adab Al-Furusia" (أدب الفروسية), an Arabic equestrian-academy site. Its live demo is at `/work/adab-al-furusia/`.
- RTL correctness is a hard constraint, not a nice-to-have: never split Arabic text into per-letter spans (breaks letter joining), use logical CSS properties throughout, mirror directional icons, and verify the rendered page in an actual browser at desktop and mobile widths — CSS review alone is not sufficient proof.

## Brand Commitments

- Name in the hero: Edres Al-Zubairi / ادريس الزبيري.
- **Bin Mahyub / بن مهيوب** (spelled with هـ) is the brand. For now it sits **quietly in the details**, not the headline: the domain, the email (the contact line reads «أو راسل بن مهيوب عبر البريد»), the «ب» mark beside the name, and the contact name in the hero chat. The hero name and the footer are Edres Al-Zubairi (decided 2026-09-24).
- Section headings never say "about us" or "we": the intro section has no visible heading, and «كيف يتم العمل» and «التزامات مكتوبة» are the titles. "We" remains in body sentences and buttons.
- Earlier framing: Edres is a freelancer building toward an agency. He works under this brand rather than his own name alone, and brings in specialists for every project to deliver the promised result. The page must not claim a registered agency, company, team or staff (decided 2026-09-24).
- Voice: "we", warm and confident; Modern Standard Arabic for the Arabic copy. "We" is honest because every project involves specialists.
- **Free consultation** (decided 2026-09-24): the contact section offers a free first WhatsApp chat about the client's idea, with no obligation and no call promised. It is real and must stay so; if it stops being offered, remove it from the page.
- Contact channels: WhatsApp (`https://wa.me/966501374100`) as primary, email `info@binmahyub.uk` as secondary. It forwards to Gmail through Cloudflare Email Routing; setup and sending guide in `EMAIL_SETUP.md`.

## Evidence on Hand

- `COPY.md` — the live copy, v1.1 (2026-09-24), with full Arabic and English copy for every section. `docs/archive/COPY_RESEARCH.md` and the unadopted `docs/archive/COPY_V2_DRAFT.md` are reference only.
- On the page: "building for the web since 2022", plus the written commitments (written price, approval before launch, the client owns the domain, hosting and access). No invented testimonials or numbers.
- Kept **off** the page at the owner's request (2026-09-24), though true: the MIS degree, first in class 2023, and teaching 50+ students. Don't reintroduce them without asking.
- One real project on hand: Adab Al-Furusia, an Arabic equestrian-academy website. Its live demo is available at `/work/adab-al-furusia/`; future projects must not be presented as live until their demos exist.
- `docs/archive/REFERENCES.md` — a set of Awwwards-winning developer/designer portfolios collected as background research. The user has explicitly rejected these as direct visual references; they inform later visual-world work only as context on category conventions to differentiate from, never as a template to copy.

## Product Principles

1. Built to keep running — durability after launch is the core promise, not a one-off delivery.
2. Plain-language, jargon-free explanation, rooted in the owner's teaching background.
3. Price clarity before work starts — WhatsApp is a qualification step, not a black box.
4. Evidence-only proof — commitments the client can hold us to, real (even if unfinished) project work, and the facts the owner chooses to show; never fabricated metrics or testimonials.
5. Arabic-first as a structural commitment — a dedicated page and correct RTL mechanics, not a cosmetic toggle bolted onto an English-first build.
