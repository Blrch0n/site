"use client";

import { useState, useEffect, useRef, useMemo, memo } from "react";
import { useInView } from "framer-motion";
import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { ValueCard } from "@/components/Cards";
import { Layers, Palette, Code2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AnimatedCounter = memo(function AnimatedCounter({
  end,
  suffix = "+",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
});

export default function About() {
  const { t } = useLanguage();

  const valueCards = useMemo(
    () => [
      {
        icon: <Layers className="w-5 h-5 text-[var(--accent-cyan)]" />,
        title: t("about.learn.title"),
        description: t("about.learn.description"),
        delay: 0,
      },
      {
        icon: <Palette className="w-5 h-5 text-[var(--accent-blue)]" />,
        title: t("about.design.title"),
        description: t("about.design.description"),
        delay: 0.08,
      },
      {
        icon: <Code2 className="w-5 h-5 text-[var(--accent-pink)]" />,
        title: t("about.engineer.title"),
        description: t("about.engineer.description"),
        delay: 0.16,
      },
    ],
    [t],
  );

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
          {valueCards.map((card, index) => (
            <ValueCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              delay={card.delay}
            />
          ))}
        </div>

        <div className="relative group flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 p-10 md:p-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-line)] overflow-hidden hover:border-[var(--accent-cyan)]/40 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-cyan)]/5 via-[var(--accent-blue)]/5 to-[var(--accent-pink)]/5 opacity-30 group-hover:opacity-50 transition-opacity" />
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
              <AnimatedCounter end={13} />
            </div>
            <div className="text-[var(--text-muted)] text-sm">
              {t("about.stats.active")}
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-[var(--border-line)] group-hover:bg-[var(--accent-cyan)]/40 transition-colors" />
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
              <AnimatedCounter end={36} />
            </div>
            <div className="text-[var(--text-muted)] text-sm">
              {t("about.stats.total")}
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-[var(--border-line)] group-hover:bg-[var(--accent-cyan)]/40 transition-colors" />
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-bold spectral-text mb-2">
              <AnimatedCounter end={36} />
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
