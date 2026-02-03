"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

function FAQItem({ question, answer, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-[var(--border-line)] last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg md:text-xl font-semibold pr-4 text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
          {question}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-[var(--text-secondary)] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();

  // Memoize FAQ data to prevent recreation on every render
  const faqData = useMemo(
    () => [
      {
        question: t("faq.q1.question"),
        answer: t("faq.q1.answer"),
      },
      {
        question: t("faq.q2.question"),
        answer: t("faq.q2.answer"),
      },
      {
        question: t("faq.q3.question"),
        answer: t("faq.q3.answer"),
      },
      {
        question: t("faq.q4.question"),
        answer: t("faq.q4.answer"),
      },
    ],
    [t],
  );

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
        />

        <div className="mt-16 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-line)] p-6 md:p-8">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center max-w-3xl mx-auto mb-20"
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg border border-[var(--border-line)] bg-[var(--bg-surface)] text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6 backdrop-blur-sm">
          <div className="w-1 h-1 rounded-full bg-[var(--accent-blue)]" />
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
