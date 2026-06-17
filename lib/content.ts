// Central content for Kerala HVIC Foundation site.
// Sourced from ANERT / Kerala HVIC public material. Demo content for pitch.

export const ORG = {
  name: "Kerala HVIC Foundation",
  longName: "Hydrogen Valley Innovation Cluster — Kerala",
  parent: "Agency for New and Renewable Energy Research and Technology (ANERT)",
  govt: "Government of Kerala",
  incorporated: "30 July 2025",
  section: "Section 8, Companies Act 2013 — not-for-profit",
  tagline: "Powering Hydrogen Innovation",
  vision:
    "To establish Kerala as an early supplier of green hydrogen and ammonia to global markets.",
  mission:
    "To architect a zero-carbon economy through precision engineering and world-scale hydrogen infrastructure across production, storage, distribution, applications and R&D.",
  email: "info@keralahvic.org",
  phone: "+91 471 233 3124",
  address: "ANERT, Thycaud P.O., Thiruvananthapuram, Kerala 695014, India",
};

export const NAV = [
  { label: "Technology", href: "/programmes" },
  { label: "Value Chain", href: "/about" },
  { label: "Projects", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Tenders", href: "/tenders" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 133, unit: "CR", label: "Pilot Fund", sub: "Phase 1 capital allocated for urban mobility infrastructure." },
  { value: 57, unit: "T", label: "Green H₂ / YR", sub: "Current annual production capacity for export-grade hydrogen." },
  { value: 12, unit: "HUBS", label: "Active Grid", sub: "Refuelling nodes integrated into the statewide mobility corridor." },
  { value: 1, unit: "GW", label: "Electrolyser", sub: "Strategic goal for regional manufacturing autonomy." },
];

export const VALUE_CHAIN = [
  { id: "production", title: "Production", desc: "Green hydrogen via electrolysis powered by renewables, plus biogenic generation.", icon: "bolt" },
  { id: "storage", title: "Storage", desc: "Safe, scalable hydrogen storage anchoring the Kochi Green Hydrogen Hub.", icon: "cylinder" },
  { id: "distribution", title: "Distribution", desc: "Logistics and refuelling networks moving hydrogen to mobility and industry.", icon: "route" },
  { id: "applications", title: "Applications", desc: "Heavy road transport, water transport, houseboats and green ammonia.", icon: "spark" },
  { id: "rnd", title: "Research & Development", desc: "Innovation with CSIR-NIIST, C-DAC, IIT Palakkad and IISER.", icon: "atom" },
];

// Strategic roadmap cards (homepage + programmes)
export const ROADMAP = [
  {
    phase: "Deployment Phase",
    tag: "Transport",
    status: "Active",
    title: "Urban Hydrogen Mobility",
    desc: "A fleet of fuel-cell buses connecting major industrial and tourism corridors, powered entirely by Kerala's green energy grid — including three hydrogen buses at CIAL (₹8.7 Cr).",
    image: "/img/bus.jpg",
  },
  {
    phase: "Industrial Logistics",
    tag: "Freight",
    status: "Active",
    title: "Heavy Transport Systems",
    desc: "Transforming the logistics backbone of South India with high-pressure refuelling stations and green-freight incentives for heavy fleet operators.",
    image: "/img/truck.jpg",
  },
  {
    phase: "Water Transport",
    tag: "Tourism",
    status: "Pilot",
    title: "Hydrogen Houseboats",
    desc: "Clean-fuel houseboats for Kerala's iconic backwaters, in partnership with the Kerala State Water Transport Department — decarbonising tourism at its source.",
    image: "/img/houseboat.jpg",
  },
  {
    phase: "Infrastructure",
    tag: "Energy",
    status: "Staging",
    title: "Kochi Green Hydrogen Hub",
    desc: "A flagship hub with a 1 GW electrolyser and 120 kTPA capacity, developed with GIZ and the Government of Kerala.",
    image: "/img/facility.jpg",
  },
];

// Ecosystem map nodes — stylized positions (%) on a vertical Kerala silhouette
export const HUBS = [
  { name: "Kannur", x: 38, y: 16, primary: false },
  { name: "Kozhikode", x: 34, y: 30, primary: true },
  { name: "Thrissur", x: 46, y: 46, primary: false },
  { name: "Kochi", x: 50, y: 58, primary: true },
  { name: "Kottayam", x: 56, y: 66, primary: false },
  { name: "Kollam", x: 60, y: 80, primary: false },
  { name: "Thiruvananthapuram", x: 64, y: 90, primary: true },
];

export const PARTNERS = [
  "ANERT", "CSIR-NIIST", "C-DAC", "IIT Palakkad", "IISER", "KMRL", "KSRTC", "BPCL",
];

export const NEWS = [
  { date: "01 Feb 2026", category: "Mobility", title: "MoA signed with CIAL for ₹8.7 Cr hydrogen-bus project", excerpt: "Kerala HVIC Foundation and Cochin International Airport Limited exchanged a Memorandum of Agreement for three hydrogen-powered buses." },
  { date: "30 Jul 2025", category: "Milestone", title: "Kerala HVIC Foundation receives Letter of Award", excerpt: "The Foundation is formally established as a Section 8 company under ANERT to operationalise the Hydrogen Valley Innovation Cluster." },
  { date: "15 Jun 2025", category: "Mission", title: "₹133 Cr Hydrogen Valley cluster approved", excerpt: "Under the National Green Hydrogen Mission, Kerala secures approval for a Hydrogen Valley Innovation Cluster targeting 57 tonnes of green H₂." },
  { date: "10 May 2025", category: "Partnership", title: "GIZ joins Kochi Green Hydrogen Hub development", excerpt: "The German Development Agency partners with the Government of Kerala on the 1 GW Kochi Green Hydrogen Hub." },
];

export const TENDERS = [
  { type: "Tender", ref: "HVIC/2026/CMS/01", title: "Design, development & maintenance of official HVIC website (CMS)", posted: "05 Jun 2026", closes: "28 Jun 2026", status: "Open" },
  { type: "Tender", ref: "HVIC/2026/H2/07", title: "Supply & commissioning of hydrogen refuelling equipment — Kochi", posted: "20 May 2026", closes: "20 Jun 2026", status: "Open" },
  { type: "Career", ref: "HVIC/HR/2026/03", title: "Project Engineer — Electrolyser & Storage Systems", posted: "01 Jun 2026", closes: "30 Jun 2026", status: "Open" },
  { type: "Career", ref: "HVIC/HR/2026/04", title: "Manager — Partnerships & Innovation", posted: "28 May 2026", closes: "25 Jun 2026", status: "Open" },
];

export const TEAM = [
  { name: "Director", role: "Kerala HVIC Foundation", org: "ANERT" },
  { name: "Chief Executive Officer", role: "Operations & Strategy", org: "HVIC" },
  { name: "Head — Technology", role: "Value-chain & R&D", org: "HVIC" },
  { name: "Head — Partnerships", role: "Industry & Government", org: "HVIC" },
];

export const GALLERY = [
  { title: "Hydrogen Bus Unveiling — CIAL", type: "photo", image: "/img/bus.jpg" },
  { title: "Kochi Green Hydrogen Hub — Site", type: "photo", image: "/img/facility.jpg" },
  { title: "Backwater Houseboat Pilot", type: "video", image: "/img/houseboat.jpg" },
  { title: "Heavy Freight Corridor", type: "photo", image: "/img/truck.jpg" },
  { title: "Renewable Grid Integration", type: "photo", image: "/img/energy.jpg" },
  { title: "Green Highway Logistics", type: "video", image: "/img/hero.jpg" },
];
