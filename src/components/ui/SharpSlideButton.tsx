"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface SharpSlideButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  "aria-label"?: string;
}

export function SharpSlideButton({
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
  "aria-label": ariaLabel,
}: SharpSlideButtonProps) {
  // Size styling - strictly capped at <= 48px to match Bryan Garage pill scale
  const sizeStyles = {
    sm: "h-[38px] max-h-[40px] px-4 rounded-full text-xs tracking-wider",
    md: "h-[42px] max-h-[46px] px-5 sm:px-6 rounded-full text-xs sm:text-[13px] tracking-wider",
    lg: "h-[46px] max-h-[48px] px-6 sm:px-8 rounded-full text-xs sm:text-sm tracking-wider",
  };

  const textSlotHeights = {
    sm: "h-[16px] sm:h-[18px]",
    md: "h-[18px] sm:h-[20px]",
    lg: "h-[20px] sm:h-[22px]",
  };

  // Base and variant styles tailored for Light Theme:
  // Primary: orange background (#E95810) + white text default; dark background + white text on hover
  // Secondary: clean white glass + dark text default; dark background + white text on hover (Bryan Garage .btn-g style)
  // Dark: dark background (#16110F) + white text default; orange background + white text on hover
  let variantStyles = "bg-[#e95810] border border-[#e95810] text-white hover:bg-neutral-950 hover:border-neutral-950 hover:text-white shadow-xs";
  let defaultTextColor = "text-white";
  let hoverTextColor = "text-white";

  if (variant === "secondary") {
    variantStyles = "bg-white/85 border border-black/12 text-[#16110f] hover:bg-neutral-950 hover:border-neutral-950 hover:text-white shadow-2xs hover:shadow-xs backdrop-blur-md";
    defaultTextColor = "text-[#16110f]";
    hoverTextColor = "text-white";
  } else if (variant === "dark") {
    variantStyles = "bg-[#16110f] border border-[#16110f] text-white hover:bg-[#e95810] hover:border-[#e95810] hover:text-white shadow-xs";
    defaultTextColor = "text-white";
    hoverTextColor = "text-white";
  }

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center rounded-full font-medium uppercase overflow-hidden select-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e95810] disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] active:translate-y-[1px]",
    sizeStyles[size],
    variantStyles,
    className
  );

  const slidingContent = (
    <div
      className={cn(
        "relative overflow-hidden flex flex-col justify-center select-none w-full",
        textSlotHeights[size]
      )}
    >
      {/* Default text: slides up on hover */}
      <span
        className={cn(
          "flex items-center justify-center gap-2 whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[135%]",
          defaultTextColor
        )}
      >
        <span>{children}</span>
        {icon && <span className="shrink-0">{icon}</span>}
      </span>

      {/* Hover text: slides in from bottom on hover */}
      <span
        className={cn(
          "absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-[135%] group-hover:translate-y-0",
          hoverTextColor
        )}
      >
        <span>{children}</span>
        {icon && <span className="shrink-0">{icon}</span>}
      </span>
    </div>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={baseClasses}
          aria-label={ariaLabel}
        >
          {slidingContent}
        </a>
      );
    }

    return (
      <Link
        href={href}
        onClick={onClick}
        className={baseClasses}
        aria-label={ariaLabel}
      >
        {slidingContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {slidingContent}
    </button>
  );
}
