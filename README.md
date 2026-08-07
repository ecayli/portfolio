# Elifnaz Çaylı — Portfolio

A single-page portfolio site showcasing UI/UX and media production work: *3 Days Later* (short film), *SynchroTrack*, *Yummy*, and a Save-button component system.

**Live site:** _add your GitHub Pages URL here once deployed_

---

## Folder structure

```
.
├── index.html          ← the whole site (HTML + CSS + JS in one file, images embedded)
└── videos/
    ├── intro.mp4
    ├── intro_poster.jpg
    ├── teaser.mp4
    └── teaser_poster.jpg
```

`index.html` is self-contained except for the `videos/` folder — the two never separate. If you move or rename the videos folder, update the `src="videos/..."` paths in `index.html` (search for `<source src=`).

---

## Deploy with GitHub Pages (recommended)

1. Create a new repo on GitHub, e.g. `portfolio` (github.com/ecayli/portfolio).
2. Upload this whole folder — `index.html` and `videos/` together, keeping the structure intact. Easiest way:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/ecayli/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Source → Deploy from branch → `main` / `root`** → Save.
4. After a minute or two, your site is live at:
   ```
   https://ecayli.github.io/portfolio/
   ```
5. Send me that exact URL — I'll update the CV and the outreach message to match it (they currently use a placeholder link).

### Updating content later
Edit `index.html` directly (text, links, project order) and `git push` again — GitHub Pages redeploys automatically within a minute. To swap a screenshot or video, replace the corresponding file and re-embed/re-link as needed — ask me and I'll regenerate the file for you.

---

## Alternative: Netlify Drop

If you don't want to touch git: go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the whole folder (`index.html` + `videos/`) onto the page. You get an instant live URL, no account required for a first deploy (create a free account to keep it permanently and get a custom subdomain like `elifnazcayli.netlify.app`).

---

## Notes

- The site uses Google Fonts (Fraunces, IBM Plex Sans, IBM Plex Mono) loaded via CDN — needs an internet connection to render correctly; falls back to system fonts offline.
- All screenshots and the film poster are base64-embedded directly in `index.html`, so only the two video files are separate assets.
- Contact links in the footer point to `elifnazcayli@gmail.com`, LinkedIn, and GitHub — update these in `index.html` if they change.
