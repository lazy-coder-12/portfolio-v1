import React from "react";
import { Check, Sparkles, Layers, Sliders } from "lucide-react";

export function NexusMockup() {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[var(--bg-subtle)] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-[var(--border-hairline)] overflow-hidden relative select-none font-sans text-xs">
      {/* Top Specimen Header */}
      <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[var(--accent)]" />
          <span className="font-semibold tracking-tight text-[var(--text-primary)]">
            Nexus Design System
          </span>
          <span className="px-1.5 py-0.5 rounded-md bg-[var(--badge-bg)] text-[10px] text-[var(--text-muted)] font-mono">
            v3.2 · Core
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] mono-label text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>WCAG AAA</span>
        </div>
      </div>

      {/* Component Matrix Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 sm:py-4 flex-1 items-center">
        {/* Button Variants Specimen */}
        <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-hairline)] space-y-2">
          <div className="text-[10px] mono-label text-[var(--text-muted)] flex items-center justify-between">
            <span>BUTTONS</span>
            <span className="text-[9px] text-[var(--accent)]">TIER-3</span>
          </div>
          <div className="space-y-1.5">
            <div className="w-full py-1.5 px-3 rounded-full bg-[var(--accent)] text-white text-[11px] font-medium text-center shadow-xs">
              Primary Action
            </div>
            <div className="w-full py-1.5 px-3 rounded-full hairline-border text-[var(--text-secondary)] text-[11px] font-medium text-center bg-[var(--bg-canvas)]">
              Secondary Pill
            </div>
          </div>
        </div>

        {/* Inputs & Switch Specimen */}
        <div className="bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-hairline)] space-y-2">
          <div className="text-[10px] mono-label text-[var(--text-muted)] flex items-center justify-between">
            <span>INPUTS & TOGGLES</span>
            <span className="text-[9px] text-[var(--accent)]">AAA</span>
          </div>
          <div className="space-y-1.5">
            <div className="w-full py-1.5 px-2.5 rounded-lg border border-[var(--accent)] bg-[var(--bg-canvas)] text-[11px] text-[var(--text-primary)] flex items-center justify-between ring-2 ring-[var(--accent-glow)]">
              <span>Focused state</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            </div>
            <div className="flex items-center justify-between py-1 px-1">
              <span className="text-[10px] text-[var(--text-secondary)]">Dark mode</span>
              <div className="w-8 h-4 rounded-full bg-[var(--accent)] flex items-center justify-end px-0.5">
                <div className="w-3 h-3 rounded-full bg-white shadow-xs" />
              </div>
            </div>
          </div>
        </div>

        {/* Semantic Color Tokens Specimen */}
        <div className="col-span-2 sm:col-span-1 bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-hairline)] space-y-2">
          <div className="text-[10px] mono-label text-[var(--text-muted)] flex items-center justify-between">
            <span>BRAND RAMP</span>
            <span className="text-[9px] font-mono text-[var(--accent)] font-semibold">#E95810</span>
          </div>
          <div className="grid grid-cols-5 gap-1 pt-1">
            <div className="h-6 rounded bg-[#fbd0b0]" title="brand-200" />
            <div className="h-6 rounded bg-[#f28649]" title="brand-400" />
            <div className="h-6 rounded bg-[#e95810] ring-1 ring-white" title="brand-500 (anchor)" />
            <div className="h-6 rounded bg-[#d44a08]" title="brand-600" />
            <div className="h-6 rounded bg-[#71280f]" title="brand-900" />
          </div>
          <div className="text-[9px] font-mono text-[var(--text-muted)] pt-0.5 truncate">
            --color-brand-500: #e95810
          </div>
        </div>
      </div>

      {/* Bottom Token Pipeline Banner */}
      <div className="bg-[var(--bg-surface)] p-2.5 rounded-xl border border-[var(--border-hairline)] flex items-center justify-between gap-2 text-[11px] text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-[var(--accent)]">Figma Variables</span>
          <span>→</span>
          <span className="font-mono text-[10px] text-[var(--text-primary)]">Style Dictionary</span>
          <span>→</span>
          <span className="font-mono text-[10px] text-emerald-400">Tailwind v4</span>
        </div>
        <span className="text-[10px] font-mono text-[var(--text-muted)] hidden xs:inline">100% Synced</span>
      </div>
    </div>
  );
}
