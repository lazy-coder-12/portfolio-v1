"use client";

import React from "react";
import { motion } from "motion/react";
import { Search, Compass, Sliders, Rocket, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignatureLine } from "@/components/ui/SignatureLine";

interface ProcessStep {
  number: string;
  title: string;
  phase: string;
  duration: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  activities: string[];
}

const STEPS: ProcessStep[] = [
  {
    number: "01",
    phase: "DISCOVERY & SYNTHESIS",
    title: "Discover & Map",
    duration: "Week 1–2",
    icon: Search,
    description:
      "Deconstructing complex business problems into clear user mental models. Aligning on core KPI benchmarks, interviewing end-users, and mapping friction points.",
    activities: [
      "Stakeholder interviews & success metrics definition",
      "Competitive teardowns & cognitive walkthroughs",
      "Information architecture & user journey mapping",
      "Quantitative baseline metrics establishment"
    ]
  },
  {
    number: "02",
    phase: "EXPLORATION & VALIDATION",
    title: "Wireframe & Prototype",
    duration: "Week 2–4",
    icon: Compass,
    description:
      "Rapid spatial exploration using low-fidelity prototypes and AI-assisted variant generation (Google Stitch & Figma AI), testing hypotheses before visual lock-in.",
    activities: [
      "Low-fidelity wireframe flows & layout branching",
      "AI-accelerated prototype generation (-25% time)",
      "Interactive click-through user validation",
      "Usability testing with real domain practitioners"
    ]
  },
  {
    number: "03",
    phase: "CRAFT & SYSTEMATIZATION",
    title: "Systematize & Refine",
    duration: "Week 4–6",
    icon: Sliders,
    description:
      "Elevating visual craft, fluid typography, and sub-pixel micro-interactions. Systematizing tokens into Figma Variables and ensuring strict WCAG 2.1 AAA accessibility.",
    activities: [
      "High-fidelity visual design & editorial typography",
      "Three-tier semantic token architecture mapping",
      "Micro-interaction & spring motion specifications",
      "WCAG 2.1 AAA contrast & touch target auditing"
    ]
  },
  {
    number: "04",
    phase: "ENGINEERING & DEPLOYMENT",
    title: "Code, Test & Ship",
    duration: "Week 6+",
    icon: Rocket,
    description:
      "Translating Figma components into production-grade React/Next.js code. Rigorous multi-breakpoint verification across 9 devices and zero-drift developer handoff.",
    activities: [
      "Next.js App Router & Tailwind CSS implementation",
      "Figma Variables to CSS tokens automated sync",
      "Multi-breakpoint responsive audit (320px to 2560px)",
      "Continuous performance & Lighthouse optimization"
    ]
  }
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <SignatureLine orientation="horizontal" className="mb-12 sm:mb-16 opacity-60" />

      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <SectionHeading
          number="04"
          category="PROCESS &amp; METHODOLOGY"
          title="A Disciplined, Velocity-Driven Framework"
          description="How I take projects from ambiguous requirements to polished, high-performing digital products—combining strategic discovery with engineering rigor."
        />
      </div>

      {/* 4-Step Grid with Connecting Aesthetics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-3xl hairline-border glass-panel bg-[var(--bg-glass-card)] flex flex-col justify-between space-y-6 hover:border-[var(--accent-border)] hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Top Row: Number & Icon */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3">
                  <span className="text-2xl sm:text-3xl font-serif font-bold text-[var(--accent)]">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] mono-label text-[var(--text-muted)]">
                    {step.phase}
                  </span>
                  <h3 className="text-xl font-serif font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mt-0.5">
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[var(--accent)]">
                    {step.duration}
                  </span>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Activities Checklist */}
              <div className="space-y-2 pt-3 border-t border-[var(--border-hairline)]">
                <div className="text-[10px] mono-label text-[var(--text-muted)]">
                  KEY ACTIVITIES
                </div>
                <ul className="space-y-1.5">
                  {step.activities.map((act, i) => (
                    <li key={i} className="text-[11px] text-[var(--text-secondary)] flex items-start gap-1.5">
                      <span className="text-[var(--accent)] font-bold">•</span>
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
