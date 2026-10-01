# Solar website strategy

Planning material for the new commercial solar installation and PPA business website.

- `reports/` — the finished strategy report(s). Start with `reports/Commercial solar website strategy.md`.
- `research_notes/` — the raw research notes behind each report (site-by-site evaluations, sources, and evidence). Useful if you want to check where a claim came from.

The report covers the shortlist of commercial solar and PPA websites to model the new site on, a recommended structure, and the plan for presenting a credible site before there are any in-house projects to show.

## Mockups

`mockups/` holds five complete website directions for Solex Solar (A to E), each a six-page static site: home, commercial solar, solar PPA, sectors, about, contact.

- `mockups/index.html` — the gallery that links all five, with live phone and desktop previews, the reasoning behind the five, and the reference-site wall.
- `mockups/a/` … `mockups/e/` — the generated sites. Open any `index.html` in a browser.
- `mockups/src/` — the generator: `content.mjs` (all copy and figures, with placeholders), `base.mjs` (shared styles), `themes/*.mjs` (one file per direction), `build.mjs` (pages), `gallery.mjs` (gallery page). Rebuild with `node mockups/src/build.mjs && node mockups/src/gallery.mjs`.
- `mockups/assets/photos/` — licensed placeholder photos (see `ATTRIBUTION.md`); to be replaced with Solex Solar's own.
- `mockups/previews/` — full-page screenshots of each homepage, desktop and phone.
