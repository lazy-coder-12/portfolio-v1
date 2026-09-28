"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { Project } from "@/lib/projects";
import { FinFlowMockup } from "./mockups/FinFlowMockup";
import { NexusMockup } from "./mockups/NexusMockup";
import { StudioAIMockup } from "./mockups/StudioAIMockup";
import { CarePulseMockup } from "./mockups/CarePulseMockup";

interface WorkCardProps {
  project: Project;
  index: number;
}

export function WorkCard({ project, index }: WorkCardProps) {
  const renderMockup = () => {
    switch (project.mockupType) {
      case "finflow":
        return <FinFlowMockup />;
      case "nexus":
        return <NexusMockup />;
      case "studioai":
        return <StudioAIMockup />;
      case "carepulse":
        return <CarePulseMockup />;
      default:
        return null;
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-3xl hairline-border glass-panel bg-[var(--bg-glass-card)] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-xl hover:-translate-y-1"
    >
      {/* Top Media / Interactive Mockup Area */}
      <div className="p-4 sm:p-6 pb-2 overflow-hidden">
        <Link
          href={`/work/${project.slug}`}
          className="block w-full overflow-hidden rounded-2xl border border-[var(--border-hairline)] bg-[var(--bg-canvas)] transition-transform duration-500 ease-[var(--ease-smooth)] group-hover:scale-[1.015]"
          tabIndex={-1}
          aria-hidden="true"
        >
          {renderMockup()}
        </Link>
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 sm:p-7 pt-3 space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          {/* Metadata Row: Company & Year */}
          <div className="flex items-center justify-between text-[11px] mono-label text-[var(--text-muted)]">
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>{project.companyContext}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-[var(--text-muted)]" />
              <span>{project.year}</span>
            </div>
          </div>

          {/* Project Title & Subtitle */}
          <div>
            <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              <Link href={`/work/${project.slug}`} className="focus-visible:outline-hidden">
                {project.title}
              </Link>
            </h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 line-clamp-2 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Service & Tag Pills */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.services.slice(0, 3).map((service) => (
              <span
                key={service}
                className="px-2.5 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[10px] sm:text-[11px] text-[var(--badge-text)] font-sans"
              >
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Metrics Bar & CTA */}
        <div className="pt-4 border-t border-[var(--border-hairline)] flex items-center justify-between gap-3">
          {/* Hero Highlight Metric */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] text-xs font-mono font-medium text-[var(--accent)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span>{project.heroHighlight}</span>
          </div>

          {/* Read Case Study Trigger */}
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
