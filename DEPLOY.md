# Deploy: portfolio.binmahyub.uk (Cloudflare Pages)

- **Method:** Cloudflare Pages **Direct Upload**. You drag the built `dist` folder into the dashboard. No Git or command line needed.
- **Written:** 2026-09-24. Menu names come from general knowledge, not a live check; if a label doesn't match, look for the nearest equivalent.
- **One limitation:** a Direct Upload project **can't be switched to automatic Git deploys later**. If you later want "push to GitHub, and the site updates itself", you'd create a second Pages project connected to the repo and move the domain to it. That's fine for now.

---

## Part A: Build (on this computer)

1. Open a terminal in the project folder:
   ```
   cd ~/02_Profession/Projects/01_Personal/005_myPortfolio
   ```
2. Make sure you're on the real site, not the prototypes:
   ```
   git switch main
   ```
3. Build:
   ```
   pnpm build
   ```
4. The site is now in the **`dist`** folder. That folder is what you upload.

## Part B: Create the Pages project (first time only)

5. Log in at **dash.cloudflare.com**.
6. In the left menu, open **Workers & Pages**.
7. Click **Create**.
8. Open the **Pages** tab.
9. Choose **Upload assets** (Direct Upload).
10. Project name: **binmahyub-portfolio**.
11. Click **Create project**.
12. Drag the **`dist`** folder from your file manager into the upload box.
13. Wait for the upload to finish.
14. Click **Deploy site**.
15. Open the **`binmahyub-portfolio.pages.dev`** link it shows.
16. Check both pages: `/` (Arabic) and `/en/` (English).

## Part C: Connect portfolio.binmahyub.uk

17. In the project, open the **Custom domains** tab.
18. Click **Set up a custom domain**.
19. Type **portfolio.binmahyub.uk**.
20. Click **Continue**.
21. Click **Activate domain**. binmahyub.uk is already on Cloudflare, so the DNS record is added for you.
22. Wait until the status shows **Active**. This usually takes a few minutes while the HTTPS certificate is issued.
23. Open **https://portfolio.binmahyub.uk**.

## Part D: Check after going live

24. On your phone, open the site and tap **راسلنا على واتساب**. WhatsApp should open a chat with your number.
25. Tap the email link. It should start an email to **info@binmahyub.uk**.
26. At the bottom, tap **English**, then **العربية**, to check both languages.

## Updating the site later

27. Run steps 1–3 again (build).
28. Cloudflare → **Workers & Pages** → **binmahyub-portfolio**.
29. Click **Create deployment** (or **Upload new version**).
30. Drag the new **`dist`** folder in.
31. Click **Save and deploy**.

## Undo a bad update

32. In the project, open **Deployments**.
33. Find the previous good deployment.
34. Open its **⋯** menu and choose **Rollback**.
