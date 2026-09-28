"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Preloader() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check session storage or testing flag to skip
    const hasPreloaded = sessionStorage.getItem("anurag_portfolio_preloaded");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const urlParams = new URLSearchParams(window.location.search);
    const skipParam = urlParams.get("skipPreloader") === "true";

    if (hasPreloaded || prefersReducedMotion || skipParam) {
      document.documentElement.classList.remove("__loading");
      document.documentElement.classList.add("__loaded");
      return;
    }

    setShowPreloader(true);
    document.documentElement.classList.add("__loading");

    // Smooth counter from 0 to 100 over ~1.1 seconds
    const duration = 1100;
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            finishPreloader();
          }, 200);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        clearInterval(timer);
        finishPreloader();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const finishPreloader = () => {
    sessionStorage.setItem("anurag_portfolio_preloaded", "true");
    setShowPreloader(false);

    // Double rAF layout paint guarantee
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("__loading");
        document.documentElement.classList.add("__loaded");
      });
    });
  };

  return (
    <AnimatePresence>
      {showPreloader && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={finishPreloader}
          className="fixed inset-0 z-100 flex flex-col justify-between p-8 md:p-14 bg-[var(--bg-canvas)] text-[var(--text-primary)] cursor-pointer select-none"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio"
        >
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="mono-label text-[var(--text-secondary)]">Anurag Verma · Folio 2026</span>
            </div>
            <div className="mono-label text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors">
              Click anywhere to skip
            </div>
          </div>

          {/* Center monogram & role */}
          <div className="max-w-xl mx-auto text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl font-serif tracking-tight"
            >
              Crafting <span className="italic font-light text-[var(--accent)]">Intuitive</span> Experiences
            </motion.div>
            <p className="text-sm md:text-base text-[var(--text-secondary)] font-sans">
              UI/UX Designer &amp; Design Engineer · Fortmindz · Kolkata
            </p>
          </div>

          {/* Bottom progress bar & counter */}
          <div className="space-y-3">
            <div className="flex items-center justify-between mono-label text-xs text-[var(--text-secondary)]">
              <span>INITIALIZING SYSTEM</span>
              <span className="font-mono text-sm text-[var(--text-primary)] font-semibold">
                {Math.round(progress).toString().padStart(2, "0")}%
              </span>
            </div>
            <div className="w-full h-0.5 bg-[var(--border-subtle)] relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 bottom-0 left-0 bg-[var(--accent)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
