"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Check,
  Copy,
  ArrowRight,
  Sparkles,
  Send,
  CheckCircle2
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";
import { SharpSlideButton } from "@/components/ui/SharpSlideButton";
import { SignatureLine } from "@/components/ui/SignatureLine";

const PROJECT_TYPES = [
  "Product Design (0-to-1)",
  "Design Systems & Tokens",
  "Frontend Architecture (Next.js/React)",
  "UX Audit & Conversion Optimization",
  "Full-Time Role Opportunity",
];

const FAQS = [
  {
    q: "What is your primary working model and availability?",
    a: "I am available for full-time product roles, high-impact design system contracts, and select advisory engagements. I work in the Asia/Kolkata timezone (GMT+5:30) and regularly sync with teams across North America and Europe.",
  },
  {
    q: "How do you handle the bridge between design and code?",
    a: "Because I build both in Figma and Next.js/React, design tokens, responsive breakpoints, edge states, and accessibility requirements are built in from day zero. No lost-in-translation handoffs.",
  },
  {
    q: "What is your typical turnaround time?",
    a: "For initial project discovery and roadmaps, typically 3–5 business days. Design system foundations and sprint execution proceed at rapid velocity with continuous production reviews.",
  },
];

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState(PROJECT_TYPES[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$5k - $15k",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
      {/* =========================================================================
          HERO HEADER
          ========================================================================= */}
      <section className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono uppercase tracking-wider text-neutral-700 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#e95810] animate-pulse" />
          <span>Get in Touch · Open for 2026</span>
        </div>

        <h1 className="font-sans text-4xl sm:text-6xl lg:text-[64px] font-semibold tracking-[-0.04em] text-neutral-950 leading-[1.08]">
          Let&rsquo;s build something remarkable together.
        </h1>

        <p className="text-lg sm:text-xl text-neutral-600 font-sans leading-relaxed">
          Whether you&rsquo;re launching a new venture, revamping an enterprise design system, or looking for a Lead UI/UX &amp; Design Engineer, let&rsquo;s start a conversation.
        </p>
      </section>

      <SignatureLine orientation="horizontal" className="my-14 sm:my-20 opacity-40" />

      {/* =========================================================================
          MAIN CONTACT GRID (2-COLUMNS)
          ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
        {/* Left Column: Direct Info & Availability */}
        <div className="lg:col-span-5 space-y-8">
          {/* Email Quick-Copy Card */}
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-4">
            <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-neutral-500">
              <span>Direct Email</span>
              <span className="text-[#e95810] font-medium">&lt; 24h Response</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-sans text-base sm:text-lg font-medium text-neutral-950 hover:text-[#e95810] transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-none bg-neutral-100 hover:bg-neutral-200 text-xs font-mono uppercase text-neutral-800 transition-colors shrink-0 cursor-pointer"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#e95810]" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Location & Timezone Card */}
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Location &amp; Operations
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-neutral-800">
                <MapPin className="w-4 h-4 text-[#e95810] shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-800">
                <Clock className="w-4 h-4 text-[#e95810] shrink-0" />
                <span>{PERSONAL_INFO.timezone} · Active Sync Hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-800">
                <Phone className="w-4 h-4 text-[#e95810] shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="p-8 rounded-3xl bg-white border border-black/10 shadow-2xs space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Verified Profiles
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              {Object.entries(PERSONAL_INFO.socials).map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-neutral-50 border border-black/10 text-xs font-mono uppercase tracking-wider text-neutral-800 hover:border-black hover:bg-white transition-all text-center"
                >
                  {name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-black/10 shadow-2xs">
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#e95810]/15 border border-[#e95810] flex items-center justify-center text-[#e95810]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-sans text-2xl font-semibold text-neutral-950">
                  Inquiry Dispatched!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto font-sans leading-relaxed">
                  Thank you for reaching out, {formData.name || "friend"}. Anurag has received your brief and will respond within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-600 hover:text-neutral-950 underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <h3 className="font-sans text-xl sm:text-2xl font-semibold text-neutral-950">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 font-sans">
                    Fill out the fields below or drop a direct line to get things moving.
                  </p>
                </div>

                {/* Project Type Selectors */}
                <div className="space-y-2.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-700">
                    Project Type / Collaboration
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECT_TYPES.map((type) => {
                      const isSelected = selectedType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-3 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer ${
                            isSelected
                              ? "bg-neutral-950 text-white font-medium shadow-xs"
                              : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-700"
                    >
                      Your Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-2.5 rounded-none border border-black/15 bg-white text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-2 focus:outline-[#e95810]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-neutral-700"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-none border border-black/15 bg-white text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-2 focus:outline-[#e95810]"
                    />
                  </div>
                </div>

                {/* Estimated Budget / Scale */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="budget"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700"
                  >
                    Estimated Scope / Budget
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-none border border-black/15 bg-white text-sm text-neutral-950 focus:outline-2 focus:outline-[#e95810]"
                  >
                    <option value="<$5k">&lt; $5,000 (Advisory / UX Audit)</option>
                    <option value="$5k - $15k">$5,000 – $15,000 (Sprint / MVP)</option>
                    <option value="$15k - $30k">$15,000 – $30,000 (Comprehensive Product / Design System)</option>
                    <option value="$30k+">$30,000+ (Enterprise Overhaul / Dedicated Partnership)</option>
                    <option value="Full-Time">Full-Time Role Offer</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-neutral-700"
                  >
                    Project Details &amp; Objectives *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, timeline, goals, and any relevant links..."
                    className="w-full px-4 py-2.5 rounded-none border border-black/15 bg-white text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-2 focus:outline-[#e95810] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <SharpSlideButton
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full"
                    icon={<Send className="w-4 h-4" />}
                    aria-label="Send message"
                  >
                    Dispatch Inquiry
                  </SharpSlideButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <SignatureLine orientation="horizontal" className="my-16 sm:my-24 opacity-40" />

      {/* =========================================================================
          FAQS SECTION
          ========================================================================= */}
      <section className="space-y-8 max-w-4xl">
        <div className="space-y-1">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            // FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-950">
            Collaboration &amp; Process Details
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-black/10 shadow-2xs space-y-2"
            >
              <h3 className="font-sans text-base sm:text-lg font-semibold text-neutral-950">
                {faq.q}
              </h3>
              <p className="text-sm sm:text-[15px] text-neutral-600 font-sans leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
