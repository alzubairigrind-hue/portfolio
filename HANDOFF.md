# HANDOFF: portfolio one-pager (read this first)

- **Written:** 2026-09-24, at the end of a long session. The next agent starts with no memory of it.
- **Project:** a one-page bilingual portfolio for **Edres Al-Zubairi**, a web developer in Saudi Arabia, with his brand **Bin Mahyub / بن مهيوب** kept in the details.
  - Arabic at `/` (RTL, default), English at `/en`.
  - Astro 7 static, Alexandria font only, deploys to Cloudflare Pages at **portfolio.binmahyub.uk**.
- **Status:** about 90% done. The real page is built, reviewed and committed. What's left is below under **Next steps**.

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

**Key documents in the root:**
- `PRODUCT.md`: audience, purpose, brand placement, honesty rules, facts kept off the page.
- `COPY.md`: the **live copy, verbatim source**. Every visible string in `src/content/copy.ts` must match it character for character. When you change copy, change both.
- `DESIGN.md` plus `.impeccable/design.json`: the shipped design system.
- `.impeccable/surfaces/src-pages-index-astro.md`: the design brief and full decision history. Read or write it with `~/.claude/skills/impeccable/scripts/impeccable surface-brief read|write src/pages/index.astro …`.
- `.impeccable/critique/2026-09-24T08-16-06Z__src-pages-index-astro.md`: the **latest critique, 25/32**. Its issues are the next steps.
- `DEPLOY.md`: the owner's step-by-step Cloudflare Pages Direct Upload guide.
- `EMAIL_SETUP.md`: receiving is live (info@binmahyub.uk goes to Gmail); Part B, sending, is for later.
- `COPY_RESEARCH.md`: 18 agency sites, reference only. `COPY_V2_DRAFT.md`: **not adopted**, reference only.
- `REFERENCE_BOARD_METHOD.md`, `SADU.md` (the Sadu motif, parked), `REFERENCES.md` (rejected Awwwards references).
- `notes.md`: **the owner's own empty file. Leave it untouched and uncommitted.**

## 3. Final decisions (don't reopen without the owner)

- **Name:** the hero name and footer are **Edres Al-Zubairi / ادريس الزبيري**, «مطوّر مواقع · المملكة العربية السعودية». **Bin Mahyub** appears only in the details: the hero chat's contact name, the «ب» mark tile, and the email line «أو راسل بن مهيوب عبر البريد: info@binmahyub.uk». Never claim an agency, company or team.
- **Voice:** no section *heading* says "we" or "about us". "We" stays in body sentences and buttons.
- **About:**
  - No visible heading; the statement is the section title: «كل موقع نبنيه يبدأ بسؤال واحد: كيف سيكبر معك ويسهل الاعتناء به؟»
  - The paragraph opens with an inline purple pill «منذ 2022» / "Since 2022", then: «ونحن نضع لكل موقع أساسًا متينًا يسهل البناء عليه لاحقًا والاعتناء به، من صفحة واحدة إلى متجر متكامل. نستعين بمختصين إذا استدعى المشروع ذلك، ونشرح كل شيء بوضوح، بلا مصطلحات معقدة، يهمنا أن تعرف ما الذي تدفع مقابله ولماذا.»
  - **Hidden on purpose, though true:** the MIS degree, first in class 2023, teaching 50+ students.
- **Section titles:** «كيف يتم العمل» / "How the work is done" (5 steps); «التزامات مكتوبة» / "Commitments in writing" (written price, approval before launch, the site in the client's name).
- **Contact:**
  - The heading is the owner's colloquial «عندك فكرة مشروع؟» (the rest of the page is formal Arabic).
  - It offers a **free consultation, which is a free WhatsApp chat only, with no call promised**.
  - The button «اطلب استشارتك المجانية» opens WhatsApp pre-filled with «مرحبًا، أرغب في استشارة مجانية لمشروعي». The hero WhatsApp button has no pre-fill (yet).
- **Design:**
  - **C2 deep purple** (#2b1463), pill buttons, 28px cards.
  - **5A hero:** an animated WhatsApp chat that turns into a live mini site, labelled «مثال توضيحي».
  - **6B middle:** service cards with small moving drawings (phone, store, shield), and the project in a browser-window card.
  - The How-we-work path fills and lights up on scroll.
  - **Springy "bubbly" motion everywhere is intentional; keep it.** Everything is off under reduced motion.
- **Font:** Alexandria (self-hosted, OFL). HT Moshreq Pro was dropped, so no licence is needed.
- **One project:** Adab Al-Furusia, marked "coming soon". Never present it as live until it is.

## 4. Next steps (in order)

The latest critique left an approved plan (the owner answered: WhatsApp clarity and the chat loop first, all 5 issues, keep all the motion, prototype before changing 6B). **Items 1–4 still need his "go" and his approval of the copy lines marked ✎.**

1. **WhatsApp buttons (`/impeccable clarify`):**
   - Add a WhatsApp icon inside both pills, keeping their colours.
   - Give the hero button a pre-fill too. ✎ Proposed: «مرحبًا، أرغب في التحدث عن موقع لنشاطي» / "Hi, I'd like to talk about a website for my business".
2. **Hero chat (`/impeccable animate`):** play once and hold the final state. Replay only when it scrolls back into view or is tapped, never wiping mid-read. It currently replays every 11 s (`src/layouts/Base.astro` script).
3. **Work section (`/impeccable layout`):** the single project as a full-width row. ✎ Title «أعمال مختارة» → «أحدث مشاريعنا» / "Selected work" → "Latest project".
4. **Readability (`/impeccable harden`):**
   - The «مثال توضيحي» label brighter and larger (it's 12.5 px at 55% white now).
   - The email link at a 44 px tap target.
   - Paragraph width capped at about 65–70 characters.
   - ✎ Remove the leftover «فاخر»: Services «مظهر فاخر» → «رسالة واضحة»; the meta description «بتصميم فاخر» → «بتصميم مدروس».
5. **Round 7 prototype** on the prototype worktree at `/proto/round-7`: carry the chat look through the page (commitments as messages you'll receive, contact as the start of the chat). 2–3 variants, same switcher pattern as `src/pages/proto/round-6.astro`. The owner picks; nothing reaches `main` without his pick.
6. **`/impeccable polish`**, then **re-run `/impeccable critique`** and compare it with 25/32.
7. **Rebuild `dist`.** The owner uploads following `DEPLOY.md` from step 5.

**Later:**
- sending email (`EMAIL_SETUP.md` Part B)
- a WhatsApp Business name
- a real logo to replace the «ب» placeholder
- Adab Al-Furusia going live
- after launch, update the vault method note's status line with how the first project went

## 5. Checks to run after any change

- **Build:** `pnpm build` on `main`.
- **Copy check:** every string value in `src/content/copy.ts` must appear verbatim in `COPY.md`. Only the data values `adab-al-furusia`, `coming-soon` and the chat's `me`/`them` tags are allowed to be missing. The previous session did this with a small Node script (read `COPY.md`, walk the exported `copy`/`projects`/`links` objects, and report misses); recreate it if needed.
- **Visual:** screenshots of `/` and `/en/` at 1440×900 and 390×844. Wait about 7 s for the hero chat. Scroll to trigger reveals. **Measure the rendered DOM, not just the CSS.**

## 6. Gotchas hit in this project

- **The Astro dev server sometimes serves stale component styles** after a component rewrite. If computed styles look wrong but `dist` has the CSS, restart the dev server.
- **`cp` is aliased to `cp -i`,** so use `command cp -f`. Use `ffmpeg -nostdin` inside loops.
- **Don't kill a server with `pkill -f "<pattern>"`** from a shell whose own command line contains that pattern; it kills itself. Use `pgrep` to get the PID, then `kill <PID>`.
- **The Playwright MCP code runner has no `fs` or `require`.** Download files with `curl` instead. Its browser sometimes closes mid-run; just retry.
- **Root docs used to vanish when switching branches.** After committing docs on `main`, merge `main` into `prototype/hero`, inside the worktree.
- **Arabic spelling:** watch the hamzas (إذا، أن، إلى); they're a visible trust signal in this market. Never split Arabic below the word level in animations; letter joining breaks.
- **Servers left running at handoff:** the dev servers on :4321 (`main`) and :4322 (prototype worktree). They're safe to stop and restart with the commands above.
