"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { Layers } from "lucide-react";

interface StickyNoteData {
  id: string;
  number: string;
  appName: string;
  skillTitle: string;
  bullets: string[];
  footerLeft: string;
  footerRight: string;
  bgGradient: string;
  borderColor: string;
  shadowColor: string;
  bulletColor: string;
  tagColor: string;
  defaultRotate: number;
  defaultOffset: { x: number; y: number };
  icon: React.ReactNode;
}

const STICKY_NOTES: StickyNoteData[] = [
  {
    id: "figma",
    number: "01",
    appName: "Figma",
    skillTitle: "Design Systems & UI Architecture",
    bullets: [
      "Tokens, Theming & Variables",
      "Modular Component Architecture",
      "Auto-Layout & Responsive Specs",
    ],
    footerLeft: "System Specs",
    footerRight: "Tokens v2.4",
    bgGradient: "bg-[linear-gradient(145deg,#FFFDE7_0%,#FFF9C4_50%,#FFF59D_100%)]",
    borderColor: "border-[#FBC02D]/40",
    shadowColor: "shadow-[0_16px_32px_-8px_rgba(161,98,7,0.22),0_4px_12px_-2px_rgba(0,0,0,0.08)]",
    bulletColor: "bg-[#CA8A04]",
    tagColor: "text-[#854D0E] bg-yellow-100/70 border-yellow-300/60",
    defaultRotate: 2,
    defaultOffset: { x: 3, y: 0 },
    icon: (
      <svg width="12" height="18" viewBox="0 0 38 57" fill="none" className="shrink-0">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    id: "framer",
    number: "02",
    appName: "Framer",
    skillTitle: "Interactive Prototyping & Motion",
    bullets: [
      "60fps Physics & Micro-interactions",
      "Dynamic Multi-State Logic",
      "Haptic & Touch Interaction Specs",
    ],
    footerLeft: "Tactile Craft",
    footerRight: "Native Feel",
    bgGradient: "bg-[linear-gradient(145deg,#F0FDF4_0%,#DCFCE7_50%,#BBF7D0_100%)]",
    borderColor: "border-[#86EFAC]/45",
    shadowColor: "shadow-[0_14px_28px_-8px_rgba(22,101,52,0.18),0_4px_10px_-2px_rgba(0,0,0,0.08)]",
    bulletColor: "bg-[#16A34A]",
    tagColor: "text-[#166534] bg-emerald-100/70 border-emerald-300/60",
    defaultRotate: -3.5,
    defaultOffset: { x: -8, y: 8 },
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-[#16A34A]">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"/>
      </svg>
    ),
  },
  {
    id: "cro",
    number: "03",
    appName: "Product Strategy",
    skillTitle: "Conversion Optimization (CRO)",
    bullets: [
      "Onboarding Friction Reduction",
      "Funnel & Checkout Optimization",
      "A/B Testing & Behavioral Loops",
    ],
    footerLeft: "Growth Metric",
    footerRight: "+32% Lift",
    bgGradient: "bg-[linear-gradient(145deg,#FFF7ED_0%,#FFEDD5_50%,#FED7AA_100%)]",
    borderColor: "border-[#FDBA74]/45",
    shadowColor: "shadow-[0_14px_28px_-8px_rgba(194,65,12,0.2),0_4px_10px_-2px_rgba(0,0,0,0.08)]",
    bulletColor: "bg-[#E95810]",
    tagColor: "text-[#9A3412] bg-orange-100/70 border-orange-300/60",
    defaultRotate: 5.5,
    defaultOffset: { x: 12, y: -4 },
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect width="24" height="24" rx="5" fill="#E95810"/>
        <path d="M6 16l4-5 4 3 4-6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "figjam",
    number: "04",
    appName: "FigJam",
    skillTitle: "User Research & Journey Maps",
    bullets: [
      "Qualitative Interview Synthesis",
      "End-to-End Persona Journey Flows",
      "Usability Benchmark Testing",
    ],
    footerLeft: "Discovery Phase",
    footerRight: "Insights",
    bgGradient: "bg-[linear-gradient(145deg,#F0F9FF_0%,#E0F2FE_50%,#BAE6FD_100%)]",
    borderColor: "border-[#7DD3FC]/45",
    shadowColor: "shadow-[0_12px_24px_-8px_rgba(3,105,161,0.18),0_4px_10px_-2px_rgba(0,0,0,0.08)]",
    bulletColor: "bg-[#0284C7]",
    tagColor: "text-[#075985] bg-sky-100/70 border-sky-300/60",
    defaultRotate: -7.5,
    defaultOffset: { x: -14, y: 12 },
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect width="24" height="24" rx="5" fill="#0284C7"/>
        <path d="M7 8h10M7 12h10M7 16h6" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function ClippedStickyNotes() {
  const [activeId, setActiveId] = useState<string>("figma");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[370px] lg:max-w-[390px] h-[340px] sm:h-[360px] flex flex-col items-center justify-center select-none group/cluster">
      {/* 3D Paper Stack Container */}
      <div className="relative w-[275px] sm:w-[295px] h-[275px] sm:h-[295px] flex items-center justify-center">
        {/* =========================================================================
            LAYER 1: PAPER CLIP - BACK WIRE (Behind notes, z-index: 5)
            Renders the back loop clamping the paper from behind
            ========================================================================= */}
        <div
          className="absolute -top-[16px] left-[20px] sm:left-[24px] z-[5] pointer-events-none"
          aria-hidden="true"
        >
          <svg
            width="34"
            height="76"
            viewBox="0 0 34 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[30px] sm:w-[34px] h-auto drop-shadow-[0_3px_5px_rgba(0,0,0,0.22)]"
          >
            <defs>
              <linearGradient id="clip-back-metal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="35%" stopColor="#94a3b8" />
                <stop offset="60%" stopColor="#cbd5e1" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
            </defs>
            {/* Back outer loop wire */}
            <path
              d="M 24 16 L 24 58 C 24 67 9 67 9 58 L 9 16 C 9 6 24 6 24 16 Z"
              stroke="url(#clip-back-metal)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* =========================================================================
            LAYER 2: 3D STACKED STICKY NOTES (z-index: 10 - 40)
            ========================================================================= */}
        {STICKY_NOTES.map((note, index) => {
          const isActive = note.id === activeId;
          const isHovered = note.id === hoveredId;

          // Compute dynamic z-index:
          // Hovered note gets top priority (40), active note gets 30, background notes follow index
          let zIndex = 10 + index * 5;
          if (isActive) zIndex = 30;
          if (isHovered) zIndex = 40;

          // Compute animated rotation & offset:
          const targetRotate = isHovered
            ? 0
            : isActive
            ? 1
            : note.defaultRotate;

          const targetX = isHovered
            ? 0
            : isActive
            ? 0
            : note.defaultOffset.x;

          const targetY = isHovered
            ? -12
            : isActive
            ? -2
            : note.defaultOffset.y;

          return (
            <motion.div
              key={note.id}
              onClick={() => setActiveId(note.id)}
              onMouseEnter={() => setHoveredId(note.id)}
              onMouseLeave={() => setHoveredId(null)}
              animate={{
                rotate: targetRotate,
                x: targetX,
                y: targetY,
                scale: isHovered ? 1.03 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 450,
                damping: 28,
                mass: 0.7,
              }}
              style={{
                zIndex,
                transformOrigin: "36px 14px", // Anchored directly at paper clip clamping point
              }}
              className={cn(
                "absolute inset-0 rounded-[6px] p-4 sm:p-5 flex flex-col justify-between border cursor-pointer select-none transition-shadow duration-300",
                note.bgGradient,
                note.borderColor,
                isHovered
                  ? "shadow-[0_24px_44px_-10px_rgba(0,0,0,0.24),0_8px_16px_-4px_rgba(0,0,0,0.12)]"
                  : note.shadowColor
              )}
            >
              {/* Top Adhesive Glue Strip with subtle crease line */}
              <div
                className="absolute top-0 left-0 right-0 h-[30px] rounded-t-[5px] bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.01)_80%,rgba(0,0,0,0.06)_100%)] border-b border-black/[0.07] pointer-events-none"
                aria-hidden="true"
              />

              {/* Bottom-Right Paper Lift Curl */}
              <div
                className="absolute bottom-0 right-0 w-6 h-6 bg-[linear-gradient(135deg,transparent_50%,rgba(0,0,0,0.05)_50%,rgba(0,0,0,0.14)_100%)] rounded-br-[5px] pointer-events-none"
                aria-hidden="true"
              />

              {/* Note Content: App Badge & Note Index */}
              <div className="relative z-10 pt-1">
                {/* Header row indented to leave space for paper clip on the left */}
                <div className="flex items-center justify-between pl-9 sm:pl-10">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/85 border border-black/[0.08] text-[11px] sm:text-xs font-semibold text-neutral-900 shadow-2xs backdrop-blur-xs">
                    {note.icon}
                    <span>{note.appName}</span>
                  </div>

                  <span className="font-mono text-[10px] sm:text-[11px] font-bold text-black/40 tracking-wider">
                    {note.number}
                  </span>
                </div>

                {/* UX Skill Headline: fully visible below clip zone */}
                <h3 className="font-sans font-bold text-[14px] sm:text-[15px] leading-tight text-neutral-950 mt-3 sm:mt-3.5 tracking-[-0.02em]">
                  {note.skillTitle}
                </h3>

                {/* Skill Deliverables / Details List */}
                <ul className="mt-2.5 space-y-1.5 text-[11px] sm:text-[11.5px] font-medium text-neutral-700 leading-snug">
                  {note.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className={cn("w-1.5 h-1.5 rounded-full shrink-0", note.bulletColor)} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note Footer: Metadata & Spec Tag */}
              <div className="relative z-10 pt-2 border-t border-black/[0.08] flex items-center justify-between font-mono text-[9px] sm:text-[10px] font-semibold text-neutral-600 uppercase tracking-wider">
                <span>{note.footerLeft}</span>
                <span className={cn("px-1.5 py-0.5 rounded text-[8.5px] sm:text-[9px] border font-sans font-bold", note.tagColor)}>
                  {note.footerRight}
                </span>
              </div>
            </motion.div>
          );
        })}

        {/* =========================================================================
            LAYER 3: PAPER CLIP - FRONT WIRE (In front of notes, z-index: 50)
            Clamps over the front sticky note, casting realistic metallic shadow
            ========================================================================= */}
        <motion.div
          animate={{
            rotate: hoveredId ? -1 : -3,
            y: hoveredId ? -1 : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="absolute -top-[16px] left-[20px] sm:left-[24px] z-[50] pointer-events-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.35)] drop-shadow-[0_8px_14px_rgba(0,0,0,0.18)]"
          aria-hidden="true"
        >
          <svg
            width="34"
            height="76"
            viewBox="0 0 34 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[30px] sm:w-[34px] h-auto"
          >
            <defs>
              <linearGradient id="clip-front-metal" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#94a3b8" />
                <stop offset="16%" stopColor="#ffffff" />
                <stop offset="30%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#64748b" />
                <stop offset="68%" stopColor="#f8fafc" />
                <stop offset="85%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <filter id="wire-cast-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="1.2" dy="2" stdDeviation="1" floodColor="#000000" floodOpacity="0.38" />
              </filter>
            </defs>

            {/* Front clamping tongue - pressing over top of front sticky note */}
            <path
              d="M 9 16 C 9 6 24 6 24 16 L 24 48 C 24 55 15 55 15 48 L 15 24"
              stroke="url(#clip-front-metal)"
              strokeWidth="3.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#wire-cast-shadow)"
            />

            {/* Apex high-gloss highlight reflection */}
            <path
              d="M 12 11 C 15 7 21 7 22 11"
              stroke="#ffffff"
              strokeWidth="1.6"
              strokeLinecap="round"
              opacity="0.9"
            />
          </svg>
        </motion.div>
      </div>

      {/* Interactive Note Selector Tabs / Hint */}
      <div className="flex items-center gap-1.5 pt-4">
        {STICKY_NOTES.map((n) => (
          <button
            key={n.id}
            type="button"
            onClick={() => setActiveId(n.id)}
            className={cn(
              "px-2.5 py-1 rounded-full text-[10px] font-mono transition-all flex items-center gap-1 border cursor-pointer",
              activeId === n.id
                ? "bg-neutral-900 text-white border-neutral-900 shadow-2xs font-semibold"
                : "bg-white/80 text-neutral-600 border-black/10 hover:border-black/30 hover:bg-white"
            )}
            title={`View ${n.skillTitle}`}
          >
            <span>{n.number}</span>
            <span className="hidden sm:inline">{n.appName}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
