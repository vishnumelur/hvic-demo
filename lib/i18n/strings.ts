// Bilingual content for the PUBLIC website (English + Malayalam).
// The admin panel is intentionally English-only and keeps using lib/content.ts.
// Numbers, symbols (₹, %, GW), image paths and org acronyms (ANERT, BPCL, CIAL…)
// are kept identical across languages; sentences and labels are translated.

const en = {
  nav: {
    items: [
      { label: "Technology", href: "/programmes" },
      { label: "Value Chain", href: "/about" },
      { label: "Projects", href: "/gallery" },
      { label: "News", href: "/news" },
      { label: "Tenders", href: "/tenders" },
      { label: "Contact", href: "/contact" },
    ],
    signIn: "Sign In",
    connect: "Connect",
    navigate: "Navigate",
  },

  hero: {
    badge: "Energy Innovation Leader 2026",
    lead: "Powering",
    accent: "Hydrogen",
    tail: "Innovation",
    body:
      "Architecting a zero-carbon economy through precision engineering and world-scale hydrogen infrastructure. Kerala's gateway to the future of clean energy.",
    explore: "Explore Strategy",
    specs: "Technical Specs",
    gridPurity: "Grid Purity",
    corridor: "Statewide H₂ corridor · Live",
  },

  stats: {
    kicker: "Precision Data",
    title: "Ecosystem Metrics",
    live: "Live Pulse",
    items: [
      { label: "Pilot Fund", sub: "Phase 1 capital allocated for urban mobility infrastructure." },
      { label: "Green H₂ / YR", sub: "Current annual production capacity for export-grade hydrogen." },
      { label: "Active Grid", sub: "Refuelling nodes integrated into the statewide mobility corridor." },
      { label: "Electrolyser", sub: "Strategic goal for regional manufacturing autonomy." },
    ],
  },

  roadmap: {
    kicker: "Strategic Roadmap",
    title: "Architecture of a Sustainable Future",
    view: "View Roadmap",
    cards: [
      {
        phase: "Deployment Phase",
        tag: "Transport",
        status: "Active",
        title: "Urban Hydrogen Mobility",
        desc: "A fleet of fuel-cell buses connecting major industrial and tourism corridors, powered entirely by Kerala's green energy grid — including three hydrogen buses at CIAL (₹8.7 Cr).",
      },
      {
        phase: "Industrial Logistics",
        tag: "Freight",
        status: "Active",
        title: "Heavy Transport Systems",
        desc: "Transforming the logistics backbone of South India with high-pressure refuelling stations and green-freight incentives for heavy fleet operators.",
      },
      {
        phase: "Water Transport",
        tag: "Tourism",
        status: "Pilot",
        title: "Hydrogen Houseboats",
        desc: "Clean-fuel houseboats for Kerala's iconic backwaters, in partnership with the Kerala State Water Transport Department — decarbonising tourism at its source.",
      },
      {
        phase: "Infrastructure",
        tag: "Energy",
        status: "Staging",
        title: "Kochi Green Hydrogen Hub",
        desc: "A flagship hub with a 1 GW electrolyser and 120 kTPA capacity, developed with GIZ and the Government of Kerala.",
      },
    ],
  },

  map: {
    kicker: "Live Network",
    title: "Ecosystem Map",
    intro:
      "Live distribution of hydrogen hubs and refuelling nodes across Kerala — from Kannur to Thiruvananthapuram.",
    hubs: "Hubs",
    districts: "Districts",
    renewable: "Renewable",
    kerala: "Kerala",
  },

  partners: { built: "Built with Kerala's leading institutions" },

  news: {
    kicker: "Newsroom",
    title: "Latest News & Notifications",
    viewAll: "View all",
    items: [
      { category: "Mobility", title: "MoA signed with CIAL for ₹8.7 Cr hydrogen-bus project", excerpt: "Kerala HVIC Foundation and Cochin International Airport Limited exchanged a Memorandum of Agreement for three hydrogen-powered buses." },
      { category: "Milestone", title: "Kerala HVIC Foundation receives Letter of Award", excerpt: "The Foundation is formally established as a Section 8 company under ANERT to operationalise the Hydrogen Valley Innovation Cluster." },
      { category: "Mission", title: "₹133 Cr Hydrogen Valley cluster approved", excerpt: "Under the National Green Hydrogen Mission, Kerala secures approval for a Hydrogen Valley Innovation Cluster targeting 57 tonnes of green H₂." },
      { category: "Partnership", title: "GIZ joins Kochi Green Hydrogen Hub development", excerpt: "The German Development Agency partners with the Government of Kerala on the 1 GW Kochi Green Hydrogen Hub." },
    ],
  },

  cta: {
    kicker: "Join the cluster",
    lead: "Partner with Kerala's",
    accent: "hydrogen revolution",
    body:
      "Industry, research and government — working as one cluster. Explore collaboration, tenders and career opportunities with the Foundation.",
    getInTouch: "Get in touch",
    tenders: "Tenders & Careers",
  },

  footer: {
    tagline:
      "Leading the transition to a sustainable, hydrogen-powered ecosystem through innovative policy and precision engineering.",
    govt: "Govt. of Kerala · ANERT",
    cols: [
      { head: "Strategy", links: [{ label: "Roadmap", href: "/programmes" }, { label: "Policy Framework", href: "/about" }] },
      { head: "Ecosystem", links: [{ label: "Projects", href: "/gallery" }, { label: "News & ESG", href: "/news" }] },
      { head: "Contact", links: [{ label: "Tenders & Careers", href: "/tenders" }, { label: "Inquiries", href: "/contact" }] },
    ],
  },
};

export type Dict = typeof en;

const ml: Dict = {
  nav: {
    items: [
      { label: "സാങ്കേതികവിദ്യ", href: "/programmes" },
      { label: "മൂല്യ ശൃംഖല", href: "/about" },
      { label: "പദ്ധതികൾ", href: "/gallery" },
      { label: "വാർത്തകൾ", href: "/news" },
      { label: "ടെൻഡറുകൾ", href: "/tenders" },
      { label: "ബന്ധപ്പെടുക", href: "/contact" },
    ],
    signIn: "സൈൻ ഇൻ",
    connect: "ബന്ധപ്പെടുക",
    navigate: "നാവിഗേറ്റ്",
  },

  hero: {
    badge: "ഊർജ്ജ നവീകരണ നായകൻ 2026",
    lead: "",
    accent: "ഹൈഡ്രജൻ",
    tail: "നവീകരണത്തിന് ഊർജ്ജം പകരുന്നു",
    body:
      "കൃത്യതയാർന്ന എഞ്ചിനീയറിങ്ങിലൂടെയും ലോകോത്തര ഹൈഡ്രജൻ അടിസ്ഥാന സൗകര്യങ്ങളിലൂടെയും കാർബൺ-രഹിത സമ്പദ്‌വ്യവസ്ഥ കെട്ടിപ്പടുക്കുന്നു. ശുദ്ധ ഊർജ്ജത്തിന്റെ ഭാവിയിലേക്കുള്ള കേരളത്തിന്റെ കവാടം.",
    explore: "തന്ത്രം പര്യവേക്ഷണം ചെയ്യുക",
    specs: "സാങ്കേതിക വിവരങ്ങൾ",
    gridPurity: "ഗ്രിഡ് ശുദ്ധി",
    corridor: "സംസ്ഥാനവ്യാപക H₂ ഇടനാഴി · ലൈവ്",
  },

  stats: {
    kicker: "കൃത്യമായ വിവരങ്ങൾ",
    title: "ആവാസവ്യവസ്ഥ സൂചകങ്ങൾ",
    live: "ലൈവ് പൾസ്",
    items: [
      { label: "പൈലറ്റ് ഫണ്ട്", sub: "നഗര ഗതാഗത അടിസ്ഥാന സൗകര്യങ്ങൾക്കായി ഘട്ടം 1-ൽ അനുവദിച്ച മൂലധനം." },
      { label: "ഹരിത H₂ / വർഷം", sub: "കയറ്റുമതി നിലവാരമുള്ള ഹൈഡ്രജന്റെ നിലവിലെ വാർഷിക ഉത്പാദന ശേഷി." },
      { label: "സജീവ ഗ്രിഡ്", sub: "സംസ്ഥാനവ്യാപക ഗതാഗത ഇടനാഴിയിൽ സംയോജിപ്പിച്ച ഇന്ധനം നിറയ്ക്കൽ കേന്ദ്രങ്ങൾ." },
      { label: "ഇലക്ട്രോലൈസർ", sub: "പ്രാദേശിക നിർമ്മാണ സ്വയംപര്യാപ്തതയ്ക്കുള്ള തന്ത്രപരമായ ലക്ഷ്യം." },
    ],
  },

  roadmap: {
    kicker: "തന്ത്രപരമായ രൂപരേഖ",
    title: "സുസ്ഥിര ഭാവിയുടെ ശില്പഘടന",
    view: "രൂപരേഖ കാണുക",
    cards: [
      {
        phase: "വിന്യാസ ഘട്ടം",
        tag: "ഗതാഗതം",
        status: "സജീവം",
        title: "നഗര ഹൈഡ്രജൻ ഗതാഗതം",
        desc: "കേരളത്തിന്റെ ഹരിത ഊർജ്ജ ഗ്രിഡിൽ പ്രവർത്തിക്കുന്ന, പ്രധാന വ്യാവസായിക-വിനോദസഞ്ചാര ഇടനാഴികളെ ബന്ധിപ്പിക്കുന്ന ഫ്യൂവൽ-സെൽ ബസുകളുടെ നിര — CIAL-ലെ മൂന്ന് ഹൈഡ്രജൻ ബസുകൾ ഉൾപ്പെടെ (₹8.7 കോടി).",
      },
      {
        phase: "വ്യാവസായിക ലോജിസ്റ്റിക്സ്",
        tag: "ചരക്ക്",
        status: "സജീവം",
        title: "ഹെവി ട്രാൻസ്പോർട്ട് സംവിധാനങ്ങൾ",
        desc: "ഉയർന്ന മർദ്ദത്തിലുള്ള ഇന്ധന കേന്ദ്രങ്ങളും ഹരിത-ചരക്ക് പ്രോത്സാഹനങ്ങളും വഴി ദക്ഷിണേന്ത്യയുടെ ലോജിസ്റ്റിക്സ് നട്ടെല്ലിനെ പരിവർത്തനം ചെയ്യുന്നു.",
      },
      {
        phase: "ജല ഗതാഗതം",
        tag: "വിനോദസഞ്ചാരം",
        status: "പൈലറ്റ്",
        title: "ഹൈഡ്രജൻ ഹൗസ്ബോട്ടുകൾ",
        desc: "കേരള സ്റ്റേറ്റ് വാട്ടർ ട്രാൻസ്പോർട്ട് വകുപ്പുമായി ചേർന്ന്, കേരളത്തിന്റെ പ്രശസ്തമായ കായലുകൾക്കായുള്ള ശുദ്ധ-ഇന്ധന ഹൗസ്ബോട്ടുകൾ — വിനോദസഞ്ചാരത്തെ ഉറവിടത്തിൽ തന്നെ കാർബൺ-മുക്തമാക്കുന്നു.",
      },
      {
        phase: "അടിസ്ഥാന സൗകര്യം",
        tag: "ഊർജ്ജം",
        status: "ഒരുങ്ങുന്നു",
        title: "കൊച്ചി ഹരിത ഹൈഡ്രജൻ ഹബ്",
        desc: "GIZ-ഉം കേരള സർക്കാരും ചേർന്ന് വികസിപ്പിക്കുന്ന, 1 GW ഇലക്ട്രോലൈസറും 120 kTPA ശേഷിയുമുള്ള മുൻനിര ഹബ്.",
      },
    ],
  },

  map: {
    kicker: "ലൈവ് ശൃംഖല",
    title: "ആവാസവ്യവസ്ഥ ഭൂപടം",
    intro:
      "കണ്ണൂർ മുതൽ തിരുവനന്തപുരം വരെ — കേരളത്തിലുടനീളമുള്ള ഹൈഡ്രജൻ ഹബുകളുടെയും ഇന്ധന കേന്ദ്രങ്ങളുടെയും തത്സമയ വിന്യാസം.",
    hubs: "ഹബുകൾ",
    districts: "ജില്ലകൾ",
    renewable: "പുനരുപയോഗം",
    kerala: "കേരളം",
  },

  partners: { built: "കേരളത്തിന്റെ മുൻനിര സ്ഥാപനങ്ങളുമായി ചേർന്ന്" },

  news: {
    kicker: "ന്യൂസ്റൂം",
    title: "ഏറ്റവും പുതിയ വാർത്തകളും അറിയിപ്പുകളും",
    viewAll: "എല്ലാം കാണുക",
    items: [
      { category: "ഗതാഗതം", title: "₹8.7 കോടി ഹൈഡ്രജൻ-ബസ് പദ്ധതിക്കായി CIAL-മായി കരാർ ഒപ്പുവച്ചു", excerpt: "മൂന്ന് ഹൈഡ്രജൻ ബസുകൾക്കായി കേരള HVIC ഫൗണ്ടേഷനും കൊച്ചിൻ ഇന്റർനാഷണൽ എയർപോർട്ട് ലിമിറ്റഡും ധാരണാപത്രം കൈമാറി." },
      { category: "നാഴികക്കല്ല്", title: "കേരള HVIC ഫൗണ്ടേഷന് ലെറ്റർ ഓഫ് അവാർഡ് ലഭിച്ചു", excerpt: "ഹൈഡ്രജൻ വാലി ഇന്നൊവേഷൻ ക്ലസ്റ്റർ പ്രവർത്തനക്ഷമമാക്കാൻ ANERT-ന് കീഴിൽ സെക്ഷൻ 8 കമ്പനിയായി ഫൗണ്ടേഷൻ ഔദ്യോഗികമായി സ്ഥാപിതമായി." },
      { category: "ദൗത്യം", title: "₹133 കോടി ഹൈഡ്രജൻ വാലി ക്ലസ്റ്ററിന് അംഗീകാരം", excerpt: "ദേശീയ ഹരിത ഹൈഡ്രജൻ മിഷന് കീഴിൽ, 57 ടൺ ഹരിത H₂ ലക്ഷ്യമിടുന്ന ഹൈഡ്രജൻ വാലി ഇന്നൊവേഷൻ ക്ലസ്റ്ററിന് കേരളത്തിന് അംഗീകാരം ലഭിച്ചു." },
      { category: "പങ്കാളിത്തം", title: "കൊച്ചി ഹരിത ഹൈഡ്രജൻ ഹബ് വികസനത്തിൽ GIZ പങ്കാളിയാകുന്നു", excerpt: "1 GW കൊച്ചി ഹരിത ഹൈഡ്രജൻ ഹബിൽ ജർമൻ വികസന ഏജൻസി കേരള സർക്കാരുമായി പങ്കാളിയാകുന്നു." },
    ],
  },

  cta: {
    kicker: "ക്ലസ്റ്ററിൽ ചേരൂ",
    lead: "കേരളത്തിന്റെ",
    accent: "ഹൈഡ്രജൻ വിപ്ലവത്തിൽ",
    body:
      "വ്യവസായവും ഗവേഷണവും സർക്കാരും — ഒരൊറ്റ ക്ലസ്റ്ററായി പ്രവർത്തിക്കുന്നു. ഫൗണ്ടേഷനുമായുള്ള സഹകരണം, ടെൻഡറുകൾ, തൊഴിലവസരങ്ങൾ എന്നിവ പര്യവേക്ഷണം ചെയ്യൂ.",
    getInTouch: "ബന്ധപ്പെടുക",
    tenders: "ടെൻഡറുകളും ജോലികളും",
  },

  footer: {
    tagline:
      "നൂതന നയങ്ങളിലൂടെയും കൃത്യതയാർന്ന എഞ്ചിനീയറിങ്ങിലൂടെയും സുസ്ഥിരവും ഹൈഡ്രജൻ അധിഷ്ഠിതവുമായ ആവാസവ്യവസ്ഥയിലേക്കുള്ള പരിവർത്തനത്തിന് നേതൃത്വം നൽകുന്നു.",
    govt: "കേരള സർക്കാർ · ANERT",
    cols: [
      { head: "തന്ത്രം", links: [{ label: "രൂപരേഖ", href: "/programmes" }, { label: "നയ ചട്ടക്കൂട്", href: "/about" }] },
      { head: "ആവാസവ്യവസ്ഥ", links: [{ label: "പദ്ധതികൾ", href: "/gallery" }, { label: "വാർത്തകളും ESG-യും", href: "/news" }] },
      { head: "ബന്ധപ്പെടുക", links: [{ label: "ടെൻഡറുകളും ജോലികളും", href: "/tenders" }, { label: "അന്വേഷണങ്ങൾ", href: "/contact" }] },
    ],
  },
};

export const STRINGS = { en, ml };
