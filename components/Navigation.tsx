"use client";

import { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/siteNav";
import { useLanguage } from "@/contexts/LanguageContext";
import { TranslationKey } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { throttle } from "@/lib/utils";

const NavLink = memo(function NavLink({
  href,
  isActive,
  children,
}: {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`text-[13px] font-medium transition-colors duration-200 relative group py-2 ${
        isActive
          ? "text-[var(--text-primary)]"
          : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 h-px bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)] transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
});

const MobileMenuItem = memo(function MobileMenuItem({
  href,
  onClick,
  children,
  index,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.li
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        href={href}
        onClick={onClick}
        className="block py-3 text-lg font-medium text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors"
      >
        {children}
      </Link>
    </motion.li>
  );
});

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 80);
    }, 100);

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const desktopNavItems = useMemo(
    () =>
      NAV_ITEMS.filter(
        (item) => item.id !== "home" && item.showInDesktop !== false,
      ),
    [],
  );

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

            <ul className="hidden md:flex items-center gap-8">
              {desktopNavItems.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <li key={link.path}>
                    <NavLink href={link.path} isActive={isActive}>
                      {t(`nav.${link.id}` as TranslationKey)}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <ThemeSwitcher />
              <LanguageSwitcher />

              <Link
                href="/join"
                className="flex items-center justify-center px-5 py-2 rounded-xl border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-primary)] font-medium text-sm hover:border-[var(--border-accent)] hover:bg-[var(--bg-surface-hover)] hover:shadow-[0_0_20px_var(--panel-glow)] transition-all duration-200 relative overflow-hidden group"
              >
                <span className="relative z-10">{t("nav.join")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-cyan)]/10 via-[var(--accent-blue)]/10 to-[var(--accent-violet)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={handleLinkClick}
          >
            <div className="absolute inset-0 bg-[var(--bg-base)]/95 backdrop-blur-xl" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-20 mx-6 p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-line)]"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="flex flex-col gap-4">
                {NAV_ITEMS.map((link, index) => (
                  <MobileMenuItem
                    key={link.path}
                    href={link.path}
                    onClick={handleLinkClick}
                    index={index}
                  >
                    {t(`nav.${link.id}` as TranslationKey)}
                  </MobileMenuItem>
                ))}
              </ul>

              <div className="mt-6 mb-4">
                <ThemeSwitcher />
              </div>

              <Link
                href="/join"
                onClick={handleLinkClick}
                className="mt-4 block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-blue)] to-[var(--accent-violet)] text-white font-semibold"
              >
                {t("nav.join")}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
