"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import { SectionHeader } from "./FAQ";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          eyebrow={t("footer.eyebrow")}
          title={t("footer.title")}
          subtitle={t("footer.subtitle")}
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8 md:gap-12 mt-16"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-white/90">
              {t("footer.contact.title")}
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+97694945798"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Phone size={18} />
                </div>
                <span>+976 9494 5798</span>
              </a>
              <a
                href="tel:+97694351314"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Phone size={18} />
                </div>
                <span>+976 9435 1314</span>
              </a>
              <a
                href="mailto:contact@syscotech.club"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="break-all">contact@syscotech.club</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10">
                  <MapPin size={18} />
                </div>
                <span>SHUTIS-MHTS Room 400</span>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <a
                href="https://www.facebook.com/SysAndCoTech/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:-translate-y-1 hover:border-(--accent-cyan) transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://goo.gl/maps/Qwv3RYvybs8YqJsS8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:-translate-y-1 hover:border-(--accent-cyan) transition-all"
                aria-label="Location"
              >
                <MapPin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-white/90">
              {t("footer.quicklinks.title")}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#about", label: t("nav.about") },
                { href: "#programs", label: t("nav.programs") },
                { href: "#events", label: t("nav.events") },
                { href: "#faq", label: t("nav.faq") },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-lg font-semibold text-white/90">
              {t("footer.policies.title")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  {t("footer.policies.rights")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  {t("footer.policies.rules")}
                </a>
              </li>
              <li>
                <a
                  href="https://hackathon.syscotech.club/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  {t("footer.policies.hackathon")}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50"
        >
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.built")}</p>
        </motion.div>
      </div>
    </section>
  );
}
