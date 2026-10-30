# Elifnaz Çaylı — Portfolio

UI/UX and media production portfolio: interface prototypes, a component/design-system exercise, and an end-to-end short film production.

**Live site:** https://github.com/ecayli/portfolio

---

## About this project

A single-page portfolio with a soft pastel look: pill navigation, outlined cards, split tinted/grey sections and small doodle stickers. Projects are ordered newest first, starting with the CENTRA case study (UX3 Concept Development).

**Featured work:**
- **3 Days Later** — a short thriller produced end-to-end with a 5-person team: writing, cast, editing, sound, and the full visual identity (posters, promo site, TikTok teaser)
- **SynchroTrack** — a mood-based "sonic focus" app concept, designed in Figma
- **CENTRA** — a dashboard concept for MVG/SWM staff, developed in the UX3 (Concept Development) course on Intelligent Urban Systems

## Built with

- Plain HTML, CSS, and JavaScript — no framework, no build step
- Font: [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans) via Google Fonts
- Images embedded as base64 directly in the HTML; video clips served from `/videos`

## Structure

```
.
├── index.html          ← the entire site (markup, styles, and script in one file)
└── videos/
    ├── intro.mp4
    ├── intro_poster.jpg
    ├── teaser.mp4
    └── teaser_poster.jpg
```

`index.html` and `videos/` travel together — the video `<source>` tags reference relative paths inside that folder.

## Running it locally

No build step required — clone the repo and open `index.html` in a browser, or serve the folder with any static server:

```bash
git clone https://github.com/ecayli/portfolio.git
cd portfolio
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

Hosted as a static site via **GitHub Pages** (`Settings → Pages → Deploy from branch → main / root`). Any static host works equally well — Netlify, Vercel, or Cloudflare Pages all serve this folder as-is.

## Contact

- Email: [elifnazcayli@gmail.com](mailto:elifnazcayli@gmail.com)
- LinkedIn: [linkedin.com/in/elifnazayl](https://linkedin.com/in/elifnazayl/)
- GitHub: [github.com/ecayli](https://github.com/ecayli)
