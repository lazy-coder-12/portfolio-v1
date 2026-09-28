import React from "react";
import { Hero } from "@/components/hero/Hero";
import { SelectedWorkSection } from "@/components/work/SelectedWorkSection";
import { JourneySection } from "@/components/journey/JourneySection";
import { BuildingStuffSection } from "@/components/sidequests/BuildingStuffSection";
import { ContributionsSection } from "@/components/contributions/ContributionsSection";
import { ContactCTASection } from "@/components/cta/ContactCTASection";

export default function Home() {
  return (
    <div className="flex flex-col gap-[80px] pb-[80px]">
      <Hero />
      <SelectedWorkSection />
      <JourneySection />
      <BuildingStuffSection />
      <ContributionsSection />
      <ContactCTASection />
    </div>
  );
}
