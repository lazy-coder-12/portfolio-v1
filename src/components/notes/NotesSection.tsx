"use client";

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SignatureLine } from "@/components/ui/SignatureLine";
import { PERSONAL_INFO } from "@/lib/constants";

interface Article {
  title: string;
  slug: string;
  publication: string;
  date: string;
  readTime: string;
  category: string;
  synopsis: string;
  url: string;
}

const ARTICLES: Article[] = [
  {
    title: "Integrating AI in UX Research: Cutting Early-Stage Design Time by 30%",
    slug: "integrating-ai-in-ux-research",
    publication: "Medium · UX Collective",
    date: "Feb 2026",
    readTime: "6 min read",
    category: "AI & UX Strategy",
    synopsis:
      "How design teams at Fortmindz leverage multimodal LLMs and spatial generative tooling to cluster user interviews, generate edge-case personas, and accelerate prototype validation without sacrificing empathetic rigor.",
    url: `${PERSONAL_INFO.socials.medium}`
  },
  {
    title: "Building Scalable Design Systems: From Figma Variables to CSS Tokens",
    slug: "building-scalable-design-systems",
    publication: "Medium · Prototypr",
    date: "Nov 2025",
    readTime: "8 min read",
    category: "Design Systems",
    synopsis:
      "A deep dive into three-tier token taxonomies (Primitives, Semantic, Component) and how we established a zero-drift synchronization pipeline between Figma Variables, Style Dictionary, and Tailwind CSS across 14 enterprise products.",
    url: `${PERSONAL_INFO.socials.medium}`
  },
  {
    title: "The Rise of the Design Engineer: Bridging the Figma-Code Chasm",
    slug: "the-rise-of-the-design-engineer",
    publication: "Medium · Bootcamp",
    date: "Aug 2025",
    readTime: "5 min read",
    category: "Career & Craft",
    synopsis:
      "Why the traditional handoff model is broken and how designers who write production React and CSS are redefining product velocity, sub-pixel craft, and cross-functional team dynamics.",
    url: `${PERSONAL_INFO.socials.medium}`
  }
];

export function NotesSection() {
  return (
    <section id="notes" className="relative py-20 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto w-full">
      <div id="blog" className="absolute -top-24 left-0" />
      <SignatureLine orientation="horizontal" className="mb-12 sm:mb-16 opacity-60" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <SectionHeading
          number="06"
          category="NOTES &amp; WRITING"
          title="Thoughts on AI UX, Tokens &amp; Digital Craft"
          description="Essays and articles on modern product design, generative AI integration, and the evolving discipline of design engineering."
        />

        <a
          href={PERSONAL_INFO.socials.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full hairline-border glass-panel text-xs font-medium text-[var(--text-primary)] hover:border-[var(--accent-border)] hover:text-[var(--accent)] transition-all self-start md:self-end shrink-0"
        >
          <BookOpen className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Follow on Medium</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {ARTICLES.map((article, index) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="p-6 sm:p-7 rounded-3xl hairline-border glass-panel bg-[var(--bg-glass-card)] flex flex-col justify-between space-y-6 hover:border-[var(--accent-border)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="space-y-4">
              {/* Meta Row: Date, Read Time, Category */}
              <div className="flex items-center justify-between text-[11px] mono-label text-[var(--text-muted)] border-b border-[var(--border-hairline)] pb-3">
                <span className="text-[var(--accent)]">{article.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-visible:outline-hidden"
                  >
                    {article.title}
                  </a>
                </h3>
                <div className="text-[11px] text-[var(--text-muted)] font-mono mt-1 flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date} · {article.publication}</span>
                </div>
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {article.synopsis}
              </p>
            </div>

            {/* Read Article Trigger */}
            <div className="pt-3 border-t border-[var(--border-hairline)] flex items-center justify-between">
              <span className="text-xs font-medium text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                Read on Medium
              </span>
              <div className="w-7 h-7 rounded-full hairline-border flex items-center justify-center text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent-border)] transition-all">
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
