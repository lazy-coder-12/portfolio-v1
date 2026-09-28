"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Briefcase,
  GraduationCap,
  Award,
  Compass,
  RotateCcw,
  Move,
  MapPin,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { MILESTONES, Milestone } from "@/lib/milestones";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignatureLine } from "@/components/ui/SignatureLine";
import { cn } from "@/lib/utils";

export function MilestonesBoard() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [activeMilestone, setActiveMilestone] = useState<Milestone | null>(null);

  const getTypeIcon = (type: Milestone["type"]) => {
    switch (type) {
      case "work":
        return <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />;
      case "education":
        return <GraduationCap className="w-3.5 h-3.5 text-amber-400" />;
      case "certification":
        return <Award className="w-3.5 h-3.5 text-emerald-400" />;
      default:
        return <Compass className="w-3.5 h-3.5 text-[var(--accent)]" />;
    }
  };

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto w-full overflow-hidden">
      <SignatureLine orientation="horizontal" className="mb-12 sm:mb-16 opacity-60" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
        <SectionHeading
          number="02"
          category="CAREER MILESTONES &amp; JOURNEY"
          title="From Financial Systems to Design Engineering"
          description="An interactive trajectory through Fortmindz, Esolz, and early product internships—combining financial rigor with high-craft UI/UX engineering."
        />

        {/* Desktop Canvas Instruction Pill */}
        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full hairline-border glass-panel text-xs text-[var(--text-muted)] font-mono self-start md:self-end">
          <Move className="w-3.5 h-3.5 text-[var(--accent)] animate-pulse" />
          <span>DRAG CANVAS TO EXPLORE</span>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP: INTERACTIVE DRAGGABLE BOARD (LG+)
          ========================================================================= */}
      <div className="hidden lg:block relative w-full h-[640px] rounded-3xl hairline-border glass-panel overflow-hidden bg-[var(--bg-canvas)] shadow-2xl">
        {/* Spatial Grid Dot Matrix */}
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, var(--text-muted) 1px, transparent 1px)`,
            backgroundSize: "24px 24px"
          }}
        />

        {/* Draggable Canvas World */}
        <motion.div
          ref={canvasRef}
          drag
          dragConstraints={{ left: -420, right: 40, top: -40, bottom: 40 }}
          dragElastic={0.15}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }}
          className="relative w-[1540px] h-[640px] cursor-grab active:cursor-grabbing p-8"
        >
          {/* Connecting SVG Thread Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            {/* Thread between top row: Fortmindz (40) -> Esolz (400) */}
            <path
              d="M 350 120 C 370 120, 380 120, 400 120"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.5"
              fill="none"
            />
            {/* Esolz (400) -> Cert (760) */}
            <path
              d="M 710 120 C 730 120, 740 120, 760 120"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.4"
              fill="none"
            />
            {/* Cert (760) -> UpGrad (1120) */}
            <path
              d="M 1070 120 C 1090 120, 1100 120, 1120 120"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.3"
              fill="none"
            />
            {/* Upward thread from Ioteraction (220, 350) -> Esolz (400, 40) */}
            <path
              d="M 370 350 C 370 240, 440 220, 440 180"
              stroke="var(--rule-line)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.6"
              fill="none"
            />
            {/* Upward thread from Education (580, 350) -> Cert (760, 40) */}
            <path
              d="M 730 350 C 730 240, 800 220, 800 180"
              stroke="var(--rule-line)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.6"
              fill="none"
            />
          </svg>

          {/* Render Milestone Cards spatially */}
          {MILESTONES.map((m) => (
            <motion.div
              key={m.id}
              style={{
                position: "absolute",
                left: `${m.coordinates.x}px`,
                top: `${m.coordinates.y}px`,
                width: "310px"
              }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveMilestone(m)}
              className="p-5 rounded-2xl hairline-border glass-panel bg-[var(--bg-glass-card)] space-y-3 cursor-pointer shadow-lg hover:border-[var(--accent-border)] hover:shadow-xl transition-all select-none"
            >
              {/* Header Row */}
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[var(--accent-muted)] flex items-center justify-center">
                    {getTypeIcon(m.type)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[var(--accent)]">
                    {m.year}
                  </span>
                </div>
                <span className="text-[10px] mono-label text-[var(--text-muted)] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[var(--text-muted)]" />
                  <span>{m.location}</span>
                </span>
              </div>

              {/* Title & Role */}
              <div className="space-y-0.5">
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  {m.role}
                </div>
                <div className="text-xs font-medium text-[var(--accent)]">
                  {m.organization}
                </div>
              </div>

              {/* Tagline */}
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                {m.tagline}
              </p>

              {/* Metrics Pill (if any) */}
              {m.metrics && (
                <div className="flex items-center gap-2 pt-1">
                  {m.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="px-2 py-0.5 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] text-[10px] font-mono text-[var(--accent)]"
                    >
                      <strong>{metric.value}</strong> {metric.label}
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1 pt-1">
                {m.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-full bg-[var(--badge-bg)] text-[9px] text-[var(--badge-text)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Floating Legend / Control Pill */}
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-[11px] mono-label text-[var(--text-muted)] pointer-events-none">
          <div className="flex items-center gap-3 bg-[var(--bg-glass)] px-3 py-1.5 rounded-full hairline-border pointer-events-auto">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)]" /> Work
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Certification
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Education
            </span>
          </div>

          <div className="bg-[var(--bg-glass)] px-3 py-1.5 rounded-full hairline-border pointer-events-auto flex items-center gap-1">
            <span>6 CAREER NODES</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MOBILE & TABLET: ACCESSIBLE VERTICAL TIMELINE (< LG)
          ========================================================================= */}
      <div className="lg:hidden relative pl-6 border-l-2 border-[var(--border-hairline)] space-y-8">
        {MILESTONES.map((m, index) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative space-y-3"
          >
            {/* Step Node Dot */}
            <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[var(--bg-canvas)] border-2 border-[var(--accent)] flex items-center justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            </div>

            {/* Timeline Item Content */}
            <div className="p-5 rounded-2xl hairline-border glass-panel bg-[var(--bg-glass-card)] space-y-3">
              {/* Top Row: Year & Location */}
              <div className="flex items-center justify-between text-xs mono-label">
                <span className="font-semibold text-[var(--accent)]">{m.period}</span>
                <span className="text-[var(--text-muted)] flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  <span>{m.location}</span>
                </span>
              </div>

              {/* Title & Org */}
              <div>
                <h4 className="font-serif text-lg font-semibold text-[var(--text-primary)]">
                  {m.role}
                </h4>
                <div className="text-xs text-[var(--accent)] font-medium">
                  {m.organization}
                </div>
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {m.tagline}
              </p>

              {/* Bullet Highlights */}
              <ul className="space-y-1.5 pt-1 border-t border-[var(--border-hairline)]">
                {m.highlights.map((h, i) => (
                  <li key={i} className="text-[11px] text-[var(--text-secondary)] flex items-start gap-2">
                    <CheckCircle2 className="w-3 h-3 text-[var(--accent)] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Metrics Pills */}
              {m.metrics && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {m.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="px-2.5 py-1 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] text-xs font-mono text-[var(--accent)] font-medium"
                    >
                      {metric.value} {metric.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
