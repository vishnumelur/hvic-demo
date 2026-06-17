# Kerala HVIC Foundation — Official Website (Demo)

A premium, **3D / WebGL, scroll-driven** marketing website for the **Kerala HVIC Foundation**
(Hydrogen Valley Innovation Cluster), the Government of Kerala Section-8 not-for-profit
established under **ANERT** to implement India's first complete green-hydrogen value chain.

This repository is a **high-fidelity pitch demo** built against the Foundation's EOI for a
modern, responsive, secure, CMS-ready official website.

> Live demo: deployed as a static site on **Vercel**.

---

## ✨ Highlights

- **Cinematic deep-tech brand** — near-black canvas, hydrogen-green → electric-cyan aurora
  gradients, frosted-glass surfaces with neon edges.
- **Full WebGL hero** — an animated, mouse-reactive hydrogen energy core (React Three Fiber):
  distorted emissive nucleus, wireframe shell, orbiting electrons, particle field.
- **Smooth scroll** (Lenis) with scroll-reveal animations and animated stat counters.
- **Fully responsive** — desktop, tablet and mobile, with an accessible mobile menu.
- **Static export** — pure static HTML/CSS/JS (`output: "export"`), zero server runtime,
  ideal for cheap, fast, secure hosting on Vercel + CDN.
- **SEO-ready** — per-page metadata, semantic structure, Open Graph tags.
- `prefers-reduced-motion` respected throughout.

## 🗺 Pages (mapped to the EOI scope of work)

| Page | EOI module | Notes |
|------|------------|-------|
| `/` Home | 3.1 Homepage | Hero, dynamic banner area, quick access, latest news, highlighted projects |
| `/about` | 3.2 About Us | Org profile, vision & mission, leadership, timeline |
| `/programmes` | 3.3 Services / Programmes | Value-chain modules + flagship project pages |
| `/news` | 3.4 News & Notifications | News feed + downloadable notices/circulars + archive |
| `/gallery` | 3.6 Gallery | Photo & video grid, event highlights |
| `/tenders` | 3.5 Tenders / Careers | Open tenders & job notifications with expiry dates + downloads |
| `/contact` | 3.7 Contact | Contact form, office directory, map integration |

> **Admin Panel (EOI 3.8)** and dynamic CMS content are out of scope for this static pitch
> demo. The architecture is CMS-ready — see [Roadmap](#-roadmap-to-full-cms).

## 🎨 Design system — "Aurora Dark"

| Token | Value |
|-------|-------|
| Canvas | `#060B14` |
| Panels | `#0B1220` |
| Primary (Hydrogen green) | `#00E08A` |
| Secondary (Electric cyan) | `#00C2FF` |
| Text / Muted | `#EAF2F0` / `#8FA3AD` |
| Display font | Space Grotesk |
| Body font | Inter |

The design system was prototyped in **Google Stitch** (project: *Kerala HVIC Foundation*,
design system *HVIC Aurora Dark*) and implemented as Tailwind v4 theme tokens in
[`app/globals.css`](app/globals.css).

## 🧱 Tech stack

- **Next.js 16** (App Router) + **React 19** — static export
- **Tailwind CSS v4** — theme tokens & utilities
- **React Three Fiber** + **drei** + **three.js** — WebGL hero scene
- **Lenis** — smooth scrolling
- **GSAP** + **Framer Motion** — available for richer motion
- **TypeScript**

## 📁 Project structure

```
app/                  Routes (home + 6 inner pages), layout, global styles
components/
  sections/           Homepage sections (Hero, Vision, ValueChain, …)
  three/              HydrogenHero — the WebGL scene (client-only)
  ui/                 Reveal, SectionHeading, PageHeader, Icons, Logo
  Navbar.tsx, Footer.tsx, SmoothScroll.tsx
lib/content.ts        Single source of truth for all site content/data
```

All editable copy, stats, projects, partners, news and tenders live in
[`lib/content.ts`](lib/content.ts) — change content there without touching components.

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## 🏗 Build & static export

```bash
npm run build    # outputs a static site to ./out
```

The `out/` directory is fully static and can be served by any static host or CDN.

## ☁️ Deploy to Vercel

This project is configured for static export and deploys to Vercel with zero config:

```bash
npx vercel        # preview deploy
npx vercel --prod # production deploy
```

Vercel auto-detects Next.js and serves `out/` over its global CDN with automatic HTTPS/SSL.

## 🔭 Roadmap to full CMS

To satisfy the complete EOI (admin panel, role-based access, dynamic content):

1. Connect a headless CMS (e.g. Payload, Strapi, or Sanity) and drive `lib/content.ts`
   equivalents from API/content collections.
2. Add the **Admin Panel** (3.8): dashboard, role-based user management, content/banner
   editing, media uploads.
3. Add site-wide search, English/Malayalam multilingual support, and a document download
   center (EOI §5).
4. Backup/recovery and access-control hardening (EOI §4).

---

© 2026 Kerala HVIC Foundation. A Government of Kerala initiative under ANERT.
Demo content compiled from public ANERT / HVIC sources for pitch purposes.
