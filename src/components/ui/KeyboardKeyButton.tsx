"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface KeyboardKeyButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  keyGlyph?: React.ReactNode;
  "aria-label"?: string;
}

export function KeyboardKeyButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
  type = "button",
  disabled = false,
  icon,
  keyGlyph,
  "aria-label": ariaLabel,
}: KeyboardKeyButtonProps) {
  const [isPressing, setIsPressing] = useState(false);

  // Height is strictly capped at <= 48px to adhere to design constraints
  // md: 42px (Bryan Garage default is 40px - 42px)
  const sizeStyles = {
    sm: {
      btn: "h-[38px] max-h-[40px] px-3.5 gap-2 text-xs",
      keycap: "min-w-[20px] h-[20px] px-1 text-[10px]",
      travel: 1.5,
    },
    md: {
      btn: "h-[42px] max-h-[46px] px-4 sm:px-5 gap-2.5 text-[13px]",
      keycap: "min-w-[22px] h-[22px] px-1.5 text-[11px]",
      travel: 2,
    },
    lg: {
      btn: "h-[46px] max-h-[48px] px-5 sm:px-6 gap-3 text-sm",
      keycap: "min-w-[24px] h-[24px] px-2 text-xs",
      travel: 2.2,
    },
  };

  const currentSize = sizeStyles[size] || sizeStyles.md;

  // Authentic Bryan Garage styling:
  // - Primary: Glassmorphic light pill (.hdr-cmd) with traveling conic border orbit glow and 3D mechanical keycap
  // - Dark: Solid sleek slate/dark pill (.btn-glass) with glass specular overlay
  // - Secondary: Subtle ghost pill (.btn-g)
  const variantStyles = {
    primary: {
      pill: cn(
        "bg-gradient-to-b from-white/95 to-[#f6f6f8]/75",
        "border border-black/[0.09]",
        "text-[#16110f]",
        "backdrop-blur-[8px]",
        "shadow-[rgba(255,255,255,0.95)_0px_1px_0.5px_inset,rgba(0,0,0,0.04)_0px_-2px_5px_inset,rgba(0,0,0,0.08)_0px_2px_8px]",
        "hover:border-[#e95810]/40",
        "hover:shadow-[rgba(255,255,255,1)_0px_1px_0.5px_inset,rgba(0,0,0,0.05)_0px_-2px_5px_inset,rgba(233,88,16,0.15)_0px_4px_16px,rgba(0,0,0,0.06)_0px_2px_8px]",
        "bg-orbit-glow"
      ),
      pillPressed: "shadow-[rgba(255,255,255,0.8)_0px_1px_0.5px_inset,rgba(0,0,0,0.08)_0px_-1px_3px_inset,rgba(0,0,0,0.06)_0px_1px_3px]",
      label: "text-[#16110f] font-medium tracking-[-0.01em]",
      keycap: cn(
        "bg-[linear-gradient(145deg,rgba(255,255,255,0.98)_0%,rgba(245,245,248,0.8)_48%,rgba(0,0,0,0.07)_100%)]",
        "border border-black/[0.13]",
        "text-[#555860]",
        "drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]",
        "group-hover:border-[#e95810]/50 group-hover:text-neutral-900"
      ),
      keycapShadowRest: "shadow-[rgba(255,255,255,0.95)_0px_1px_inset,rgba(0,0,0,0.08)_0px_-2px_3px_inset,rgba(0,0,0,0.16)_0px_2px,rgba(0,0,0,0.1)_0px_3px_7px]",
      keycapShadowPressed: "shadow-[rgba(255,255,255,0.18)_0px_1px_inset,rgba(0,0,0,0.25)_0px_-1px_2px_inset,rgba(0,0,0,0.25)_0px_0.5px,rgba(0,0,0,0.1)_0px_1.5px_3px]",
    },
    dark: {
      pill: cn(
        "bg-[#16110f]",
        "border border-white/[0.12]",
        "text-white",
        "backdrop-blur-[20px]",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25),inset_0_0_0_1px_rgba(255,255,255,0.08),0_2px_4px_0_rgba(0,0,0,0.12),0_8px_24px_-8px_rgba(0,0,0,0.25)]",
        "hover:border-[#e95810]/50",
        "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_4px_12px_rgba(0,0,0,0.2),0_12px_28px_-8px_rgba(233,88,16,0.35)]",
        "bg-orbit-glow"
      ),
      pillPressed: "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),0_1px_2px_rgba(0,0,0,0.15)]",
      label: "text-white font-medium tracking-[-0.01em]",
      keycap: cn(
        "bg-[linear-gradient(145deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.08)_44%,rgba(0,0,0,0.16)_100%)]",
        "border border-white/20",
        "text-white",
        "group-hover:border-[#e95810]/60 group-hover:text-[#ff9d66]"
      ),
      keycapShadowRest: "shadow-[rgba(255,255,255,0.28)_0px_1px_inset,rgba(0,0,0,0.24)_0px_-2px_3px_inset,rgba(0,0,0,0.38)_0px_2px,rgba(0,0,0,0.2)_0px_3px_7px]",
      keycapShadowPressed: "shadow-[rgba(255,255,255,0.18)_0px_1px_inset,rgba(0,0,0,0.3)_0px_-1px_2px_inset,rgba(0,0,0,0.38)_0px_1px,rgba(0,0,0,0.18)_0px_2px_4px]",
    },
    secondary: {
      pill: cn(
        "bg-white/80",
        "border border-black/10",
        "text-[#16110f]",
        "backdrop-blur-[8px]",
        "shadow-[0_1px_3px_rgba(0,0,0,0.03)]",
        "hover:bg-white hover:border-[#16110f]",
        "hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
      ),
      pillPressed: "shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
      label: "text-[#16110f] font-medium tracking-[-0.01em]",
      keycap: cn(
        "bg-[linear-gradient(145deg,rgba(255,255,255,0.95)_0%,rgba(245,245,248,0.75)_50%,rgba(0,0,0,0.05)_100%)]",
        "border border-black/10",
        "text-neutral-600",
        "group-hover:border-black/30 group-hover:text-neutral-900"
      ),
      keycapShadowRest: "shadow-[rgba(255,255,255,0.9)_0px_1px_inset,rgba(0,0,0,0.06)_0px_-2px_2px_inset,rgba(0,0,0,0.12)_0px_1.5px,rgba(0,0,0,0.06)_0px_2px_5px]",
      keycapShadowPressed: "shadow-[rgba(255,255,255,0.2)_0px_1px_inset,rgba(0,0,0,0.2)_0px_-1px_2px_inset,rgba(0,0,0,0.2)_0px_0.5px,rgba(0,0,0,0.08)_0px_1px_2px]",
    },
  };

  const currentVariant = variantStyles[variant] || variantStyles.primary;

  const handlePointerDown = () => {
    setIsPressing(true);
  };

  const handlePointerUp = () => {
    setIsPressing(false);
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setIsPressing(true);
    setTimeout(() => {
      setIsPressing(false);
    }, 200);

    if (onClick) {
      onClick(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsPressing(true);
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      setIsPressing(false);
    }
  };

  // Keyboard Return / Enter symbol ↵ sub-key glyph
  const glyphElement = keyGlyph !== undefined ? keyGlyph : (
    <motion.kbd
      aria-hidden="true"
      animate={{
        y: isPressing ? currentSize.travel : -1,
      }}
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 28,
        mass: 0.5,
      }}
      className={cn(
        "inline-flex items-center justify-center rounded-[6px] font-mono font-bold leading-none select-none shrink-0 transition-[box-shadow,border-color] duration-100",
        currentSize.keycap,
        currentVariant.keycap,
        isPressing ? currentVariant.keycapShadowPressed : currentVariant.keycapShadowRest
      )}
    >
      ↵
    </motion.kbd>
  );

  const innerContent = (
    <motion.span
      animate={{
        y: isPressing ? 1 : 0,
        scale: isPressing ? 0.99 : 1,
      }}
      whileHover={{
        y: -0.5,
      }}
      whileTap={{
        y: 1,
        scale: 0.99,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 30,
        mass: 0.6,
      }}
      className={cn(
        "relative rounded-full inline-flex items-center justify-center select-none font-sans cursor-pointer transition-[box-shadow,border-color,background] duration-200 ease-out",
        currentSize.btn,
        currentVariant.pill,
        isPressing && currentVariant.pillPressed
      )}
    >
      {/* Label and Icon */}
      <span className={cn("inline-flex items-center gap-2 select-none z-10", currentVariant.label)}>
        <span>{children}</span>
        {icon && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">{icon}</span>}
      </span>

      {/* Embedded 3D Keycap */}
      {glyphElement && (
        <span className="shrink-0 inline-flex items-center z-10">
          {glyphElement}
        </span>
      )}
    </motion.span>
  );

  const commonProps = {
    onPointerDown: handlePointerDown,
    onPointerUp: handlePointerUp,
    onPointerCancel: handlePointerUp,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onClick: handleClick,
    className: cn(
      "group relative inline-flex items-center justify-center select-none font-sans outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e95810] disabled:opacity-50 disabled:pointer-events-none shrink-0 cursor-pointer max-h-[48px]",
      className
    ),
    "aria-label": ariaLabel,
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...commonProps}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <Link
        href={href}
        {...commonProps}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      {...commonProps}
    >
      {innerContent}
    </button>
  );
}
