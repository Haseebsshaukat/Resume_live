# Portfolio design guide — Haseeb Shoukat

This document summarizes the structure, content, and design decisions for your recruiter-optimized portfolio.

---

## 1. SEO & discoverability

| Item | Value |
|------|--------|
| **Title** | `Haseeb Shoukat \| AI & Backend Engineer \| Python, LLMs, RAG` |
| **Meta description** | Software Engineer specializing in AI, LLMs, RAG, and Python backends. FAST-NUCES CS graduate. Experience at The Cerebral and Corex Tech. Open to AI Engineer and Backend roles. |
| **Keywords** | Haseeb Shoukat, AI Engineer, Backend Engineer, Python, LLM, RAG, FAST-NUCES, Software Engineer, Full-Stack |
| **Structured data** | JSON-LD `Person` schema with name, jobTitle, sameAs (LinkedIn, GitHub), email, address, knowsAbout, alumniOf, worksFor |

All of the above are driven from `src/data/content.ts` and `src/app/layout.tsx`. Update `seo` in `content.ts` when you change titles or add a custom domain.

---

## 2. Color palette (CSS variables)

Defined in `src/app/globals.css`:

- **Light:** White/gray background, blue primary (`hsl(217 91% 60%)`), muted text.
- **Dark:** Deep blue-gray background (`222 47% 6%`), same primary blue, light text.
- **Primary (accent):** Blue used for links, buttons, skill bars, and highlights — recruiter-friendly and tech-appropriate.

You can tweak `--primary` and `--background` / `--foreground` in `:root` and `.dark` to match your brand.

---

## 3. Typography

- **Font:** Plus Jakarta Sans (Google Font), applied via `next/font/google` in `layout.tsx`.
- **Usage:** Headings and body; single font for a clean, premium feel.
- **Scale:** Tailwind defaults; section titles at `text-3xl` / `text-4xl`, body at `text-sm` / `text-base`.

---

## 4. Section-by-section content (what’s on the site)

- **Hero:** Greeting, name, rotating titles (AI Engineer, Backend Engineer, Full-Stack Engineer, Python Developer), one-line summary, primary CTA = “View Resume”, secondary = “Get in Touch”, social links (GitHub, LinkedIn, Email).
- **About:** “About Me” + “Engineer who ships.” Three short paragraphs (who you are, OOP/TA/FAST-NUCES, what you care about). Four highlight bullets (4.0 OOP, 3× TA, RAG/LLM experience, stack).
- **Experience:** Timeline — The Cerebral, Corex Tech, Entracloud, FAST-NUCES TA. Each with role, company, period, location, short description, and tech tags.
- **Projects:** Featured (IELTS Mastery, Clinical RAG, SpeakVerse) in a grid; “More projects” (Tarjuman, FarmToday). Each has title, subtitle, period, description, tech badges. “AI / LLM showcase” callout above the grid.
- **Skills:** Four groups — AI & LLMs, Backend, Frontend, DevOps & Tools — with animated bars and labels from `content.ts`.
- **Education:** FAST-NUCES (with OOP highlights), FSc, Matriculation. Certifications/coursework subsection (e.g. Generative AI & LLMs).
- **Philosophy:** Two columns — “Research & interests” (RAG, evaluation, fine-tuning, agentic workflows) and “Tech philosophy” (shipping, fundamentals, evaluation, clean code).
- **Contact:** “Let’s work together” + “Open to roles in AI Engineering, Backend, and Full-Stack.” Links: Email, LinkedIn, GitHub, Download Resume. Web3Forms contact form (name, email, subject, message).

---

## 5. UI structure & layout

- **Header:** Sticky, glass-style on scroll. Logo (your name) → nav links (Home, About, Experience, Projects, Skills, Education, Contact) → theme toggle → mobile menu.
- **Sections:** Full-width; content constrained to `max-w-4xl` or `max-w-5xl`, centered. Alternating subtle background (`bg-muted/30`) for Experience, Skills, Contact.
- **Open to work:** Fixed bottom pill: “Open to work · AI & Backend roles” with a small pulse dot, linking to `#contact`. Toggle via `site.openToWork` in `content.ts`.

---

## 6. Animations (Framer Motion)

- **Hero:** Staggered fade-in for greeting, name, role line, summary, CTAs, socials. Typing effect for rotating role titles.
- **Sections:** `whileInView` for headings and blocks; slight `y` and `opacity` for a smooth scroll feel.
- **Experience:** Timeline line + circle; each job card animates in from the left.
- **Projects:** Cards animate in with small delay per card.
- **Skills:** Category cards and skill bars animate on scroll (width for bars).
- **Header:** Slight initial `y` animation; glass background when `scrolled`.

All use `viewport={{ once: true }}` (or similar) so animations run once per scroll for performance.

---

## 7. Suggested next steps (optional)

- **Resume PDF:** Add `public/resume.pdf` and optionally an `/api/…` redirect if you want a short URL.
- **Blog (MDX):** Add `app/blog/` and `app/blog/[slug]/page.tsx`; use MDX for AI/LLM articles and link from nav or a “Writing” section.
- **Case studies:** Add `app/projects/[id]/page.tsx` for IELTS, Clinical RAG, SpeakVerse with problem → solution → tech → results.
- **GitHub pinned repos:** Use GitHub API (or static list in `content.ts`) and a small “Pinned” subsection under Projects.
- **Metrics:** If you have them (e.g. “X% improvement in retrieval latency”), add a small “Impact” or “Results” line in experience or project cards.
- **OG image:** Add `public/og.png` (1200×630) and set `seo.ogImage` in `content.ts` for rich previews.

---

## 8. Folder structure (Next.js)

```
Resume_live/
├── public/
│   ├── resume.pdf          # Add your PDF here
│   └── resume-placeholder.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/         # All section and UI components
│   ├── data/
│   │   └── content.ts      # Single source of truth for copy & links
│   └── lib/
│       └── utils.ts
├── tailwind.config.ts
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

Your portfolio is **recruiter-optimized** (clear role, experience, projects, skills, education, contact and resume CTA), **ATS-aligned** (semantic sections, clear headings, structured data), and **positioned for AI / Backend / Full-Stack** roles with strong Python and LLM emphasis. All narrative is impact-focused and professional without sounding arrogant.
