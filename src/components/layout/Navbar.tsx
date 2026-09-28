"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PERSONAL_INFO, NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu upon navigation
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 bg-white/95 backdrop-blur-md transition-all duration-300",
          isScrolled ? "shadow-xs shadow-black/5" : ""
        )}
      >
        <div className="max-w-7xl mx-auto h-full px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left: Site Logo text #000000 */}
          <Link
            href="/"
            className="group flex items-center select-none focus-visible:outline-2 focus-visible:outline-black shrink-0"
            aria-label="Anurag Verma — Homepage"
          >
            <span className="font-sans text-base sm:text-[18px] font-bold tracking-tight text-[#000000]">
              {PERSONAL_INFO.name}
            </span>
          </Link>

          {/* Right: Desktop Nav Links & Primary Button */}
          <div className="flex items-center gap-6 sm:gap-7 lg:gap-8">
            {/* Desktop Navigation Links: default #666666, hover #000000, active #000000 */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "font-sans text-[14px] lg:text-[14.5px] font-medium transition-colors duration-150 py-1",
                      isActive
                        ? "text-[#000000]"
                        : "text-[#666666] hover:text-[#000000]"
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Primary Button background #000000, text #FFFFFF */}
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2 sm:px-5.5 sm:py-2 bg-[#000000] text-[#FFFFFF] text-[13.5px] sm:text-[14px] font-medium rounded-full hover:bg-neutral-800 transition-colors duration-150 shadow-xs cursor-pointer"
                title="View & Download Resume"
                aria-label="View Resume"
              >
                Resume
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-full border border-black/15 bg-white flex items-center justify-center text-[#000000] hover:border-black transition-colors shrink-0"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Drawer with Sharp Light Styling */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-white/98 border-b border-black/10 flex flex-col justify-between p-6 sm:p-8 pt-20"
          >
            <div className="space-y-8">
              <div className="font-mono text-xs text-neutral-500 tracking-wider uppercase border-b border-black/10 pb-3 flex items-center justify-between">
                <span>{"// NAVIGATION"}</span>
                <span className="text-[#e95810]">PORTFOLIO</span>
              </div>
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-2xl font-sans font-medium transition-colors flex items-center justify-between group",
                    pathname === "/"
                      ? "text-[#000000]"
                      : "text-[#666666] hover:text-[#000000]"
                  )}
                >
                  <span>Home</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#000000] transition-colors" />
                </Link>
                {NAV_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 + 0.05, duration: 0.25 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-2xl font-sans font-medium transition-colors flex items-center justify-between group",
                        pathname === item.href
                          ? "text-[#000000] font-semibold"
                          : "text-[#666666] hover:text-[#000000]"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#000000] transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="space-y-6 border-t border-black/10 pt-6">
              <div className="flex items-center justify-between text-xs text-neutral-600">
                <span>Available for 2026 roles &amp; projects</span>
                <span className="w-2 h-2 rounded-full bg-[#000000] animate-pulse" />
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full h-11 bg-[#000000] text-[#FFFFFF] rounded-full flex items-center justify-center font-medium text-sm hover:bg-neutral-800 transition-colors shadow-xs"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
