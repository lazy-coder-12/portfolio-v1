"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Folder } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  link: string;
  buttonText: string;
}

const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "loopn",
    title: "Loop’n",
    description:
      "Loop’n is a local first android app that automatically detect, track and helps manage a person’s recurring expenses (subscriptions).",
    image: "/images/projects/loopn-showcase.png",
    date: "SEPTEMBER  2026",
    link: "https://dribbble.com/ux_anurag",
    buttonText: "Read Case Study",
  },
  {
    id: "nexus-design-system",
    title: "Nexus Design System",
    description:
      "An enterprise-grade tokenized component library unifying multi-platform design to code handoffs across distributed product teams.",
    image: "/images/projects/project-2.jpg",
    date: "NOVEMBER  2026",
    link: "/work/nexus-design-system",
    buttonText: "Read Case Study",
  },
  {
    id: "studioai",
    title: "StudioAI Canvas",
    description:
      "Intelligent generative interface exploration canvas accelerating early UX prototyping velocity with contextual AI components.",
    image: "/images/projects/project-3.jpg",
    date: "JANUARY  2027",
    link: "/work/studioai",
    buttonText: "Read Case Study",
  },
  {
    id: "finflow",
    title: "FinFlow SaaS",
    description:
      "Real-time financial intelligence dashboard streamlining multi-asset portfolio tracking and predictive runway forecasts.",
    image: "/images/projects/project-4.jpg",
    date: "MARCH  2026",
    link: "/work/finflow",
    buttonText: "Read Case Study",
  },
];

export function SelectedWorkSection() {
  return (
    <section
      id="work"
      className="py-0 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full select-none"
      aria-label="Selected Work"
    >
      {/* Section Header with Decreased Spacing to Grid */}
      <div className="space-y-2 max-w-2xl mb-6 sm:mb-8">
        <h2 className="font-sans font-semibold text-[32px] sm:text-[36px] lg:text-[40px] text-black tracking-[-0.03em] leading-tight">
          Some of my selected work
        </h2>
        <p className="font-sans text-[14.5px] sm:text-[15.5px] text-[#666666] leading-relaxed font-normal">
          Small selection of recent client work and side projects I&apos;ve built to solve real product challenges.
        </p>
      </div>

      {/* 2x2 Responsive Project Grid (8-point grid: gap-8 = 32px) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {SELECTED_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="relative w-full h-full pb-1.5 select-none flex flex-col"
          >
            {/* Underlying Raised Block Layer (#F5F5F5 fill, 32px radius, no border, subtle Y-offset) */}
            <div
              className="absolute inset-0 translate-y-1.5 rounded-[32px] bg-[#F5F5F5] pointer-events-none"
              aria-hidden="true"
            />

            {/* Top Main Card (consistent style: 32px radius, 1px solid #E6E6E6 border) */}
            <div
              className="relative w-full h-full bg-white rounded-[32px] p-5 sm:p-6 flex flex-col justify-between"
              style={{
                border: "1px solid #E6E6E6",
              }}
            >
              {/* Inner Thumbnail Container */}
              {project.image.endsWith(".png") ? (
                <div className="relative w-full aspect-[1024/692] shrink-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} Thumbnail`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 544px"
                    className="object-contain object-center"
                    priority={project.id === "loopn"}
                  />
                </div>
              ) : (
                <div
                  className="relative w-full aspect-[1024/692] rounded-[16px] overflow-hidden shrink-0"
                  style={{
                    boxShadow: "0px 4px 2px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} Thumbnail`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 544px"
                    className="object-cover object-center"
                    priority={project.id === "loopn"}
                  />
                </div>
              )}

              {/* Project Content Info (Strict 8-pt vertical rhythm, sentence-case description) */}
              <div className="mt-5 sm:mt-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-sans font-bold text-[24px] sm:text-[26px] text-black tracking-[-0.02em] leading-tight">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[14px] sm:text-[14.5px] text-[#666666] font-normal leading-relaxed mt-2.5">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Action Row (40px height, 24px-32px margin top) */}
                <div className="flex items-center justify-between gap-4 mt-6 sm:mt-8 h-10">
                  {project.link.startsWith("http") ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 h-10 px-5 rounded-full bg-black text-white text-[13px] font-medium hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer shrink-0"
                      aria-label={`Read Case Study for ${project.title}`}
                    >
                      <Folder className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                      <span>{project.buttonText}</span>
                    </a>
                  ) : (
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2.5 h-10 px-5 rounded-full bg-black text-white text-[13px] font-medium hover:bg-neutral-800 transition-colors shadow-xs cursor-pointer shrink-0"
                      aria-label={`Read Case Study for ${project.title}`}
                    >
                      <Folder className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                      <span>{project.buttonText}</span>
                    </Link>
                  )}

                  <span className="font-mono text-[12px] sm:text-[12.5px] font-medium tracking-[0.08em] text-[#5F3D07] uppercase select-none">
                    {project.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
