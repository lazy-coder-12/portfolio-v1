"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { MagneticWrap } from "./MagneticWrap";
import { cn } from "@/lib/utils";

interface HairlineButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "pill";
  size?: "sm" | "md" | "lg";
  icon?: "arrow-up-right" | "arrow-right" | "none";
  magnetic?: boolean;
  className?: string;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export function HairlineButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon = "arrow-up-right",
  magnetic = true,
  className = "",
  external = false,
  type = "button",
  disabled = false,
}: HairlineButtonProps) {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantStyles = {
    primary:
      "bg-[var(--accent)] text-[#0a0a0a] font-semibold border border-[var(--accent)] hover:bg-[var(--accent-hover)] hover:border-[var(--accent-hover)] shadow-sm hover:shadow-md",
    secondary:
      "bg-[var(--bg-glass-card)] text-[var(--text-primary)] border border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:bg-[var(--bg-surface-hover)] shadow-sm",
    ghost:
      "bg-transparent text-[var(--text-primary)] border border-transparent hover:border-[var(--border-subtle)] hover:bg-[var(--bg-subtle)]",
    pill:
      "bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-hairline)] hover:border-[var(--accent-border)] hover:bg-[var(--bg-surface-hover)] shadow-xs",
  };

  const iconElement =
    icon === "arrow-up-right" ? (
      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    ) : icon === "arrow-right" ? (
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    ) : null;

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      <span>{children}</span>
      {iconElement}
    </span>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 cursor-pointer select-none active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]",
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  const buttonElement = href ? (
    external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        onClick={onClick}
      >
        {content}
      </a>
    ) : (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    )
  ) : (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {content}
    </button>
  );

  if (magnetic) {
    return (
      <MagneticWrap
        strength={12}
        className={cn(className?.includes("w-full") ? "w-full" : "inline-block")}
      >
        {buttonElement}
      </MagneticWrap>
    );
  }

  return buttonElement;
}
