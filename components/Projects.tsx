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
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-line)] p-6 hover:border-[var(--accent-cyan)]/40 hover:bg-[var(--bg-surface-hover)] hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--accent-cyan)]/10 transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-start gap-5">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent-cyan)]/20 to-[var(--accent-blue)]/20 border border-[var(--accent-cyan)]/30 flex items-center justify-center text-xl font-bold text-[var(--accent-cyan)] group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
            {number}
          </div>
        </div>
        <div className="flex-1 pt-1">
          <p className="text-[var(--text-secondary)] leading-relaxed group-hover:text-[var(--text-primary)] transition-colors">
            {title}
          </p>
        </div>
      </div>
      <div className="absolute bottom-3 right-3 w-1 h-1 rounded-full bg-[var(--accent-cyan)]/50" />
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

      <div className="grid md:grid-cols-2 gap-4">
        {activitiesData.map((activity, index) => (
          <ActivityCard
            key={index}
            number={activity.number}
            title={activity.title}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}
