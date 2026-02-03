"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useJoinModal } from "./JoinModalProvider";
import { useLanguage } from "@/contexts/LanguageContext";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  const { openModal } = useJoinModal();
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-lg border border-[var(--border-line)] bg-[var(--bg-surface)] text-[11px] font-mono uppercase tracking-wider text-[var(--text-muted)] backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse shadow-[0_0_8px_rgba(91,95,255,0.8)]" />
              <span>{t("hero.badge")}</span>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative corner-brackets pb-2"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                {t("hero.title")}
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <button
                onClick={openModal}
                className="group inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-[var(--border-line)] bg-gradient-to-r from-[var(--accent-cyan)]/10 via-[var(--accent-blue)]/10 to-[var(--accent-violet)]/10 text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--accent-blue)]/40 hover:shadow-[0_0_24px_var(--panel-glow)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
              >
                <span className="relative z-10">{t("hero.cta.primary")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-cyan)]/20 via-[var(--accent-blue)]/20 to-[var(--accent-violet)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <a
                href="#programs"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-semibold text-sm hover:border-[var(--border-line-hover)] hover:bg-[var(--bg-surface-hover)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>{t("hero.cta.secondary")}</span>
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-2"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-[var(--accent-blue)]/50 to-transparent" />
              <div className="text-[10px] text-[var(--text-mono)] font-mono uppercase tracking-[0.2em]">
                {t("common.scrollExplore")}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-[var(--accent-blue)]/40 to-transparent" />
              <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-[var(--accent-blue)]/40 to-transparent" />
              <div className="absolute bottom-0 right-0 w-16 h-px bg-gradient-to-l from-[var(--accent-blue)]/40 to-transparent" />
              <div className="absolute bottom-0 right-0 w-px h-16 bg-gradient-to-t from-[var(--accent-blue)]/40 to-transparent" />

              <div className="relative rounded-2xl glass-panel overflow-hidden h-full border border-[var(--border-line)]">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop"
                      alt="Technology and Innovation"
                      fill
                      className="object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-cyan)]/20 to-[var(--accent-blue)]/20 rounded-xl z-10" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-3 border-l border-l-[var(--accent-cyan)]/40"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 animate-pulse shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
                    <div>
                      <div className="text-xs font-semibold text-[var(--text-primary)] mb-0.5">
                        {t("hero.image.title")}
                      </div>
                      <div className="text-[10px] text-[var(--text-muted)]">
                        {t("hero.image.subtitle")}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-mono)]"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
          {t("common.scroll")}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={14} className="opacity-50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
