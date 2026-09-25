# Deploy: portfolio.binmahyub.uk (Cloudflare Pages + GitHub)

- **Live:** https://portfolio.binmahyub.uk (Cloudflare preview address: https://portfolio-68f.pages.dev)
- **Repo:** https://github.com/alzubairigrind-hue/portfolio (public)
- **How it updates:** every push to `main` on GitHub makes Cloudflare Pages rebuild and publish the site, usually within 1–2 minutes. Nothing is uploaded by hand.
- **Set up:** 2026-09-26, following Cloudflare's docs (*Pages → Get started → Git integration*).

---

## Updating the site

1. Change the code on `main`, check it locally (`pnpm dev`), and commit.
2. Push:
   ```
   git push
   ```
3. Watch it in Cloudflare → **Workers & Pages** → **portfolio** → **Deployments**. The newest one shows **Success** when it's live.

**Other branches:** pushing any branch other than `main` builds a separate **preview** address (`<branch>.portfolio-68f.pages.dev`), not the real site. Preview addresses are public, so push only branches you're happy for people to see. The `prototype/hero` branch stays local.

## Undo a bad update

1. Cloudflare → **Workers & Pages** → **portfolio** → **Deployments**.
2. Find the last good deployment.
3. Open its **⋯** menu and choose **Rollback**.

Then fix the problem on `main` and push again.

## Build settings (for reference)

Set once when the project was created; they live in the project's **Settings**.

| Setting | Value |
|---|---|
| Framework preset | Astro |
| Build command | `pnpm build` |
| Build output directory | `dist` |
| Production branch | `main` |
| Environment variable | `PNPM_VERSION` = `11.10.0` |

**Why `PNPM_VERSION`:** Cloudflare's build image uses pnpm 10.11.1 by default, but this project uses pnpm 11 (its `pnpm-workspace.yaml` uses pnpm 11's `allowBuilds` setting). If you upgrade pnpm on your computer, update this value to match.

**Node.js:** the build image's default, Node 22.16.0, meets Astro 7's minimum (22.12.0), so no setting is needed.

## Custom domain

`portfolio.binmahyub.uk` is attached under the project's **Custom domains** tab. `binmahyub.uk` is on Cloudflare, so the DNS record and the HTTPS certificate were created, and are renewed, automatically.

## Check after an update

1. Open https://portfolio.binmahyub.uk and https://portfolio.binmahyub.uk/en/.
2. Tap **راسلنا على واتساب**. WhatsApp should open a chat with your number.
3. Tap the email link. It should start an email to **info@binmahyub.uk**.
4. Tap the language pill in the top row, next to your name, to switch between Arabic and English.
5. Open each project's **«عرض حي» / Live demo**. It should open in a new tab.
