"use client";

import React, { useState, useMemo } from "react";
import { LayoutGrid, List, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS, Project } from "@/lib/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WorkCard } from "./WorkCard";
import { WorkListView } from "./WorkListView";
import { SignatureLine } from "@/components/ui/SignatureLine";
import { cn } from "@/lib/utils";

type CategoryFilter = "All" | "SaaS & AI" | "Design Systems" | "Mobile & Health";
type ViewMode = "grid" | "list";

export function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  const categories: { label: CategoryFilter; count: number }[] = [
    { label: "All", count: PROJECTS.length },
    { label: "SaaS & AI", count: PROJECTS.filter((p) => p.category === "SaaS & AI").length },
    { label: "Design Systems", count: PROJECTS.filter((p) => p.category === "Design Systems").length },
    { label: "Mobile & Health", count: PROJECTS.filter((p) => p.category === "Mobile & Health").length }
  ];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="work" className="relative py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div id="experiments" className="absolute -top-24 left-0" />
      {/* Top Section Anchor Line */}
      <SignatureLine orientation="horizontal" className="mb-12 sm:mb-16 opacity-60" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 sm:mb-14">
        <SectionHeading
          number="01"
          category="SELECTED CASE STUDIES"
          title="Crafted Systems & High-Impact Digital Products"
          description="A curated selection of enterprise platforms, multi-brand design systems, and generative AI interfaces designed and engineered across Fortmindz and Esolz."
        />

        {/* View Mode Controls (Desktop + Mobile) */}
        <div className="flex items-center gap-2 self-start md:self-end shrink-0">
          <div className="p-1 rounded-full hairline-border glass-panel flex items-center bg-[var(--bg-surface)]">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                viewMode === "grid"
                  ? "bg-[var(--accent)] text-[#0a0a0a] font-semibold shadow-xs"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
              aria-label="Editorial Grid View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Grid</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                viewMode === "list"
                  ? "bg-[var(--accent)] text-[#0a0a0a] font-semibold shadow-xs"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              )}
              aria-label="Recruiter List View"
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">List View</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 sm:pb-6 no-scrollbar mb-6 sm:mb-8">
        {categories.map((cat) => (
          <button
            key={cat.label}
            type="button"
            onClick={() => setSelectedCategory(cat.label)}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 shrink-0 flex items-center gap-1.5",
              selectedCategory === cat.label
                ? "bg-[var(--text-primary)] text-[var(--text-inverse)] shadow-xs"
                : "hairline-border glass-panel text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]"
            )}
          >
            <span>{cat.label}</span>
            <span
              className={cn(
                "text-[10px] font-mono px-1.5 py-0.2 rounded-full",
                selectedCategory === cat.label
                  ? "bg-[var(--text-inverse)] text-[var(--text-primary)] opacity-80"
                  : "bg-[var(--bg-subtle)] text-[var(--text-muted)]"
              )}
            >
              {cat.count}
            </span>
          </button>
        ))}
      </div>

      {/* Active Work Presentation (Grid vs. List) */}
      <AnimatePresence mode="wait">
        {viewMode === "grid" ? (
          <motion.div
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <WorkCard key={project.slug} project={project} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <WorkListView projects={filteredProjects} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Proof Note */}
      <div className="mt-12 sm:mt-16 p-6 rounded-2xl hairline-border glass-panel flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-[var(--accent)]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-[var(--text-primary)]">
              Need a tailored walkthrough or live interactive demo?
            </div>
            <div className="text-xs text-[var(--text-secondary)]">
              I regularly walk hiring managers and clients through Figma design system variables and production code.
            </div>
          </div>
        </div>
        <a
          href="#contact"
          className="shrink-0 px-4 py-2 rounded-full bg-[var(--accent)] text-white text-xs font-medium hover:brightness-110 transition-all shadow-sm"
        >
          Book a 20-min Walkthrough
        </a>
      </div>
    </section>
  );
}
