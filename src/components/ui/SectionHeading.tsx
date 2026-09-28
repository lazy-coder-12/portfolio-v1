"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number?: string;
  category?: string;
  title: string;
  italicWord?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  category,
  title,
  italicWord,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      el.children,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "space-y-3",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {(number || category) && (
        <div className="flex items-center gap-2 mono-label text-xs text-[var(--accent)] font-semibold">
          {number && <span>// {number}</span>}
          {number && category && <span className="opacity-40">·</span>}
          {category && <span>{category}</span>}
        </div>
      )}

      <h2 className="display-section text-[var(--text-primary)]">
        {title}{" "}
        {italicWord && (
          <span className="serif-italic text-[var(--accent)] font-normal">
            {italicWord}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed font-sans pt-1">
          {description}
        </p>
      )}
    </div>
  );
}
