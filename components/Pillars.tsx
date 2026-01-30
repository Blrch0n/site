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
import { useLanguage } from "@/contexts/LanguageContext";

export default function Pillars() {
  const { t } = useLanguage();
  return (
    <section id="pillars" className="relative overflow-hidden">
      <SectionFrame
        index="02"
        className="flex justify-center flex-col py-24 md:py-32"
        showTopDivider
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-125 h-125 bg-(--accent-blue) opacity-2 blur-[180px] rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            eyebrow={t("pillars.eyebrow")}
            title={t("pillars.title")}
            subtitle={t("pillars.subtitle")}
          />

          <div className="grid md:grid-cols-3 gap-5">
            <PillarCard
              icon={<BookOpen className="w-5 h-5 text-(--accent-cyan)" />}
              title={t("pillars.learning.title")}
              description={t("pillars.learning.description")}
              delay={0}
            />
            <PillarCard
              icon={<Palette className="w-5 h-5 text-(--accent-blue)" />}
              title={t("pillars.design.title")}
              description={t("pillars.design.description")}
              delay={0.08}
            />
            <PillarCard
              icon={<Code2 className="w-5 h-5 text-(--accent-violet)" />}
              title={t("pillars.engineering.title")}
              description={t("pillars.engineering.description")}
              delay={0.16}
            />
            <PillarCard
              icon={<Users className="w-5 h-5 text-(--accent-pink)" />}
              title={t("pillars.leadership.title")}
              description={t("pillars.leadership.description")}
              delay={0.24}
            />
            <PillarCard
              icon={<GraduationCap className="w-5 h-5 text-(--accent-amber)" />}
              title={t("pillars.education.title")}
              description={t("pillars.education.description")}
              delay={0.32}
            />
            <PillarCard
              icon={<Zap className="w-5 h-5 text-(--accent-cyan)" />}
              title={t("pillars.innovation.title")}
              description={t("pillars.innovation.description")}
              delay={0.4}
            />
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
