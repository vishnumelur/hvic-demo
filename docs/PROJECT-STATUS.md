# Kerala HVIC Foundation — Project Status & Handoff

_Last updated: 18 Jun 2026. Use this to resume work cold._

## 1. What this is
A pitch demo website + admin console for the **Kerala HVIC Foundation** (Hydrogen Valley
Innovation Cluster), a Govt. of Kerala Section-8 not-for-profit under **ANERT**. Built against
the EOI for a modern, responsive, secure, CMS-based official site.

## 2. Live & repo
- **Live (production):** https://hvic-rho.vercel.app
- **Repo:** https://github.com/vishnumelur/hvic-demo (branch `main`)
- **Vercel:** project `hvic`, scope/team `vishnumelurs-projects` (CLI auth: `vishnumelur`)
- **Local dir:** `/home/vmj/Desktop/hvic`

### Demo login (client-side only)
- URL `/login` · Email `demo@keralahvic.org` · Password `hvic2026`

## 3. Tech stack
- **Next.js 16** (App Router) + **React 19**, **static export** (`output: "export"` → `./out`)
- **Tailwind CSS v4** (tokens in `app/globals.css`)
- **Lenis** smooth scroll · IntersectionObserver reveals · inline SVG icons
- Deps: `next, react, react-dom, lenis, framer-motion` (framer-motion currently unused)
- No backend. Auth + dashboard CRUD are client-side mocks (localStorage).

## 4. Build / run / deploy
```bash
npm install
npm run dev                 # http://localhost:3000
npm run build               # static export to ./out
# local preview of the BUILT site (what gets deployed):
cd out && python3 -m http.server 3001
# deploy (scope is required, non-interactive):
vercel --prod --yes --scope vishnumelurs-projects
```

## 5. Design system ("Aurora Light")
- Background `#F7F9FC`; cards `#FFFFFF` / `#F2F4F7`; primary green `#006D40`; accent `#00E08A`;
  ink `#191C1E`; muted `#3B4A3F`.
- Fonts: **Hanken Grotesk** (display+body via `.font-display`) + **Fraunces italic**
  (the green accent word via `.accent-italic`). `label-caps` = uppercase kicker.
- Full spec: `docs/DESIGN-SPEC.md`.

## 6. Routes
**Public:** `/` (Hero, Ecosystem Metrics, Strategic Roadmap, Ecosystem Map, Partners marquee,
News, CTA), `/about`, `/programmes` (value chain + flagship projects + **6 anchor sectors** +
**3-phase roadmap** from the Kochi roadmap PDF), `/news`, `/gallery` (9 images), `/tenders`, `/contact`.
**Admin (gated):** `/login`, `/dashboard` (Overview), `/dashboard/{news,tenders,media,users,settings}`.

## 7. Key files
- `lib/content.ts` — single source of truth for ALL copy/data (ORG, NAV, STATS, VALUE_CHAIN,
  ROADMAP, ANCHOR_SECTORS, PHASES, PARTNERS, NEWS, TENDERS, TEAM, GALLERY, HUBS).
- `lib/auth.tsx` — `AuthProvider` / `useAuth` + `DEMO` creds (localStorage).
- `components/SiteChrome.tsx` — hides public nav/footer on `/login` + `/dashboard`.
- `components/Navbar.tsx`, `Footer.tsx`, `SmoothScroll.tsx`, `ui/Logo.tsx`, `ui/Icons.tsx`.
- `components/sections/*` — homepage sections.
- `components/dashboard/DashboardShell.tsx` + `ui.tsx` — admin shell + primitives.
- `app/globals.css` — design tokens + utility classes + animations.
- `public/img/*` — Pexels imagery (+ `CREDITS.md`); `public/logo.png` + `app/{favicon.ico,icon.png,apple-icon.png}`.

## 8. Important architecture decisions / gotchas
- **No-blank-without-JS:** content is visible by default; `.js .reveal{opacity:0}` only hides
  when JS is active (a `js` flag is set in `<head>` before paint, with a 3s `reveal-all`
  failsafe cleared by `SmoothScroll`). Never reintroduce an unconditional `.reveal{opacity:0}`.
- **CSS layers:** custom classes in `globals.css` (e.g. `.premium-shadow`, `.glass-card`) are
  UNLAYERED, so they outrank Tailwind's layered utilities. ⚠️ `lg:shadow-none` will NOT override
  `.premium-shadow` — use a Tailwind arbitrary shadow (`shadow-[...]`) when you need a
  responsive override (see login card).
- **Mobile overlays** (mobile menu + dashboard drawer): use `fixed inset-0` + `h-dvh` and
  **lock `document.body.style.overflow`** while open, else mobile browser chrome leaves an
  uncovered strip / crops content.
- **Login layout:** below `lg` = one centered self-contained card with a *contained* image
  banner (NO negative-margin overlap — that caused clipping). At `lg+` = split panel. Verified
  at 360 / 800 / 1440.
- **Static export quirks:** `trailingSlash: true` → routes are `/x/`. Normalize trailing slash
  before comparing in JS (done in DashboardShell). Lenis intercepts programmatic scroll in
  Playwright; use `scrollIntoView` or full-page screenshots when verifying.

## 9. Content sources
- ANERT / Kerala HVIC public pages; **Kochi Green Hydrogen Valley Roadmap** (ANERT · IGEF/GIZ ·
  MNRE, Sept 2024) → anchor sectors + 3-phase plan on `/programmes`.
- Imagery: Pexels (free license), see `public/img/CREDITS.md`.

## 10. Verified state (last session)
Build green (17 static routes), 0 console errors. Mobile + desktop checked for: homepage,
login (360/800/1440), dashboard (incl. mobile drawer), gallery, programmes, partners marquee,
ecosystem map, metrics. Logo + favicon = official emblem.

## 11. Possible next steps (not done)
- Wire a real headless CMS + server auth (replace localStorage mock).
- Site-wide search; full English/Malayalam i18n; document download center (EOI §5).
- Optional: custom domain on Vercel; remove unused `framer-motion` dep.
- Optional: `next dev` shows a "1 Issue" devtools badge (dev-only; not in the static prod build) —
  investigate if desired.
