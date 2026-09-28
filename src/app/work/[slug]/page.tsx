import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
  Wrench,
  PackageCheck
} from "lucide-react";
import { PROJECTS, getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import { Navbar } from "@/components/layout/Navbar";
import { SignatureLine } from "@/components/ui/SignatureLine";
import { HairlineButton } from "@/components/ui/HairlineButton";
import { FinFlowMockup } from "@/components/work/mockups/FinFlowMockup";
import { NexusMockup } from "@/components/work/mockups/NexusMockup";
import { StudioAIMockup } from "@/components/work/mockups/StudioAIMockup";
import { CarePulseMockup } from "@/components/work/mockups/CarePulseMockup";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Anurag Verma"
    };
  }

  return {
    title: `${project.title} · Case Study | Anurag Verma`,
    description: project.tagline
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getProjectBySlug(project.nextSlug);

  const renderMockup = (type: string) => {
    switch (type) {
      case "finflow":
        return <FinFlowMockup />;
      case "nexus":
        return <NexusMockup />;
      case "studioai":
        return <StudioAIMockup />;
      case "carepulse":
        return <CarePulseMockup />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 sm:pt-36 pb-24 px-4 sm:px-8 max-w-7xl mx-auto w-full">
        {/* Back Link & Category */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-x-1" />
            <span>BACK TO ALL PROJECTS</span>
          </Link>

          <span className="px-3 py-1 rounded-full bg-[var(--accent-muted)] border border-[var(--accent-border)] text-xs font-mono text-[var(--accent)]">
            {project.category}
          </span>
        </div>

        {/* Hero Header Section */}
        <div className="space-y-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs mono-label text-[var(--accent)]">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{project.companyContext}</span>
              <span className="text-[var(--text-muted)]">·</span>
              <Calendar className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              <span>{project.year}</span>
            </div>

            <h1 className="display-section text-[var(--text-primary)]">
              {project.title}
            </h1>
            <p className="text-base sm:text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
              {project.subtitle}
            </p>
          </div>

          {/* Metric Highlights Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
            {project.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-4 sm:p-5 rounded-2xl hairline-border glass-panel space-y-1 bg-[var(--bg-glass-card)]"
              >
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[var(--accent)]">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                  {metric.label}
                </div>
                {metric.subtext && (
                  <div className="text-[11px] text-[var(--text-muted)] font-mono">
                    {metric.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Hero Interactive Specimen Mockup */}
        <div className="mb-16 sm:mb-20 rounded-3xl hairline-border overflow-hidden bg-[var(--bg-canvas)] p-3 sm:p-6 shadow-xl">
          <div className="w-full max-w-5xl mx-auto">
            {renderMockup(project.mockupType)}
          </div>
        </div>

        {/* Signature Separation Line */}
        <SignatureLine orientation="horizontal" className="mb-16 opacity-50" />

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Sticky Project Metadata Rail (Desktop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 text-xs font-sans">
            <div className="p-6 rounded-2xl hairline-border glass-panel space-y-6 bg-[var(--bg-glass-card)]">
              <div className="mono-label text-[var(--text-muted)] border-b border-[var(--border-hairline)] pb-3">
                PROJECT DOSSIER
              </div>

              {/* Client & Organization */}
              <div className="space-y-1">
                <span className="mono-label text-[10px] text-[var(--text-muted)]">CLIENT / PLATFORM</span>
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  {project.client}
                </div>
                <div className="text-[11px] text-[var(--text-secondary)]">
                  via {project.companyContext}
                </div>
              </div>

              {/* Role */}
              <div className="space-y-1">
                <span className="mono-label text-[10px] text-[var(--text-muted)]">MY ROLE</span>
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  {project.role}
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-1">
                <span className="mono-label text-[10px] text-[var(--text-muted)]">TIMELINE &amp; DURATION</span>
                <div className="text-sm font-semibold text-[var(--text-primary)]">
                  {project.timeline}
                </div>
              </div>

              {/* Services Provided */}
              <div className="space-y-2">
                <span className="mono-label text-[10px] text-[var(--text-muted)]">CORE SERVICES</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="px-2.5 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[11px] text-[var(--badge-text)]"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Stack */}
              <div className="space-y-2">
                <span className="mono-label text-[10px] text-[var(--text-muted)]">TOOLS &amp; STACK</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded-full hairline-border text-[11px] text-[var(--text-primary)] bg-[var(--bg-canvas)] font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2 pt-2 border-t border-[var(--border-hairline)]">
                <span className="mono-label text-[10px] text-[var(--text-muted)]">DELIVERABLES</span>
                <ul className="space-y-2">
                  {project.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] text-[var(--text-secondary)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Right Column: Case Study Narrative Body */}
          <div className="lg:col-span-8 space-y-14 sm:space-y-16">
            {/* 1. Overview */}
            <section className="space-y-4">
              <span className="mono-label text-xs text-[var(--accent)]">// 01 · EXECUTIVE SUMMARY</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[var(--text-primary)]">
                Transforming the Workflow
              </h2>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                {project.overview}
              </p>
            </section>

            <SignatureLine orientation="horizontal" className="opacity-40" />

            {/* 2. The Challenge */}
            <section className="space-y-5">
              <span className="mono-label text-xs text-[var(--accent)]">// 02 · THE BOTTLENECKS</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[var(--text-primary)]">
                {project.theChallenge.title}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                {project.theChallenge.subtitle}
              </p>

              <div className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.theChallenge.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {project.theChallenge.takeaways && (
                <div className="p-5 rounded-2xl bg-[var(--bg-subtle)] border-l-2 border-[var(--accent)] space-y-2 mt-4">
                  <div className="mono-label text-[10px] text-[var(--accent)]">
                    KEY RESEARCH TAKEAWAYS
                  </div>
                  <ul className="space-y-1.5">
                    {project.theChallenge.takeaways.map((t, idx) => (
                      <li key={idx} className="text-xs text-[var(--text-primary)] flex items-start gap-2">
                        <span className="text-[var(--accent)]">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            <SignatureLine orientation="horizontal" className="opacity-40" />

            {/* 3. The Strategic Approach */}
            <section className="space-y-5">
              <span className="mono-label text-xs text-[var(--accent)]">// 03 · THE INTERACTION MODEL</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[var(--text-primary)]">
                {project.theApproach.title}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                {project.theApproach.subtitle}
              </p>

              <div className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.theApproach.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {project.theApproach.takeaways && (
                <div className="p-5 rounded-2xl bg-[var(--bg-subtle)] border-l-2 border-[var(--accent)] space-y-2 mt-4">
                  <div className="mono-label text-[10px] text-[var(--accent)]">
                    DESIGN DECISION RATIONALE
                  </div>
                  <ul className="space-y-1.5">
                    {project.theApproach.takeaways.map((t, idx) => (
                      <li key={idx} className="text-xs text-[var(--text-primary)] flex items-start gap-2">
                        <span className="text-[var(--accent)]">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            <SignatureLine orientation="horizontal" className="opacity-40" />

            {/* 4. Design System & Tokens */}
            <section className="space-y-5">
              <span className="mono-label text-xs text-[var(--accent)]">// 04 · SYSTEMATIZATION &amp; TOKENS</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[var(--text-primary)]">
                {project.theDesignSystem.title}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                {project.theDesignSystem.subtitle}
              </p>

              <div className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.theDesignSystem.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {project.theDesignSystem.takeaways && (
                <div className="p-5 rounded-2xl bg-[var(--bg-subtle)] border-l-2 border-[var(--accent)] space-y-2 mt-4">
                  <div className="mono-label text-[10px] text-[var(--accent)]">
                    TOKEN ARCHITECTURE OUTCOMES
                  </div>
                  <ul className="space-y-1.5">
                    {project.theDesignSystem.takeaways.map((t, idx) => (
                      <li key={idx} className="text-xs text-[var(--text-primary)] flex items-start gap-2">
                        <span className="text-[var(--accent)]">•</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            <SignatureLine orientation="horizontal" className="opacity-40" />

            {/* 5. Key Outcomes */}
            <section className="space-y-5">
              <span className="mono-label text-xs text-[var(--accent)]">// 05 · QUANTIFIED IMPACT</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[var(--text-primary)]">
                {project.keyOutcomes.title}
              </h2>
              <p className="text-xs sm:text-sm font-medium text-[var(--text-muted)]">
                {project.keyOutcomes.subtitle}
              </p>

              <div className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {project.keyOutcomes.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {project.metrics.slice(0, 2).map((m) => (
                  <div
                    key={m.label}
                    className="p-5 rounded-2xl hairline-border glass-panel bg-[var(--bg-glass-card)] space-y-1"
                  >
                    <div className="text-3xl font-serif font-bold text-[var(--accent)]">
                      {m.value}
                    </div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {m.label}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      {m.subtext}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Next Project Teaser Footer Card */}
        {nextProject && (
          <div className="mt-24 sm:mt-32 pt-12 border-t border-[var(--border-hairline)]">
            <div className="mono-label text-xs text-[var(--text-muted)] mb-4">
              // NEXT CASE STUDY
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="group block p-6 sm:p-10 rounded-3xl hairline-border glass-panel hover:border-[var(--accent-border)] hover:bg-[var(--bg-surface-hover)] transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-xs mono-label text-[var(--accent)]">
                    {nextProject.category} · {nextProject.year}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-serif font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-3">
                    <span>{nextProject.title}</span>
                    <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-2" />
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] max-w-xl">
                    {nextProject.tagline}
                  </p>
                </div>

                <div className="self-start sm:self-center shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent)] text-[#0a0a0a] text-xs font-semibold group-hover:brightness-110 transition-all shadow-sm">
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
