"use client";

import React from "react";
import Link from "next/link";
import { Folder } from "lucide-react";

export function BuildingStuffSection() {
  return (
    <section
      id="side-quests"
      className="pt-6 sm:pt-8 pb-8 sm:pb-10 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full text-center select-none"
      aria-label="Building Stuff"
    >
      <div className="space-y-2 max-w-2xl mx-auto">
        <h2 className="font-sans font-semibold text-[32px] sm:text-[36px] lg:text-[40px] text-black tracking-[-0.03em] leading-tight">
          Building Stuff
        </h2>
        <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#666666] leading-relaxed font-normal">
          Take a peek at what I build in my spare time and side quests.
        </p>
      </div>

      {/* Pill Card */}
      <div
        className="max-w-xl mx-auto mt-6 sm:mt-8 bg-white rounded-2xl sm:rounded-full px-6 py-3.5 sm:py-4 flex items-center justify-between transition-all gap-4 shadow-xs hover:shadow-sm"
        style={{
          border: "1px solid #E6E6E6",
        }}
      >
        {/* Left: Blue Folder + Text */}
        <div className="flex items-center gap-3.5 text-left">
          <div className="w-10 h-10 rounded-xl sm:rounded-full bg-blue-50 border border-blue-100/60 flex items-center justify-center shrink-0">
            <Folder className="w-5 h-5 text-[#2563EB] fill-[#2563EB]" />
          </div>
          <div>
            <div className="font-sans font-semibold text-[14.5px] sm:text-[15.5px] text-black">
              Building an app
            </div>
            <div className="font-sans text-[12px] sm:text-[12.5px] text-[#666666]">
              In progress right now...
            </div>
          </div>
        </div>

        {/* Right: Blue Pill Button */}
        <Link
          href="/projects"
          className="shrink-0 px-5 py-2 rounded-full bg-[#2563EB] text-white text-[12.5px] sm:text-[13px] font-medium hover:bg-blue-700 transition-colors shadow-xs"
        >
          Explore
        </Link>
      </div>
    </section>
  );
}
