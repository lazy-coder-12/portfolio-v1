"use client";

import React, { useEffect, useRef } from "react";

interface CellHighlight {
  col: number;
  row: number;
  alpha: number;
  lastActive: number;
}

const CELL_SIZE = 72; // Crisp grid cell width & height in px
const FADE_DURATION = 550; // Smooth decay time in ms

export function InteractiveHeroGrid({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const activeCells = useRef<Map<string, CellHighlight>>(new Map());
  const mouseRef = useRef<{ x: number; y: number; inside: boolean }>({ x: -1000, y: -1000, inside: false });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;

    // Handle high-DPI crisp pixel scaling
    const resizeCanvas = () => {
      if (!canvas || !container) return;
      const rect = container.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      render();
    };

    // Draw grid and highlights
    const render = () => {
      if (!ctx || width === 0 || height === 0) return;

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const now = performance.now();
      const cols = Math.ceil(width / CELL_SIZE);
      const rows = Math.ceil(height / CELL_SIZE);

      // 1. Draw single, pixel-crisp base grid lines (no double lines)
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.055)";

      // Vertical lines
      for (let col = 0; col <= cols; col++) {
        const x = Math.floor(col * CELL_SIZE) + 0.5;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      // Horizontal lines
      for (let row = 0; row <= rows; row++) {
        const y = Math.floor(row * CELL_SIZE) + 0.5;
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 2. Render lit / glowing grid boxes from mouse hover & decay
      let hasActiveDecay = false;

      activeCells.current.forEach((cell, key) => {
        const elapsed = now - cell.lastActive;
        const currentAlpha = Math.max(0, 1 - elapsed / FADE_DURATION);

        if (currentAlpha <= 0) {
          activeCells.current.delete(key);
        } else {
          hasActiveDecay = true;
          const x = cell.col * CELL_SIZE;
          const y = cell.row * CELL_SIZE;

          // Box interior subtle glow / illumination
          ctx.fillStyle = `rgba(143, 179, 57, ${currentAlpha * 0.12})`;
          ctx.fillRect(x + 1, y + 1, CELL_SIZE - 1, CELL_SIZE - 1);

          // Box border highlight
          ctx.strokeStyle = `rgba(143, 179, 57, ${currentAlpha * 0.65})`;
          ctx.lineWidth = 1.5;
          ctx.strokeRect(x + 0.5, y + 0.5, CELL_SIZE, CELL_SIZE);

          // Center specular accent
          ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha * 0.15})`;
          ctx.fillRect(x + 2, y + 2, CELL_SIZE - 3, CELL_SIZE - 3);
        }
      });

      // 3. Subtle ambient light following mouse cursor
      if (mouseRef.current.inside) {
        const grad = ctx.createRadialGradient(
          mouseRef.current.x,
          mouseRef.current.y,
          0,
          mouseRef.current.x,
          mouseRef.current.y,
          CELL_SIZE * 1.8
        );
        grad.addColorStop(0, "rgba(143, 179, 57, 0.08)");
        grad.addColorStop(0.5, "rgba(143, 179, 57, 0.03)");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(
          mouseRef.current.x - CELL_SIZE * 2,
          mouseRef.current.y - CELL_SIZE * 2,
          CELL_SIZE * 4,
          CELL_SIZE * 4
        );
      }

      ctx.restore();

      // Continue animating if there are decaying cells or mouse is inside
      if (hasActiveDecay || mouseRef.current.inside) {
        animFrameId.current = requestAnimationFrame(render);
      } else {
        animFrameId.current = null;
      }
    };

    const triggerRender = () => {
      if (!animFrameId.current) {
        animFrameId.current = requestAnimationFrame(render);
      }
    };

    // Track mouse movements relative to container
    const handlePointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y, inside: true };

        const col = Math.floor(x / CELL_SIZE);
        const row = Math.floor(y / CELL_SIZE);
        const key = `${col},${row}`;

        activeCells.current.set(key, {
          col,
          row,
          alpha: 1,
          lastActive: performance.now(),
        });

        triggerRender();
      } else {
        if (mouseRef.current.inside) {
          mouseRef.current.inside = false;
          triggerRender();
        }
      }
    };

    const handlePointerLeave = () => {
      mouseRef.current.inside = false;
      triggerRender();
    };

    // Initialize dimensions and listeners
    resizeCanvas();
    const resizeObserver = new ResizeObserver(() => resizeCanvas());
    resizeObserver.observe(container);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    container.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      container.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, [containerRef]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{
          maskImage: "radial-gradient(ellipse 95% 85% at 40% 35%, black 35%, transparent 88%)",
          WebkitMaskImage: "radial-gradient(ellipse 95% 85% at 40% 35%, black 35%, transparent 88%)",
        }}
      />
    </div>
  );
}
