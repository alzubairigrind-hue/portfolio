# HANDOFF: portfolio one-pager (read this first)

- **Written:** 2026-09-24, updated the same day after a second session. The next agent starts with no memory of it.
- **Project:** a one-page bilingual portfolio for **Edres Al-Zubairi**, a web developer in Saudi Arabia, with his brand **Bin Mahyub / بن مهيوب** kept in the details.
  - Arabic at `/` (RTL, default), English at `/en/`.
  - Astro 7 static, Alexandria font for the portfolio itself, deployed to Cloudflare Pages at **portfolio.binmahyub.uk**.
- **Status:** ready to launch. The latest critique scored 28/32, and the Adab Al-Furusia demo is live at `/work/adab-al-furusia/`. What's left is the owner's upload and the **Later** list.

---

## 1. How the owner works (binding)

- **The global protocol in `~/.claude/CLAUDE.md`, on every prompt:**
  1. Understand, and say what you understood.
  2. Rate the proposed solution.
  3. Suggest a better or simpler way if there is one.
  4. Plan (files and to-dos), then **wait for "go"** before touching files.
  5. Stay inside the plan's scope.
- **Short pieces, plain language.** He replies in short phrases ("go", "ok", "next", letters or numbers). "ok" and "next" usually mean go. Confirm your reading in one line when it's ambiguous.
- **Visual decisions come from real references and prototypes, never invented styles.** The method is in the vault: `~/02_Profession/03_Notes/Agents_Vault/Practices/Visual Direction by Reference Boards and Prototypes.md`.
  - Boards and prototypes are **local pages**, not hosted artifacts.
  - Give links as plain copyable text in code blocks.
- **Arabic is garbled in his terminal.** Discuss in English with the Arabic quoted. For long Arabic, render a readable local HTML page:
  ```
  pandoc … && sed … dir="auto"
  ```
  See `reference-board/copy-v2-draft.html` for the pattern.
- **Honesty is non-negotiable.** No invented numbers, testimonials, team, company or claims.
- **Heavy mechanical work may go to the `cheap` delegate lane** (OpenCode, `~/.config/delegate-skills/config.json`). Design-critical work is done directly.
- **Commits:** the orchestrator commits, with a `Co-Authored-By` trailer. Never push; there's no remote.

## 2. Where everything is

| What | Where |
|---|---|
| **Real site** | branch **`main`** in this folder. Dev server: `pnpm astro dev --port 4321` → http://localhost:4321/ and /en/ |
| **Prototypes (rounds 1–6)** | branch **`prototype/hero`**, checked out as a *git worktree* at `../005_myPortfolio-proto`. Dev server: `pnpm astro dev --port 4322` from there → http://localhost:4322/proto (index of every round and its verdict) |
| **Reference boards 1–3** | `reference-board/` (git-excluded via `.git/info/exclude`; third-party screenshots, never commit). Archive: `../005_myPortfolio-archive/reference-board-2026-09-23.tar.gz` |
| **Upload folder** | `dist/` (run `pnpm build` on `main` first) |

**Code map (`src/`):**
- `pages/index.astro` (`/`) and `pages/en/index.astro` (`/en/`) are one-line wrappers around `components/OnePage.astro`, which holds the section order (Hero → About → Services → Work → How the work is done → Contact → footer). Change the order there, once.
- `components/`: one file per section, plus the shared pieces `WhatsAppIcon.astro`, `LanguageSwitch.astro` and `ProjectCard.astro`. The hero chat playback script lives in `Hero.astro`; the page-wide scroll reveal is in `layouts/Base.astro`.
- `content/copy.ts`: every visible string, including the «ب»/B mark and the «عرض حي»/Live demo label, plus the `projects` list. It must match `docs/COPY.md` verbatim.
- `shared/i18n.ts`: a leaf module (imports nothing from the app) with the `Lang` type, `dirFor`, `pathFor`, `otherLang` and `localizeDigits`. Use it instead of hard-coding `/en/`, `rtl` or Arabic-Indic digits.
- `styles/`: `global.css` (tokens, buttons, sections, reveals) and `fonts.css`.

**Key documents in the root:**
- `PRODUCT.md`: audience, purpose, brand placement, honesty rules, facts kept off the page.
- `docs/COPY.md`: the **live copy, verbatim source**. Every visible string in `src/content/copy.ts` must match it character for character. When you change copy, change both.
- `DESIGN.md` plus `.impeccable/design.json`: the shipped design system.
- `.impeccable/surfaces/src-pages-index-astro.md`: the design brief and full decision history. Read or write it with `~/.claude/skills/impeccable/scripts/impeccable surface-brief read|write src/pages/index.astro …`.
- `.impeccable/critique/2026-09-24T11-28-32Z__src-pages-index-astro.md`: the **latest critique, 28/32**, checked at 8 screen widths (320–1920) in both languages. Its P1s are fixed; its remaining points are optional. Trend: 25 → 27 → 28.
- `docs/DEPLOY.md`: the owner's step-by-step Cloudflare Pages Direct Upload guide.
- `docs/EMAIL_SETUP.md`: receiving is live (info@binmahyub.uk goes to Gmail); Part B, sending, is for later.
- `docs/archive/COPY_RESEARCH.md`: 18 agency sites, reference only. `docs/archive/COPY_V2_DRAFT.md`: **not adopted**, reference only.
- `docs/archive/REFERENCE_BOARD_METHOD.md`, `docs/archive/SADU.md` (the Sadu motif, parked), `docs/archive/REFERENCES.md` (rejected Awwwards references).
- `notes.md`: **the owner's own empty file. Leave it untouched and uncommitted.**

## 3. Final decisions (don't reopen without the owner)

- **Name:** the hero name and footer are **Edres Al-Zubairi / ادريس الزبيري** (spelled «ادريس» with no hamza by the owner's choice; don't "correct" it), «مطوّر مواقع · المملكة العربية السعودية». **Bin Mahyub** appears only in the details: the hero chat's contact name, the «ب» mark tile, and the email line «أو راسل بن مهيوب عبر البريد: info@binmahyub.uk». Never claim an agency, company or team.
- **Voice:** no section *heading* says "we" or "about us". "We" stays in body sentences and buttons.
- **About:**
  - No visible heading; the statement is the section title: «كل موقع نبنيه يبدأ بسؤال واحد: كيف سيكبر معك ويسهل الاعتناء به؟»
  - The paragraph opens with an inline purple pill «منذ 2022» / "Since 2022", then: «ونحن نضع لكل موقع أساسًا متينًا يسهل البناء عليه لاحقًا والاعتناء به، من صفحة واحدة إلى متجر متكامل. نستعين بمختصين إذا استدعى المشروع ذلك، ونشرح كل شيء بوضوح، بلا مصطلحات معقدة، يهمنا أن تعرف ما الذي تدفع مقابله ولماذا.»
  - **Hidden on purpose, though true:** the MIS degree, first in class 2023, teaching 50+ students.
- **Section titles:** «كيف يتم العمل» / "How the work is done" (5 steps); «التزامات مكتوبة» / "Commitments in writing" (written price, approval before launch, the site in the client's name).
- **Contact:**
  - The heading is the owner's colloquial «عندك فكرة مشروع؟» (the rest of the page is formal Arabic).
  - It offers a **free consultation, which is a free WhatsApp chat only, with no call promised**.
  - The button «اطلب استشارتك المجانية» opens WhatsApp pre-filled with «مرحبًا، أرغب في استشارة مجانية لمشروعي». The hero button «راسلنا على واتساب» pre-fills «مرحبًا، أرغب في التحدث عن موقع لنشاطي». Both pills carry the WhatsApp glyph.
- **Design:**
  - **C2 deep purple** (#2b1463), pill buttons, 28px cards.
  - **5A hero:** an animated WhatsApp chat that turns into a live mini site, labelled «مثال توضيحي».
  - **6B middle:** service cards with small moving drawings (phone, store, shield), and the project in a browser-window card.
  - The How-we-work path fills and lights up on scroll.
  - **Commitments panel:** the dark purple panel stays. It may get **small enhancements only, never a redesign** (a chat-bubble redesign, round 7A, was rejected on sight and reverted). Round 8C is live: staggered pop-in, self-drawing ticks with a lilac ring, and column dividers on desktop.
  - **Hero chat:** plays once when in view and holds; replays on leaving view, tap, or the «إعادة التشغيل» / "Replay" pill.
  - **Page order:** Hero → About → Services → Work («من أعمالنا» / "Selected work", full-width) → How the work is done + commitments → Contact. A language pill sits in the hero's name row as well as the footer.
  - **Springy "bubbly" motion everywhere is intentional; keep it.** Everything is off under reduced motion.
- **Font:** The portfolio itself uses Alexandria (self-hosted, OFL). The static demo under `public/work/adab-al-furusia/` ships its own HT Moshreq Pro and IBM Plex Sans Arabic fonts.
- **Projects:** Adab Al-Furusia is live at `/work/adab-al-furusia/`. Its card is card-sized (about ⅓ width on desktop) with an abstract drawn preview (round 9C). **Keep the card-sized layout:** more projects will sit beside it in the row (the owner rejected a wide-screen relayout, round 10).

## 4. Next steps

**Done on 2026-09-24 (second session, continued):** round 9C (card-sized project card with a drawn preview); a third critique at all screen sizes, 28/32; fixes for its P1s (no sideways scroll at 320 px, the mini site in flow under the phone at 820–1100 px) and the store drawing's purple-only tiles; round 10 rejected. Heavy lifting went through the `codex-delegate` skill, with every result checked here before commit.

**Done earlier the same day:** WhatsApp glyphs and hero pre-fill; the chat plays once; Work retitled and full-width; readability fixes (label, email target, 52ch measure, «فاخر» removed); rounds 7 (rejected) and 8 (8C shipped) on the prototype worktree; `/impeccable polish` (hero capped at 52rem, 44 px language switch, SVG replay icon); a second critique, 27/32; its follow-up (Work moved before How-we-work, hero language pill, chat chips as attachments, English contact CTA on one line); `dist/` rebuilt.

1. **Run `pnpm build` on `main`, then upload `dist/`** following `docs/DEPLOY.md` from step 5.
2. **Optional, from the 27/32 critique** (ask before doing any): the steps «سعر مكتوب ونطاق واضح» and «التصميم والبناء» restate commitments 1–2; the hero sub-line says «صفحات هبوط ومتاجر ووردبريس» while the service is «مواقع ووردبريس ومتاجر ووكومرس»; «ماذا نبني» is a full-size second pill on phones; the English mini site brushes the last chat bubble's corner (the owner accepted this).

**Adding a project** (the owner will add several):
- Add an entry to the `projects` array in `src/content/copy.ts`: `slug`, `name` {ar, en}, `description` {ar, en}, `status` (`'coming-soon'` or `'live'`), `statusLabel` {ar, en}, `repoUrl` (a URL only if the repo is public, else `null`).
- Add the same name, description and label verbatim to `docs/COPY.md` under «من أعمالنا» / "Selected work", and add the new `slug` to the copy check's allowed data values.
- `'live'` shows a «عرض حي» / "Live demo" button to `/work/<slug>/`, so that demo page must exist first (PRODUCT.md: a copy hosted on this site). For a new project, keep it `'coming-soon'` until then; Adab Al-Furusia is already live.
- With more than one project, consider retitling the section (for example back to «أعمال مختارة» / "Selected work"); ask the owner.
- Run the checks in section 5, then rebuild `dist/`.

**Later:**
- sending email (`docs/EMAIL_SETUP.md` Part B)
- a WhatsApp Business name
- a real logo to replace the «ب» placeholder
- Adab Al-Furusia going live
- after launch, update the vault method note's status line with how the first project went

## 5. Checks to run after any change

- **Build:** `pnpm build` on `main`.
- **Copy check:** every string value in `src/content/copy.ts` must appear verbatim in `docs/COPY.md`. Only the data values `adab-al-furusia`, `coming-soon`, `live` and the chat's `me`/`them` tags are allowed to be missing. The previous session did this with a small Node script (read `docs/COPY.md`, walk the exported `copy`/`projects`/`links` objects, and report misses); recreate it if needed.
- **Visual:** screenshots of `/` and `/en/` at 1440×900 and 390×844. Wait about 7 s for the hero chat. Scroll to trigger reveals. **Measure the rendered DOM, not just the CSS.**

## 6. Gotchas hit in this project

- **The Astro dev server sometimes serves stale component styles** after a component rewrite. If computed styles look wrong but `dist` has the CSS, restart the dev server.
- **`cp` is aliased to `cp -i`,** so use `command cp -f`. Use `ffmpeg -nostdin` inside loops.
- **Don't kill a server with `pkill -f "<pattern>"`** from a shell whose own command line contains that pattern; it kills itself. Use `pgrep` to get the PID, then `kill <PID>`.
- **The Playwright MCP code runner has no `fs` or `require`.** Download files with `curl` instead. Its browser sometimes closes mid-run; just retry.
- **The Playwright MCP browser profile can be locked** ("Browser is already in use"). Drive a headless browser from a Node script instead: `playwright-core` from `~/.npm/_npx/e41f203b7505f1fb/node_modules/playwright-core` with `executablePath` set to `~/.cache/ms-playwright/chromium-1234/chrome-linux*/chrome`.
- **Root docs used to vanish when switching branches.** After committing docs on `main`, merge `main` into `prototype/hero`, inside the worktree.
- **Arabic spelling:** watch the hamzas (إذا، أن، إلى); they're a visible trust signal in this market. Never split Arabic below the word level in animations; letter joining breaks.
- **Servers left running at handoff:** the dev servers on :4321 (`main`) and :4322 (prototype worktree). They're safe to stop and restart with the commands above.
