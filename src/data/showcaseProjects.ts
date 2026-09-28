export interface ShowcaseSlide {
  id: string;
  title: string;
  subtitle: string;
  type: "hero" | "interface" | "architecture" | "tokens";
  caption?: string;
}

export interface ShowcaseProject {
  id: string;
  slug: string;
  stageTitle: string;
  stageSubtitle?: string;
  brandName: string;
  brandIcon?: string;
  title: string; // Editorial headline in left column
  description: string[]; // Two paragraphs in right column
  liveUrl?: string;
  tags: {
    label: string;
    isPrimary?: boolean;
    isMetric?: boolean;
  }[];
  theme: {
    fromColor: string;
    viaColor: string;
    toColor: string;
    glowColor: string;
    accentHex: string;
    borderGlow: string;
  };
  slides: ShowcaseSlide[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatarInitials: string;
    avatarUrl?: string;
  };
}

export const SHOWCASE_CLIENTS = [
  { name: "AXILON", url: "#" },
  { name: "AIXBT", url: "#" },
  { name: "The Signal", url: "#" },
  { name: "pax", url: "#" },
  { name: "BTQ", url: "#" },
  { name: "CONCOURSE ↗", url: "#" },
  { name: "Chronicle", url: "#" },
  { name: "specter", url: "#" },
  { name: "BYNARIO", url: "#" },
];

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "btq",
    slug: "btq-quantum",
    stageTitle: "Accelerating Quantum Advantage",
    stageSubtitle: "Quantum-secure post-quantum cryptography suite",
    brandName: "BTQ",
    title: "A website making BTQ's quantum security tangible for a public-market audience",
    description: [
      "BTQ is a public company securing critical infrastructure against quantum threats. The challenge was to communicate its work to investors and potential partners without losing them in technical complexity.",
      "New immersive 3D website gives an abstract subject a tangible visual form. The experience gives BTQ a better way to present its technology and the scale of its ambitions."
    ],
    liveUrl: "https://example.com/btq",
    tags: [
      { label: "LIVE SITE →", isPrimary: true },
      { label: "WEB + 3D" },
      { label: "NASDAQ-LISTED", isMetric: true }
    ],
    theme: {
      fromColor: "#091224",
      viaColor: "#0b152d",
      toColor: "#060b14",
      glowColor: "rgba(59, 130, 246, 0.25)",
      accentHex: "#38bdf8",
      borderGlow: "rgba(56, 189, 248, 0.2)"
    },
    slides: [
      {
        id: "s1",
        title: "Bitcoin Quantum",
        subtitle: "A quantum-secure evolution of Bitcoin, designed to harden the network against quantum attacks.",
        type: "hero",
        caption: "Interactive 3D Cryptographic Lattice Core"
      },
      {
        id: "s2",
        title: "Post-Quantum Key Exchange",
        subtitle: "Real-time verification of lattice-based signature algorithms under simulated quantum attacks.",
        type: "interface",
        caption: "Zero-Knowledge Hardware Telemetry"
      },
      {
        id: "s3",
        title: "Enterprise Architecture",
        subtitle: "Seamless cryptographic migration pipeline for tier-1 telecommunications and global central banks.",
        type: "architecture",
        caption: "Cross-Cloud Key Distribution Protocol"
      }
    ],
    testimonial: {
      quote: "Kuba felt like a true extension of our team, and the final result is something we're genuinely proud to share.",
      author: "CARSON RORAI,",
      role: "HEAD OF SPECIAL PROJECTS",
      avatarInitials: "CR"
    }
  },
  {
    id: "paypath",
    slug: "paypath-finance",
    stageTitle: "AI Agents for the entire debt lifecycle",
    stageSubtitle: "Autonomous recovery & modern debt servicing platform",
    brandName: "✦ paypath",
    title: "An investor-ready brand and website for PayPath's Series A ambitions",
    description: [
      "PayPath now has a stronger presence for fundraising conversations, with a brand that reflects its ambition to modernize debt software.",
      "Already backed by a16z, the company needed to make its next chapter compelling to investors. A distinctive identity and interactive website sets it apart from legacy providers, while also making the platform easier to understand."
    ],
    liveUrl: "https://example.com/paypath",
    tags: [
      { label: "LIVE SITE →", isPrimary: true },
      { label: "WEB + BRAND + 3D" },
      { label: "BACKED BY A16Z", isMetric: true }
    ],
    theme: {
      fromColor: "#071c11",
      viaColor: "#0b2618",
      toColor: "#040e08",
      glowColor: "rgba(233, 88, 16, 0.28)",
      accentHex: "#e95810",
      borderGlow: "rgba(233, 88, 16, 0.25)"
    },
    slides: [
      {
        id: "s1",
        title: "Unified Debt Orchestration",
        subtitle: "Coordinating auto loans, consumer credit, mortgages, and tax liabilities with intelligent routing.",
        type: "hero",
        caption: "Multi-Asset Floating Token Architecture"
      },
      {
        id: "s2",
        title: "Autonomous Recovery Engine",
        subtitle: "Machine learning workflows predicting borrower willingness-to-pay and personalized settlement terms.",
        type: "interface",
        caption: "Dynamic Settlement Matrix"
      },
      {
        id: "s3",
        title: "Series A Investor Metrics",
        subtitle: "Live cohort retention and net recovery rate dashboards built directly into the public narrative.",
        type: "tokens",
        caption: "99.8% Servicing Compliance SLA"
      }
    ]
  },
  {
    id: "bynario",
    slug: "bynario-security",
    stageTitle: "Find and fix vulnerabilities in your software",
    stageSubtitle: "Autonomous vulnerability research & binary deep inspection",
    brandName: "BYNARIO",
    title: "A website that makes Bynario's cybersecurity advantage visible",
    description: [
      "Bynario's edge is finding exploitable vulnerabilities other tools miss. Its new website brings that difference to the surface, taking visitors inside the binaries where those vulnerabilities live.",
      "The experience gives prospective customers a distinctive introduction to its approach. Technical depth becomes something visitors can explore through a visual concept rooted in the product itself."
    ],
    liveUrl: "https://example.com/bynario",
    tags: [
      { label: "LIVE SITE →", isPrimary: true },
      { label: "WEB + BRAND + 3D" },
      { label: "$2.4M RAISED", isMetric: true }
    ],
    theme: {
      fromColor: "#100b21",
      viaColor: "#170f30",
      toColor: "#080612",
      glowColor: "rgba(168, 85, 247, 0.25)",
      accentHex: "#c084fc",
      borderGlow: "rgba(192, 132, 252, 0.2)"
    },
    slides: [
      {
        id: "s1",
        title: "Decompiled Binary Graph",
        subtitle: "Autonomous static and symbolic analysis mapped directly into an interactive 3D point cloud.",
        type: "hero",
        caption: "Real-time Assembly Control Flow Graph"
      },
      {
        id: "s2",
        title: "Exploit Path Synthesis",
        subtitle: "Automated generation of zero-day proof-of-concept exploits before malicious actors find them.",
        type: "interface",
        caption: "Symbolic Taint Tracking Engine"
      },
      {
        id: "s3",
        title: "CI/CD Gate Integration",
        subtitle: "Continuous binary verification blocking regressions directly in GitHub Actions and GitLab pipelines.",
        type: "architecture",
        caption: "Automated Patch Generation"
      }
    ]
  },
  {
    id: "concourse",
    slug: "concourse-finance",
    stageTitle: "Autonomous AI agents built for enterprise finance",
    stageSubtitle: "Multi-agent accounting, reconciliation, and audit pipelines",
    brandName: "CONCOURSE",
    title: "Helping Concourse earn enterprise trust through a brand new site",
    description: [
      "Concourse gives finance teams at companies like Palo Alto Networks AI agents that handle real financial work. Its new website makes that offering easier to evaluate before a sales conversation.",
      "Enterprise buyers get a clearer picture of how the platform fits their workflows, with complex capabilities explained through motion and custom UI illustrations."
    ],
    liveUrl: "https://example.com/concourse",
    tags: [
      { label: "LIVE SITE →", isPrimary: true },
      { label: "WEB + MOTION" },
      { label: "SERIES A", isMetric: true }
    ],
    theme: {
      fromColor: "#181410",
      viaColor: "#221c16",
      toColor: "#0c0a08",
      glowColor: "rgba(245, 158, 11, 0.22)",
      accentHex: "#fbbf24",
      borderGlow: "rgba(251, 191, 36, 0.2)"
    },
    slides: [
      {
        id: "s1",
        title: "Multi-Agent Ledger Coordination",
        subtitle: "Autonomous reconciliations across ERP, Stripe, NetSuite, and multi-currency banking rails.",
        type: "hero",
        caption: "Continuous Financial Close Architecture"
      },
      {
        id: "s2",
        title: "Deterministic Audit Trail",
        subtitle: "Every automated journal entry linked to source receipts, contracts, and cryptographic timestamps.",
        type: "interface",
        caption: "SOC 2 Type II Certified Pipeline"
      }
    ]
  },
  {
    id: "signal",
    slug: "the-signal",
    stageTitle: "The premier intelligence network for the AI era",
    stageSubtitle: "Executive editorial, deep model benchmarks & curated research",
    brandName: "[ ] The Signal",
    title: "Bringing The Signal's brand and website up to speed with the AI it covers",
    description: [
      "With 50,000+ readers, The Signal needed an identity that matched its growing presence in AI media.",
      "The new brand gives a recognizable visual world, strengthening how it presents itself to readers and commercial partners. AI-generated imagery brings the subject it covers directly into its identity, making the technology part of the experience."
    ],
    liveUrl: "https://example.com/the-signal",
    tags: [
      { label: "LIVE SITE →", isPrimary: true },
      { label: "WEB + BRAND" },
      { label: "50K+ READERS", isMetric: true }
    ],
    theme: {
      fromColor: "#0f160e",
      viaColor: "#152013",
      toColor: "#080c07",
      glowColor: "rgba(233, 88, 16, 0.24)",
      accentHex: "#e95810",
      borderGlow: "rgba(233, 88, 16, 0.2)"
    },
    slides: [
      {
        id: "s1",
        title: "Curated AI Dispatches",
        subtitle: "Daily frontier model analysis, compute scaling updates, and interviews with foundational researchers.",
        type: "hero",
        caption: "Sub-second Static Content Delivery"
      },
      {
        id: "s2",
        title: "Interactive Benchmark Explorer",
        subtitle: "Live evaluation leaderboards testing reasoning, code generation, and latency across providers.",
        type: "interface",
        caption: "Dynamic Vector Search Index"
      }
    ],
    testimonial: {
      quote: "Working with Kuba was a fantastic experience. He has an incredible ability to turn ideas into reality, making the process very enjoyable.",
      author: "ALEX BANKS,",
      role: "FOUNDER AT THE SIGNAL",
      avatarInitials: "AB"
    }
  },
  {
    id: "pax",
    slug: "pax-customs",
    stageTitle: "Autonomous duty recovery for high-growth commerce",
    stageSubtitle: "Recovering import duties for companies like Glossier, Yamaha, and Verkada",
    brandName: "pax",
    title: "Giving PAX a brand that matches the enterprise clients it serves",
    description: [
      "PAX now has a brand that reflects the responsibility of recovering import duties for companies like Glossier, Yamaha, and Verkada.",
      "A more established presence helps potential customers see it as a credible partner for complex financial and compliance work. The rebrand replaces a generic SaaS look with an identity built around expertise, clarity, and enterprise confidence."
    ],
    liveUrl: "https://example.com/pax",
    tags: [
      { label: "LIVE SITE →", isPrimary: true },
      { label: "WEB + BRAND" },
      { label: "BACKED BY Y COMBINATOR", isMetric: true }
    ],
    theme: {
      fromColor: "#0b1424",
      viaColor: "#101d33",
      toColor: "#060a12",
      glowColor: "rgba(96, 165, 250, 0.22)",
      accentHex: "#60a5fa",
      borderGlow: "rgba(96, 165, 250, 0.2)"
    },
    slides: [
      {
        id: "s1",
        title: "Automated Tariff Classification",
        subtitle: "Harmonized System (HS) code matching using multi-modal product inspection and historical ruling precedent.",
        type: "hero",
        caption: "US Customs & Border Protection Direct Link"
      },
      {
        id: "s2",
        title: "Duty Drawback Dashboard",
        subtitle: "Tracking millions of dollars in recovered duties with automated drawback filing and refund auditing.",
        type: "interface",
        caption: "End-to-End Enterprise Compliance"
      }
    ]
  }
];
