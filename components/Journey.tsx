"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import Timeline from "./timeline";
import { journeyData } from "@/lib/data";

const Journey = () => {
  const { ref } = useSectionInView("Journey", 0.5);
  return (
    <section
      id="journey"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My journey</SectionHeading>
      <Timeline data={journeyData} />
    </section>
  );
};

export default Journey;
