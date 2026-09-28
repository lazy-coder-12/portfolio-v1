"use client";

import React, { useState, useMemo } from "react";

// Generate deterministic pseudo-realistic GitHub contribution data mirroring the mockup
function generateContributions() {
  const weeks = 52;
  const daysPerWeek = 7;
  const grid: { count: number; level: number; date: string }[][] = [];

  const baseDate = new Date(2025, 0, 5); // Sunday Jan 5, 2025

  for (let w = 0; w < weeks; w++) {
    const weekDays: { count: number; level: number; date: string }[] = [];
    for (let d = 0; d < daysPerWeek; d++) {
      const currentDate = new Date(baseDate);
      currentDate.setDate(baseDate.getDate() + (w * 7 + d));
      const dateStr = currentDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      // Activity distribution matching natural GitHub profile in the mockup
      const isWeekend = d === 0 || d === 6;
      // High activity periods during spring and late summer / fall sprints
      const sprintBonus = (w > 8 && w < 22) || (w > 32 && w < 48) ? 0.2 : 0;
      const seed = Math.sin(w * 17.3 + d * 5.7) * 10000;
      const rand = (seed - Math.floor(seed)) + sprintBonus;

      let count = 0;
      let level = 0;

      if (!isWeekend && rand > 0.45) {
        if (rand > 0.95) {
          count = Math.floor(rand * 6) + 8;
          level = 4;
        } else if (rand > 0.8) {
          count = Math.floor(rand * 4) + 5;
          level = 3;
        } else if (rand > 0.62) {
          count = Math.floor(rand * 3) + 2;
          level = 2;
        } else {
          count = 1;
          level = 1;
        }
      } else if (isWeekend && rand > 0.78) {
        count = Math.floor(rand * 2) + 1;
        level = 1;
      }

      weekDays.push({ count, level, date: dateStr });
    }
    grid.push(weekDays);
  }

  return grid;
}

// 12 Months mapped to approximate week columns (0-indexed out of 52)
const MONTHS_MAP = [
  { name: "Jan", col: 0 },
  { name: "Feb", col: 4 },
  { name: "Mar", col: 8 },
  { name: "Apr", col: 13 },
  { name: "May", col: 17 },
  { name: "Jun", col: 21 },
  { name: "Jul", col: 26 },
  { name: "Aug", col: 30 },
  { name: "Sep", col: 35 },
  { name: "Oct", col: 39 },
  { name: "Nov", col: 43 },
  { name: "Dec", col: 48 },
];

const LEVEL_COLORS = [
  "#F0F0F0", // level 0 (subtle soft gray)
  "#9BE9A8", // level 1
  "#40C463", // level 2
  "#30A14E", // level 3
  "#216E39", // level 4
];

export function ContributionsSection() {
  const [hoveredCell, setHoveredCell] = useState<{
    count: number;
    date: string;
  } | null>(null);

  const contributionGrid = useMemo(() => generateContributions(), []);

  return (
    <section
      id="contributions"
      className="py-0 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full select-none"
      aria-label="Contributions"
    >
      {/* Outer Card Container with Raised Block Layer */}
      <div className="relative w-full pb-1.5 sm:pb-2 select-none">
        {/* Underlying Raised Block Layer (#F5F5F5 fill, 32px radius, no border, subtle Y-offset) */}
        <div
          className="absolute inset-0 translate-y-1.5 rounded-[32px] bg-[#F5F5F5] pointer-events-none"
          aria-hidden="true"
        />

        {/* Top Main Card (White, 32px radius, 1px solid #E6E6E6 border) */}
        <div
          className="relative w-full bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
          style={{
            border: "1px solid #E6E6E6",
          }}
        >
          {/* Header Row: Title & Subtitle on Left, Pill Button on Right */}
          <div className="flex flex-row items-center justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <h3 className="font-sans font-semibold text-[22px] sm:text-[26px] text-black tracking-[-0.03em] leading-tight">
                Contributions
              </h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#666666] font-normal mt-1">
                Contributions in the last year
              </p>
            </div>

            {/* GitHub Profile Pill Button */}
            <a
              href="https://github.com/anuragverma12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black text-white text-[12.5px] sm:text-[13px] font-medium hover:bg-neutral-800 transition-colors shadow-xs shrink-0 cursor-pointer"
              aria-label="Anurag Verma on GitHub"
            >
              <svg
                className="w-4 h-4 fill-white shrink-0"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span className="tracking-wide">ANURAGVERMA12</span>
            </a>
          </div>

          {/* Heatmap Matrix with Responsive Horizontal Scrolling */}
          <div className="overflow-x-auto pb-2 pt-1 -mx-2 px-2 scrollbar-none select-none">
            <div className="w-full min-w-[760px]">
              {/* Month Header Row (precisely aligned over 52 columns) */}
              <div className="relative h-5 mb-2.5 text-[11.5px] font-sans text-[#888888]">
                {MONTHS_MAP.map((m) => (
                  <span
                    key={m.name}
                    className="absolute"
                    style={{
                      left: `${(m.col / 52) * 100}%`,
                    }}
                  >
                    {m.name}
                  </span>
                ))}
              </div>

              {/* 52 Columns x 7 Days Grid */}
              <div className="flex gap-[3.5px] sm:gap-[4px] justify-between">
                {contributionGrid.map((week, weekIdx) => (
                  <div
                    key={weekIdx}
                    className="flex flex-col gap-[3.5px] sm:gap-[4px] flex-1"
                  >
                    {week.map((day, dayIdx) => (
                      <div
                        key={dayIdx}
                        className="w-full aspect-square rounded-[2.5px] sm:rounded-[3px] transition-transform duration-100 hover:scale-125 cursor-pointer"
                        style={{
                          backgroundColor: LEVEL_COLORS[day.level],
                        }}
                        onMouseEnter={() =>
                          setHoveredCell({ count: day.count, date: day.date })
                        }
                        onMouseLeave={() => setHoveredCell(null)}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Tooltip / Status Display Line */}
          <div className="h-6 text-[12.5px] font-sans text-neutral-600 pt-1.5 flex items-center">
            {hoveredCell ? (
              <span>
                <strong className="text-black font-semibold">
                  {hoveredCell.count} contribution{hoveredCell.count === 1 ? "" : "s"}
                </strong>{" "}
                on {hoveredCell.date}
              </span>
            ) : (
              <span className="text-neutral-400 text-[12px] opacity-0">// Hover to view</span>
            )}
          </div>

          {/* Bottom Row: Caption on Left, Less/More Legend on Right */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-5 mt-2 border-t border-[#E6E6E6] text-[13px] font-sans text-[#666666]">
            <div>So come see even the contributions</div>

            <div className="flex items-center gap-1.5 font-sans text-[12px] text-[#666666]">
              <span>Less</span>
              {LEVEL_COLORS.map((color, idx) => (
                <span
                  key={idx}
                  className="w-3 h-3 rounded-[2.5px] inline-block"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
