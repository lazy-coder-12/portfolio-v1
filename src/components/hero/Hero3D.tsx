"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Hero3DPoster } from "./Hero3DPoster";

// Lazy-load R3F canvas strictly on client side
const LazyHero3DCanvas = dynamic(() => import("./Hero3DCanvas"), {
  ssr: false,
  loading: () => <Hero3DPoster />,
});

export function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldRender3D, setShouldRender3D] = useState(false);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    // Check if WebGL is supported
    const checkWebGL = () => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    const hasWebGL = checkWebGL();
    const isDesktop = window.innerWidth >= 768;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasWebGL && isDesktop && !prefersReducedMotion) {
      setShouldRender3D(true);
    }

    // IntersectionObserver to pause when offscreen
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-72 sm:h-96 md:h-[460px] flex items-center justify-center select-none"
    >
      {shouldRender3D && isInView ? (
        <LazyHero3DCanvas />
      ) : (
        <Hero3DPoster />
      )}
    </div>
  );
}
