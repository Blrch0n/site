"use client";

import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { ValueCard } from "@/components/Cards";
import { Layers, Palette, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative overflow-hidden">
      <SectionFrame index="01" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--accent-cyan)] opacity-[0.02] blur-[160px] rounded-full" />
        </div>

        <SectionHeader
          eyebrow={t("about.eyebrow")}
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          <ValueCard
            icon={<Layers className="w-5 h-5 text-[var(--accent-cyan)]" />}
            title={t("about.learn.title")}
            description={t("about.learn.description")}
            delay={0}
          />
          <ValueCard
            icon={<Palette className="w-5 h-5 text-[var(--accent-blue)]" />}
            title={t("about.design.title")}
            description={t("about.design.description")}
            delay={0.08}
          />
          <ValueCard
            icon={<Code2 className="w-5 h-5 text-[var(--accent-pink)]" />}
            title={t("about.engineer.title")}
            description={t("about.engineer.description")}
            delay={0.16}
          />
        </div>

        <div className="relative group flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 p-10 md:p-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-line)] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-cyan)]/5 via-[var(--accent-blue)]/5 to-[var(--accent-pink)]/5 opacity-30" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
              13+
            </div>
            <div className="text-[var(--text-muted)] text-sm">
              {t("about.stats.active")}
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-[var(--border-line)]" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
              36+
            </div>
            <div className="text-[var(--text-muted)] text-sm">
              {t("about.stats.total")}
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-[var(--border-line)]" />
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
              36+
            </div>
            <div className="text-[var(--text-muted)] text-sm">
              {t("about.stats.projects")}
            </div>
          </div>
        </div>
      </SectionFrame>
    </section>
  );
}
