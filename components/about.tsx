"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        I'm <span className="font-medium">Daksh Gupta</span>, a passionate{" "}
        <span className="font-medium">Full-Stack JavaScript Developer</span>{" "}
        focused on building modern, scalable, and user-friendly web
        applications. Over the past{" "}
        <span className="font-medium">2+ years</span>, I've been working on
        full-stack projects involving{" "}
        <span className="font-medium">
          React, Next.js, Node.js, TypeScript, MongoDB, PostgreSQL, and Tailwind
          CSS
        </span>
        . I enjoy solving complex problems, exploring new technologies, and
        creating smooth digital experiences with clean and modern UI.
      </p>

      <p>
        Currently, I'm focused on improving my skills in{" "}
        <span className="font-medium">
          scalable architectures, AI integrations, backend systems, and modern
          web development
        </span>
        . When I'm not coding, I enjoy exploring new tech ideas, competitive
        programming, and building projects that challenge my creativity and
        problem-solving abilities.
      </p>
    </motion.section>
  );
}
