# Haseeb Shoukat — Portfolio

Modern Next.js 14+ (App Router) portfolio, recruiter-optimized for **AI Engineer**, **Backend Engineer**, and **Full-Stack Engineer** roles.

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (dark/light theme)
- **Framer Motion** (animations)
- **Plus Jakarta Sans** (typography)
- **Lucide React** (icons)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000/Resume_live](http://localhost:3000/Resume_live) (base path for GitHub Pages).

## Add your resume

1. Put your PDF in **`public/Haseeb Shoukat.pdf`** (or the filename in `src/data/content.ts` → `resumeUrl` / `resumeDownloadName`).
2. The "Download Resume" buttons will link to it. For GitHub Pages the link is `/Resume_live/Haseeb%20Shoukat.pdf`.

## Build & deploy

### GitHub Pages (this repo)

- The repo is set up for **GitHub Pages** via **GitHub Actions**.
- On every **push to `main`**, the workflow builds the Next.js static export and deploys the **`out/`** folder to GitHub Pages.
- **Live site:** https://haseebsshaukat.github.io/Resume_live/
- To force a redeploy: push a new commit to `main`, or in the repo go to **Actions** → **Deploy to GitHub Pages** → **Run workflow**.

**If the live site still shows an old version:**

1. In the repo, open the **Actions** tab and check the latest **Deploy to GitHub Pages** run (success or failure).
2. If the workflow failed, open the run and fix the error (e.g. build failure).
3. If it succeeded, do a hard refresh (Ctrl+Shift+R) or try in an incognito window—GitHub’s CDN can cache the old site briefly.

### Local build

```bash
npm run build
npm start
```

Then open [http://localhost:3000/Resume_live](http://localhost:3000/Resume_live).

## Project structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout, metadata, JSON-LD
│   ├── page.tsx      # Home (all sections)
│   └── globals.css   # Theme variables, Tailwind
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Philosophy.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── OpenToWorkBanner.tsx
│   └── ThemeProvider.tsx
├── data/
│   └── content.ts    # All copy, links, SEO — edit here
└── lib/
    └── utils.ts
```

## Customization

- **Copy & links:** Edit `src/data/content.ts` (hero, about, experience, projects, skills, education, contact, SEO).
- **Theme:** CSS variables in `src/app/globals.css` (light/dark).
- **Contact form:** Uses [Web3Forms](https://web3forms.com); access key is in `content.ts` and Contact component.

## SEO

- Title and meta description in `layout.tsx` from `content.ts`.
- JSON-LD (Schema.org Person) in layout for Google.
- Open Graph and Twitter card meta tags.

---

© Haseeb Shoukat. Built with Next.js.
