"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface SignatureLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  glow?: boolean;
}

export function SignatureLine({
  orientation = "horizontal",
  className = "",
  glow = false,
}: SignatureLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.style.transform = "scale(1)";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const isH = orientation === "horizontal";

    gsap.fromTo(
      el,
      { [isH ? "scaleX" : "scaleY"]: 0, transformOrigin: isH ? "left center" : "top center" },
      {
        [isH ? "scaleX" : "scaleY"]: 1,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 92%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [orientation]);

  return (
    <div
      ref={lineRef}
      className={cn(
        orientation === "horizontal"
          ? "w-full h-px signature-grid-line-h"
          : "w-px h-full signature-grid-line-v",
        glow && "after:absolute after:inset-0 after:bg-[var(--accent)] after:opacity-40 after:blur-xs",
        className
      )}
      aria-hidden="true"
    />
  );
}
