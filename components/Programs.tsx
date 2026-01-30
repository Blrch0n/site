"use client";

import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { ProgramCard } from "@/components/Cards";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Programs() {
  const { t } = useLanguage();
  return (
    <section id="programs" className="relative overflow-hidden">
      <SectionFrame index="03" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-200 h-200 bg-(--accent-cyan) opacity-[0.015] blur-[220px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t("programs.eyebrow")}
            title={t("programs.title")}
            subtitle={t("programs.subtitle")}
          />

          <div className="grid md:grid-cols-2 gap-5">
            <ProgramCard
              number="01"
              title={t("programs.programming.title")}
              description={t("programs.programming.description")}
              delay={0}
            />
            <ProgramCard
              number="02"
              title={t("programs.oop.title")}
              description={t("programs.oop.description")}
              delay={0.08}
            />
            <ProgramCard
              number="03"
              title={t("programs.uiux.title")}
              description={t("programs.uiux.description")}
              delay={0.16}
            />
            <ProgramCard
              number="04"
              title={t("programs.webdev.title")}
              description={t("programs.webdev.description")}
              delay={0.24}
            />
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
