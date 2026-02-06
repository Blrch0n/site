"use client";

import { useRef, useMemo, memo } from "react";
import { motion, useInView } from "framer-motion";
import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { useLanguage } from "@/contexts/LanguageContext";
import { Rocket, Users, Trophy } from "lucide-react";

const ProgramCard = memo(function ProgramCard({
  number,
  label,
  delay = 0,
  icon,
}: {
  number: string;
  label: string;
  delay?: number;
  icon: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-line)] p-8 hover:border-[var(--accent-blue)]/40 hover:shadow-lg hover:shadow-[var(--accent-blue)]/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-blue)]/0 to-[var(--accent-cyan)]/0 group-hover:from-[var(--accent-blue)]/5 group-hover:to-[var(--accent-cyan)]/5 transition-all duration-500" />
      <div className="relative flex flex-col items-start gap-4">
        <div className="p-3 rounded-xl bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 text-[var(--accent-blue)] group-hover:bg-[var(--accent-blue)]/20 group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-2">
            {number}
          </div>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            {label}
          </p>
        </div>
      </div>
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[var(--accent-blue)]/30 group-hover:bg-[var(--accent-cyan)] transition-colors" />
    </motion.div>
  );
});

export default function Programs() {
  const { t } = useLanguage();

  const programData = useMemo(
    () => [
      {
        number: t("programs.stat1.number"),
        label: t("programs.stat1.label"),
        icon: <Trophy className="w-6 h-6" />,
        delay: 0,
      },
      {
        number: t("programs.stat2.number"),
        label: t("programs.stat2.label"),
        icon: <Users className="w-6 h-6" />,
        delay: 0.08,
      },
      {
        number: t("programs.stat3.number"),
        label: t("programs.stat3.label"),
        icon: <Rocket className="w-6 h-6" />,
        delay: 0.16,
      },
    ],
    [t],
  );

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

        <div className="grid md:grid-cols-3 gap-6">
          {programData.map((program, index) => (
            <ProgramCard
              key={`${program.number}-${index}`}
              number={program.number}
              label={program.label}
              icon={program.icon}
              delay={program.delay}
            />
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
