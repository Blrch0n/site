"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#pillars", label: "Pillars" },
  { href: "#programs", label: "Programs" },
  { href: "#events", label: "Events" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          isScrolled
            ? "bg-[rgba(7,8,11,0.9)] backdrop-blur-2xl border-b border-white/8 shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo with HUD accent */}
            <a
              href="#top"
              className="flex items-center gap-2 text-lg font-semibold text-white hover:opacity-80 transition-opacity group"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#5B5FFF] group-hover:animate-pulse" />
              <span>Sys&CoTech</span>
            </a>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200 relative group py-2"
                  >
                    {link.label}
                    <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#E94FFF] group-hover:w-full transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(91,95,255,0.6)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Join Us
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="absolute inset-0 bg-[#07080B]/95 backdrop-blur-xl" />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-20 mx-6 p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={handleLinkClick}
                      className="block py-3 text-lg font-medium text-white hover:text-[#00D4FF] transition-colors"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="mt-6 block text-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#5B5FFF] to-[#9B4FFF] text-white font-semibold"
              >
                Join Us
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
