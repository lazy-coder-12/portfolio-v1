"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AtSign, Check } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export function ContactCTASection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-0 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full select-none"
      aria-label="Contact and Collaboration"
    >
      <div className="w-full space-y-6">
        {/* Eyebrow Tape with Caveat font (matching Hero section) */}
        <div>
          <div
            className="relative inline-flex items-center justify-center transform -rotate-[2deg] hover:-rotate-1 transition-transform duration-300 select-none"
            aria-hidden="true"
          >
            <div
              className="relative px-7 py-2 sm:px-8 sm:py-2.5 flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/cta-tape.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span
                className="text-white font-caveat font-bold text-[16px] sm:text-[18px] lg:text-[19px] tracking-wide relative z-10 whitespace-nowrap drop-shadow-xs"
                style={{ fontFamily: "'Caveat', cursive" }}
              >
                Always excited to meet new people!
              </span>
            </div>
          </div>
        </div>

        {/* Display Headline & Subtitle (bounded to max-w-3xl for optimal line length) */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="font-sans font-bold tracking-[-0.035em] text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] leading-[1.12] text-black">
            <span className="block">Wanna talk or maybe,</span>
            <span className="block">build something together?!</span>
          </h2>

          <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#666666] leading-relaxed font-normal">
            Have a project that needs a creative touch? Let&apos;s grab a coffee and make it happen.
          </p>
        </div>

        {/* Actions Row: Full Container Width (w-full) with Email on Left & Badges on Far Right */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2 sm:pt-4 w-full">
          {/* Left: Email Pill Button with @ icon and click-to-copy */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2.5 h-11 sm:h-12 px-5 sm:px-6 rounded-full bg-black text-white text-[13px] sm:text-[14px] font-medium hover:bg-neutral-800 transition-colors shadow-xs group cursor-pointer shrink-0"
            aria-label={`Send email to ${PERSONAL_INFO.email}`}
          >
            <AtSign className="w-4 h-4 text-white shrink-0" />
            <span>{PERSONAL_INFO.email}</span>
            {copied && (
              <span className="ml-1 inline-flex items-center gap-1 text-xs text-emerald-400 font-normal">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Copied!
              </span>
            )}
          </a>

          {/* Right: 3 Round Social Badges (Dribbble, LinkedIn, Figma) tight clean spacing */}
          <div className="flex items-center gap-2 shrink-0">
            {/* 1. Dribbble */}
            <a
              href={PERSONAL_INFO.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer select-none"
              title="Dribbble"
              aria-label="Anurag Verma on Dribbble"
            >
              <Image
                src="/images/social-dribbble.png"
                alt="Dribbble"
                width={68}
                height={68}
                className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] object-contain drop-shadow-xs"
              />
            </a>

            {/* 2. LinkedIn */}
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer select-none"
              title="LinkedIn"
              aria-label="Anurag Verma on LinkedIn"
            >
              <Image
                src="/images/social-linkedin.png"
                alt="LinkedIn"
                width={68}
                height={68}
                className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] object-contain drop-shadow-xs"
              />
            </a>

            {/* 3. Figma */}
            <a
              href={PERSONAL_INFO.socials.figma || "https://www.figma.com/@ux_anurag"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer select-none"
              title="Figma"
              aria-label="Anurag Verma on Figma"
            >
              <Image
                src="/images/social-figma.png"
                alt="Figma"
                width={68}
                height={68}
                className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] object-contain drop-shadow-xs"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
