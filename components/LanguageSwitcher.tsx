"use client";

import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative inline-flex items-center gap-1 rounded-lg border border-[var(--border-line)] bg-[var(--bg-surface)] p-1 backdrop-blur-sm">
      <button
        onClick={() => setLanguage("en")}
        className={`relative px-3 py-1.5 text-xs font-medium transition-colors ${
          language === "en" ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
        }`}
      >
        {language === "en" && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 rounded-md bg-[var(--bg-surface-active)]"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1.5">
          <Languages className="w-3.5 h-3.5" />
          EN
        </span>
      </button>
      <button
        onClick={() => setLanguage("mn")}
        className={`relative px-3 py-1.5 text-xs font-medium transition-colors ${
          language === "mn" ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:text-[var(--text-secondary)]"
        }`}
      >
        {language === "mn" && (
          <motion.div
            layoutId="language-indicator"
            className="absolute inset-0 rounded-md bg-[var(--bg-surface-active)]"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1.5">
          <Languages className="w-3.5 h-3.5" />
          МН
        </span>
      </button>
    </div>
  );
}
