"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Network, CheckCircle2 } from "lucide-react";

// In-memory session lifecycle flag:
// Persists during client-side Next.js SPA navigation (Link clicks between /, /about, /projects, /contact),
// but resets automatically on page reload/refresh or when closing and reopening the tab.
let hasShownAuroraInSession = false;

export function AuroraPreloader() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [coordinates, setCoordinates] = useState("LAT: 22.5726° N · LON: 88.3639° E");

  useEffect(() => {
    // Accessibility check: reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const urlParams = new URLSearchParams(window.location.search);
    const skipParam = urlParams.get("skipPreloader") === "true";

    // If already shown in this tab session and this is NOT a hard reload, skip
    if ((hasShownAuroraInSession || prefersReducedMotion || skipParam) && !urlParams.get("forcePreload")) {
      document.documentElement.classList.remove("__loading");
      document.documentElement.classList.add("__loaded");
      return;
    }

    // Geolocation detection with instant Kolkata fallback
    if (typeof navigator !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          const latDir = lat >= 0 ? "N" : "S";
          const lonDir = lon >= 0 ? "E" : "W";
          setCoordinates(
            `LAT: ${Math.abs(lat).toFixed(4)}° ${latDir} · LON: ${Math.abs(lon).toFixed(4)}° ${lonDir}`
          );
        },
        () => {
          // Keep default coordinates
        },
        { timeout: 1200 }
      );
    }

    // Trigger preloader
    setShow(true);
    document.documentElement.classList.add("__loading");

    // Duration: at least 3 seconds (3200ms satisfies requirement)
    const duration = 3200;
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => {
            finish();
          }, 350);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        clearInterval(progressTimer);
        finish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(progressTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const finish = () => {
    hasShownAuroraInSession = true;
    setShow(false);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.documentElement.classList.remove("__loading");
        document.documentElement.classList.add("__loaded");
      });
    });
  };

  const isConnected = Math.round(progress) >= 100;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="aurora-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.01 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onClick={finish}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-12 bg-white text-[#16110f] select-none cursor-pointer overflow-hidden font-sans"
          role="status"
          aria-live="polite"
          aria-label="Launching Portfolio.exe"
        >
          {/* Subtle Grain / Noise Overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.045] mix-blend-multiply"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="preloader-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.8"
                numOctaves="4"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#preloader-noise)" />
          </svg>

          {/* Smooth, Relaxing Blurred Objects Moving in Slow Motion */}
          <motion.div
            animate={{
              x: [0, 140, -110, 80, -90, 0],
              y: [0, -100, 70, -80, 60, 0],
              scale: [1, 1.22, 0.94, 1.15, 0.97, 1],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[460px] h-[460px] sm:w-[560px] sm:h-[560px] rounded-full bg-gradient-to-tr from-[#e95810]/20 via-[#f97316]/14 to-[#fbbf24]/10 blur-[100px] pointer-events-none -z-0"
          />
          <motion.div
            animate={{
              x: [0, -110, 120, -70, 90, 0],
              y: [0, 90, -80, 60, -50, 0],
              scale: [1, 0.92, 1.18, 0.95, 1.1, 1],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] rounded-full bg-gradient-to-br from-[#e95810]/12 via-[#f59e0b]/10 to-transparent blur-[95px] pointer-events-none -z-0"
          />

          {/* Top Bar: Brand & Skip */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e95810] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e95810]" />
              </span>
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-neutral-600">
                Anurag Verma · Folio 2026
              </span>
            </div>

            <div className="font-mono text-[11px] sm:text-xs text-neutral-400 hover:text-neutral-900 transition-colors uppercase tracking-wider">
              [Click or ESC to Skip]
            </div>
          </div>

          {/* Center Stage: 3D Folder with Animated Stationery Items + "Launching Portfolio.exe" */}
          <div className="relative z-10 max-w-md mx-auto w-full text-center space-y-7 my-auto">
            {/* 3D Isometric Folder Container */}
            <div className="relative mx-auto w-36 h-28 flex items-center justify-center select-none pt-2">
              <motion.div
                animate={
                  isConnected
                    ? { scale: [1, 1.06, 1], y: [0, -3, 0] }
                    : { scale: 1, y: 0 }
                }
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="relative w-28 h-24"
                style={{ perspective: 650 }}
              >
                {/* 1. BACK FOLDER LAYER */}
                <div className="absolute inset-0">
                  {/* Folder Back Tab */}
                  <div className="absolute -top-3 left-2 w-11 h-4 bg-[#e5ddd3] rounded-t-md border-t border-l border-r border-[#d4c9bc] flex items-center px-1.5 shadow-2xs">
                    <span className="w-4 h-1 bg-[#e95810] rounded-full" />
                  </div>
                  {/* Folder Back Body */}
                  <div className="w-full h-full bg-gradient-to-b from-[#e8e0d6] to-[#ded4c8] rounded-xl border border-[#d4c9bc] shadow-md shadow-black/5" />
                  {/* Inner Pocket Darkening Gradient */}
                  <div className="absolute inset-x-1.5 top-1.5 bottom-1 rounded-lg bg-gradient-to-b from-[#a89c90]/35 to-[#8d8073]/45 pointer-events-none" />
                </div>

                {/* 2. STATIONERY ITEMS LAYER (Sequentially placed inside as progress advances) */}
                {/* Item 1: Ruled Design Document (Enters at 15% - 40%) */}
                <motion.div
                  initial={{ y: -65, opacity: 0, rotate: -8 }}
                  animate={{
                    y: progress >= 20 ? (progress >= 40 ? 6 : -12) : -65,
                    opacity: progress >= 15 ? 1 : 0,
                    rotate: progress >= 20 ? -4 : -8,
                    scale: progress >= 20 ? 0.95 : 0.9,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-3 w-16 h-20 bg-white rounded-md border border-neutral-300 shadow-sm p-2 flex flex-col gap-1 z-10 origin-bottom"
                >
                  {/* Folded dog-ear corner */}
                  <div className="absolute top-0 right-0 w-3 h-3 bg-neutral-100 border-b border-l border-neutral-300 rounded-bl-xs" />
                  {/* Document lines */}
                  <div className="w-7 h-1.5 bg-[#e95810] rounded-xs mb-1" />
                  <div className="w-full h-1 bg-neutral-200 rounded-xs" />
                  <div className="w-10 h-1 bg-neutral-200 rounded-xs" />
                  <div className="w-12 h-1 bg-neutral-200 rounded-xs" />
                  <div className="w-8 h-1 bg-neutral-200 rounded-xs" />
                </motion.div>

                {/* Item 2: Sticky Note (Enters at 40% - 65%) */}
                <motion.div
                  initial={{ y: -60, opacity: 0, rotate: 16 }}
                  animate={{
                    y: progress >= 45 ? (progress >= 65 ? 10 : -8) : -60,
                    opacity: progress >= 40 ? 1 : 0,
                    rotate: progress >= 45 ? 9 : 16,
                    scale: progress >= 45 ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-1 right-2 w-12 h-12 bg-[#fef08a] rounded-xs border border-[#fde047] shadow-sm p-1.5 flex flex-col justify-between z-10 origin-bottom"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e95810]" />
                    <span className="text-[7px] font-mono text-neutral-600 font-bold">NOTE</span>
                  </div>
                  <div className="space-y-1">
                    <div className="w-full h-0.5 bg-neutral-400/50 rounded-xs" />
                    <div className="w-6 h-0.5 bg-neutral-400/50 rounded-xs" />
                  </div>
                </motion.div>

                {/* Item 3: Metallic Paper Clip (Enters at 65% - 85%) */}
                <motion.div
                  initial={{ y: -45, opacity: 0, rotate: -20 }}
                  animate={{
                    y: progress >= 70 ? (progress >= 85 ? 4 : -6) : -45,
                    opacity: progress >= 65 ? 1 : 0,
                    rotate: progress >= 70 ? 14 : -20,
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-0 left-9 z-15 pointer-events-none"
                >
                  <svg width="14" height="24" viewBox="0 0 14 24" fill="none" className="drop-shadow-xs">
                    <path
                      d="M4 6V17C4 18.6569 5.34315 20 7 20C8.65685 20 10 18.6569 10 17V4C10 2.34315 8.65685 1 7 1C5.34315 1 4 2.34315 4 4V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V6"
                      stroke="#4b5563"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>

                {/* Item 4: Mini Swatch / Project Index Card (Enters at 85% - 100%) */}
                <motion.div
                  initial={{ y: -50, opacity: 0, rotate: 10 }}
                  animate={{
                    y: progress >= 88 ? 14 : -50,
                    opacity: progress >= 85 ? 1 : 0,
                    rotate: progress >= 88 ? -1 : 10,
                    scale: progress >= 88 ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-2 left-6 w-14 h-10 bg-white rounded border border-neutral-300 shadow-sm p-1.5 z-12 origin-bottom flex flex-col justify-between"
                >
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-xs bg-[#e95810]" />
                    <span className="w-2 h-2 rounded-xs bg-[#16110f]" />
                    <span className="w-2 h-2 rounded-xs bg-[#f4ede4]" />
                  </div>
                  <span className="text-[7px] font-mono uppercase text-neutral-600 font-semibold">FOLIO.26</span>
                </motion.div>

                {/* 3. FRONT FOLDER FLAP (3D tilted forward, concealing bottom of stationery) */}
                <div
                  className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-[#f5ede3] to-[#ebdcd0] rounded-b-xl border-t border-[#fbf7f2] border-x border-b border-[#d8ccbe] shadow-lg shadow-black/10 z-20 overflow-hidden"
                  style={{
                    transform: "rotateX(-12deg)",
                    transformOrigin: "bottom center",
                  }}
                >
                  {/* Front flap subtle diagonal highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none" />
                  {/* Folder Front Monogram / Badge */}
                  <div className="absolute bottom-2.5 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/70 border border-black/10 text-[9px] font-mono text-[#16110f]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e95810]" />
                    <span className="font-semibold">AV.EXE</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Static Changing Text Requirement: Strictly "Launching Portfolio.exe" */}
            <div className="flex items-center justify-center gap-2">
              <span className="font-mono text-base sm:text-lg font-semibold tracking-tight text-[#16110f]">
                Launching Portfolio.exe
              </span>
              <span className="inline-block w-2 h-4 bg-[#e95810] animate-pulse align-middle" />
            </div>

            {/* Loading Bar & Numerical Progress */}
            <div className="max-w-xs sm:max-w-sm mx-auto space-y-2 pt-1">
              <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full rounded-full bg-[#e95810]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-widest pt-1">
                <span>System Initialization</span>
                <span className="font-semibold text-neutral-800">{Math.round(progress)}%</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Bottom-Left Coordinates & Bottom-Right Connection Status */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono tracking-wider">
            {/* Bottom Left: Longitudes and Latitudes */}
            <div className="text-neutral-500">
              {coordinates}
            </div>

            {/* Bottom Right: LAN Icon + "ESTABLISHING CONNECTION" -> Connected Icon + "CONNECTED" at 100% */}
            <div className="font-mono text-[11px] sm:text-xs tracking-wider uppercase">
              <AnimatePresence mode="wait">
                {!isConnected ? (
                  <motion.span
                    key="establishing"
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-2 text-neutral-600"
                  >
                    <Network className="w-3.5 h-3.5 text-neutral-600 animate-pulse shrink-0" />
                    <span>ESTABLISHING CONNECTION</span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="connected"
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex items-center gap-2 text-[#e95810] font-semibold"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#e95810] shrink-0" />
                    <span>CONNECTED</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
