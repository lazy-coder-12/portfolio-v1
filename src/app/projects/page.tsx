"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight, Sparkles, Filter, ExternalLink } from "lucide-react";
import { SHOWCASE_PROJECTS, ShowcaseProject } from "@/data/showcaseProjects";
import { ProjectVisualStage } from "@/components/showcase/ProjectVisualStage";
import { ProjectModal } from "@/components/showcase/ProjectModal";
import { SharpSlideButton } from "@/components/ui/SharpSlideButton";
import { SignatureLine } from "@/components/ui/SignatureLine";

const CATEGORIES = ["All", "FinTech", "Design Systems", "AI & SaaS", "Enterprise"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  // Filter projects by tag or category
  const filteredProjects = SHOWCASE_PROJECTS.filter((project) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "FinTech") {
      return project.id === "paypath" || project.id === "concourse";
    }
    if (selectedCategory === "Design Systems") {
      return project.id === "btq" || project.id === "bynario";
    }
    if (selectedCategory === "AI & SaaS") {
      return project.id === "bynario" || project.id === "signal";
    }
    if (selectedCategory === "Enterprise") {
      return project.id === "pax" || project.id === "concourse" || project.id === "btq";
    }
    return true;
  });

  return (
    <div className="py-8 sm:py-12 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
      {/* =========================================================================
          HERO HEADER
          ========================================================================= */}
      <section className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono uppercase tracking-wider text-neutral-700 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#e95810] animate-pulse" />
          <span>Curated Index · 2024 — 2026</span>
        </div>

        <h1 className="font-sans text-4xl sm:text-6xl lg:text-[64px] font-semibold tracking-[-0.04em] text-neutral-950 leading-[1.08]">
          Selected works &amp; case studies.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 font-sans leading-relaxed">
          Deep-dives into zero-to-one product design, scalable design systems, and frontend engineering across fintech, enterprise AI, and mission-critical workflows.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-4">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  isSelected
                    ? "bg-neutral-950 text-white shadow-xs font-semibold"
                    : "bg-white border border-black/10 text-neutral-600 hover:text-neutral-950 hover:border-black/25 shadow-2xs"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      <SignatureLine orientation="horizontal" className="my-8 sm:my-12 opacity-30" />

      {/* =========================================================================
          PROJECTS LIST
          ========================================================================= */}
      <div className="space-y-24 sm:space-y-32">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full max-w-6xl mx-auto"
            >
              {/* Widescreen Interactive Media Stage */}
              <ProjectVisualStage
                project={project}
                onOpenDetails={() => setSelectedProject(project)}
              />

              {/* Editorial Metadata & Story (2-Column Grid) */}
              <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
                {/* Left Column: Big Editorial Headline */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="font-mono text-xs uppercase tracking-widest text-[#e95810] font-semibold">
                    0{index + 1} // {project.brandName}
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-[27px] font-semibold leading-[1.28] text-neutral-950 tracking-tight">
                    {project.title}
                  </h2>
                </div>

                {/* Right Column: Paragraph Descriptions + Tags & Actions */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-[15px] sm:text-base text-neutral-600 font-sans leading-relaxed space-y-3">
                    {project.description.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Pill Badges Row */}
                  <div className="pt-3 flex flex-wrap items-center gap-2.5">
                    {project.tags.map((tag, tIdx) => {
                      if (tag.isPrimary) {
                        return (
                          <button
                            key={tIdx}
                            type="button"
                            onClick={() => setSelectedProject(project)}
                            className="group/btn inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-neutral-950 text-white hover:bg-[#e95810] transition-all duration-300 shadow-xs cursor-pointer"
                          >
                            <span>{tag.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        );
                      }

                      return (
                        <span
                          key={tIdx}
                          className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider ${
                            tag.isMetric
                              ? "bg-[#e95810]/12 border border-[#e95810]/30 text-[#16110f] font-semibold"
                              : "bg-white border border-black/10 text-neutral-700 hover:border-black/25 transition-colors shadow-2xs"
                          }`}
                        >
                          {tag.label}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Testimonial Bar */}
              {project.testimonial && (
                <div className="border-t border-black/10 pt-5 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 items-start">
                  <div className="lg:col-span-5">
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                      Client Review
                    </span>
                  </div>

                  <div className="lg:col-span-7 space-y-2.5">
                    <p className="text-sm sm:text-[15px] text-neutral-800 font-sans leading-relaxed italic">
                      &ldquo;{project.testimonial.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-2.5 pt-1">
                      <div className="w-5 h-5 rounded-full bg-[#e95810]/15 border border-[#e95810]/30 flex items-center justify-center text-[9px] font-mono text-[#e95810] font-semibold">
                        {project.testimonial.avatarInitials}
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-600">
                        <strong className="text-neutral-900 font-medium">
                          {project.testimonial.author}
                        </strong>{" "}
                        {project.testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Case Study Modal Inspector */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* =========================================================================
          CALLOUT BANNER
          ========================================================================= */}
      <section className="mt-28 p-8 sm:p-14 rounded-3xl bg-white border border-black/10 shadow-2xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-neutral-950">
            Have a custom product or design challenge?
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 font-sans">
            Let&rsquo;s discuss your requirements, roadmap, and how we can achieve exceptional product results.
          </p>
        </div>

        <SharpSlideButton
          href="/contact"
          variant="primary"
          size="md"
          icon={<ArrowRight className="w-4 h-4" />}
          aria-label="Start a conversation"
        >
          Start a Conversation
        </SharpSlideButton>
      </section>
    </div>
  );
}
