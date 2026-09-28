"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ProjectShowcase() {
  return (
    <section
      id="work"
      className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full select-none"
      aria-label="Selected Projects"
    >
      {/* =========================================================================
          SECTION HEADER
          Clean typography matching mockup
          ========================================================================= */}
      <div className="max-w-3xl mb-8 sm:mb-12 text-left">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl lg:text-[44px] text-black tracking-[-0.03em] leading-tight">
          Some of my selected work
        </h2>
        <p className="font-sans text-neutral-600 text-sm sm:text-base leading-relaxed mt-2.5">
          Small tools, personal projects and experiments. Things I build to solve a problem or follow a curiosity.
        </p>
      </div>

      {/* =========================================================================
          MANILA DOSSIER FOLDER CONTAINER
          Single continuous sharp cut with top-left tab, index card with solid shadow,
          exact tech stack icons, action buttons with doodle arrow, and clipped Polaroid
          ========================================================================= */}
      <div className="relative w-full max-w-6xl mx-auto pt-11 sm:pt-12 filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.07)]">
        
        {/* -----------------------------------------------------------------------
            FOLDER CANVAS (Continuous Sharp Cut with Tab)
            All edges sharp, tab slopes seamlessly into the main folder top edge
            ----------------------------------------------------------------------- */}
        <div
          className="absolute inset-0 select-none pointer-events-none rounded-none"
          style={{
            backgroundColor: "#f8e2ba",
            clipPath:
              "polygon(0 0, min(260px, 68%) 0, min(304px, 78%) 44px, 100% 44px, 100% 100%, 0 100%)",
          }}
        >
          {/* Subtle paper grain texture overlay */}
          <div
            className="absolute inset-0 opacity-12 mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* -----------------------------------------------------------------------
            TAB LABEL: Perfectly placed inside the top-left tab area
            ----------------------------------------------------------------------- */}
        <div className="relative z-10 -mt-11 sm:-mt-12 h-11 sm:h-12 flex items-center pl-6 sm:pl-8">
          <span className="font-mono text-xs sm:text-[13px] font-bold text-[#634928] uppercase tracking-wider select-none">
            SUBSCRIPTION MANAGER APP
          </span>
        </div>

        {/* -----------------------------------------------------------------------
            MAIN FOLDER CONTENT (2-Column Grid: Card + Polaroid)
            ----------------------------------------------------------------------- */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-12 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* ===================================================================
                LEFT COLUMN: White Index Card with Washi Tape, Tech Stack & Buttons
                =================================================================== */}
            <div className="lg:col-span-6 space-y-6 sm:space-y-7">
              
              {/* White Index Card with Sharp Corners & Solid Block Shadow */}
              <div className="relative bg-white rounded-none p-6 sm:p-8 shadow-[12px_12px_0px_#F5DAA3] border border-black/5">
                
                {/* Terracotta/Tan Washi Tape Strip at top edge */}
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 w-32 sm:w-36 h-6 sm:h-7 pointer-events-none shadow-xs"
                  style={{
                    backgroundColor: "rgba(224, 138, 80, 0.9)",
                    clipPath:
                      "polygon(2% 0%, 98% 0%, 100% 50%, 98% 100%, 2% 100%, 0% 50%)",
                  }}
                />

                {/* Project Title in Geist */}
                <h3 className="font-sans font-bold text-2xl sm:text-[32px] text-black tracking-tight mt-1">
                  Loop&apos;n
                </h3>

                {/* Project Description in Geist */}
                <p className="font-sans text-[14.5px] sm:text-[15.5px] text-neutral-700 leading-relaxed mt-2.5 font-normal">
                  Loop&apos;n is a local first android app that automatically detect,
                  track and helps manage a person&apos;s recurring expenses
                  (subscriptions).
                </p>

                {/* TECH STACK SECTION */}
                <div className="mt-6 pt-1">
                  <div className="font-mono text-xs font-bold tracking-widest text-[#E95810] uppercase mb-3.5">
                    TECH STACK
                  </div>

                  {/* 7 Circular Tech Icon Badges (Exact icons matching user's design) */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                    
                    {/* 1. Figma (Dark disc matching mock) */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181B] shadow-[0_2px_8px_rgba(0,0,0,0.12)] border border-black/10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                      title="Figma"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>

                    {/* 2. Kotlin (Official Gradient 'K' shape) */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer p-2.5 overflow-hidden"
                      title="Kotlin"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <defs>
                          <linearGradient id="kt-grad-clean" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#F88909"/>
                            <stop offset="35%" stopColor="#E44857"/>
                            <stop offset="65%" stopColor="#C711E1"/>
                            <stop offset="100%" stopColor="#7F52FF"/>
                          </linearGradient>
                        </defs>
                        <path d="M24 24H0V0h24L12 12Z" fill="url(#kt-grad-clean)"/>
                      </svg>
                    </div>

                    {/* 3. Google Gemini (Official 4-point star with coral/yellow/blue/green gradient) */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer p-2.5"
                      title="Gemini AI"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <defs>
                          <linearGradient id="gemini-star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#EA4335" />
                            <stop offset="25%" stopColor="#FBBC05" />
                            <stop offset="60%" stopColor="#4285F4" />
                            <stop offset="100%" stopColor="#34A853" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
                          fill="url(#gemini-star-grad)"
                        />
                      </svg>
                    </div>

                    {/* 4. Claude AI (Anthropic Claude 14-spoke asterisk on terracotta disc) */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D97757] shadow-[0_2px_8px_rgba(0,0,0,0.08)] flex items-center justify-center hover:scale-110 transition-transform cursor-pointer p-2.5"
                      title="Claude"
                    >
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
                        <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <line x1="2.5" y1="12" x2="21.5" y2="12" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <line x1="4.8" y1="4.8" x2="19.2" y2="19.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <line x1="4.8" y1="19.2" x2="19.2" y2="4.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <line x1="7.3" y1="3.2" x2="16.7" y2="20.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <line x1="16.7" y1="3.2" x2="7.3" y2="20.8" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <line x1="3.2" y1="7.3" x2="20.8" y2="16.7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                        <line x1="3.2" y1="16.7" x2="20.8" y2="7.3" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* 5. Notion (Official 3D Isometric 'N' Cube) */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer p-2.5 text-black"
                      title="Notion"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.768c-.466-.373-1.12-.7-2.193-.606L2.966 2.188c-.373.047-.466.327-.326.513l1.819 1.507zm.98 4.293v12.784c0 .84.42 1.213 1.353 1.166l14.195-.84c.933-.046 1.026-.606 1.026-1.306V7.473c0-.7-.373-1.073-1.12-1.026l-14.475.84c-.746.046-.979.466-.979 1.214zm13.495 1.026c.093.42 0 .84-.42.886l-.793.14-2.846 4.385 3.313 5.412c.326.467.14.793-.42.84l-2.006.14-2.333-3.873-1.913 2.94.373.28.98.606c.093.373-.187.7-.7.747l-3.36.233c-.093-.42 0-.793.42-.84l.98-.187V10.74l-1.027-.093c-.093-.42.094-.793.654-.84l3.546-.233 3.686 5.505 2.146-3.36-1.12-.093c-.093-.42.093-.793.653-.84l3.126-.187z"/>
                      </svg>
                    </div>

                    {/* 6. Antigravity (Official Arched Ribbon Logo with Rainbow Gradient) */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer p-2.5"
                      title="Antigravity"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <defs>
                          <linearGradient id="agy-arch-grad" x1="0%" y1="100%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00C0FF" />
                            <stop offset="35%" stopColor="#10B981" />
                            <stop offset="65%" stopColor="#F97316" />
                            <stop offset="100%" stopColor="#2563EB" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 5 19 C 5.5 10 8 4.5 12 4.5 C 16 4.5 18.5 10 19 19 C 18 19 16.5 18 16 16 C 15.2 11.5 13.8 8.5 12 8.5 C 10.2 8.5 8.8 11.5 8 16 C 7.5 18 6 19 5 19 Z"
                          fill="url(#agy-arch-grad)"
                        />
                      </svg>
                    </div>

                    {/* 7. Android Studio (Official Blue Caliper Compass & Green Android Robot) */}
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-black/10 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer p-2"
                      title="Android Studio"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                        {/* Android robot head peeking out on right */}
                        <g transform="translate(15.2, 10.5) scale(0.6)">
                          <path d="M0 6a5 5 0 0 1 10 0H0z" fill="#3DDC84"/>
                          <circle cx="3" cy="3.5" r="0.75" fill="white"/>
                          <circle cx="7" cy="3.5" r="0.75" fill="white"/>
                          <line x1="2" y1="1" x2="0.5" y2="-1" stroke="#3DDC84" strokeWidth="0.9" strokeLinecap="round"/>
                          <line x1="8" y1="1" x2="9.5" y2="-1" stroke="#3DDC84" strokeWidth="0.9" strokeLinecap="round"/>
                        </g>
                        {/* Compass Pivot Top Circle */}
                        <circle cx="11.5" cy="5.5" r="2.8" fill="#1E293B"/>
                        <circle cx="11.5" cy="5.5" r="1.5" fill="white"/>
                        {/* Left Leg */}
                        <path d="M10.2 6.5 L5.8 20 C5.6 20.6 6.3 21.2 7 20.8 L11 18.5 Z" fill="#2563EB"/>
                        {/* Right Leg */}
                        <path d="M12.8 6.5 L17.2 20 C17.4 20.6 16.7 21.2 16 20.8 L12 18.5 Z" fill="#1D4ED8"/>
                        {/* Sector Arc / Cross-brace */}
                        <path d="M7.2 14.8 C9 13.6 14 13.6 15.8 14.8" stroke="#3B82F6" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                      </svg>
                    </div>

                  </div>
                </div>

              </div>

              {/* ACTION BUTTONS ROW + ARROW DOODLE IN GEIST */}
              <div className="relative pt-1">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  
                  {/* View Project Button (Black pill with filled white folder icon) */}
                  <a
                    href="https://dribbble.com/ux_anurag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-[13.5px] font-medium hover:bg-neutral-800 transition-colors shadow-xs"
                  >
                    <svg className="w-4 h-4 fill-white text-white" viewBox="0 0 20 20">
                      <path d="M2 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-7.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.172 3H2a2 2 0 0 0-2 2z" />
                    </svg>
                    <span>View Project</span>
                  </a>

                  {/* UX Case Study Button (Sand pill with thin brown border and filled brown doc icon) */}
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF0DC] border border-[#8C6339]/50 text-[#653B18] text-[13.5px] font-semibold hover:bg-[#F5E6CC] transition-colors shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 16 20" fill="none">
                      <path d="M1 2a1.5 1.5 0 0 1 1.5-1.5h7.5l5 5v12.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 18V2z" fill="#74451D"/>
                      <path d="M10 0.5v4.5a1 1 0 0 0 1 1h4.5L10 0.5z" fill="#9B683B"/>
                      <line x1="4" y1="9.5" x2="12" y2="9.5" stroke="#FAF0DC" strokeWidth="1.6" strokeLinecap="round"/>
                      <line x1="4" y1="13" x2="9.5" y2="13" stroke="#FAF0DC" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                    <span>UX Case Study</span>
                  </Link>

                </div>

                {/* Arched Arrow & Annotation in Geist */}
                <div className="pl-36 sm:pl-48 flex items-start gap-2 pt-1 pointer-events-none select-none">
                  <svg
                    width="34"
                    height="28"
                    viewBox="0 0 34 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-neutral-900 shrink-0 mt-0.5"
                  >
                    <path
                      d="M 2 4 C 13 1 27 5 30 17 C 30.5 19 30.5 21 30 23 M 25 19 L 30 24 L 33 19"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <p className="font-sans text-[12.5px] sm:text-[13px] font-medium text-neutral-800 leading-[1.2] transform -rotate-[2deg]">
                    The story behind<br />how I got there
                  </p>
                </div>
              </div>

              {/* Bottom-Left Date Metadata */}
              <div className="font-mono text-xs sm:text-[13px] font-bold tracking-widest text-[#634928] uppercase pt-2">
                SEPTEMBER 2026
              </div>

            </div>

            {/* ===================================================================
                RIGHT COLUMN: White Framed Polaroid with Red Paperclip & App Mockup
                Sharp corners, solid block shadow, 2° clockwise tilt
                =================================================================== */}
            <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
              
              <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px] transform rotate-[2deg] hover:rotate-0 transition-transform duration-300">
                
                {/* ---------------------------------------------------------------
                    RED METALLIC PAPERCLIP (Hooked over top edge of polaroid)
                    --------------------------------------------------------------- */}
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
                  aria-hidden="true"
                >
                  <svg
                    width="34"
                    height="64"
                    viewBox="0 0 34 66"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="filter drop-shadow-[1px_4px_4px_rgba(0,0,0,0.25)]"
                  >
                    <defs>
                      <linearGradient id="red-paperclip" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F87171" />
                        <stop offset="30%" stopColor="#FFCACA" />
                        <stop offset="55%" stopColor="#DC2626" />
                        <stop offset="85%" stopColor="#EF4444" />
                        <stop offset="100%" stopColor="#991B1B" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 23 44 V 22 A 6 6 0 0 0 11 22 V 50 A 9 9 0 0 0 29 50 V 13 A 11 11 0 0 0 7 13 V 36"
                      stroke="url(#red-paperclip)"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M 22.5 42 V 22 A 5.5 5.5 0 0 0 11.5 22 V 49 A 8.5 8.5 0 0 0 28.5 49 V 13 A 10.5 10.5 0 0 0 7.5 13 V 34"
                      stroke="rgba(255, 255, 255, 0.75)"
                      strokeWidth="0.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Polaroid Frame - SHARP CORNERS (rounded-none) + Solid Block Shadow */}
                <div className="bg-white p-3.5 sm:p-5 pb-6 sm:pb-7 rounded-none border border-black/5 shadow-[12px_12px_0px_#F5DAA3]">
                  
                  {/* App Thumbnail Image with Sharp Corners */}
                  <div className="relative w-full aspect-[1.05/1] rounded-none overflow-hidden bg-white">
                    <Image
                      src="/images/loopn-showcase.png"
                      alt="Loop'n Subscription Manager App Mockup"
                      fill
                      sizes="(max-width: 768px) 100vw, 450px"
                      className="object-contain object-center"
                      priority
                    />
                  </div>

                  {/* Caption in Geist */}
                  <div className="mt-4 sm:mt-5 text-center space-y-0.5 select-none">
                    <h4 className="font-sans font-bold text-xl sm:text-2xl text-black tracking-tight leading-tight">
                      Loop&apos;n
                    </h4>
                    <p className="font-sans text-[13.5px] sm:text-[14.5px] text-neutral-600 font-normal">
                      Your personal subscription manager
                    </p>
                  </div>

                </div>

              </div>

              {/* Bottom-Right Category Metadata */}
              <div className="font-mono text-xs sm:text-[13px] font-bold tracking-widest text-[#634928] uppercase pt-4 text-center lg:text-right w-full">
                APP-DESIGN&nbsp;&nbsp;&nbsp;UX-DESIGN&nbsp;&nbsp;&nbsp;APP-DEVELOPMENT
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
