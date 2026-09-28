"use client";

import React from "react";
import { motion } from "motion/react";
import { PenTool, Code, Cpu, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignatureLine } from "@/components/ui/SignatureLine";

interface ToolCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  tools: { name: string; tag: string; highlight?: boolean }[];
}

const TOOL_CATEGORIES: ToolCategory[] = [
  {
    title: "Design & Prototyping",
    icon: PenTool,
    description: "Core tools for spatial design, design systems, and interaction prototyping.",
    tools: [
      { name: "Figma", tag: "Variables & Auto-Layout", highlight: true },
      { name: "FigJam", tag: "User Flows & Journey Maps" },
      { name: "Adobe XD", tag: "Rapid Wireframing" },
      { name: "Miro", tag: "Stakeholder Workshops" },
      { name: "Photopea", tag: "Asset Optimization" },
      { name: "Sketch", tag: "Legacy Migration" }
    ]
  },
  {
    title: "Engineering & Frontend",
    icon: Code,
    description: "Production-grade frontend stack ensuring zero visual compromise.",
    tools: [
      { name: "Next.js 15", tag: "App Router & SSR", highlight: true },
      { name: "React 19", tag: "Server Components" },
      { name: "TypeScript", tag: "Strict Type Safety", highlight: true },
      { name: "Tailwind CSS v4", tag: "Token System" },
      { name: "GSAP", tag: "ScrollTrigger & Ticker" },
      { name: "Motion", tag: "Spring Micro-Interactions" },
      { name: "Three.js / R3F", tag: "3D Elements" }
    ]
  },
  {
    title: "AI Acceleration",
    icon: Cpu,
    description: "Cutting-edge generative workflows speeding up research and prototyping.",
    tools: [
      { name: "Figma AI", tag: "Wireframe Generation", highlight: true },
      { name: "Google Stitch", tag: "Spatial UX Prototyping", highlight: true },
      { name: "Claude 3.7", tag: "UX Copywriting & Logic" },
      { name: "Gemini 2.5", tag: "Multimodal Research" },
      { name: "ChatGPT", tag: "Information Architecture" },
      { name: "Perplexity", tag: "Competitive Benchmarking" }
    ]
  },
  {
    title: "Workflow & Governance",
    icon: Workflow,
    description: "Handoff pipelines, design system documentation, and team collaboration.",
    tools: [
      { name: "Storybook", tag: "Living Component Hub", highlight: true },
      { name: "Git & GitHub", tag: "Version Control" },
      { name: "Style Dictionary", tag: "Token Build Pipeline" },
      { name: "Jira / Linear", tag: "Agile Sprints" },
      { name: "Notion", tag: "PRDs & Design Docs" }
    ]
  }
];

export function ToolsSection() {
  return (
    <section id="tools" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <SignatureLine orientation="horizontal" className="mb-12 sm:mb-16 opacity-60" />

      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <SectionHeading
          number="05"
          category="TOOLKIT &amp; STACK"
          title="Mastery Across the Modern Digital Stack"
          description="A curated view of the software, frameworks, and generative AI platforms I leverage daily to design, test, and ship high-impact digital experiences."
        />
      </div>

      {/* 4-Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TOOL_CATEGORIES.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-6 rounded-3xl hairline-border glass-panel bg-[var(--bg-glass-card)] flex flex-col justify-between space-y-6 hover:border-[var(--accent-border)] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)] group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] mono-label text-[var(--text-muted)]">
                    {category.tools.length} TOOLS
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Tool Chips */}
              <div className="space-y-2 pt-2 border-t border-[var(--border-hairline)]">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-2 rounded-xl bg-[var(--bg-canvas)] border border-[var(--border-hairline)] flex items-center justify-between gap-2 hover:border-[var(--accent-border)] transition-colors"
                  >
                    <span className="text-xs font-medium text-[var(--text-primary)]">
                      {tool.name}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] truncate max-w-[140px]">
                      {tool.tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
