"use client";

import SectionFrame from "@/components/SectionFrame";
import Projects from "@/components/Projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden">
      <SectionFrame index="04" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[var(--accent-pink)] opacity-[0.02] blur-[160px] rounded-full" />
        </div>

        <Projects />
      </SectionFrame>
    </section>
  );
}
