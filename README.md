# Edres Al-Zubairi — Portfolio

The portfolio of Edres Al-Zubairi (ادريس الزبيري), a web developer in Saudi Arabia working as **Bin Mahyub**. One page per language: Arabic at `/` (right-to-left, the main page) and English at `/en/`.

**Live:** https://portfolio.binmahyub.uk

## Projects on the page

Each project opens a demo hosted inside this site, under `public/work/`. The demos are plain HTML, CSS and JavaScript, with their fonts and images stored locally.

| Project | Demo | What it is |
|---|---|---|
| Adab Al-Furusia · أدب الفروسية | `/work/adab-al-furusia/` | A design concept for an Arabic equestrian academy's website, converted from Vue to vanilla HTML/CSS/JS. |
| Wethaq Family Association · جمعية وثاق الأسرية | `/work/wethaq/` | The homepage of a Laravel website built for a Saudi family-reconciliation non-profit, converted to a static page. Its news, courses and statistics are sample content, labelled on the page. |
| Madarij Association · جمعية مدارج | `/work/madarij/` | A design concept for a Tabuk non-profit's website, converted from PHP to a static page. |

## Stack

- [Astro](https://astro.build) 7, static output. The pages are Astro components; the Vue integration is installed but no page uses it.
- One self-hosted font, Alexandria, for the portfolio itself.
- All copy lives in `src/content/copy.ts`, with the approved text mirrored in `docs/COPY.md`.

## Run it locally

Requires Node.js and [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev       # local server
pnpm build     # static site in dist/
pnpm preview   # serve the built site
```

## Layout

```
src/pages/        index.astro (Arabic) and en/index.astro (English)
src/components/   page sections; OnePage.astro sets their order
src/content/      copy.ts: all text and the project list
public/work/      the three project demos
docs/             copy, deployment and email notes; docs/archive/ holds earlier research
DESIGN.md         the design system
PRODUCT.md        the product brief
HANDOFF.md        working notes for whoever picks the project up next
```

## Rights

© Edres Al-Zubairi. All rights reserved. The code is public to read, not licensed for reuse. The project demos show work made for clients and remain theirs.

Photographs in the Madarij demo come from Wikimedia Commons: *Tabuk Fortress 2022* by amanderson2 ([CC BY 2.0](https://creativecommons.org/licenses/by/2.0)) and *Wadi al-Disah2, Nabataean tomb facade* by Clemens Schmillen ([CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0)). Both are credited in the demo's footer.
