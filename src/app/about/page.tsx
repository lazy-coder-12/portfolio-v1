import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  MapPin,
  Clock,
  Compass,
  FileText
} from "lucide-react";
import { PERSONAL_INFO, SKILLS_DATA } from "@/lib/constants";
import { SharpSlideButton } from "@/components/ui/SharpSlideButton";
import { SignatureLine } from "@/components/ui/SignatureLine";

export const metadata: Metadata = {
  title: "About — Anurag Verma",
  description:
    "Learn about Anurag Verma — Lead UI/UX Designer & Design Engineer crafting high-conversion digital products, design systems, and frontend interfaces.",
};

const PHILOSOPHY_PILLARS = [
  {
    number: "01",
    title: "High Agency & Radical Ownership",
    description:
      "I don't just hand off Figma links—I stay embedded until the product is built, tested, accessible, and delighting users in production.",
    tag: "Execution",
  },
  {
    number: "02",
    title: "Systems-First Scalability",
    description:
      "Every button, type token, and spacing primitive is architected to scale. I build design systems that enable cross-functional engineering teams to ship faster.",
    tag: "Architecture",
  },
  {
    number: "03",
    title: "Conversion & Business Impact",
    description:
      "Aesthetics are useless without function. I align visual polish with funnel conversion metrics, churn reduction, and intuitive user psychology.",
    tag: "Metrics",
  },
  {
    number: "04",
    title: "AI-Augmented Craft",
    description:
      "Leveraging Claude, ChatGPT, and Figma AI to compress research, test hypotheses rapidly, and explore vast design permutations in record time.",
    tag: "Velocity",
  },
];

const EXPERIENCE_TIMELINE = [
  {
    company: "Fortmindz Private Limited",
    role: "Lead UI/UX Designer & Design Engineer",
    period: "2024 — Present",
    location: "Kolkata, India",
    type: "Full-Time",
    highlights: [
      "Directed end-to-end design and design token architecture across 6 enterprise SaaS and AI-driven platforms.",
      "Accelerated design sprint velocity by 30% through AI-assisted research and component standardization.",
      "Partnered directly with engineering directors to build pixel-perfect React/Next.js frontend implementations.",
    ],
  },
  {
    company: "Esolz Technologies",
    role: "UI/UX Designer",
    period: "2023 — 2024",
    location: "Kolkata, India",
    type: "Full-Time",
    highlights: [
      "Engineered multi-brand design systems, boosting component reuse and cross-team alignment by 25%.",
      "Redesigned high-traffic e-commerce and fintech portals, reducing user drop-off and checkout friction.",
      "Authored WCAG 2.1 AA accessibility guidelines adopted across the design team.",
    ],
  },
  {
    company: "Independent Product Practice",
    role: "Design Consultant & Frontend Developer",
    period: "2022 — 2023",
    location: "Remote",
    type: "Contract",
    highlights: [
      "Designed zero-to-one MVP interfaces for early-stage founders and venture-backed startups.",
      "Delivered production-ready landing pages, interactive dashboards, and design component kits.",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="py-8 sm:py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="space-y-6 sm:space-y-8 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono uppercase tracking-wider text-neutral-700 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#e95810] animate-pulse" />
          <span>About Anurag Verma</span>
        </div>

        <h1 className="font-sans text-[28px] sm:text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-neutral-950 leading-[1.12] break-words">
          Bridging design craft
          <br className="sm:hidden" />
          {" "}with frontend engineering.
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-sans leading-relaxed">
          I am a UI/UX Designer and Design Engineer based in Kolkata, India. With over two years of hands-on experience at Fortmindz and Esolz, I specialize in architecting complex web applications, conversion-driven SaaS products, and comprehensive design systems.
        </p>

        {/* Quick Stat Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 pt-2">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/10 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold font-sans text-neutral-950">2+</div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-1">
              Years Experience
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/10 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold font-sans text-neutral-950">30%</div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-1">
              Faster Research &amp; Delivery
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/10 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold font-sans text-neutral-950">25%</div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-1">
              Component Reuse Growth
            </div>
          </div>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-black/10 shadow-2xs">
            <div className="text-2xl sm:text-3xl font-bold font-sans text-[#e95810]">#E95810</div>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mt-1">
              Signature Palette
            </div>
          </div>
        </div>
      </section>

      <SignatureLine orientation="horizontal" className="my-16 sm:my-24 opacity-40" />

      {/* =========================================================================
          CORE PHILOSOPHY / PILLARS
          ========================================================================= */}
      <section className="space-y-12">
        <div className="space-y-2 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            // PHILOSOPHY &amp; ETHOS
          </div>
          <h2 className="font-sans text-2xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
            How I approach building modern software
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 hover:border-black/25 transition-all shadow-2xs space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-[#e95810]">
                  {pillar.number}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-neutral-100 text-[10px] font-mono uppercase tracking-wider text-neutral-600">
                  {pillar.tag}
                </span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-semibold text-neutral-950">
                {pillar.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <SignatureLine orientation="horizontal" className="my-16 sm:my-24 opacity-40" />

      {/* =========================================================================
          CAREER TRAJECTORY & EXPERIENCE
          ========================================================================= */}
      <section className="space-y-12">
        <div className="space-y-2 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            // TRACK RECORD
          </div>
          <h2 className="font-sans text-2xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {EXPERIENCE_TIMELINE.map((exp, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-black/10 hover:border-black/25 transition-all shadow-2xs space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-black/10">
                <div>
                  <h3 className="font-sans text-xl sm:text-2xl font-semibold text-neutral-950">
                    {exp.company}
                  </h3>
                  <div className="text-sm font-medium text-[#e95810] mt-0.5">
                    {exp.role}
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <span>·</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((h, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 text-sm sm:text-[15px] text-neutral-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e95810] mt-2 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SignatureLine orientation="horizontal" className="my-16 sm:my-24 opacity-40" />

      {/* =========================================================================
          TOOLKIT & TECHNICAL SKILLS
          ========================================================================= */}
      <section className="space-y-12">
        <div className="space-y-2 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            // ARSENAL
          </div>
          <h2 className="font-sans text-2xl sm:text-4xl font-semibold tracking-tight text-neutral-950">
            Tools, Technologies &amp; Workflows
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Design Tools */}
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-neutral-800">
              <Layers className="w-4 h-4 text-[#e95810]" />
              <span>Design &amp; Systems</span>
            </div>
            <div className="space-y-3">
              {SKILLS_DATA.designTools.map((tool) => (
                <div key={tool.name} className="space-y-0.5">
                  <div className="flex items-center justify-between text-sm font-medium text-neutral-900">
                    <span>{tool.name}</span>
                    <span className="text-xs font-mono text-[#e95810]">{tool.level}</span>
                  </div>
                  <p className="text-xs text-neutral-500">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools */}
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-neutral-800">
              <Cpu className="w-4 h-4 text-[#e95810]" />
              <span>AI Acceleration</span>
            </div>
            <div className="space-y-3">
              {SKILLS_DATA.aiTools.map((tool) => (
                <div key={tool.name} className="space-y-0.5">
                  <div className="flex items-center justify-between text-sm font-medium text-neutral-900">
                    <span>{tool.name}</span>
                    <span className="text-xs font-mono text-neutral-500">{tool.tag}</span>
                  </div>
                  <p className="text-xs text-neutral-500">{tool.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Code */}
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-6">
            <div className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-neutral-800">
              <Code2 className="w-4 h-4 text-[#e95810]" />
              <span>Frontend Engineering</span>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {SKILLS_DATA.frontendSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full bg-neutral-100 text-xs font-mono text-neutral-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          RESUME & CONTACT CTA
          ========================================================================= */}
      <section className="mt-20 sm:mt-28 p-8 sm:p-14 rounded-3xl bg-white border border-black/10 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-neutral-950">
            Want to review my detailed qualifications?
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 font-sans">
            Download my comprehensive resume or reach out directly to discuss open roles and collaborations.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <SharpSlideButton
            href="/resume.pdf"
            variant="dark"
            size="md"
            external
            icon={<FileText className="w-4 h-4" />}
            aria-label="Download resume"
          >
            Download Resume
          </SharpSlideButton>

          <SharpSlideButton
            href="/contact"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            aria-label="Contact Anurag"
          >
            Get in Touch
          </SharpSlideButton>
        </div>
      </section>
    </div>
  );
}
