import React from "react";

export function Hero3DPoster() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Radiant ambient glow */}
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-radial from-[var(--accent-glow)] via-[var(--accent-muted)] to-transparent blur-3xl opacity-60 animate-pulse" />

      {/* Abstract glass crystal polygon SVG representation */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-2xl transition-transform duration-700 hover:scale-105"
        >
          <defs>
            <linearGradient id="crystalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#a3cc42" stopOpacity="0.25" />
            </linearGradient>
            <linearGradient id="crystalGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="facetHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Facets of abstract geometric crystal */}
          <polygon
            points="100,20 165,65 100,105 35,65"
            fill="url(#crystalGrad2)"
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.75"
          />
          <polygon
            points="100,105 165,65 155,145 100,180"
            fill="url(#crystalGrad1)"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="0.75"
          />
          <polygon
            points="100,105 35,65 45,145 100,180"
            fill="url(#crystalGrad2)"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth="0.75"
          />
          <polygon
            points="100,20 100,105 165,65"
            fill="url(#facetHighlight)"
            opacity="0.6"
          />
        </svg>
      </div>
    </div>
  );
}
