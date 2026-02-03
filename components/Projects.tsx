"use client";

import { useRef, memo, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "@/components/FAQ";
import { useLanguage } from "@/contexts/LanguageContext";

const ActivityCard = memo(function ActivityCard({
  number,
  title,
  delay = 0,
}: {
  number: string;
  title: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-xl glass-panel p-8 hover-lift hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_40px_var(--panel-glow)] transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />

      <div className="relative z-10 flex items-start gap-6">
        <div className="text-5xl font-bold spectral-text opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
          {number}
        </div>
        <p className="text-[var(--text-secondary)] flex-1 pt-3 leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
          {title}
        </p>
      </div>
    </motion.div>
  );
});

export default function Projects() {
  const { t } = useLanguage();

  const activitiesData = useMemo(
    () => [
      {
        number: t("projects.activity1.number"),
        title: t("projects.activity1.title"),
      },
      {
        number: t("projects.activity2.number"),
        title: t("projects.activity2.title"),
      },
      {
        number: t("projects.activity3.number"),
        title: t("projects.activity3.title"),
      },
      {
        number: t("projects.activity4.number"),
        title: t("projects.activity4.title"),
      },
    ],
    [t],
  );

  return (
    <div className="relative">
      <SectionHeader
        eyebrow={t("projects.eyebrow")}
        title={t("projects.title")}
        subtitle={t("projects.description")}
      />

      <div className="grid md:grid-cols-2 gap-5">
        {activitiesData.map((activity, index) => (
          <ActivityCard
            key={index}
            number={activity.number}
            title={activity.title}
            delay={index * 0.08}
          />
        ))}
      </div>
    </div>
  );
}
