# Reference Board Method

A way to find a visual direction by reacting to real websites instead of describing taste in words or judging an invented style.

**Why it exists:** on this project, a style built from written adjectives (walnut, brass, calm, luxurious) was rejected outright. An earlier round of 23 award-winning developer portfolios also missed, because every reference came from the same category. What worked was a numbered board of real sites from *other* worlds, answered by number.

---

## Steps

1. **Pick 3–4 worlds outside your own category.** For a developer portfolio aimed at Saudi small businesses, these were: Saudi/Gulf heritage sites, craft and woodwork studios, Arabic type foundries, and quiet-luxury service brands. Include at least one world in the audience's own language and culture.
2. **Find 3–4 real sites per world** (12–16 total). Web search, then prefer the audience-language version of each page (e.g. `/ar`).
3. **Screenshot each first screen** at desktop width (1440×900) with Playwright, all sites in one scripted batch:
   - accept or remove cookie banners before the shot
   - wait long enough for fade-in animations (~5 s)
   - record the status code and final URL, and drop dead sites
4. **QA with one contact sheet** (`magick montage *.png -tile 4x -geometry 480x300+6+6 -label '%t' contact.png`) and reshoot only the broken ones.
5. **Build a numbered local HTML board**, not a hosted page:
   - convert shots to WebP (`magick in.png -resize 1400x -quality 74 out.webp`)
   - one card per site: big number, screenshot, name, link, one plain-words note on what to look at
   - group the cards by world, on a neutral page that doesn't sway the judgement
   - put it in the project as `reference-board/` and keep it out of git with `.git/info/exclude`, because the screenshots belong to other companies
   - hand over a `file://` link
6. **Reply by number:** `like 1, 2, 14 · hate 5, 9`. Short reasons help but aren't required.
7. **Summarise what the picks share** (colour, type, density, layout, feel) and name any conflict with the brief, *before* building anything.
8. **Record the picks and the summary in the brief**, then build from them.

## Rules

- **Judge the feel, not the photos.** If the product can't use photography, say so on the board, so a site isn't picked for imagery the product can't have.
- **Screenshots are for reference only.** Never ship or copy them.
- **One round, then narrow.** If the picks leave something open (e.g. which texture), run a smaller second board on just that question instead of guessing.

## First run: 2026-09-23, portfolio

- **Liked:** 1 Diriyah Hotels, 2 Experience AlUla, 3 Ithra, 4 Red Sea Global, 6 Edgewood Studio, 10 HadiType, 14 Anderson & Sheppard
- **Hated:** 5 Fernweh, 7 Studio Moe, 8 Benchmark, 9 29LT, 11 Aman, 12 Toteme, 13 A. Lange & Söhne
- **Read:** rich, warm, immersive and Arabic-first; bold colour or huge type welcome. Sparse, pale or cold-precise is out.
- **Decision:** the hero's atmosphere comes from texture and type, not photography.
