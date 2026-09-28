"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { Project } from "@/lib/projects";

interface WorkListViewProps {
  projects: Project[];
}

export function WorkListView({ projects }: WorkListViewProps) {
  return (
    <div className="rounded-3xl hairline-border glass-panel overflow-hidden bg-[var(--bg-glass-card)]">
      {/* Table Header (Hidden on Mobile) */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4 border-b border-[var(--border-hairline)] text-[11px] mono-label text-[var(--text-muted)]">
        <div className="col-span-4">PROJECT &amp; SCOPE</div>
        <div className="col-span-3">ORGANIZATION &amp; ROLE</div>
        <div className="col-span-2">YEAR</div>
        <div className="col-span-2">KEY OUTCOME</div>
        <div className="col-span-1 text-right">ACTION</div>
      </div>

      {/* Project Rows */}
      <div className="divide-y divide-[var(--border-hairline)]">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group hover:bg-[var(--bg-surface-hover)] transition-colors duration-200"
          >
            <Link
              href={`/work/${project.slug}`}
              className="block p-5 sm:px-6 sm:py-5 focus-visible:outline-hidden"
            >
              {/* Desktop Grid Row */}
              <div className="hidden md:grid grid-cols-12 gap-4 items-center">
                {/* Project Title & Tagline */}
                <div className="col-span-4 space-y-0.5">
                  <div className="font-serif text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-2">
                    <span>{project.title}</span>
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] line-clamp-1">
                    {project.subtitle}
                  </div>
                </div>

                {/* Organization & Role */}
                <div className="col-span-3 space-y-0.5">
                  <div className="text-xs font-medium text-[var(--text-primary)] flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[var(--accent)]" />
                    <span>{project.companyContext}</span>
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)]">
                    {project.role}
                  </div>
                </div>

                {/* Year & Category */}
                <div className="col-span-2 space-y-0.5">
                  <div className="text-xs font-mono text-[var(--text-primary)]">
                    {project.year}
                  </div>
                  <div className="text-[10px] mono-label text-[var(--text-muted)]">
                    {project.category}
                  </div>
                </div>

                {/* Metric Badge */}
                <div className="col-span-2">
                  <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] text-[11px] font-mono font-medium text-[var(--accent)]">
                    <span>{project.metrics[0].value}</span>
                    <span className="text-[9px] text-[var(--text-muted)]">{project.metrics[0].label}</span>
                  </div>
                </div>

                {/* Action Arrow */}
                <div className="col-span-1 flex justify-end">
                  <div className="w-8 h-8 rounded-full hairline-border flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent-border)] transition-all">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Mobile Condensed Layout */}
              <div className="md:hidden space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] mono-label text-[var(--accent)]">
                      {project.companyContext} · {project.year}
                    </span>
                    <h4 className="font-serif text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                      {project.title}
                    </h4>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] shrink-0" />
                </div>

                <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                  {project.subtitle}
                </p>

                <div className="flex items-center justify-between pt-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] text-xs font-mono font-medium text-[var(--accent)]">
                    <span>{project.metrics[0].value}</span>
                    <span className="text-[10px] text-[var(--text-muted)]">
                      {project.metrics[0].label}
                    </span>
                  </div>
                  <span className="text-[11px] text-[var(--text-muted)] font-mono">
                    {project.category}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
