"use client";

import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { ValueCard } from "@/components/Cards";
import { Layers, Palette, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      <SectionFrame index="01" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-cyan)] opacity-[0.02] blur-[160px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="WHO WE ARE"
            title="United by Passion, Driven by Innovation"
            subtitle="Since 2009, Sys&CoTech has been empowering students to master cutting-edge technologies and shape the future."
          />

          <div className="grid md:grid-cols-3 gap-5 mb-20">
            <ValueCard
              icon={<Layers className="w-5 h-5 text-[var(--accent-cyan)]" />}
              title="Learn Together"
              description="Master new technologies through hands-on collaboration and peer-to-peer teaching."
              delay={0}
            />
            <ValueCard
              icon={<Palette className="w-5 h-5 text-[var(--accent-blue)]" />}
              title="Design Excellence"
              description="Awaken inner creativity through digital design and visual innovation."
              delay={0.08}
            />
            <ValueCard
              icon={<Code2 className="w-5 h-5 text-[var(--accent-pink)]" />}
              title="Engineer Mindset"
              description="Solve complex problems with competitive programming and algorithmic thinking."
              delay={0.16}
            />
          </div>

          <div className="relative group flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 p-10 md:p-12 rounded-xl bg-white/[0.02] border border-white/8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 via-[#5B5FFF]/5 to-[#E94FFF]/5 opacity-30" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                13+
              </div>
              <div className="text-white/50 text-sm">Active Members</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/8" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                36+
              </div>
              <div className="text-white/50 text-sm">Total Members</div>
            </div>
            <div className="hidden md:block w-px h-16 bg-white/8" />
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
                36+
              </div>
              <div className="text-white/50 text-sm">Projects Built</div>
            </div>
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
