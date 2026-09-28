export interface Milestone {
  id: string;
  year: string;
  period: string;
  title: string;
  role: string;
  organization: string;
  location: string;
  type: "work" | "education" | "certification" | "initiative";
  tagline: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
  coordinates: { x: number; y: number }; // For desktop canvas spatial positioning
}

export const MILESTONES: Milestone[] = [
  {
    id: "fortmindz",
    year: "2026",
    period: "Jan 2026 – Present",
    title: "Product Design & AI Acceleration",
    role: "Lead UI/UX Designer & Design Engineer",
    organization: "Fortmindz Private Limited",
    location: "Remote",
    type: "work",
    tagline: "Pioneering AI-enhanced UX pipelines and high-velocity web/mobile product design.",
    highlights: [
      "Integrated AI tools (Figma AI, Google Stitch) cutting prototype turnaround time by 25%.",
      "Accelerated early-stage design exploration and research synthesis by 30%.",
      "Crafted cohesive UX copywriting and aligned marketing landing pages with core product workflows.",
      "Delivered end-to-end design engineering in Next.js and Tailwind CSS."
    ],
    metrics: [
      { label: "Prototype Time", value: "-25%" },
      { label: "Research Speed", value: "+30%" }
    ],
    tags: ["Remote", "AI UX", "Next.js", "Design Engineering"],
    coordinates: { x: 40, y: 40 }
  },
  {
    id: "esolz",
    year: "2024–2025",
    period: "May 2024 – Aug 2025",
    title: "Enterprise Systems & Multi-Brand UX",
    role: "Senior UI/UX Designer & System Architect",
    organization: "Esolz Technologies",
    location: "Kolkata, India",
    type: "work",
    tagline: "Spearheading enterprise design systems and complex B2B workflow simplification.",
    highlights: [
      "Designed intuitive UX for enterprise web/mobile applications with complex multi-role workflows.",
      "Lowered end-user operational error rate by 10% through rigorous usability testing.",
      "Established centralized multi-brand design system with 25% increase in component code reuse.",
      "Accelerated cross-functional developer handoff by 15%, reducing client feedback cycles by 5 days."
    ],
    metrics: [
      { label: "Component Reuse", value: "+25%" },
      { label: "User Errors", value: "-10%" },
      { label: "Cycle Time", value: "-5 Days" }
    ],
    tags: ["Design Systems", "Tokens", "WCAG AAA", "Enterprise B2B"],
    coordinates: { x: 400, y: 40 }
  },
  {
    id: "certification-ux",
    year: "2023",
    period: "2023",
    title: "Specialization in UI/UX Design",
    role: "Certified UX Designer",
    organization: "Internshala & Interaction Design Labs",
    location: "Online",
    type: "certification",
    tagline: "Formalizing interaction models, cognitive heuristics, and atomic design methodology.",
    highlights: [
      "Deep-dive into accessibility standards (WCAG 2.1), cognitive load theory, and usability testing.",
      "Mastered atomic design principles, token taxonomy, and design system governance."
    ],
    tags: ["Certification", "WCAG 2.1", "Atomic Design"],
    coordinates: { x: 760, y: 40 }
  },
  {
    id: "upgrad",
    year: "2022",
    period: "2022",
    title: "Advanced Digital Marketing & Growth",
    role: "Certified Marketing Strategist",
    organization: "UpGrad",
    location: "Online",
    type: "certification",
    tagline: "Grounded user acquisition, conversion funnels, and data-driven product analytics.",
    highlights: [
      "Bridging digital growth mechanics, behavioral psychology, and product conversion optimization.",
      "Understanding the end-to-end user funnel from acquisition to retention."
    ],
    tags: ["Growth", "CRO", "Funnel Analytics"],
    coordinates: { x: 1120, y: 40 }
  },
  {
    id: "ioteraction",
    year: "2021–2022",
    period: "Sept 2021 – Mar 2022",
    title: "Foundational Product Design & UI",
    role: "UI/UX Design Intern",
    organization: "Ioteraction Technologies",
    location: "Remote",
    type: "work",
    tagline: "Early-stage concept visualization, interactive wireframes, and design QA.",
    highlights: [
      "Created wireframes, interactive prototypes, and high-fidelity mockups for emerging startups.",
      "Built standardized design system components reducing design QA defect cycles by 5%."
    ],
    metrics: [{ label: "QA Defects", value: "-5%" }],
    tags: ["Internship", "Wireframing", "Figma", "Design QA"],
    coordinates: { x: 220, y: 350 }
  },
  {
    id: "education",
    year: "2019–2022",
    period: "2019 – 2022",
    title: "B.Com (Hons.) in Accountancy & Finance",
    role: "Undergraduate Degree",
    organization: "The Bhawanipur Education Society College",
    location: "Kolkata, India",
    type: "education",
    tagline: "Grounding analytical reasoning, financial workflows, and quantitative discipline.",
    highlights: [
      "Honors degree specializing in corporate finance, statistical analysis, and accounting.",
      "Directly informs Anurag's deep expertise in financial SaaS and quantifiable business impact."
    ],
    tags: ["Accountancy", "Finance", "Quantitative Analytics"],
    coordinates: { x: 580, y: 350 }
  }
];
