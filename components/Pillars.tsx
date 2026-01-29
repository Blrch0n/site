"use client";

import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { PillarCard } from "@/components/Cards";
import {
  BookOpen,
  Palette,
  Code2,
  Users,
  GraduationCap,
  Zap,
} from "lucide-react";

export default function Pillars() {
  return (
    <section id="pillars" className="relative overflow-hidden">
      <SectionFrame index="02" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-[0.02] blur-[180px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="OUR CORE"
            title="Six Pillars of Excellence"
            subtitle="Principles that guide every project, event, and lesson we create."
          />

          <div className="grid md:grid-cols-3 gap-5">
            <PillarCard
              icon={<BookOpen className="w-5 h-5 text-[var(--accent-cyan)]" />}
              title="Learning New Technologies"
              description="Master emerging tools and frameworks to stay ahead of the curve."
              delay={0}
            />
            <PillarCard
              icon={<Palette className="w-5 h-5 text-[var(--accent-blue)]" />}
              title="Design Creation"
              description="Awaken inner artistry through digital design and visual excellence."
              delay={0.08}
            />
            <PillarCard
              icon={<Code2 className="w-5 h-5 text-[var(--accent-violet)]" />}
              title="Engineering Mindset"
              description="Solve complex problems with competitive programming expertise."
              delay={0.16}
            />
            <PillarCard
              icon={<Users className="w-5 h-5 text-[var(--accent-pink)]" />}
              title="Leadership & Responsibility"
              description="Mentor peers and lead by example in all initiatives."
              delay={0.24}
            />
            <PillarCard
              icon={
                <GraduationCap className="w-5 h-5 text-[var(--accent-amber)]" />
              }
              title="Education"
              description="Share knowledge within the club and beyond our community."
              delay={0.32}
            />
            <PillarCard
              icon={<Zap className="w-5 h-5 text-[var(--accent-cyan)]" />}
              title="Innovation"
              description="Always think, always create, always evolve forward."
              delay={0.4}
            />
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
