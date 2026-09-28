import React from "react";
import { HeartPulse, CheckCircle, Clock, Calendar, ShieldCheck } from "lucide-react";

export function CarePulseMockup() {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[300px] bg-[var(--bg-subtle)] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-[var(--border-hairline)] overflow-hidden relative select-none font-sans text-xs">
      {/* Telehealth Header */}
      <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-4 h-4 text-rose-500" />
          <span className="font-semibold tracking-tight text-[var(--text-primary)]">
            CarePulse Clinical
          </span>
          <span className="px-1.5 py-0.5 rounded-md bg-rose-500/10 text-[10px] text-rose-400 font-mono">
            Telehealth
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] mono-label text-emerald-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>HIPAA COMPLIANT</span>
        </div>
      </div>

      {/* Patient Triage & Doctor Card */}
      <div className="grid grid-cols-12 gap-3 sm:gap-4 py-3 sm:py-4 items-center flex-1">
        {/* Physician Match Card */}
        <div className="col-span-12 sm:col-span-7 bg-[var(--bg-surface)] p-3 rounded-xl border border-[var(--border-hairline)] space-y-2.5 shadow-xs">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] flex items-center justify-center font-serif text-xs font-bold text-[var(--accent)]">
                EV
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-semibold text-[var(--text-primary)] text-xs">
                    Dr. Elena Vance, MD
                  </span>
                  <CheckCircle className="w-3 h-3 text-[var(--accent)]" />
                </div>
                <div className="text-[10px] text-[var(--text-muted)]">
                  Senior Cardiologist · 12 Yrs Exp
                </div>
              </div>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Online
            </span>
          </div>

          {/* Time Slot Selector */}
          <div className="space-y-1 pt-1">
            <div className="text-[9px] mono-label text-[var(--text-muted)]">
              AVAILABLE SLOTS TODAY
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              <div className="py-1 px-2 rounded-md bg-[var(--accent)] text-[#0a0a0a] text-[10px] font-semibold text-center shadow-xs">
                10:30 AM
              </div>
              <div className="py-1 px-2 rounded-md hairline-border text-[var(--text-secondary)] text-[10px] text-center bg-[var(--bg-canvas)]">
                11:15 AM
              </div>
              <div className="py-1 px-2 rounded-md hairline-border text-[var(--text-secondary)] text-[10px] text-center bg-[var(--bg-canvas)]">
                02:00 PM
              </div>
            </div>
          </div>
        </div>

        {/* Triage & Vitals Column */}
        <div className="col-span-12 sm:col-span-5 space-y-2">
          <div className="bg-[var(--bg-surface)] p-2.5 rounded-xl border border-[var(--border-hairline)] space-y-1.5">
            <div className="text-[9px] mono-label text-[var(--text-muted)] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[var(--accent)]" />
              <span>EST. WAIT TIME</span>
            </div>
            <div className="text-lg font-serif font-bold text-[var(--accent)]">
              &lt; 8 Minutes
            </div>
            <div className="text-[10px] text-[var(--text-muted)]">
              Triage review in progress
            </div>
          </div>

          {/* Symptom Tags */}
          <div className="flex flex-wrap gap-1">
            <span className="px-2 py-0.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[9px] text-[var(--badge-text)]">
              Migraine
            </span>
            <span className="px-2 py-0.5 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[9px] text-[var(--badge-text)]">
              BP Check
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Accessible Confirmation Bar */}
      <div className="bg-[var(--bg-surface)] p-2.5 rounded-xl border border-[var(--border-hairline)] flex items-center justify-between gap-2 text-[11px] text-[var(--text-secondary)]">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span className="text-[10px] font-medium text-[var(--text-primary)]">
            Instant Video Consultation Ready
          </span>
        </div>
        <span className="text-[10px] font-mono text-emerald-400">3.4x Booking Lift</span>
      </div>
    </div>
  );
}
