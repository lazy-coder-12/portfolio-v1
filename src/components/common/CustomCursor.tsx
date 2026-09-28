"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<"default" | "pointer" | "drag" | "view">("default");
  const [isFinePointer, setIsFinePointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate for mouse/fine pointers
    const matchFine = window.matchMedia("(pointer: fine)");
    const matchReduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!matchFine.matches || matchReduced.matches) {
      return;
    }

    setIsFinePointer(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check target elements for contextual cursor state
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest("[data-cursor='view']")) {
        setCursorState("view");
      } else if (target.closest("[data-cursor='drag']")) {
        setCursorState("drag");
      } else if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.closest("input") ||
        target.closest("textarea")
      ) {
        setCursorState("pointer");
      } else {
        setCursorState("default");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isFinePointer || !isVisible) {
    return null;
  }

  const isExpanded = cursorState === "pointer" || cursorState === "view" || cursorState === "drag";

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-100 mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          width: cursorState === "view" || cursorState === "drag" ? 64 : isExpanded ? 36 : 10,
          height: cursorState === "view" || cursorState === "drag" ? 64 : isExpanded ? 36 : 10,
          backgroundColor: isExpanded ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 1)",
          borderColor: "rgba(255, 255, 255, 0.4)",
        }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full flex items-center justify-center text-[10px] font-mono font-bold text-black uppercase tracking-wider"
      >
        {cursorState === "view" && <span>VIEW</span>}
        {cursorState === "drag" && <span>DRAG</span>}
      </motion.div>
    </motion.div>
  );
}
