"use client";

import { useState, useEffect } from "react";
import { Menu, X, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCommandPalette } from "./CommandPalette/useCommandPalette";
import { useJoinModal } from "./JoinModalProvider";
import { NAV_ITEMS } from "@/lib/siteNav";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { togglePalette } = useCommandPalette();
  const { openModal } = useJoinModal();
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const desktopNavItems = NAV_ITEMS.filter((item) => item.id !== "home");

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-[var(--bg-base)]/95 backdrop-blur-2xl border-b border-[var(--border-line-hover)]"
            : "bg-transparent border-b border-[var(--border-line)]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            {}
            <Link
              href="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
            >
              <Image
                src="/logo.png"
                alt="Sys&CoTech Logo"
                width={180}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </Link>

            {}
            <ul className="hidden md:flex items-center gap-8">
              {desktopNavItems.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className={`text-[13px] font-medium transition-colors duration-200 relative group py-2 ${
                        isActive
                          ? "text-[var(--text-primary)]"
                          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {t(`nav.${link.id}` as TranslationKey)}
                      <span
                        className={`absolute bottom-0 left-0 h-px bg-linear-to-r from-(--accent-blue) to-(--accent-cyan) transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {}
            <div className="hidden md:flex items-center gap-3">
              <ThemeSwitcher />
              <LanguageSwitcher />

              <button
                onClick={togglePalette}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-xs hover:border-[var(--border-line-hover)] hover:bg-[var(--bg-surface-hover)] transition-all duration-200 group"
                aria-label="Open command palette"
              >
                <Command className="w-3.5 h-3.5" />
                <span className="text-[10px] font-mono tracking-wider">⌘K</span>
              </button>

              <button
                onClick={openModal}
                className="flex items-center justify-center px-5 py-2 rounded-lg border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--border-accent)] hover:bg-[var(--bg-surface-hover)] hover:shadow-[0_0_20px_var(--panel-glow)] transition-all duration-200 relative overflow-hidden group"
              >
                <span className="relative z-10">{t("nav.join")}</span>
                <div className="absolute inset-0 bg-linear-to-r from-(--accent-cyan)/10 via-(--accent-blue)/10 to-(--accent-violet)/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-[var(--bg-base)]/95 backdrop-blur-xl" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-20 mx-6 p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-line)]"
            >
              <ul className="flex flex-col gap-4">
                {NAV_ITEMS.map((link, index) => (
                  <motion.li
                    key={link.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.path}
                      onClick={handleLinkClick}
                      className="block py-3 text-lg font-medium text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors"
                    >
                      {t(`nav.${link.id}` as TranslationKey)}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {}
              <div className="mt-6 mb-4">
                <ThemeSwitcher />
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  togglePalette();
                }}
                className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-medium text-sm hover:border-[var(--border-line-hover)] hover:bg-[var(--bg-surface-hover)] transition-all"
              >
                <Command className="w-4 h-4" />
                <span>Command Palette</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="mt-2 block w-full text-center px-6 py-3 rounded-xl bg-linear-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white font-semibold"
              >
                {t("nav.join")}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
