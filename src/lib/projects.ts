export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectSection {
  title: string;
  subtitle?: string;
  content: string[];
  takeaways?: string[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  client: string;
  companyContext: string; // e.g. "Fortmindz Private Limited" or "Esolz Technologies"
  role: string;
  timeline: string;
  year: string;
  category: "SaaS & AI" | "Design Systems" | "Mobile & Health";
  services: string[];
  tools: string[];
  deliverables: string[];
  metrics: ProjectMetric[];
  heroHighlight: string;
  overview: string;
  theChallenge: ProjectSection;
  theApproach: ProjectSection;
  theDesignSystem: ProjectSection;
  keyOutcomes: ProjectSection;
  mockupType: "finflow" | "nexus" | "studioai" | "carepulse";
  liveUrl?: string;
  figmaUrl?: string;
  nextSlug: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "finflow",
    title: "FinFlow Analytics",
    subtitle: "Enterprise SaaS Financial Intelligence & Anomaly Detection Platform",
    tagline: "Simplifying multi-entity financial workflows for CFOs and quantitative analysts.",
    client: "FinFlow Global Inc.",
    companyContext: "Fortmindz Private Limited",
    role: "Lead Product Designer & Design Engineer",
    timeline: "Jan 2026 – Apr 2026 (4 Months)",
    year: "2026",
    category: "SaaS & AI",
    services: [
      "End-to-End Product Design",
      "AI Interaction Architecture",
      "Design System Tokens",
      "Interactive Prototyping"
    ],
    tools: ["Figma", "FigJam", "Tailwind CSS", "Next.js", "Recharts"],
    deliverables: [
      "Custom configurable dashboard canvas",
      "Real-time cash flow & run-rate projections",
      "AI anomaly detection alert pipeline",
      "Design token library across 40+ widgets"
    ],
    metrics: [
      { label: "Task Completion Speed", value: "+42%", subtext: "From 18m to 10.4m per report" },
      { label: "Time-to-Insight", value: "-30%", subtext: "Automated executive anomaly summaries" },
      { label: "Active Team Adoption", value: "94%", subtext: "Across 8 international finance divisions" }
    ],
    heroHighlight: "+42% Task Speed · Fortmindz",
    overview:
      "Enterprise finance teams at FinFlow were losing an average of 14 hours per analyst each week manually aggregating fragmented balance sheet exports, reconciling foreign exchange rates, and hunting for ledger discrepancies across multiple international banking APIs. As Lead Product Designer at Fortmindz, Anurag led the comprehensive ground-up redesign of the FinFlow core web platform—transitioning it from a static tabular reporting tool into a proactive, AI-assisted financial command center.",
    theChallenge: {
      title: "The Problem & Cognitive Overload",
      subtitle: "Navigating thousands of daily ledger rows without contextual signals.",
      content: [
        "In-depth interviews with 18 CFOs, quantitative analysts, and financial controllers revealed three crippling bottlenecks:",
        "1. Fragmented Data Silos: Analysts had to toggle between 6 separate enterprise accounting tools, leading to cognitive fatigue and manual transcription errors.",
        "2. Lack of Early Anomaly Detection: Irregular transaction clusters or cash burn spikes were often uncovered weeks late during end-of-month audits.",
        "3. Rigid Dashboard Layouts: Senior executives required high-level aggregate trends, while analysts required deep multi-layered transactional drill-downs, yet the legacy platform forced everyone into the same tabular view."
      ],
      takeaways: [
        "Financial data requires immediate spatial prioritization: high-level health signals first, granular drill-downs on demand.",
        "AI suggestions must be transparent, verifiable, and explainable—finance leaders will never trust a 'black box' anomaly flag."
      ]
    },
    theApproach: {
      title: "The Strategic Approach & Interaction Model",
      subtitle: "Designing modular cards, progressive disclosure, and explainable AI cues.",
      content: [
        "Anurag structured a multi-tiered information architecture based on 'macro-to-micro' progressive disclosure. The top hero region introduces an instant Financial Pulse Strip displaying cash runway, EBITDA margin, and pending reconciliation flags.",
        "Below the pulse strip, Anurag engineered an interactive widget canvas allowing users to drag, resize, and pin custom analytical components (e.g. Monte Carlo cash flow forecasting, multi-currency conversion trends, and department burn breakdowns).",
        "For anomaly detection, rather than intrusive modals, we introduced subtle ambient alert chips embedded directly into transaction rows. Hovering reveals a contextual breakdown explaining why the transaction was flagged (e.g., '+185% higher than 90-day moving average for vendor X'), with one-click audit approval."
      ],
      takeaways: [
        "Ambient notification chips reduced user friction by 68% compared to blocking modal warnings.",
        "Customizable widget presets allowed CFOs to switch from 'Board Deck Overview' to 'Tax Audit Audit Mode' in a single click."
      ]
    },
    theDesignSystem: {
      title: "Tokenized Design System & High-Density UI",
      subtitle: "Crafting sub-pixel alignment, dark-first contrast, and tabular typography.",
      content: [
        "Financial applications demand extreme numerical precision. Anurag built a dedicated sub-token system within Figma and Tailwind CSS:",
        "• Tabular Numbers: Monospaced numeric variants (`font-feature-settings: 'tnum'`) ensuring columns never shift or jitter during real-time streaming updates.",
        "• Color Semantics: Strict separation between operational status (green/red balance trends) and critical system warnings, preventing false panics in fluctuating markets.",
        "• Sub-Pixel Hairline Borders: 1px subtle separators (`rgba(255, 255, 255, 0.08)`) to preserve clean data density without visual clutter."
      ],
      takeaways: [
        "Over 60 reusable Figma components with auto-layout and variable modes for Dark and Light themes.",
        "Zero reported visual contrast regressions during comprehensive WCAG AA compliance auditing."
      ]
    },
    keyOutcomes: {
      title: "Measurable Business Impact & Outcomes",
      subtitle: "Validating quantifiable speedups across pilot enterprise clients.",
      content: [
        "Following a phased 8-week pilot with 3 enterprise hedge funds and 5 corporate finance teams, FinFlow documented transformative performance leaps:",
        "• Task completion speed improved by +42%, cutting weekly audit reporting cycles from 18 minutes down to 10.4 minutes per report.",
        "• Early anomaly detection saved an estimated $420,000 in prevented overdraft penalties and duplicate invoice payments across the pilot cohort.",
        "• System usability score (SUS) climbed from 48 (Poor) to 86 (Exceptional), leading to contract renewals across 100% of pilot participants."
      ],
      takeaways: [
        "42% faster monthly close cycle across pilot accounts.",
        "Featured as the standard internal financial tooling benchmark across Fortmindz client showcases."
      ]
    },
    mockupType: "finflow",
    nextSlug: "nexus-design-system"
  },
  {
    slug: "nexus-design-system",
    title: "Nexus Design System",
    subtitle: "Multi-Brand Enterprise Component Architecture & Token Pipeline",
    tagline: "Unifying 14 multi-platform enterprise products under a single atomic token architecture.",
    client: "Enterprise Software Suite",
    companyContext: "Esolz Technologies",
    role: "Senior UI/UX Designer & System Architect",
    timeline: "May 2024 – Aug 2025 (15 Months)",
    year: "2025",
    category: "Design Systems",
    services: [
      "Design System Architecture",
      "Token Architecture (Figma to Code)",
      "Cross-Platform Accessibility (WCAG AAA)",
      "Developer Handoff Governance"
    ],
    tools: ["Figma Variables", "Style Dictionary", "Tailwind CSS", "Storybook", "React"],
    deliverables: [
      "60+ production-ready component primitives",
      "Three-tier semantic token hierarchy",
      "Multi-brand theming engine (3 sub-brands)",
      "Interactive Storybook documentation hub"
    ],
    metrics: [
      { label: "Component Code Reuse", value: "+25%", subtext: "Eliminated bespoke duplicative CSS" },
      { label: "User Interaction Errors", value: "-10%", subtext: "Rigorous focus states and tactile feedback" },
      { label: "Handoff Cycle Time", value: "-5 Days", subtext: "Automated token syncing & zero spec confusion" }
    ],
    heroHighlight: "+25% Code Reuse · Esolz",
    overview:
      "At Esolz Technologies, Anurag spearheaded the architecture and governance of 'Nexus'—an enterprise design system built to unify 14 disparate B2B web and mobile applications across 3 sub-brands. Prior to Nexus, each engineering pod was maintaining isolated CSS libraries, resulting in visual inconsistencies, accessibility vulnerabilities, and high design debt. Nexus established a synchronized token pipeline from Figma Variables down to React production code.",
    theChallenge: {
      title: "The Problem & Component Fragmentation",
      subtitle: "14 disconnected products, 8 redundant button implementations, and zero WCAG parity.",
      content: [
        "A multi-team design audit across Esolz client platforms revealed staggering duplication:",
        "1. Over 28 variations of form input fields and 8 redundant button patterns existed across the codebase, resulting in frequent regressions during major releases.",
        "2. Theming across light, dark, and high-contrast accessibility modes was hardcoded, requiring weeks of manual QA for simple color adjustments.",
        "3. Cross-functional friction between design and frontend engineering resulted in average handoff cycles dragging out by 12–15 business days."
      ],
      takeaways: [
        "Design systems fail without clear developer buy-in: components must have 1-to-1 parity in props and naming between Figma and React.",
        "Accessibility cannot be an afterthought—contrast ratios, focus rings, and screen-reader ARIA states must be baked into Tier-1 primitives."
      ]
    },
    theApproach: {
      title: "Three-Tier Token Pipeline & Architecture",
      subtitle: "Bridging the Figma-to-code gap using Style Dictionary and automated variable exports.",
      content: [
        "Anurag structured Nexus around a three-tier token hierarchy:",
        "1. Tier 1 (Primitives): Raw hex codes, spacing units, border radii, and easing curves (e.g. `color-brand-500`, `spacing-4`).",
        "2. Tier 2 (Semantic Tokens): Purpose-driven abstractions that adapt automatically to theme and brand context (e.g. `bg-surface-primary`, `border-hairline`, `text-interactive-hover`).",
        "3. Tier 3 (Component Tokens): Granular component states (e.g. `button-primary-bg-active`, `input-focus-ring-offset`).",
        "Using Figma Variables coupled with Style Dictionary, any token updated in design was automatically compiled into typed Tailwind utilities and CSS variables, cutting sync latency to minutes."
      ],
      takeaways: [
        "Eliminated 100% of hardcoded color hex values across all 14 product repositories.",
        "Supported multi-tenant white-labeling in under 30 seconds by simply swapping a top-level CSS class."
      ]
    },
    theDesignSystem: {
      title: "Comprehensive Component Library & Storybook",
      subtitle: "60+ atomic primitives engineered for scale, responsiveness, and keyboard navigation.",
      content: [
        "Every primitive was built with rigorous stress testing:",
        "• Accessible Focus Management: Custom dual-ring focus rings (`outline: 2px solid var(--accent)`) with dynamic offset ensuring visibility on both dark and light surfaces.",
        "• Complex Data Inputs: Auto-formatting monetary inputs, multi-select tags with keyboard deletion, and responsive date range pickers.",
        "• Living Documentation: Interactive Storybook repository with live copy-paste code snippets, do/don't UX usage guides, and automated visual regression testing via Chromatic."
      ],
      takeaways: [
        "Full WCAG 2.1 AAA compliance across all typography, contrast ratios, and tap target sizes.",
        "Over 90% engineer satisfaction score during quarterly design systems reviews."
      ]
    },
    keyOutcomes: {
      title: "Measurable Impact & Organizational Shift",
      subtitle: "Shipping features 15% faster while drastically lowering defect counts.",
      content: [
        "The introduction of Nexus transformed product velocity and software quality at Esolz Technologies:",
        "• Component code reuse surged by +25%, saving an estimated 320 engineering hours per quarter.",
        "• Design handoff turnaround shortened by 5 full days per feature cycle, eliminating the need for tedious manual design spec redlining.",
        "• End-user interaction errors dropped by -10% due to standardized validation patterns and intuitive form semantics."
      ],
      takeaways: [
        "Nexus became the standard design system template across all new client engagements at Esolz.",
        "Anurag was recognized by cross-functional leadership for bridging the engineering-design gap."
      ]
    },
    mockupType: "nexus",
    nextSlug: "studioai"
  },
  {
    slug: "studioai",
    title: "StudioAI Prototyper",
    subtitle: "Generative UI Canvas & Direct-Manipulation UX Prototyping Tooling",
    tagline: "Bridging natural language prompts and spatial design engineering on an infinite canvas.",
    client: "Fortmindz AI Exploration Lab",
    companyContext: "Fortmindz Private Limited",
    role: "Design Engineer & AI Interaction Specialist",
    timeline: "Jan 2026 – Present",
    year: "2026",
    category: "SaaS & AI",
    services: [
      "AI Interaction Design (Prompt-to-UI)",
      "Infinite Canvas Spatial UX",
      "Design Engineering (React 19 / Canvas)",
      "Rapid Prototyping Workflows"
    ],
    tools: ["Figma AI", "Google Stitch", "Next.js", "Motion", "Tailwind CSS"],
    deliverables: [
      "Node-based generative UI composition canvas",
      "Instant variant branching and visual diffing",
      "Bidirectional prompt-and-inspect inspector",
      "Live interactive React code export"
    ],
    metrics: [
      { label: "Prototype Turnaround", value: "-25%", subtext: "From concept sketch to interactive code" },
      { label: "Design Exploration Time", value: "-30%", subtext: "Parallel variant generation with AI" },
      { label: "Lab Community Sessions", value: "10k+", subtext: "Over 10,000 UI component trees generated" }
    ],
    heroHighlight: "-25% Turnaround · Fortmindz",
    overview:
      "As AI models gain generative code capabilities, the bottleneck in digital product design has shifted from writing boilerplate code to evaluating, steering, and refining AI output. At the Fortmindz AI Exploration Lab, Anurag designed and prototyped 'StudioAI'—an infinite-canvas experimental environment that combines node-based spatial workflows with generative UI rendering, allowing designers and developers to branch, compare, and fine-tune AI-generated interfaces in real time.",
    theChallenge: {
      title: "The Problem with Linear Chat Interfaces",
      subtitle: "Why standard conversational LLM chat boxes fail for spatial UI design.",
      content: [
        "Traditional generative AI interfaces rely on linear chat threads. When designing digital interfaces, this paradigm introduces severe friction:",
        "1. No Spatial Context: Designers cannot view alternative component iterations side-by-side; each new prompt pushes previous versions off-screen.",
        "2. Lack of Granular Control: If a user wants to tweak only the button styling or headline typography, standard chatbots regenerate the entire screen from scratch.",
        "3. Disconnect Between Design & Code: Generated mockups are typically static images or un-styled code snippets that cannot be plugged into a production design system."
      ],
      takeaways: [
        "Designers require spatial comparison: branching canvases outperform linear chat threads 4:1 for exploratory design.",
        "Direct manipulation must accompany natural language: clicking an element on screen to refine its prompt is essential."
      ]
    },
    theApproach: {
      title: "The Node-Based Spatial Canvas Architecture",
      subtitle: "Treating prompts as reactive graph nodes and outputs as live component trees.",
      content: [
        "Anurag conceptualized StudioAI as a hybrid node graph and live artboard interface:",
        "• Prompt Nodes: Instead of a single chat input, users create contextual 'Intent Nodes' that feed parameters (brand identity, responsive breakpoints, user role) into child component artboards.",
        "• Variant Branching: Clicking 'Branch Iteration' instantly spawns 3 sibling artboards with distinct layout treatments (e.g. Minimalist, High-Density, Editorial) connected by bezier curve wires.",
        "• Direct Canvas Inspection: Clicking any generated button or typography block opens an inline micro-inspector where designers can either drag visual controls (padding, radii) or type natural-language edits ('make this button feel more playful and tactile')."
      ],
      takeaways: [
        "Direct point-and-prompt editing slashed prompt re-typing by 74%.",
        "Bezier node connections made the AI's reasoning pipeline transparent to non-technical stakeholders."
      ]
    },
    theDesignSystem: {
      title: "Tactile Canvas Micro-Interactions",
      subtitle: "Zero-lag panning, dynamic zoom physics, and glassmorphic floating palettes.",
      content: [
        "Anurag engineered the interface using React 19 and Motion:",
        "• 60 FPS Infinite Canvas: GPU-accelerated panning and zooming with momentum dampening and dot-grid LOD (Level of Detail) scaling.",
        "• Hairline Floating Palettes: Minimal toolbars that automatically snap to the active node, reducing cursor travel distance across 4K displays.",
        "• Live Token Preview: Instant preview of how generated layouts adapt when switching design system themes (Obsidian Dark vs. Editorial Light)."
      ],
      takeaways: [
        "LOD grid scaling prevented render lag even with 50+ concurrent artboards loaded.",
        "Spring-physics animations created an immediate feeling of physical responsiveness."
      ]
    },
    keyOutcomes: {
      title: "Measurable Impact & Production Adoption",
      subtitle: "Cutting prototype turnaround time by 25% across Fortmindz client discovery phases.",
      content: [
        "StudioAI was integrated into Fortmindz's internal client discovery sprints with remarkable results:",
        "• Prototype turnaround time decreased by -25%, allowing design engineers to deliver functioning interactive web prototypes within 48 hours of initial client briefing.",
        "• Early-stage design exploration time decreased by -30%, enabling teams to explore 3x as many UX concepts prior to engineering lock-in.",
        "• The tool has powered over 10,000 internal exploratory sessions and was showcased in Anurag's viral Medium article on the evolving role of the Design Engineer."
      ],
      takeaways: [
        "-25% faster prototype delivery during high-stakes client pitches.",
        "Proved that combining UI design engineering with generative AI yields massive velocity gains."
      ]
    },
    mockupType: "studioai",
    nextSlug: "carepulse"
  },
  {
    slug: "carepulse",
    title: "CarePulse Health",
    subtitle: "Accessible Telehealth Clinical Triage & Patient Onboarding Portal",
    tagline: "Empowering patients to navigate remote healthcare triage with calm, WCAG AAA accessibility.",
    client: "CarePulse Telemedicine Network",
    companyContext: "Esolz Technologies",
    role: "Lead UI/UX Designer & Accessibility Specialist",
    timeline: "Jul 2024 – Dec 2024 (6 Months)",
    year: "2024",
    category: "Mobile & Health",
    services: [
      "Patient Journey Mapping",
      "Mobile-First Telehealth UX",
      "WCAG 2.1 AAA Accessibility Audit",
      "Design Systems & Token Guidelines"
    ],
    tools: ["Figma", "Adobe XD", "Miro", "WCAG Contrast Analyzers"],
    deliverables: [
      "Responsive patient triage onboarding portal",
      "Instant doctor availability & appointment scheduler",
      "Prescription management & vital telemetry dashboard",
      "High-contrast, screen-reader optimized component kit"
    ],
    metrics: [
      { label: "Booking Completion", value: "3.4x", subtext: "Increase in finalized remote consultations" },
      { label: "Intake Drop-off Rate", value: "-10%", subtext: "Simplified multi-step symptom questionnaire" },
      { label: "A11y Standard", value: "AAA", subtext: "100% WCAG 2.1 compliant across all screens" }
    ],
    heroHighlight: "3.4x Booking Lift · Esolz",
    overview:
      "Navigating medical appointments and clinical questionnaires while sick or anxious is a severe usability challenge. For CarePulse, an expanding telemedicine platform, Anurag led the comprehensive redesign of the mobile and web patient onboarding portal. By replacing complex medical jargon with empathetic microcopy, implementing a guided 3-step symptom triage flow, and adhering strictly to WCAG 2.1 AAA standards, the new experience boosted appointment completions by 3.4x.",
    theChallenge: {
      title: "The Problem: Clinical Friction When Patients Need Help Most",
      subtitle: "High abandonment rates during stressful symptom intake questionnaires.",
      content: [
        "Data telemetry and qualitative user testing revealed why 62% of patients abandoned their initial CarePulse booking attempt:",
        "1. Overwhelming Medical Forms: The intake process presented over 24 consecutive form fields on a single screen without progress indicators, causing immense cognitive fatigue.",
        "2. Poor Mobile Usability for Elderly Patients: Low color contrast, tiny tap targets (sub-32px), and complex nested dropdowns made booking nearly impossible for elderly users.",
        "3. Ambiguity Around Physician Arrival: Patients who booked consultations were left with an ambiguous static screen, causing anxiety regarding whether their doctor was actually online."
      ],
      takeaways: [
        "In healthcare, calmness and clarity are functional requirements, not aesthetic choices.",
        "Breaking lengthy intake forms into bite-sized, single-focus steps reduces perceived complexity dramatically."
      ]
    },
    theApproach: {
      title: "Empathetic, Chunked Onboarding & Live Status",
      subtitle: "Designing a reassuring 3-step triage flow with real-time wait telemetry.",
      content: [
        "Anurag restructured the entire patient onboarding flow around psychological principles of reassurance:",
        "• 3-Step Guided Triage: Broken down into: (1) Primary Symptom Selection with visual anatomical selector; (2) Severity & History quick pills; (3) Preferred Physician & Time slot matching.",
        "• Live Virtual Waiting Room: Once booked, patients enter a calm waiting room displaying the doctor's verified credentials, estimated wait time in minutes, and an interactive connection check (camera, mic, audio).",
        "• Reassuring Microcopy: Replaced sterile medical terms with plain-language explanations and reassuring status badges ('Doctor has reviewed your intake note and is entering the room')."
      ],
      takeaways: [
        "The anatomical symptom selector cut intake completion time from 7.2 minutes to 2.8 minutes.",
        "The virtual waiting room reduced perceived wait times by 45% based on patient exit surveys."
      ]
    },
    theDesignSystem: {
      title: "WCAG AAA Accessible Healthcare Design Tokens",
      subtitle: "Generous 48px tap targets, high-contrast typography, and voice-over testing.",
      content: [
        "Healthcare interfaces must be usable by people with visual impairments, motor tremors, or acute distress:",
        "• Minimum 7:1 Contrast Ratio: Every text element meets or exceeds WCAG 2.1 AAA standards in both daytime and evening viewing environments.",
        "• Touch Targets: Every interactive button, chip, and input has a minimum touch bounding box of 48x48px with generous spacing to eliminate mis-taps.",
        "• Keyboard & Screen Reader Testing: Built with semantic HTML landmarks, descriptive `aria-live` announcements for countdown timers, and full keyboard navigation loops."
      ],
      takeaways: [
        "Zero accessibility violations identified during independent third-party clinical audit.",
        "Scored a 96% task success rate with visually impaired pilot user groups."
      ]
    },
    keyOutcomes: {
      title: "Measurable Clinical Impact & Growth",
      subtitle: "Transforming triage efficiency and driving 3.4x more completed bookings.",
      content: [
        "Within 90 days of launching the redesigned CarePulse patient portal:",
        "• Consultation booking completions increased by 3.4x, generating significant revenue growth for the telemedicine provider.",
        "• Patient intake drop-off plummeted by -10% across mobile web and native web views.",
        "• Positive app store reviews surged, with 82% of user comments specifically praising the 'effortless booking and calm experience'."
      ],
      takeaways: [
        "3.4x increase in completed telemedicine bookings.",
        "Set the gold standard for accessible healthtech design across Esolz Technologies' digital health portfolio."
      ]
    },
    mockupType: "carepulse",
    nextSlug: "finflow"
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return PROJECTS.map((p) => p.slug);
}
