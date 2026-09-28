import React from "react";
import { TrendingUp, AlertCircle, CheckCircle2, ArrowUpRight } from "lucide-react";

export function FinFlowMockup() {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[var(--bg-subtle)] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-[var(--border-hairline)] overflow-hidden relative select-none font-sans text-xs">
      {/* Top Header Row */}
      <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
          <span className="font-semibold tracking-tight text-[var(--text-primary)]">
            FinFlow Intelligence
          </span>
          <span className="px-1.5 py-0.5 rounded-md bg-[var(--accent-muted)] text-[10px] text-[var(--accent)] font-mono">
            LIVE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] mono-label text-[var(--text-muted)]">CASH RUNWAY</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-mono font-medium">
            18.4 Mo
          </span>
        </div>
      </div>

      {/* Center Metric & Sparkline Grid */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4 py-3 sm:py-4 items-center flex-1">
        {/* Metric Column */}
        <div className="col-span-12 sm:col-span-5 space-y-2">
          <div className="text-[10px] mono-label text-[var(--text-muted)]">
            CONSOLIDATED ARR
          </div>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-[var(--text-primary)] tracking-tight">
            $284,520
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="font-medium">+18.4%</span>
            <span className="text-[var(--text-muted)] text-[10px]">vs. last quarter</span>
          </div>
        </div>

        {/* SVG Sparkline / Wave Chart */}
        <div className="col-span-12 sm:col-span-7 h-24 sm:h-28 relative flex items-end">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 240 80"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="finflow-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M0 65 Q 40 50, 70 58 T 130 35 T 180 40 T 240 10 L 240 80 L 0 80 Z"
              fill="url(#finflow-grad)"
            />
            <path
              d="M0 65 Q 40 50, 70 58 T 130 35 T 180 40 T 240 10"
              stroke="var(--accent)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Pulsing indicator node */}
            <circle cx="240" cy="10" r="4" fill="var(--accent)" />
            <circle cx="240" cy="10" r="8" fill="var(--accent)" opacity="0.4" className="animate-ping" />
          </svg>
        </div>
      </div>

      {/* Bottom AI Anomaly Chip */}
      <div className="bg-[var(--bg-surface)] p-2.5 sm:p-3 rounded-xl border border-[var(--border-hairline)] flex items-center justify-between gap-2 shadow-xs">
        <div className="flex items-center gap-2 overflow-hidden">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="text-[11px] text-[var(--text-secondary)] truncate">
            <strong className="text-[var(--text-primary)] font-medium">Anomaly:</strong> CloudSync vendor bill +185% vs 90d avg
          </span>
        </div>
        <button
          type="button"
          className="shrink-0 px-2 py-0.5 rounded-md bg-[var(--accent)] text-white text-[10px] font-medium flex items-center gap-1 hover:brightness-110 transition-all"
        >
          <span>Approve</span>
          <CheckCircle2 className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
