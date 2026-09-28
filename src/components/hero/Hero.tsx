"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Folder, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)] lg:max-h-[760px] py-4 sm:py-6 lg:py-4 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full select-none"
      aria-label="Hero Section"
    >
      {/* =========================================================================
          MAIN HERO 2-COLUMN LAYOUT
          Left: Eyebrow Tape, Headline, Bio Copy & Dual CTA Buttons
          Right: Sleek Upright Rounded Card with Anurag's Portrait & Figma Badge
          ========================================================================= */}
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10 xl:gap-12 w-full my-auto">
        
        {/* -----------------------------------------------------------------------
            LEFT COLUMN: Eyebrow, Display Headline, Narrative & CTAs
            ----------------------------------------------------------------------- */}
        <div className="flex flex-col items-start text-left max-w-2xl lg:max-w-[560px] xl:max-w-[620px] space-y-4 sm:space-y-5">
          
          {/* 1. Orange Tape Eyebrow with Caveat font (bold weight) */}
          <div
            className="relative inline-flex items-center justify-center transform -rotate-[2.5deg] hover:-rotate-1 transition-transform duration-300 select-none"
            aria-hidden="true"
          >
            <div
              className="relative px-6 py-2 sm:px-7 sm:py-2 flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/eyebrow-tape.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span
                className="text-white font-caveat font-bold text-[16px] sm:text-[18px] lg:text-[19px] tracking-wide relative z-10 whitespace-nowrap drop-shadow-xs"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Your friendly neighbourhood, Designer!
              </span>
            </div>
          </div>

          {/* 2. Display Headline: Refined Geist typography matching attached design */}
          <h1 className="font-sans font-semibold tracking-[-0.03em] text-[28px] xs:text-[32px] sm:text-[36px] md:text-[38px] lg:text-[41px] xl:text-[44px] leading-[1.14] text-black">
            <span className="block sm:whitespace-nowrap">Designing products &amp; systems</span>
            <span className="block sm:whitespace-nowrap">that drive conversions.</span>
          </h1>

          {/* 3. Narrative Paragraph 1 */}
          <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#555555] leading-relaxed font-normal">
            Hey there! I&apos;m Anurag Verma, a designer based in Kolkata, India. I&apos;ve been designing interfaces and experiences for over 2+ years now.
          </p>

          {/* 4. Narrative Paragraph 2 with Tech Stack Brand Highlights */}
          <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#555555] leading-relaxed font-normal">
            Lately I&apos;ve been practicing bring ideas to life with{" "}
            <strong className="font-bold text-[#E05206]">Claude Code</strong>,{" "}
            <strong className="font-bold text-[#2563EB]">Gemini</strong>,{" "}
            <strong className="font-bold text-black">Chat GPT</strong> and{" "}
            <strong className="font-bold text-[#2563EB]">Antigravity</strong>.
            And, if I&apos;m not working you will probably find me nerding out on Animes or the MCU.
          </p>

          {/* 5. Dual Pill Action Buttons */}
          <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-3.5">
            {/* Button 1: Explore Projects (Solid Black Pill with filled folder icon) */}
            <Link
              href="#work"
              className="inline-flex items-center gap-2.5 px-5.5 py-2.5 rounded-full bg-black text-white text-[13.5px] sm:text-[14px] font-medium hover:bg-neutral-800 transition-colors shadow-xs"
            >
              <Folder className="w-4 h-4 fill-white text-white shrink-0" />
              <span>Explore Projects</span>
            </Link>

            {/* Button 2: Get In Touch (White Pill with Subtle Border & Arrow) */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5.5 py-2.5 rounded-full bg-white border border-black/15 text-black text-[13.5px] sm:text-[14px] font-medium hover:border-black/35 hover:bg-neutral-50/80 transition-colors shadow-2xs"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-black shrink-0" />
            </Link>
          </div>

        </div>

        {/* -----------------------------------------------------------------------
            RIGHT COLUMN: Card with Viewport-Balanced Height & Raised Block
            - Card: 420px width x 540px height (scaled to viewport), 32px radius, 1px solid #E6E6E6 border
            - Underlying layer: #F5F5F5 fill color, 32px radius, no border, raised block effect
            - Image: 380px width x 418px height, 16px radius, drop shadow 0 4px 2px #000000 12%
            - Figma Badge: 60px floating badge overlapping bottom-right of image
            ----------------------------------------------------------------------- */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end shrink-0 pt-2 lg:pt-0">
          <div className="relative w-full max-w-[420px] sm:w-[420px] pb-3 select-none">
            {/* Underlying Raised Block Layer (#F5F5F5 fill, 32px radius, no border) */}
            <div
              className="absolute inset-0 translate-y-2.5 sm:translate-y-3 rounded-[32px] bg-[#F5F5F5] pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Main Card (420px x 540px, 32px radius, 1px solid #E6E6E6 border) */}
            <div
              className="relative w-full sm:w-[420px] h-auto sm:h-[540px] bg-white rounded-[32px] p-4 sm:p-5 flex flex-col items-center justify-between"
              style={{
                border: "1px solid #E6E6E6",
              }}
            >
              {/* Inner Image Container (380px width x 418px height, 16px radius, 0 4px 2px rgba(0,0,0,0.12) drop shadow) */}
              <div className="relative w-full sm:w-[380px] shrink-0">
                <div
                  className="relative w-full h-auto sm:h-[418px] rounded-[16px] overflow-hidden bg-sky-100"
                  style={{
                    boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <Image
                    src="/images/anurag-card-portrait.jpg"
                    alt="Anurag Verma"
                    width={380}
                    height={418}
                    className="w-full h-auto sm:h-[418px] object-cover object-center scale-[1.02]"
                    priority
                  />
                </div>

                {/* Floating Figma Circular Badge (overlapping bottom-right corner) */}
                <div
                  className="absolute bottom-0 translate-y-1/2 right-3 sm:right-3.5 z-20 w-14 h-14 sm:w-[60px] sm:h-[60px] pointer-events-none select-none drop-shadow-sm"
                  aria-label="Figma"
                >
                  <Image
                    src="/images/figma-badge.png"
                    alt="Figma Badge"
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Card Caption: Centered Name & Current Company */}
              <div className="w-full text-center pt-4 sm:pt-5 pb-1 space-y-1">
                <h3 className="font-sans font-semibold text-[22px] sm:text-[24px] text-black tracking-[-0.025em] leading-tight">
                  Anurag Verma
                </h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-[#666666] font-normal leading-normal">
                  Currently at <strong className="font-semibold text-black">Fortmindz</strong> as{" "}
                  <strong className="font-semibold text-black">UI/UX Designer</strong>
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
