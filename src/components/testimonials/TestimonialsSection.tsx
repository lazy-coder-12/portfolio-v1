"use client";

import React from "react";
import { motion } from "motion/react";
import { Quote, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignatureLine } from "@/components/ui/SignatureLine";

interface Testimonial {
  name: string;
  role: string;
  organization: string;
  context: string;
  initials: string;
  content: string;
  highlight: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rohan Banerjee",
    role: "VP of Engineering",
    organization: "FinFlow Enterprise Client",
    context: "Collaborated via Fortmindz",
    initials: "RB",
    content:
      "Anurag is that rare design engineer who seamlessly bridges conceptual elegance and production React code. His work on our financial analytics dashboard transformed our weekly reporting speed by 42%. He doesn't just hand off Figma files; he partners through production deployment.",
    highlight: "+42% Reporting Speed"
  },
  {
    name: "Debolina Sen",
    role: "Lead Product Manager",
    organization: "Esolz Technologies",
    context: "Design Systems Pod Lead",
    initials: "DS",
    content:
      "Working with Anurag on the Nexus design system was a masterclass in architectural rigor. He unified 14 disparate web and mobile applications under a single token pipeline, boosting component code reuse by 25% and shaving 5 full days off our sprint handoffs.",
    highlight: "+25% Code Reuse & -5 Days Cycle"
  },
  {
    name: "Amitabh Mukherjee",
    role: "Senior Director of Technology",
    organization: "Healthcare Innovation Group",
    context: "Collaborated on CarePulse",
    initials: "AM",
    content:
      "Anurag’s obsession with WCAG 2.1 AAA accessibility and empathetic patient journeys turned CarePulse from an abandoned portal into a 3.4x booking engine. His calm, thoughtful approach to design engineering elevates everyone around him.",
    highlight: "3.4x Booking Lift & WCAG AAA"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <SignatureLine orientation="horizontal" className="mb-12 sm:mb-16 opacity-60" />

      {/* Section Header */}
      <div className="mb-12 sm:mb-16">
        <SectionHeading
          number="07"
          category="ENDORSEMENTS &amp; FEEDBACK"
          title="Trusted by Product Leaders &amp; Engineers"
          description="Direct feedback from engineering leads, product managers, and enterprise stakeholders who have collaborated with me across Fortmindz and Esolz."
        />
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="p-6 sm:p-8 rounded-3xl hairline-border glass-panel bg-[var(--bg-glass-card)] flex flex-col justify-between space-y-6 hover:border-[var(--accent-border)] hover:shadow-xl transition-all duration-300 relative group"
          >
            <div className="space-y-4">
              {/* Quote Icon & Highlight Badge */}
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3">
                <Quote className="w-5 h-5 text-[var(--accent)] opacity-60" />
                <span className="px-2.5 py-0.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] text-[10px] font-mono font-medium text-[var(--accent)]">
                  {t.highlight}
                </span>
              </div>

              {/* Quote Body */}
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed italic">
                &quot;{t.content}&quot;
              </p>
            </div>

            {/* Author Attribution */}
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-hairline)]">
              <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] flex items-center justify-center font-serif text-xs font-bold text-[var(--accent)] shrink-0">
                {t.initials}
              </div>
              <div className="space-y-0.5 min-w-0">
                <div className="text-xs font-semibold text-[var(--text-primary)] truncate">
                  {t.name}
                </div>
                <div className="text-[11px] text-[var(--accent)] font-medium truncate">
                  {t.role} · {t.organization}
                </div>
                <div className="text-[10px] text-[var(--text-muted)] font-mono truncate">
                  {t.context}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
