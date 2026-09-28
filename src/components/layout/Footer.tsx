"use client";

import React from "react";
import { PERSONAL_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#E6E6E6] py-6 sm:py-7 px-6 sm:px-8 lg:px-12 mt-auto select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] font-sans text-[#666666]">
        {/* Left: Emoji & Copyright */}
        <div className="flex items-center gap-2">
          <span className="text-[15px] sm:text-[16px] leading-none select-none" aria-hidden="true">
            😅
          </span>
          <span>I built it myself © {PERSONAL_INFO.name}.</span>
        </div>

        {/* Right: Credits with Tool Brand Colors */}
        <div className="flex flex-wrap items-center gap-1 text-[#666666]">
          <span>Designed in</span>
          <span className="font-semibold text-[#A855F7]">Figma</span>
          <span>. Built using</span>
          <span className="font-semibold text-[#EA580C]">Claude AI</span>
          <span>,</span>
          <span className="font-semibold text-[#2563EB]">Gemini</span>
          <span>and</span>
          <span className="font-semibold text-black">Antigravity</span>
          <span>.</span>
        </div>
      </div>
    </footer>
  );
}
