"use client";

import { useRef, ReactNode, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import SectionFrame from "@/components/SectionFrame";
import { SectionHeader } from "@/components/FAQ";
import { Code, Box, Palette, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function TrainingCard({
  icon,
  title,
  description,
  delay = 0,
  accentColor,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  accentColor: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative rounded-xl glass-panel p-6 hover-lift hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_40px_var(--panel-glow)] transition-all duration-300"
    >
      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-[var(--border-line)] group-hover:border-[var(--border-accent)] transition-colors" />

      <div className="relative z-10">
        <div
          className="relative inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--bg-surface)] mb-4 group-hover:scale-110 transition-all duration-300"
          style={{ borderColor: accentColor, borderWidth: "1px" }}
        >
          {icon}
        </div>
        <h4 className="text-base font-semibold mb-2.5 text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
          {title}
        </h4>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const { t } = useLanguage();

  // Memoize training data to prevent recreation on every render
  const trainingsData = useMemo(
    () => [
      {
        icon: <Code className="w-5 h-5 text-[var(--accent-cyan)]" />,
        title: t("events.training1.title"),
        description: t("events.training1.description"),
        accentColor: "var(--accent-cyan)",
        delay: 0,
      },
      {
        icon: <Box className="w-5 h-5 text-[var(--accent-blue)]" />,
        title: t("events.training2.title"),
        description: t("events.training2.description"),
        accentColor: "var(--accent-blue)",
        delay: 0.08,
      },
      {
        icon: <Palette className="w-5 h-5 text-[var(--accent-violet)]" />,
        title: t("events.training3.title"),
        description: t("events.training3.description"),
        accentColor: "var(--accent-violet)",
        delay: 0.16,
      },
      {
        icon: <Globe className="w-5 h-5 text-[var(--accent-pink)]" />,
        title: t("events.training4.title"),
        description: t("events.training4.description"),
        accentColor: "var(--accent-pink)",
        delay: 0.24,
      },
    ],
    [t],
  );

  return (
    <section id="events" className="relative overflow-hidden">
      <SectionFrame index="05" className="py-24 md:py-32" showTopDivider>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[var(--accent-violet)] opacity-[0.02] blur-[180px] rounded-full" />
        </div>

        <SectionHeader
          eyebrow={t("events.eyebrow")}
          title={t("events.title")}
          subtitle={t("events.subtitle")}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainingsData.map((training, index) => (
            <TrainingCard
              key={index}
              icon={training.icon}
              title={training.title}
              description={training.description}
              accentColor={training.accentColor}
              delay={training.delay}
            />
          ))}
        </div>
      </SectionFrame>
    </section>
  );
}
