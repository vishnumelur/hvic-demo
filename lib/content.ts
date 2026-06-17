// Central content for Kerala HVIC Foundation site.
// Sourced from ANERT / Kerala HVIC public material. Demo content for pitch.

export const ORG = {
  name: "Kerala HVIC Foundation",
  longName: "Hydrogen Valley Innovation Cluster — Kerala",
  parent: "Agency for New and Renewable Energy Research and Technology (ANERT)",
  govt: "Government of Kerala",
  incorporated: "30 July 2025",
  section: "Section 8, Companies Act 2013 — not-for-profit",
  tagline: "Powering Kerala's Hydrogen Future",
  vision:
    "To establish Kerala as an early supplier of green hydrogen and ammonia to global markets.",
  mission:
    "To build an integrated green-hydrogen value chain — spanning production, storage, distribution, end-use applications and R&D — driving Kerala's energy transition and decarbonisation.",
  email: "info@keralahvic.org",
  phone: "+91 471 233 3124",
  address: "ANERT, Thycaud P.O., Thiruvananthapuram, Kerala 695014, India",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "Tenders & Careers", href: "/tenders" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: 133, suffix: " Cr", prefix: "₹", label: "Pilot-phase investment", sub: "National Green Hydrogen Mission" },
  { value: 57, suffix: " T", prefix: "", label: "Green hydrogen / year", sub: "Pilot production target" },
  { value: 1, suffix: " GW", prefix: "", label: "Electrolyser capacity", sub: "Kochi Green Hydrogen Hub" },
  { value: 120, suffix: " kTPA", prefix: "", label: "Hub output at scale", sub: "Kilo-tonnes per annum" },
];

export const VALUE_CHAIN = [
  {
    id: "production",
    title: "Production",
    desc: "Green hydrogen via electrolysis powered by renewables, plus biogenic hydrogen generation.",
    icon: "bolt",
  },
  {
    id: "storage",
    title: "Storage",
    desc: "Safe, scalable hydrogen storage infrastructure anchoring the Kochi Green Hydrogen Hub.",
    icon: "cylinder",
  },
  {
    id: "distribution",
    title: "Distribution",
    desc: "Logistics and refuelling networks moving hydrogen to mobility and industry across Kerala.",
    icon: "route",
  },
  {
    id: "applications",
    title: "Applications",
    desc: "Heavy road transport, water transport, houseboats, airport mobility and green ammonia.",
    icon: "spark",
  },
  {
    id: "rnd",
    title: "Research & Development",
    desc: "Innovation with CSIR-NIIST, C-DAC, IIT Palakkad and IISER advancing the full value chain.",
    icon: "atom",
  },
];

export const PROJECTS = [
  {
    title: "Hydrogen Buses at CIAL",
    tag: "Mobility",
    cost: "₹8.7 Cr",
    desc: "Three hydrogen-powered buses for Cochin International Airport — India's first airport hydrogen mobility programme, via an MoA with CIAL.",
    accent: "h2",
  },
  {
    title: "Hydrogen Houseboats",
    tag: "Water Transport",
    cost: "Pilot",
    desc: "Clean-fuel houseboats for Kerala's backwaters in partnership with the Kerala State Water Transport Department — decarbonising iconic tourism.",
    accent: "cyan",
  },
  {
    title: "Heavy Road Transport",
    tag: "Freight",
    cost: "Pilot",
    desc: "Fuel-cell heavy vehicles demonstrating long-haul, zero-emission freight across the state's logistics corridors.",
    accent: "h2",
  },
  {
    title: "Kochi Green Hydrogen Hub",
    tag: "Infrastructure",
    cost: "1 GW",
    desc: "A flagship hub with a 1 GW electrolyser and 120 kTPA capacity, developed with GIZ and the Government of Kerala.",
    accent: "cyan",
  },
];

export const PARTNERS = [
  "ANERT",
  "CSIR-NIIST",
  "C-DAC",
  "IIT Palakkad",
  "IISER",
  "Cochin Shipyard",
  "KMRL",
  "KSRTC",
  "BPCL",
  "Kerala State Water Transport Dept.",
];

export const NEWS = [
  {
    date: "01 Feb 2026",
    category: "Mobility",
    title: "MoA signed with CIAL for ₹8.7 Cr hydrogen-bus project",
    excerpt:
      "Kerala HVIC Foundation and Cochin International Airport Limited exchanged a Memorandum of Agreement for three hydrogen-powered buses.",
  },
  {
    date: "30 Jul 2025",
    category: "Milestone",
    title: "Kerala HVIC Foundation receives Letter of Award",
    excerpt:
      "The Foundation is formally established as a Section 8 company under ANERT to operationalise the Hydrogen Valley Innovation Cluster.",
  },
  {
    date: "15 Jun 2025",
    category: "Mission",
    title: "₹133 Cr Hydrogen Valley cluster approved",
    excerpt:
      "Under the National Green Hydrogen Mission, Kerala secures approval for a Hydrogen Valley Innovation Cluster targeting 57 tonnes of green H₂.",
  },
  {
    date: "10 May 2025",
    category: "Partnership",
    title: "GIZ joins Kochi Green Hydrogen Hub development",
    excerpt:
      "The German Development Agency partners with the Government of Kerala on the 1 GW Kochi Green Hydrogen Hub.",
  },
];

export const TENDERS = [
  {
    type: "Tender",
    ref: "HVIC/2026/CMS/01",
    title: "Design, development & maintenance of official HVIC website (CMS)",
    posted: "05 Jun 2026",
    closes: "28 Jun 2026",
    status: "Open",
  },
  {
    type: "Tender",
    ref: "HVIC/2026/H2/07",
    title: "Supply & commissioning of hydrogen refuelling equipment — Kochi",
    posted: "20 May 2026",
    closes: "20 Jun 2026",
    status: "Open",
  },
  {
    type: "Career",
    ref: "HVIC/HR/2026/03",
    title: "Project Engineer — Electrolyser & Storage Systems",
    posted: "01 Jun 2026",
    closes: "30 Jun 2026",
    status: "Open",
  },
  {
    type: "Career",
    ref: "HVIC/HR/2026/04",
    title: "Manager — Partnerships & Innovation",
    posted: "28 May 2026",
    closes: "25 Jun 2026",
    status: "Open",
  },
];

export const TEAM = [
  { name: "Director", role: "Kerala HVIC Foundation", org: "ANERT" },
  { name: "Chief Executive Officer", role: "Operations & Strategy", org: "HVIC" },
  { name: "Head — Technology", role: "Value-chain & R&D", org: "HVIC" },
  { name: "Head — Partnerships", role: "Industry & Government", org: "HVIC" },
];

// Gallery uses generated gradient tiles — no external image dependencies.
export const GALLERY = [
  { title: "Hydrogen Bus Unveiling — CIAL", type: "photo", accent: "h2" },
  { title: "Kochi Green Hydrogen Hub — Site", type: "photo", accent: "cyan" },
  { title: "Electrolyser Commissioning", type: "photo", accent: "h2" },
  { title: "Backwater Houseboat Pilot", type: "video", accent: "cyan" },
  { title: "Partner Roundtable — ANERT", type: "photo", accent: "h2" },
  { title: "Green H₂ Roadmap Launch", type: "photo", accent: "cyan" },
  { title: "R&D Lab — CSIR-NIIST", type: "video", accent: "h2" },
  { title: "Refuelling Demonstration", type: "photo", accent: "cyan" },
];
