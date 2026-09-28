"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface ShortAboutSectionProps {
  photoSrc?: string;
  className?: string;
}

export function ShortAboutSection({
  photoSrc = "/images/anurag-portrait.jpg",
  className = "",
}: ShortAboutSectionProps) {
  return (
    <section
      id="about"
      className={`relative py-14 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 max-w-6xl mx-auto w-full select-none ${className}`}
      aria-label="About Anurag Verma"
    >
      {/* =========================================================================
          MAIN FLOATING CARD CONTAINER
          Clean white document sheet with soft tactile drop shadows and rounded corners
          Mirrors the attached design with stationery clips, staple, tape & pushpin
          ========================================================================= */}
      <div className="relative bg-white rounded-[26px] sm:rounded-[36px] border border-black/[0.08] shadow-[0_24px_64px_-16px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.03)] p-5 sm:p-10 md:p-12 lg:p-14 transition-all duration-300">
        
        {/* =======================================================================
            STATIONERY ACCENT 1: METALLIC PAPERCLIP (Top-Left Corner)
            Realistic silver chrome paperclip hooked over the top edge of the card
            ======================================================================= */}
        <div
          className="absolute -top-4 sm:-top-5 left-5 sm:left-10 z-30 pointer-events-none transform -rotate-12 transition-transform duration-300"
          aria-hidden="true"
        >
          <svg
            width="42"
            height="80"
            viewBox="0 0 42 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="filter drop-shadow-[2px_5px_4px_rgba(0,0,0,0.22)]"
          >
            <defs>
              <linearGradient id="clip-chrome-metal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#BAC2CC" />
                <stop offset="25%" stopColor="#FFFFFF" />
                <stop offset="50%" stopColor="#8A929F" />
                <stop offset="75%" stopColor="#D4D9E2" />
                <stop offset="100%" stopColor="#636B77" />
              </linearGradient>
            </defs>
            {/* Outer paperclip wire loop */}
            <path
              d="M 28 54 
                 V 27 
                 A 7 7 0 0 0 14 27 
                 V 62 
                 A 11 11 0 0 0 36 62 
                 V 16 
                 A 14 14 0 0 0 8 16 
                 V 44"
              stroke="url(#clip-chrome-metal)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Specular ridge highlight line */}
            <path
              d="M 27.5 52 
                 V 27 
                 A 6.5 6.5 0 0 0 14.5 27 
                 V 61 
                 A 10.5 10.5 0 0 0 35.5 61 
                 V 16 
                 A 13.5 13.5 0 0 0 8.5 16 
                 V 42"
              stroke="rgba(255, 255, 255, 0.75)"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* =======================================================================
            STATIONERY ACCENT 2: STEEL WIRE STAPLE (Top-Right Corner)
            Dark steel staple diagonally driven across the top-right corner
            ======================================================================= */}
        <div
          className="absolute top-3.5 sm:top-5 right-5 sm:right-9 z-30 pointer-events-none transform rotate-[38deg]"
          aria-hidden="true"
        >
          {/* Puncture indentation shadows at both ends */}
          <div className="relative flex items-center justify-between w-[40px] sm:w-[44px] h-[7px]">
            <span className="w-1.5 h-1.5 rounded-full bg-black/45 blur-[0.4px] -ml-0.5" />
            
            {/* Staple steel wire body */}
            <div className="absolute inset-x-0.5 top-0.5 h-[3.8px] rounded-[1px] bg-gradient-to-b from-[#7A8696] via-[#363D47] to-[#1E2229] shadow-[0_1.5px_2px_rgba(0,0,0,0.35)]">
              {/* Highlight bevel on top wire ridge */}
              <div className="w-full h-[1px] bg-white/40 rounded-t-[1px]" />
            </div>

            <span className="w-1.5 h-1.5 rounded-full bg-black/45 blur-[0.4px] -mr-0.5" />
          </div>
        </div>

        {/* =======================================================================
            STATIONERY ACCENT 3: TRANSLUCENT WASHI / MASKING TAPE (Bottom-Left)
            Parchment yellow masking tape strip taped across the bottom-left corner
            ======================================================================= */}
        <div
          className="absolute -bottom-3 sm:-bottom-4 left-5 sm:left-10 z-30 pointer-events-none transform -rotate-[10deg] filter drop-shadow-[0_2.5px_3.5px_rgba(0,0,0,0.12)]"
          aria-hidden="true"
        >
          <div
            className="relative w-20 sm:w-24 h-6.5 sm:h-8 rounded-xs"
            style={{
              backgroundColor: "rgba(244, 230, 178, 0.78)",
              backdropFilter: "blur(1px)",
              WebkitBackdropFilter: "blur(1px)",
              clipPath:
                "polygon(0% 4%, 3% 0%, 97% 2%, 100% 6%, 98% 94%, 95% 100%, 4% 97%, 0% 92%)",
              boxShadow: "inset 0 0 6px rgba(180, 160, 110, 0.25)",
            }}
          >
            {/* Subtle paper grain texture */}
            <div
              className="absolute inset-0 opacity-20 mix-blend-multiply rounded-xs"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
              }}
            />
          </div>
        </div>

        {/* =======================================================================
            MAIN CARD CONTENT GRID: 2 Columns
            Left: About Me Badge & Editorial Copy
            Right: White Framed Portrait with Cursive Signature & Red 3D Pushpin
            ======================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* -------------------------------------------------------------------
              LEFT COLUMN: Editorial Copy & Bio
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* "About Me" Badge Pill with Sparkle Icon */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/10 bg-white/90 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-neutral-800" />
              <span className="font-sans text-xs sm:text-[13px] font-medium tracking-tight text-neutral-800 italic">
                About Me
              </span>
            </div>

            {/* Headline Intro: Bold Highlights matching the attached design */}
            <h2 className="font-sans text-xl sm:text-2xl lg:text-[27px] font-normal leading-[1.38] text-neutral-800 tracking-tight">
              Hi, I’m Anurag, a{" "}
              <strong className="font-bold text-neutral-950">
                UI/UX Designer
              </strong>{" "}
              and{" "}
              <strong className="font-bold text-neutral-950">
                Design Engineer
              </strong>{" "}
              specializing in{" "}
              <strong className="font-bold text-neutral-950">
                Design Systems & Scalable Web Apps
              </strong>
              . Based in{" "}
              <strong className="font-bold text-neutral-950">India</strong>.
            </h2>

            {/* Paragraph 1: Current Role */}
            <p className="font-sans text-sm sm:text-[15.5px] leading-relaxed text-neutral-700">
              I currently work at{" "}
              <strong className="font-semibold text-neutral-950">
                Fortmindz
              </strong>{" "}
              as a{" "}
              <strong className="font-semibold text-neutral-950">
                Lead UI/UX Designer
              </strong>
              , focusing on creating high-impact digital experiences, intuitive
              dashboards, and scalable interfaces.
            </p>

            {/* Paragraph 2: Collaboration & Value */}
            <p className="font-sans text-sm sm:text-[15.5px] leading-relaxed text-neutral-700">
              I collaborate with creative agencies, fast-moving teams, and founders
              to build fully responsive, visually engaging, and user-friendly digital
              experiences that align seamlessly with brand and product goals. With a
              keen eye for design craft and a deep understanding of frontend
              implementation, I design products that not only look great but also
              perform flawlessly.
            </p>
          </div>

          {/* -------------------------------------------------------------------
              RIGHT COLUMN: Framed Portrait with Signature & Red 3D Pushpin
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[290px] sm:max-w-[340px] md:max-w-[365px] lg:max-w-[385px]">
              
              {/* Outer Photo Mount Frame (White Border with Soft Shadow) */}
              <div className="relative bg-white p-2.5 sm:p-3 rounded-2xl sm:rounded-3xl border border-black/[0.08] shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12),0_2px_6px_rgba(0,0,0,0.04)]">
                
                {/* Photo Viewport */}
                <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-950">
                  <Image
                    src={photoSrc}
                    alt="Anurag Verma"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top"
                    priority
                  />

                  {/* Subtle Chiaroscuro Vignette to ensure the signature pops */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

                  {/* Handwritten White Cursive Signature "Anurag" in bottom-left */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 z-10 pointer-events-none select-none">
                    <svg
                      viewBox="0 0 135 44"
                      className="w-24 sm:w-28 h-auto text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] transform -rotate-2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Flowing handwritten script: Anurag */}
                      <path
                        d="M 12 34 C 10 28 13 15 17 10 C 20 6 24 5 27 8 C 29 11 28 21 29 28 C 29 32 30 35 31 35 M 15 22 C 21 21 27 20 32 20 M 35 25 C 37 21 40 20 43 23 C 45 25 44 30 46 30 C 48 30 50 23 53 22 C 55 22 57 25 58 30 M 63 23 C 62 27 63 30 67 30 C 70 30 72 25 73 23 M 76 24 C 77 22 80 22 82 24 C 83 26 83 30 85 30 M 88 27 C 87 24 89 22 92 22 C 95 22 96 25 96 28 C 96 31 94 32 92 32 C 89 32 88 29 89 26 M 97 24 C 99 22 103 22 105 25 C 106 27 105 31 106 35 C 106 41 102 44 94 42 C 88 40 89 36 98 35 C 108 34 118 35 128 36"
                        stroke="currentColor"
                        strokeWidth="1.9"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* ===============================================================
                    STATIONERY ACCENT 4: RED 3D PUSHPIN / THUMBTACK (Bottom-Right)
                    Pinned through the bottom-right corner of the photo frame
                    =============================================================== */}
                <div
                  className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 z-30 pointer-events-none transform rotate-[12deg]"
                  aria-hidden="true"
                >
                  <svg
                    width="44"
                    height="50"
                    viewBox="0 0 44 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Cast shadow under pin */}
                      <filter id="pin-drop-shadow" x="0" y="0" width="160%" height="160%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" />
                        <feOffset dx="3" dy="4" result="offsetblur" />
                        <feComponentTransfer>
                          <feFuncA type="linear" slope="0.38" />
                        </feComponentTransfer>
                        <feMerge>
                          <feMergeNode />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>

                      {/* Head spherical radial highlight */}
                      <radialGradient id="pin-head-grad" cx="35%" cy="30%" r="65%">
                        <stop offset="0%" stopColor="#FFA0AD" />
                        <stop offset="28%" stopColor="#F43F5E" />
                        <stop offset="65%" stopColor="#BE123C" />
                        <stop offset="100%" stopColor="#7F0E28" />
                      </radialGradient>

                      {/* Neck cylindrical reflection */}
                      <linearGradient id="pin-neck-grad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#881337" />
                        <stop offset="35%" stopColor="#FDA4AF" />
                        <stop offset="65%" stopColor="#E11D48" />
                        <stop offset="100%" stopColor="#7F0E28" />
                      </linearGradient>

                      {/* Base circular flange */}
                      <radialGradient id="pin-base-grad" cx="40%" cy="35%" r="60%">
                        <stop offset="0%" stopColor="#FB7185" />
                        <stop offset="50%" stopColor="#BE123C" />
                        <stop offset="100%" stopColor="#4C0519" />
                      </radialGradient>
                    </defs>

                    {/* Realistic Ground Contact Shadow */}
                    <ellipse
                      cx="25"
                      cy="43"
                      rx="12"
                      ry="5.5"
                      fill="rgba(0,0,0,0.32)"
                      transform="rotate(10 25 43)"
                      className="filter blur-[1.5px]"
                    />

                    {/* Pin Metal Point (Piercing the paper) */}
                    <path
                      d="M 17 38 L 19 44 L 21 38 Z"
                      fill="#717A86"
                    />

                    {/* Pin Group with Depth */}
                    <g filter="url(#pin-drop-shadow)">
                      {/* Flared Base Collar */}
                      <ellipse
                        cx="19"
                        cy="36"
                        rx="11"
                        ry="4.5"
                        fill="url(#pin-base-grad)"
                        stroke="#9F1239"
                        strokeWidth="0.5"
                      />
                      {/* Specular ring on base */}
                      <ellipse
                        cx="18.5"
                        cy="35"
                        rx="9"
                        ry="3"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.4)"
                        strokeWidth="0.6"
                      />

                      {/* Gripped Waist / Neck */}
                      <path
                        d="M 14.5 24 C 14.5 30 15.5 34 16 35 L 22 35 C 22.5 34 23.5 30 23.5 24 Z"
                        fill="url(#pin-neck-grad)"
                      />

                      {/* Top Spherical Head */}
                      <circle
                        cx="19"
                        cy="16"
                        r="11"
                        fill="url(#pin-head-grad)"
                      />

                      {/* Glossy White Reflection Spot on Head */}
                      <ellipse
                        cx="15.5"
                        cy="12"
                        rx="3.5"
                        ry="2.2"
                        transform="rotate(-25 15.5 12)"
                        fill="rgba(255, 255, 255, 0.85)"
                      />
                      <circle
                        cx="14"
                        cy="14.5"
                        r="0.9"
                        fill="rgba(255, 255, 255, 0.6)"
                      />
                    </g>
                  </svg>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
