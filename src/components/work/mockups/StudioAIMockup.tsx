import React from "react";
import { Wand2, GitBranch, Cpu, ArrowRight } from "lucide-react";

export function StudioAIMockup() {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[var(--bg-subtle)] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-[var(--border-hairline)] overflow-hidden relative select-none font-sans text-xs">
      {/* Subtle Dot Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, var(--text-muted) 1px, transparent 1px)`,
          backgroundSize: "16px 16px"
        }}
      />

      {/* Canvas Top Bar */}
      <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3 relative z-10">
        <div className="flex items-center gap-2">
          <Wand2 className="w-4 h-4 text-[var(--accent)]" />
          <span className="font-semibold tracking-tight text-[var(--text-primary)]">
            StudioAI Infinite Canvas
          </span>
          <span className="px-1.5 py-0.5 rounded-md bg-[var(--accent-muted)] text-[10px] text-[var(--accent)] font-mono">
            React 19
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] mono-label text-[var(--text-muted)]">
          <GitBranch className="w-3 h-3 text-[var(--accent)]" />
          <span>3 VARIANTS ACTIVE</span>
        </div>
      </div>

      {/* Spatial Canvas Node Diagram */}
      <div className="relative z-10 grid grid-cols-12 gap-3 sm:gap-4 py-3 sm:py-4 items-center flex-1">
        {/* Left: Prompt / Intent Node */}
        <div className="col-span-12 sm:col-span-5 bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-subtle)] space-y-2 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[10px] mono-label text-[var(--accent)] flex items-center gap-1">
              <Cpu className="w-3 h-3" />
              <span>INTENT NODE</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
          <div className="p-2 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-hairline)] text-[11px] text-[var(--text-secondary)] leading-relaxed italic">
            &quot;Generate high-converting pricing card with monthly/annual toggle&quot;
          </div>
        </div>

        {/* Center: Wires / Connection Icon */}
        <div className="hidden sm:flex col-span-2 items-center justify-center">
          <div className="flex flex-col items-center gap-1 text-[var(--accent)]">
            <div className="w-8 h-0.5 bg-gradient-to-r from-[var(--border-subtle)] to-[var(--accent)]" />
            <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
            <div className="w-8 h-0.5 bg-gradient-to-r from-[var(--accent)] to-[var(--border-subtle)]" />
          </div>
        </div>

        {/* Right: Generated UI Artboard Preview */}
        <div className="col-span-12 sm:col-span-5 bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--accent-border)] space-y-2 shadow-sm relative">
          <div className="flex items-center justify-between">
            <span className="text-[10px] mono-label text-[var(--text-primary)] font-semibold">
              VARIANT A · EDITORIAL
            </span>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              98% MATCH
            </span>
          </div>

          {/* Mini Rendered Card Specimen */}
          <div className="p-2.5 rounded-lg bg-[var(--bg-canvas)] border border-[var(--border-hairline)] space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-medium text-[var(--text-primary)]">Pro Tier</span>
              <span className="text-xs font-bold text-[var(--accent)]">$29<span className="text-[9px] font-normal text-[var(--text-muted)]">/mo</span></span>
            </div>
            <div className="w-full py-1 rounded-md bg-[var(--accent)] text-[#0a0a0a] text-[10px] font-semibold text-center">
              Upgrade Now
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-10 bg-[var(--bg-surface)] p-2.5 rounded-xl border border-[var(--border-hairline)] flex items-center justify-between gap-2 text-[11px] text-[var(--text-secondary)]">
        <span className="truncate">
          <strong className="text-[var(--text-primary)] font-medium">LOD Engine:</strong> 60 FPS GPU-accelerated canvas pan &amp; zoom
        </span>
        <span className="text-[10px] font-mono text-[var(--accent)] shrink-0">Export React TSX</span>
      </div>
    </div>
  );
}
