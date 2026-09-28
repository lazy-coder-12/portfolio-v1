"use client";

import React, { useState } from "react";
import { Briefcase, Lightbulb } from "lucide-react";

interface ImpactItem {
  title: string;
  description: string;
  highlight: string;
}

interface ExperienceItem {
  id: string;
  company: string;
  location: string;
  role: string;
  period: string;
  impacts: ImpactItem[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "fortmindz",
    company: "Fortmindz Private Limited",
    location: "Kolkata, India",
    role: "Junior UI/UX Designer",
    period: "Jan 2026 - Present",
    impacts: [
      {
        title: "End-to-End Product Design",
        description:
          "Designed end-to-end user experiences for responsive websites, web applications, and mobile products in Figma, driving solutions from concept wireframes to production-ready design handoffs.",
        highlight: "Delivered intuitive, cross-platform interfaces across web and mobile.",
      },
      {
        title: "AI-Accelerated UX Research & Strategy",
        description:
          "Integrated AI LLMs (Claude, ChatGPT) into early-stage discovery to automate competitor benchmarking, persona synthesis, and user-flow mapping.",
        highlight: "Reduced early-stage design and research time by saving 3-4 hours everyday.",
      },
      {
        title: "Content Design & UX Copywriting",
        description:
          "Utilized conversational AI models to draft, test, and polish microcopy, error states, and high-converting CTAs across interface flows.",
        highlight: "Enhanced user clarity and unified brand tone across all product touchpoints.",
      },
      {
        title: "Rapid Prototyping & Generative UI",
        description:
          "Leveraged AI-assisted design tooling (Figma AI, Google Stitch) to generate rapid wireframe variants, component explorations, and interactive layouts.",
        highlight: "Cut time-to-prototype by 25% while increasing iteration speed.",
      },
    ],
  },
  {
    id: "esolz",
    company: "Esolz Technologies Pvt Ltd.",
    location: "Kolkata, India",
    role: "Junior UI/UX Designer",
    period: "May 2024 - Aug 2025",
    impacts: [
      {
        title: "Enterprise Design Systems & Tokens",
        description:
          "Architected and governed centralized design systems with tokenized typography, color palettes, and interactive components across multi-platform products.",
        highlight: "Increased cross-platform component code reuse by 25% across 14 enterprise products.",
      },
      {
        title: "Complex Workflow Optimization & Usability",
        description:
          "Streamlined high-density enterprise form flows, data visualization dashboards, and multi-step transaction funnels through iterative usability testing.",
        highlight: "Lowered end-user operational error rate by 10% across key operational workflows.",
      },
      {
        title: "Developer Handoff Governance",
        description:
          "Established synchronized Figma-to-React design token pipelines, standardized spacing tokens, and detailed edge-case interaction specs.",
        highlight: "Accelerated cross-functional handoff by 15%, saving an average of 5 days per sprint.",
      },
      {
        title: "Accessibility Standards & Heuristic Audits",
        description:
          "Conducted comprehensive heuristic evaluations and instituted WCAG 2.1 AA contrast ratios, keyboard accessibility, and screen reader affordances.",
        highlight: "Achieved 100% WCAG accessibility compliance across client web and mobile releases.",
      },
    ],
  },
  {
    id: "ioteraction",
    company: "IoTeraction Technologies Pvt Ltd.",
    location: "Remote",
    role: "Design Intern",
    period: "Sept 2021 - Mar 2022",
    impacts: [
      {
        title: "Concept Visualization & Wireframing",
        description:
          "Facilitated collaborative remote brainstorming workshops using Miro, converting raw client requirements into structured information architectures.",
        highlight: "Delivered 30+ interactive low-fidelity wireframe flows accelerating stakeholder alignment.",
      },
      {
        title: "Foundational Design System Primitives",
        description:
          "Assisted senior designers in cataloging typography hierarchies, scalable SVG icon sets, and core input elements in Figma.",
        highlight: "Reduced design QA review cycles by 5% during product development phases.",
      },
      {
        title: "Heuristic UI Audits & Competitive Analysis",
        description:
          "Audited legacy digital products to uncover navigational dead-ends, visual inconsistencies, and friction points across early onboarding funnels.",
        highlight: "Identified and resolved 20+ critical usability bottlenecks prior to customer release.",
      },
      {
        title: "Interactive Clickable Prototypes",
        description:
          "Constructed realistic micro-interactions, clickable prototypes, and transition sequences to validate user feedback in weekly client design reviews.",
        highlight: "Streamlined client sign-offs with high-fidelity validation prototypes.",
      },
    ],
  },
];

export function JourneySection() {
  const [selectedId, setSelectedId] = useState<string>("fortmindz");
  const activeExperience =
    EXPERIENCES.find((exp) => exp.id === selectedId) || EXPERIENCES[0];

  return (
    <section
      id="journey"
      className="py-0 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full select-none"
      aria-label="My journey as a designer"
    >
      {/* Section Header */}
      <div className="space-y-2 max-w-2xl mb-8 sm:mb-10">
        <h2 className="font-sans font-semibold text-[32px] sm:text-[36px] lg:text-[40px] text-black tracking-[-0.03em] leading-tight">
          My journey as a designer
        </h2>
        <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#666666] leading-relaxed font-normal">
          Career milestones and an adventure from intern to designer this is my journey so far and more quests to come.
        </p>
      </div>

      {/* Main 2-Column Container in Complete 1px Solid Box */}
      <div className="border border-[#E6E6E6] rounded-xl flex flex-col md:flex-row items-stretch overflow-hidden bg-white shadow-2xs">
        {/* Left Column: Experience Tabs */}
        <div className="w-full md:w-[320px] lg:w-[360px] shrink-0 border-b md:border-b-0 md:border-r border-[#E6E6E6] bg-white flex flex-col justify-start">
          {EXPERIENCES.map((company) => {
            const isActive = company.id === selectedId;
            return (
              <button
                key={company.id}
                type="button"
                onClick={() => setSelectedId(company.id)}
                className={`w-full text-left p-6 sm:p-7 transition-colors cursor-pointer relative select-none border-b border-[#E6E6E6] ${
                  isActive
                    ? "bg-[#161616] text-white"
                    : "bg-[#FAFAFA] text-black hover:bg-neutral-100/70"
                }`}
                aria-pressed={isActive}
              >
                {/* Top Row: Icon + Company & Location */}
                <div className="flex items-start gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0 ${
                      isActive
                        ? "bg-[#262626] border border-white/20 text-white"
                        : "bg-white border border-[#E6E6E6] text-neutral-800"
                    }`}
                  >
                    <Briefcase className="w-4 h-4" />
                  </div>

                  <div className="min-w-0 pt-0.5">
                    <h3
                      className={`font-sans font-semibold text-[14px] leading-tight truncate ${
                        isActive ? "text-white" : "text-black"
                      }`}
                    >
                      {company.company}
                    </h3>
                    <p
                      className={`font-sans text-[12px] mt-1 ${
                        isActive ? "text-[#888888]" : "text-[#666666]"
                      }`}
                    >
                      {company.location}
                    </p>
                  </div>
                </div>

                {/* Bottom Row: L-Connector Branch + Role & Period */}
                <div className="relative flex items-start mt-2">
                  {/* Column under icon with the connector curve */}
                  <div className="w-10 shrink-0 flex justify-center">
                    <svg
                      className="w-5 h-6 pointer-events-none -mt-1 ml-4"
                      viewBox="0 0 20 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 0V14C1 17.866 4.13401 21 8 21H20"
                        stroke={isActive ? "rgba(255,255,255,0.25)" : "#D4D4D4"}
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>

                  <div className="pl-3.5 pt-2">
                    <div
                      className={`font-sans font-bold text-[14px] leading-tight ${
                        isActive ? "text-white" : "text-black"
                      }`}
                    >
                      {company.role}
                    </div>
                    <div
                      className={`font-sans text-[12px] mt-1 ${
                        isActive ? "text-[#888888]" : "text-[#666666]"
                      }`}
                    >
                      {company.period}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Impacts */}
        <div className="flex-1 bg-white flex flex-col justify-between">
          {activeExperience.impacts.map((impact, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 lg:px-10 lg:py-7 border-b border-[#E6E6E6] last:border-b-0 flex flex-col justify-center"
            >
              <h3 className="font-sans font-bold text-[16px] sm:text-[17.5px] text-black tracking-[-0.01em] leading-snug">
                {impact.title}
              </h3>
              <p className="font-sans text-[13.5px] sm:text-[14px] text-[#666666] font-normal leading-relaxed mt-1.5">
                {impact.description}
              </p>
              <div className="mt-2.5 flex items-center gap-2 text-[13px] sm:text-[13.5px] font-semibold text-[#A448F4]">
                <Lightbulb className="w-4 h-4 text-[#A448F4] shrink-0" />
                <span>{impact.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
