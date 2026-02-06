"use client";

import { useMemo, memo } from "react";
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

function Pillars() {
  const { t } = useLanguage();

  const pillarsData = useMemo(
    () => [
      {
        icon: <BookOpen className="w-5 h-5 text-[var(--accent-cyan)]" />,
        title: t("pillars.learning.title"),
        description: t("pillars.learning.description"),
        delay: 0,
      },
      {
        icon: <Palette className="w-5 h-5 text-[var(--accent-blue)]" />,
        title: t("pillars.design.title"),
        description: t("pillars.design.description"),
        delay: 0.08,
      },
      {
        icon: <Code2 className="w-5 h-5 text-[var(--accent-violet)]" />,
        title: t("pillars.engineering.title"),
        description: t("pillars.engineering.description"),
        delay: 0.16,
      },
      {
        icon: <Users className="w-5 h-5 text-[var(--accent-pink)]" />,
        title: t("pillars.leadership.title"),
        description: t("pillars.leadership.description"),
        delay: 0.24,
      },
      {
        icon: <GraduationCap className="w-5 h-5 text-[var(--accent-amber)]" />,
        title: t("pillars.education.title"),
        description: t("pillars.education.description"),
        delay: 0.32,
      },
      {
        icon: <Zap className="w-5 h-5 text-[var(--accent-cyan)]" />,
        title: t("pillars.innovation.title"),
        description: t("pillars.innovation.description"),
        delay: 0.4,
      },
    ],
    [t],
  );

  return (
    <section id="pillars" className="relative overflow-hidden">
      <SectionFrame index="02" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--accent-blue)] opacity-[0.02] blur-[180px] rounded-full" />
        </div>

        <SectionHeader
          eyebrow={t("pillars.eyebrow")}
          title={t("pillars.title")}
          subtitle={t("pillars.subtitle")}
        />

        <div className="grid md:grid-cols-3 gap-5">
          {pillarsData.map((pillar, index) => (
            <PillarCard
              key={`${pillar.title}-${index}`}
              icon={pillar.icon}
              title={pillar.title}
              description={pillar.description}
              delay={pillar.delay}
            />
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}

export default memo(Pillars);
