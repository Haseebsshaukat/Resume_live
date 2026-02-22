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

Open [http://localhost:3000](http://localhost:3000).

## Add your resume

1. Export your resume as PDF.
2. Save it as `public/resume.pdf`.
3. The "View Resume" and "Download Resume" buttons will link to it.

## Build & deploy

```bash
npm run build
npm start
```

Deploy to **Vercel** (recommended), Netlify, or any Node host.

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
