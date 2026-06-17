# Kerala HVIC — Design Specification (Light / "Apple-grade Precision")

Version 2.0 — light redesign. Supersedes the initial dark/WebGL concept.
Derived from the approved Stitch references (desktop marketing + mobile dashboard).

## 1. Art direction

A **light, refined, Apple-keynote aesthetic** for a precision clean-energy institution.
Calm off-white canvas, generous negative space, one confident green, large tight-tracked
headlines, photographic storytelling, soft depth (blur + low-spread shadows), and a single
editorial flourish: a **serif-italic green accent word** inside the hero headline.

Tone: precise, optimistic, world-class, governmental-but-modern. No clutter, no neon.

## 2. Color system

| Token | Hex | Use |
|-------|-----|-----|
| `bg` | `#F7F9FC` | Page background / surface |
| `white` | `#FFFFFF` | Cards, nav |
| `card` | `#F2F4F7` | Metric cards, soft panels |
| `card-2` | `#ECEEF1` | Alt panels |
| `line` | `rgba(9,14,23,0.08)` | Hairlines / borders |
| `primary` | `#006D40` | Deep green — accents, links, primary buttons |
| `accent` | `#00E08A` | Bright green — highlights, pills, active states |
| `accent-2` | `#0EE38C` | Glows, gradients |
| `ink` | `#191C1E` | Headlines / primary text, dark buttons |
| `muted` | `#3B4A3F` | Body / secondary text |
| `secondary` | `#5A5E6A` | Tertiary text |
| `dark` | `#2D3133` | Dark feature cards / image overlays |
| `tertiary` | `#B5C5DF` / `#425267` | "Staging" status chips |

## 3. Typography

Elevated beyond the Stitch default (Space Grotesk/Inter) for a more distinctive, Apple-grade feel:

- **Display & UI:** **Hanken Grotesk** — one cohesive family (like SF), weights 400–800.
- **Accent (italic word):** **Fraunces** italic — optical serif, used only for the green
  highlighted word in headlines (e.g. *Hydrogen*).

Scale (desktop):

| Level | Size / line / tracking / weight |
|-------|--------------------------------|
| display | 80px / 1.0 / -0.04em / 800 |
| display-mobile | 44px / 1.05 / -0.03em / 800 |
| headline-xl | 48px / 1.1 / -0.03em / 700 |
| headline-lg | 32px / 1.2 / -0.02em / 700 |
| body-lg | 20px / 1.6 / -0.01em / 400 |
| body | 16px / 1.6 / 400 |
| label-caps | 12px / 0.2em / 700 / uppercase |

## 4. Spacing, radius, shape

- Container max **1280px**, gutter **24px**.
- Section vertical padding: **120px** desktop / **72px** mobile.
- Card radius: **24px** (small), **32px** (panels), **40px** (hero/feature).
- Buttons: pill (`full`) for nav/CTA; `16px` for hero buttons.

## 5. Signature components & effects

- **Glass card:** `rgba(255,255,255,.6)` + `blur(16px)` + 1px white border + soft shadow.
- **Premium shadow:** `0 20px 80px -15px rgba(0,0,0,.06)`.
- **Hover-lift:** `translateY(-8px)`, `cubic-bezier(.16,1,.3,1)`.
- **Hero glow:** radial `rgba(0,224,138,.10)` at 70% 30%.
- **Floating data callout:** glass chip over hero image (e.g. "94.2% Grid Purity").
- **Nav:** fixed, blurred white, shrinks `h-20 → h-16` on scroll.
- **Reveal-on-scroll:** fade + 24px rise via IntersectionObserver.
- **Animated counters** for metrics.

## 6. Homepage composition

1. **Nav** — logo (eco mark + "Kerala HVIC"), links, pill "Connect".
2. **Hero** — left: badge "Energy Innovation Leader", headline "Powering *Hydrogen* Innovation"
   (italic green accent), body, dark "Explore Strategy" + glass "Technical Specs"; right:
   tall rounded hero image (aerial green highway) with floating "94.2% Grid Purity" callout.
3. **Ecosystem Metrics** — "PRECISION DATA" + "Live Pulse" pill; 4 metric cards
   (133 CR, 57 T, 12 HUBS, 1 GW) with animated counters.
4. **Strategic Roadmap** — 2–4 large photographic cards with status chips
   (Urban Hydrogen Mobility, Heavy Transport, Water Transport, Kochi Hub).
5. **Ecosystem Map** — stylized SVG map of Kerala with glowing hydrogen-hub nodes.
6. **Partners** — fine-line grayscale row (ANERT, CSIR-NIIST, C-DAC, IIT Palakkad, IISER, KMRL…).
7. **CTA** + **Footer** (multi-column, light).

Mobile adopts the dashboard cues from the reference: stacked metric cards, image cards with
status chips, and the ecosystem-map panel.

## 7. Imagery (Pexels, downloaded to `/public/img`)

| File | Subject | Pexels ID |
|------|---------|-----------|
| `hero.jpg` | Aerial green highway w/ vehicles | 13682891 |
| `bus.jpg` | Green city bus | 15437276 |
| `truck.jpg` | Heavy truck, golden hour | 5410923 |
| `facility.jpg` | Clean industrial plant | 10666081 |
| `houseboat.jpg` | Kerala backwater houseboat | 10933045 |
| `energy.jpg` | Wind turbine, green hill | 414905 |

Photos via Pexels (free license). See `public/img/CREDITS.md`.

## 8. Tech

Next.js 16 (App Router) static export · Tailwind v4 tokens · next/font (Hanken Grotesk + Fraunces)
· Lenis smooth scroll · IntersectionObserver reveals · inline SVG icons (no icon-font dependency).
Responsive, SEO metadata, `prefers-reduced-motion` respected. Deployed static on Vercel.
