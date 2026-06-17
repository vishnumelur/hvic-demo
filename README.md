# Kerala HVIC Foundation — Official Website (Demo)

A premium, **light, Apple-grade** marketing website + **admin console** for the
**Kerala HVIC Foundation** (Hydrogen Valley Innovation Cluster), the Government of Kerala
Section-8 not-for-profit established under **ANERT** to implement India's first complete
green-hydrogen value chain.

This repository is a **high-fidelity pitch demo** built against the Foundation's EOI for a
modern, responsive, secure, CMS-based official website.

> **Live demo:** deployed as a static site on **Vercel**.
> **Admin console:** sign in at `/login` with the demo credentials below.

---

## ✨ Highlights

- **Light, precision clean-energy brand** — off-white canvas, deep hydrogen-green accents,
  glass surfaces, soft depth, and an editorial serif-italic accent word.
- **Public marketing site** — cinematic image hero, animated ecosystem metrics, photographic
  roadmap cards, a stylized **Kerala ecosystem-map** (SVG), partners, news and CTA.
- **Admin console (CMS demo)** — gated dashboard with login, role-based users, and content
  management for News, Tenders, Media and Settings.
- **Smooth scroll** (Lenis), scroll-reveal animations, animated counters.
- **Fully responsive** — desktop, tablet, mobile (incl. a mobile dashboard drawer).
- **Static export** — pure static HTML/CSS/JS (`output: "export"`), zero server runtime;
  fast, cheap, secure on Vercel + CDN, automatic HTTPS/SSL.
- **SEO-ready** — per-page metadata, semantic structure, Open Graph; `prefers-reduced-motion`.

## 🔐 Demo login

| Field | Value |
|-------|-------|
| URL | `/login` |
| Email | `demo@keralahvic.org` |
| Password | `hvic2026` |

Auth is **client-side only** (localStorage) — appropriate for a static pitch demo. The
`/dashboard/*` routes are guarded and redirect to `/login` when signed out.

## 🗺 Pages (mapped to the EOI scope of work)

**Public site**

| Page | EOI module |
|------|------------|
| `/` Home | 3.1 Homepage — hero, metrics, roadmap, ecosystem map, news, CTA |
| `/about` | 3.2 About Us — profile, vision & mission, leadership, timeline |
| `/programmes` | 3.3 Services / Programmes — value chain + flagship projects |
| `/news` | 3.4 News & Notifications — feed + downloadable notices |
| `/gallery` | 3.6 Gallery — photo & video grid |
| `/tenders` | 3.5 Tenders / Careers — listings with deadlines + downloads |
| `/contact` | 3.7 Contact — form, office directory, map |

**Admin console** (EOI 3.8 — Admin Panel)

| Page | Purpose |
|------|---------|
| `/login` | Split image + form, demo credentials, responsive |
| `/dashboard` | Overview — stats, activity, quick actions, system status |
| `/dashboard/news` | Manage news & notices (search, publish/draft, CRUD) |
| `/dashboard/tenders` | Manage tenders & careers |
| `/dashboard/media` | Media gallery + upload |
| `/dashboard/users` | Users & role-based access (Admin / Editor / Viewer) |
| `/dashboard/settings` | Site, contact, **EN/Malayalam**, security & backup |

## 🎨 Design system — "Aurora Light"

| Token | Value |
|-------|-------|
| Background | `#F7F9FC` |
| Cards / panels | `#FFFFFF` / `#F2F4F7` |
| Primary (deep green) | `#006D40` |
| Accent (bright green) | `#00E08A` |
| Text / Muted | `#191C1E` / `#3B4A3F` |
| Display font | Hanken Grotesk |
| Accent (italic) | Fraunces |

Tokens live as Tailwind v4 theme variables in [`app/globals.css`](app/globals.css); the full
specification is in [`docs/DESIGN-SPEC.md`](docs/DESIGN-SPEC.md). Originally prototyped in
Google Stitch.

## 🧱 Tech stack

- **Next.js 16** (App Router) + **React 19** — static export (`output: "export"`)
- **Tailwind CSS v4** — theme tokens & utilities
- **Lenis** smooth scroll · **IntersectionObserver** reveals · inline SVG icons
- **TypeScript**

## 📁 Project structure

```
app/                 Public routes + /login + /dashboard/* , layout, global styles
components/
  sections/          Homepage sections (Hero, Stats, Projects, EcosystemMap, …)
  dashboard/         DashboardShell + UI primitives
  ui/                Reveal, SectionHeading, PageHeader, Icons, Logo
  Navbar, Footer, SiteChrome, SmoothScroll
lib/
  content.ts         Single source of truth for all site content/data
  auth.tsx           Client-side demo auth (AuthProvider / useAuth)
public/img/          Pexels imagery (+ CREDITS.md)
docs/DESIGN-SPEC.md  Design specification
```

All editable copy/data lives in [`lib/content.ts`](lib/content.ts).

## 🚀 Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## ☁️ Deploy

Configured for static export; deploys to Vercel with zero config:

```bash
vercel --prod
```

## 🔭 Roadmap to full production CMS

1. Back the dashboard with a real headless CMS (Payload / Strapi / Sanity) + server auth.
2. Wire content collections to drive `lib/content.ts` equivalents.
3. Site-wide search, full EN/Malayalam i18n, document download center (EOI §5).
4. Backup/recovery and access-control hardening (EOI §4).

---

© 2026 Kerala HVIC Foundation. A Government of Kerala initiative under ANERT.
Demo content compiled from public ANERT / HVIC sources; imagery via Pexels.
