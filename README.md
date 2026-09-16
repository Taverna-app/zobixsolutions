# Zohaib Rana — Portfolio

Premium portfolio and client-acquisition website for **Zohaib Rana**, Software Engineer, and his
software development brand/studio **Zobix Solutions**.

Live focus: turn visitors into client conversations by showcasing real, production projects,
real technical skills and real experience — no fabricated metrics, testimonials or clients.

## Features

- Premium dark-first design system built on Tailwind CSS v4 design tokens
- Real project case studies with problem/solution, technical highlights and a keyboard-navigable
  screenshot lightbox
- Filterable project grid (All, Web Apps, SaaS, E-commerce, Business Software, Mobile, Real-Time, AI, Backend)
- Contact form with React Hook Form + Zod validation, routed through a provider-agnostic
  `submitContactForm()` helper
- WhatsApp deep links generated via a single `createWhatsAppLink()` helper
- Route-level code splitting, lazy-loaded pages, and `prefers-reduced-motion` support
- SEO: per-page metadata, Open Graph/Twitter tags, JSON-LD, `robots.txt`, `sitemap.xml`

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router DOM · Framer Motion ·
React Hook Form · Zod · Lucide React

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run preview   # preview the production build locally
npm run lint       # oxlint
```

## Environment Variables

Copy `.env.example` to `.env` and set:

```
VITE_CONTACT_ENDPOINT=   # optional: endpoint the contact form POSTs to
```

If unset, the contact form will show the "try WhatsApp or email instead" fallback message —
it never fails silently or exposes raw errors. Frontend env vars (`VITE_*`) are public; never put
secrets here.

## Project Architecture

```
src/
├── assets/projects/<slug>/   # real screenshots go here (see below)
├── components/
│   ├── layout/                # Navbar, Footer, Layout
│   ├── project/                # ProjectCard, ProjectGallery, ProjectLightbox, ProjectPreview
│   ├── contact/                # ContactForm
│   ├── seo/                    # Seo (document head + JSON-LD)
│   ├── icons/                  # inline social icons (lucide-react dropped brand icons)
│   └── ui/                     # button, card, input, select, sheet, etc.
├── sections/                  # homepage/page building blocks (Hero, Services, Skills, ...)
├── pages/                     # route-level pages
├── data/                      # projects.ts, experience.ts, services.ts, skills.ts
├── config/site.ts             # single source of truth for name/email/phone/social links
├── hooks/
└── lib/                       # utils, whatsapp.ts, contact.ts, contact-schema.ts
```

## Adding a Project

No UI changes required — everything is data-driven from `src/data/projects.ts`:

1. Add screenshots to `src/assets/projects/<slug>/` (or anywhere under `src/assets`) and reference
   them from the project's `screenshots` array. Until screenshots exist, the UI shows a clearly
   labeled placeholder instead of a fabricated image.
2. Add a new entry to the `projects` array with `slug`, `title`, `category`, `tags` (for
   filtering), `description`, `detailedDescription`, `role`, `problem`, `solution`,
   `technicalHighlights`, `technologies`, `features`, and optional `liveUrl`/`githubUrl`.
3. Set `featured: true` to surface it in the homepage's Featured Projects section.
4. Add the new route to `public/sitemap.xml`.

## Deployment (Vercel)

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite

## Contact

- Email: ranadeveloperoffical@gmail.com
- WhatsApp: +92 316 2380303
- Location: Karachi, Pakistan
