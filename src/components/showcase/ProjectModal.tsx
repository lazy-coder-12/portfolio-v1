"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, CheckCircle2, Layers, Sparkles } from "lucide-react";
import { ShowcaseProject } from "@/data/showcaseProjects";

interface ProjectModalProps {
  project: ShowcaseProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0d0d0d] border border-white/15 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-10 z-10 space-y-8"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#e95810]">
                  {project.brandName}
                </span>
                <span className="text-white/30 text-xs">·</span>
                <span className="text-xs font-mono text-neutral-400 uppercase">
                  {project.stageTitle}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Narrative Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-4 text-neutral-300 font-sans text-base leading-relaxed">
              {project.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="pt-4 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Key System Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.slides.map((s) => (
                    <div
                      key={s.id}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#e95810] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-semibold text-white">{s.title}</div>
                        <div className="text-[11px] text-neutral-400 mt-0.5 leading-snug">
                          {s.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Meta */}
            <div className="md:col-span-4 space-y-6 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div>
                <div className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider mb-2">
                  Project Badges
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-mono uppercase ${
                        t.isPrimary
                          ? "bg-white text-black font-semibold"
                          : "bg-white/5 border border-white/10 text-neutral-300"
                      }`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider mb-2">
                  Live Demonstration
                </div>
                <a
                  href={project.liveUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-[#e95810] text-white font-medium text-xs hover:bg-white hover:text-black transition-colors"
                >
                  <span>Launch Live Experience</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Testimonial if available */}
          {project.testimonial && (
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                Client Testimonial
              </div>
              <p className="text-sm sm:text-base text-neutral-200 italic leading-relaxed">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                <span className="text-white font-semibold">
                  {project.testimonial.author}
                </span>{" "}
                {project.testimonial.role}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
