"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ArrowUpRight, Shield, Zap, Cpu, Sparkles, Layers, Terminal } from "lucide-react";
import { ShowcaseProject } from "@/data/showcaseProjects";

interface ProjectVisualStageProps {
  project: ShowcaseProject;
  onOpenDetails?: () => void;
}

export function ProjectVisualStage({ project, onOpenDetails }: ProjectVisualStageProps) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const totalSlides = project.slides.length;
  const currentSlide = project.slides[activeSlideIndex] || project.slides[0];

  const handleNextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div
      onClick={onOpenDetails}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.stageTitle}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpenDetails?.();
        }
      }}
      className="group relative w-full min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 select-none cursor-pointer transition-all duration-700 hover:border-white/20 shadow-2xl"
      style={{
        background: `radial-gradient(ellipse at 50% 20%, ${project.theme.viaColor} 0%, ${project.theme.fromColor} 55%, ${project.theme.toColor} 100%)`,
      }}
    >
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle grid dots */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Central Atmospheric Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] blur-[120px] rounded-full pointer-events-none transition-all duration-700"
          style={{
            backgroundColor: project.theme.glowColor,
            opacity: isHovered ? 0.9 : 0.6,
          }}
        />

      </div>

      {/* Top Display Headline inside Stage */}
      <div className="relative z-10 pt-7 sm:pt-14 px-4 sm:px-6 text-center max-w-4xl mx-auto">
        <motion.h2
          layout
          className="text-xl sm:text-3xl lg:text-5xl font-medium tracking-tight text-white transition-transform duration-700 ease-out group-hover:scale-[1.01]"
        >
          {project.stageTitle}
        </motion.h2>
        {project.stageSubtitle && (
          <p className="text-[11px] sm:text-sm text-white/50 font-mono uppercase tracking-widest mt-1.5 sm:mt-3">
            {project.stageSubtitle}
          </p>
        )}
      </div>

      {/* Center Visual Canvas (Animated Slide Content) */}
      <div className="absolute inset-0 flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-12 px-3 sm:px-4 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${project.id}-${activeSlideIndex}`}
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.04, y: -15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl flex items-center justify-center relative"
          >
            {/* Render specialized visuals based on project ID & slide */}
            {project.id === "btq" && <BTQVisualStage slideIndex={activeSlideIndex} />}
            {project.id === "paypath" && <PayPathVisualStage slideIndex={activeSlideIndex} />}
            {project.id === "bynario" && <BynarioVisualStage slideIndex={activeSlideIndex} />}
            {project.id === "concourse" && <ConcourseVisualStage slideIndex={activeSlideIndex} />}
            {project.id === "signal" && <SignalVisualStage slideIndex={activeSlideIndex} />}
            {project.id === "pax" && <PaxVisualStage slideIndex={activeSlideIndex} />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Floating Brand Wordmark */}
      <div className="absolute bottom-5 sm:bottom-7 left-6 sm:left-10 z-20 flex items-center gap-2">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-white/70 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          {project.brandName}
        </span>
        {currentSlide.caption && (
          <span className="hidden sm:inline-block text-[11px] font-mono text-white/40 tracking-wide">
            · {currentSlide.caption}
          </span>
        )}
      </div>

      {/* Hover Floating Trigger: "VIEW PROJECT ↗" */}
      <div className="absolute bottom-5 sm:bottom-7 right-6 sm:right-10 z-20 flex items-center gap-3">
        {/* Slide Counter */}
        <div className="text-[11px] font-mono text-white/50 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
          0{activeSlideIndex + 1} / 0{totalSlides}
        </div>

        {/* Hover Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: isHovered ? 1 : 0.85,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-white text-black hover:bg-[#e95810] hover:text-white transition-colors shadow-lg"
        >
          <span>VIEW PROJECT</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </motion.div>
      </div>

      {/* Right Edge: Vertical Slide Pagination Indicator Dots (Heykuba signature) */}
      <div
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2 p-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {project.slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveSlideIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSlideIndex === idx
                ? "bg-[#e95810] scale-125 shadow-xs shadow-[#e95810]"
                : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Side Slide Navigation Arrows on Hover */}
      <div className="pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300">
        <button
          type="button"
          onClick={handlePrevSlide}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={handleNextSlide}
          className="absolute right-12 sm:right-14 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// =========================================================================
// 1. BTQ QUANTUM VISUAL STAGE (Layered 3D Cards + Cryptographic Sphere)
// =========================================================================
function BTQVisualStage({ slideIndex }: { slideIndex: number }) {
  return (
    <div className="relative w-full max-w-2xl h-[260px] sm:h-[320px] flex items-center justify-center">
      {/* Left Receding Card */}
      <div className="absolute -left-4 sm:left-4 w-40 sm:w-52 h-52 sm:h-64 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-xl -rotate-6 scale-90 opacity-60 flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center mb-3">
          <Shield className="w-8 h-8 text-cyan-400 opacity-70" />
        </div>
        <div className="text-[10px] font-mono uppercase text-white/60 text-center">
          PQ Network Gateway
        </div>
      </div>

      {/* Right Receding Card */}
      <div className="absolute -right-4 sm:right-4 w-40 sm:w-52 h-52 sm:h-64 rounded-xl bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-xl rotate-6 scale-90 opacity-60 flex flex-col items-center justify-center p-4">
        <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-3">
          <Cpu className="w-8 h-8 text-blue-400 opacity-70" />
        </div>
        <div className="text-[10px] font-mono uppercase text-white/60 text-center">
          Lattice Key Core
        </div>
      </div>

      {/* Center High-Impact Card (Mirroring Heykuba's central Bitcoin Quantum card) */}
      <div className="relative z-10 w-48 sm:w-72 bg-white text-black rounded-2xl p-3.5 sm:p-6 shadow-2xl border border-white/40 flex flex-col items-center text-center">
        <div className="text-xs sm:text-sm font-semibold tracking-tight text-neutral-900 mb-2 sm:mb-3">
          {slideIndex === 0
            ? "Bitcoin Quantum"
            : slideIndex === 1
            ? "Post-Quantum Verification"
            : "Enterprise Cryptography"}
        </div>

        {/* 3D Wireframe Sphere Artwork */}
        <div className="relative w-20 h-20 sm:w-36 sm:h-36 my-1.5 sm:my-2 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-neutral-900 to-neutral-700 shadow-inner flex items-center justify-center overflow-hidden">
            {/* SVG Geometric Mesh */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-white/20 animate-[spin_20s_linear_infinite]"
            >
              <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="1" />
              <ellipse cx="50" cy="50" rx="46" ry="20" fill="none" stroke="currentColor" strokeWidth="1" />
              <ellipse cx="50" cy="50" rx="20" ry="46" fill="none" stroke="currentColor" strokeWidth="1" />
              <path d="M10 50 Q 50 10 90 50 Q 50 90 10 50" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
            {/* Bitcoin / Quantum Emblem in Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl sm:text-2xl font-bold font-mono text-cyan-300 drop-shadow-md">
                {slideIndex === 0 ? "₿Q" : slideIndex === 1 ? "256" : "Q-NET"}
              </span>
            </div>
          </div>
          {/* Subtle Outer Glow Ring */}
          <div className="absolute -inset-1 rounded-full border border-cyan-400/30 animate-pulse pointer-events-none" />
        </div>

        <p className="text-[10px] sm:text-[11px] text-neutral-600 leading-snug mt-2 line-clamp-3">
          {slideIndex === 0
            ? "A quantum-secure evolution of Bitcoin, designed to harden the network against quantum attacks."
            : slideIndex === 1
            ? "Zero-knowledge verification ensuring tamper-proof ledger continuity across public markets."
            : "FIPS 203 & 204 compliant post-quantum cryptographic primitives running on edge nodes."}
        </p>
      </div>
    </div>
  );
}

// =========================================================================
// 2. PAYPATH FINTECH VISUAL STAGE (Floating 3D Debt Cards)
// =========================================================================
function PayPathVisualStage({ slideIndex }: { slideIndex: number }) {
  const cards = [
    { label: "PERSONAL", color: "from-emerald-900 to-emerald-950", rotate: "-rotate-12", x: "-left-8 sm:left-4", y: "top-10" },
    { label: "CAR LOAN", color: "from-lime-900 to-green-950", rotate: "-rotate-6", x: "left-16 sm:left-28", y: "top-4" },
    { label: "MEDICAL", color: "from-teal-900 to-emerald-950", rotate: "rotate-3", x: "left-1/3", y: "top-1" },
    { label: "MORTGAGE", color: "from-emerald-950 to-neutral-900", rotate: "rotate-12", x: "right-1/3", y: "top-2" },
    { label: "CREDIT CARD", color: "from-green-900 to-emerald-950", rotate: "rotate-6", x: "right-16 sm:right-28", y: "top-8" },
    { label: "TAX DEBT", color: "from-emerald-900 to-teal-950", rotate: "-rotate-3", x: "-right-8 sm:right-4", y: "top-14" },
  ];

  return (
    <div className="relative w-full max-w-2xl h-[260px] sm:h-[300px] flex items-center justify-center">
      {/* Floating 3D Cards Deck */}
      <div className="relative w-full h-full">
        {cards.map((card, idx) => (
          <motion.div
            key={card.label}
            animate={{
              y: [0, idx % 2 === 0 ? -6 : 6, 0],
            }}
            transition={{
              duration: 4 + idx * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute ${card.x} ${card.y} ${card.rotate} w-24 sm:w-32 h-36 sm:h-48 rounded-xl bg-gradient-to-br ${card.color} border border-[#e95810]/30 shadow-2xl p-3 flex flex-col justify-between backdrop-blur-md`}
          >
            <div className="flex items-center justify-between">
              <div className="w-3 h-3 rounded-full bg-[#e95810]/40" />
              <Zap className="w-3.5 h-3.5 text-[#e95810]" />
            </div>
            <div className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-white">
              {card.label}
            </div>
            <div className="text-[9px] font-mono text-[#e95810]">
              ✦ PAYPATH
            </div>
          </motion.div>
        ))}

        {/* Center Glowing Metric Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-black/75 backdrop-blur-xl border border-[#e95810]/40 px-5 py-3 rounded-2xl shadow-2xl text-center">
          <div className="text-xl sm:text-2xl font-bold font-sans text-white">
            {slideIndex === 0 ? "$2.4B+" : slideIndex === 1 ? "42.8%" : "99.9%"}
          </div>
          <div className="text-[10px] font-mono text-[#e95810] tracking-wider uppercase">
            {slideIndex === 0 ? "Orchestrated Debt" : slideIndex === 1 ? "Recovery Uplift" : "SLA Compliance"}
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 3. BYNARIO CYBERSECURITY VISUAL STAGE (Glowing Point Cloud & Binary Mesh)
// =========================================================================
function BynarioVisualStage({ slideIndex }: { slideIndex: number }) {
  return (
    <div className="relative w-full max-w-xl h-[260px] sm:h-[300px] flex items-center justify-center">
      {/* 3D Point Cloud Orb */}
      <div className="relative w-48 sm:w-60 h-48 sm:h-60 rounded-full flex items-center justify-center">
        {/* Core Electric Violet Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-2xl animate-pulse" />

        {/* Binary Orb Mesh */}
        <svg viewBox="0 0 200 200" className="w-full h-full text-violet-300 drop-shadow-[0_0_12px_rgba(192,132,252,0.6)]">
          <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" className="animate-[spin_30s_linear_infinite]" />
          <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" className="animate-[spin_20s_reverse_linear_infinite]" />
          <circle cx="100" cy="100" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" className="animate-[spin_15s_linear_infinite]" />
          
          {/* Node points */}
          <circle cx="100" cy="15" r="3.5" fill="#c084fc" />
          <circle cx="160" cy="60" r="3" fill="#e879f9" />
          <circle cx="140" cy="150" r="3.5" fill="#c084fc" />
          <circle cx="50" cy="140" r="3" fill="#a855f7" />
          <circle cx="40" cy="70" r="3.5" fill="#e879f9" />
        </svg>

        {/* Center Target Crosshair */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-3 py-1.5 rounded-full bg-black/80 border border-violet-400/40 text-[11px] font-mono text-violet-200">
            {slideIndex === 0 ? "0xDEADBEEF" : slideIndex === 1 ? "CVE-2026-9041" : "PATCH VERIFIED"}
          </div>
        </div>
      </div>

      {/* Floating Tactical Badges */}
      <div className="absolute top-4 left-2 sm:left-8 px-2.5 py-1 rounded bg-black/60 border border-violet-500/20 text-[10px] font-mono text-violet-300">
        AUTONOMOUS VULNERABILITY RESEARCH
      </div>
      <div className="absolute bottom-4 right-2 sm:right-8 px-2.5 py-1 rounded bg-black/60 border border-violet-500/20 text-[10px] font-mono text-violet-300">
        AI-NATIVE SOFTWARE SECURITY
      </div>
    </div>
  );
}

// =========================================================================
// 4. CONCOURSE FINANCE AGENTS VISUAL STAGE (Autonomous Ledger)
// =========================================================================
function ConcourseVisualStage({ slideIndex }: { slideIndex: number }) {
  return (
    <div className="relative w-full max-w-xl h-[260px] sm:h-[300px] flex items-center justify-center">
      <div className="w-full max-w-md bg-neutral-900/90 backdrop-blur-xl border border-amber-500/30 rounded-2xl p-5 shadow-2xl text-left">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono font-semibold text-white">CONCOURSE AGENT CLUSTER</span>
          </div>
          <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
            SOC 2 TYPE II
          </span>
        </div>

        <div className="space-y-2.5">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs text-white/80 font-mono">Multi-Entity Close</span>
            </div>
            <span className="text-xs font-mono text-emerald-400">Reconciled in 4.2s</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs text-white/80 font-mono">ERP Sync (NetSuite + Stripe)</span>
            </div>
            <span className="text-xs font-mono text-white/50">1,240 Rows Streamed</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span>Target: Palo Alto Networks</span>
          <span className="text-amber-400 font-bold">$12.4M Verified</span>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 5. THE SIGNAL AI MEDIA VISUAL STAGE (Editorial Grid + Benchmark Leaderboard)
// =========================================================================
function SignalVisualStage({ slideIndex }: { slideIndex: number }) {
  return (
    <div className="relative w-full max-w-xl h-[260px] sm:h-[300px] flex items-center justify-center">
      <div className="w-full max-w-md bg-black/80 backdrop-blur-xl border border-[#e95810]/30 rounded-2xl p-5 shadow-2xl">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
          <span className="text-xs font-mono uppercase text-[#e95810] font-bold">[ ] THE SIGNAL</span>
          <span className="text-[10px] font-mono text-white/50">50,000+ SUBSCRIBERS</span>
        </div>
        <div className="space-y-2 text-left">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-xs font-medium text-white">Frontier Reasoning Benchmark Report</div>
            <div className="text-[11px] text-white/50 font-mono mt-1">Comparing 12 Frontier Models on Real Code Synthesis</div>
          </div>
          <div className="p-3 rounded-xl bg-[#e95810]/10 border border-[#e95810]/20 flex items-center justify-between">
            <span className="text-xs text-[#e95810] font-mono">Interactive Vector Search Engine</span>
            <Sparkles className="w-4 h-4 text-[#e95810]" />
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 6. PAX CUSTOMS RECOVERY VISUAL STAGE (Enterprise Duty Compliance)
// =========================================================================
function PaxVisualStage({ slideIndex }: { slideIndex: number }) {
  return (
    <div className="relative w-full max-w-xl h-[260px] sm:h-[300px] flex items-center justify-center">
      <div className="w-full max-w-md bg-neutral-900/80 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-5 shadow-2xl text-left">
        <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-300 font-bold">pax customs</span>
          <span className="text-[10px] font-mono text-white/50">YC BACKED</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-[10px] font-mono text-white/50 uppercase">Import Duty Drawback</div>
            <div className="text-lg font-bold font-sans text-white mt-1">$4.2M</div>
            <div className="text-[9px] font-mono text-blue-400">Auto-Reclaimed</div>
          </div>
          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-[10px] font-mono text-white/50 uppercase">Clients Served</div>
            <div className="text-xs font-medium text-white mt-1">Glossier · Verkada · Yamaha</div>
            <div className="text-[9px] font-mono text-emerald-400">100% Audit Verified</div>
          </div>
        </div>
      </div>
    </div>
  );
}
