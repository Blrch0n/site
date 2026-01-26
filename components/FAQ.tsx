"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
      className="border-b border-white/8 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
        aria-expanded={isOpen}
      >
        <h4 className="text-lg md:text-xl font-semibold pr-4 group-hover:text-[#00D4FF] transition-colors">
          {question}
        </h4>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
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
            <div className="pb-6 text-white/70 leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const faqData = [
    {
      question: "How do I join the club?",
      answer:
        "Simply attend one of our open events or contact us directly through Facebook or phone. We welcome all students interested in technology, regardless of skill level.",
    },
    {
      question: "Are there requirements (year, major, age)?",
      answer:
        "No strict requirements! We welcome students from all years and majors. Passion for learning technology is the only prerequisite.",
    },
    {
      question: "What are the benefits of membership?",
      answer:
        "Access to training programs, mentorship opportunities, networking with industry professionals, participation in competitions, and hands-on project experience.",
    },
    {
      question: "How do I enroll in training programs?",
      answer:
        "Training enrollment opens at the start of each semester. Follow our Facebook page or contact us to get notified when registration begins.",
    },
  ];

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about joining Sys&CoTech."
        />

        <div className="mt-16 rounded-2xl bg-white/4 border border-white/8 p-6 md:p-8">
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center max-w-3xl mx-auto mb-16"
    >
      {eyebrow && (
        <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium spectral-text mb-4 uppercase tracking-wider">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
      <p className="text-lg md:text-xl text-white/70 leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
