"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { useLanguage } from "@/contexts/LanguageContext";

function StatCard({
  number,
  label,
  delay = 0,
}: {
  number: string;
  label: string;
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
      className="group relative rounded-xl glass-panel p-8 hover-lift hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_40px_var(--panel-glow)] transition-all duration-300 text-center"
    >
      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />

      <div className="relative z-10">
        <div className="text-5xl md:text-6xl font-bold spectral-text mb-4 group-hover:scale-105 transition-transform duration-300">
          {number}
        </div>
        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function Programs() {
  const { t } = useLanguage();

  return (
    <section id="programs" className="relative overflow-hidden">
      <SectionFrame index="03" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[var(--accent-cyan)] opacity-[0.02] blur-[180px] rounded-full" />
        </div>

        <SectionHeader
          eyebrow={t("programs.eyebrow")}
          title={t("programs.title")}
          subtitle={t("programs.subtitle")}
        />

        <div className="grid md:grid-cols-3 gap-5">
          <StatCard
            number={t("programs.stat1.number")}
            label={t("programs.stat1.label")}
            delay={0}
          />
          <StatCard
            number={t("programs.stat2.number")}
            label={t("programs.stat2.label")}
            delay={0.08}
          />
          <StatCard
            number={t("programs.stat3.number")}
            label={t("programs.stat3.label")}
            delay={0.16}
          />
        </div>
      </SectionFrame>
    </section>
  );
}
