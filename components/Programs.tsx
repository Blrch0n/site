"use client";

import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { ProgramCard } from "@/components/Cards";

export default function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden">
      <SectionFrame index="03" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-[800px] h-[800px] bg-[var(--accent-cyan)] opacity-[0.015] blur-[220px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="TRAINING"
            title="Master the Fundamentals"
            subtitle="Student-led training programs designed for real-world impact."
          />

          <div className="grid md:grid-cols-2 gap-5">
            <ProgramCard
              number="01"
              title="Programming Fundamentals"
              description="Build problem-solving foundations with C language. Learn core concepts through hands-on practice."
              delay={0}
            />
            <ProgramCard
              number="02"
              title="Object-Oriented Programming"
              description="Master OOP patterns with Java. Practical implementation of real-world design principles."
              delay={0.08}
            />
            <ProgramCard
              number="03"
              title="UI/UX Design"
              description="Design theory and tools for digital products. Master Figma, principles, and user-centered design."
              delay={0.16}
            />
            <ProgramCard
              number="04"
              title="Web Development"
              description="Full-stack technologies from client to server. HTML, CSS, JavaScript, Node.js, and modern frameworks."
              delay={0.24}
            />
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
