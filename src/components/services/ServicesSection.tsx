"use client";

import React from "react";
import { motion } from "motion/react";
import {
  Palette,
  Layers,
  Code2,
  Sparkles,
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignatureLine } from "@/components/ui/SignatureLine";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  deliverables: string[];
  tags: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "product-design",
    number: "01",
    title: "Product & UI/UX Design",
    subtitle: "User journeys, complex workflows & high-fidelity prototyping",
    description:
      "Crafting human-centered digital products from initial ambiguity to production reality. Specializing in simplifying high-density SaaS workflows, reducing cognitive friction, and ensuring accessible WCAG AAA standards across web and mobile.",
    icon: Palette,
    deliverables: [
      "User research synthesis & persona journey mapping",
      "Low-fidelity wireframing & rapid spatial exploration",
      "Interactive high-fidelity Figma prototypes",
      "Usability testing & cognitive walkthroughs"
    ],
    tags: ["Figma", "FigJam", "SaaS UX", "WCAG AAA"]
  },
  {
    id: "design-systems",
    number: "02",
    title: "Design Systems & Token Architecture",
    subtitle: "Atomic component libraries & automated token synchronization",
    description:
      "Building scalable multi-brand component architecture that eliminates design debt. Establishing automated token pipelines from Figma Variables down to typed Tailwind utilities and CSS custom properties.",
    icon: Layers,
    deliverables: [
      "Three-tier semantic token taxonomy (Primitives, Semantic, Component)",
      "Accessible multi-theme token pipelines (Dark Obsidian & Warm Paper)",
      "60+ production-ready component primitives with auto-layout",
      "Storybook documentation & developer handoff governance"
    ],
    tags: ["Figma Variables", "Style Dictionary", "Storybook", "Tailwind"]
  },
  {
    id: "design-engineering",
    number: "03",
    title: "Design Engineering & Frontend Craft",
    subtitle: "Bridging the gap between Figma artboards and shipping React code",
    description:
      "Writing production-grade frontend code that faithfully preserves design nuance. From fluid layout calculations and spring physics to performant Three.js 3D hero elements and GSAP scroll choreographies.",
    icon: Code2,
    deliverables: [
      "Modern Next.js (App Router) + React 19 architecture",
      "Physics-based micro-interactions via Motion & GSAP",
      "Fluid responsive typography & sub-pixel alignment",
      "Performance optimization & zero hydration errors"
    ],
    tags: ["Next.js", "React 19", "TypeScript", "GSAP", "Three.js"]
  },
  {
    id: "ai-strategy",
    number: "04",
    title: "AI-Assisted UX Strategy & Prototyping",
    subtitle: "Integrating generative AI pipelines into modern design workflows",
    description:
      "Leveraging generative AI (Figma AI, Google Stitch, LLMs) to compress early-stage discovery, automate copywriting variants, and build intuitive direct-manipulation interfaces for AI tools.",
    icon: Sparkles,
    deliverables: [
      "Prompt-to-UI interaction modeling & node canvas design",
      "AI-accelerated wireframe exploration (-25% turnaround)",
      "UX copywriting & multi-variant messaging testing",
      "Explainable AI interface cues & transparent feedback"
    ],
    tags: ["Figma AI", "Google Stitch", "Prompt UX", "Generative Canvas"]
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <SignatureLine orientation="horizontal" className="mb-12 sm:mb-16 opacity-60" />

      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <SectionHeading
          number="03"
          category="SERVICES &amp; EXPERTISE"
          title="Bridging Product Vision &amp; Production Engineering"
          description="A multi-disciplinary skill set combining strategic UX thinking, scalable design systems, and modern frontend engineering."
        />
      </div>

      {/* 2x2 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 sm:p-8 rounded-3xl hairline-border glass-panel bg-[var(--bg-glass-card)] space-y-6 flex flex-col justify-between hover:border-[var(--accent-border)] hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header: Number, Icon, Title */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="mono-label text-xs font-mono text-[var(--accent)]">
                    // {service.number}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs text-[var(--accent)] font-medium mt-1">
                    {service.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-3 pt-4 border-t border-[var(--border-hairline)]">
                <div className="text-[10px] mono-label text-[var(--text-muted)]">
                  KEY DELIVERABLES &amp; IMPACT
                </div>
                <ul className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs text-[var(--text-secondary)] flex items-start gap-2 leading-relaxed"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[10px] sm:text-[11px] text-[var(--badge-text)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
