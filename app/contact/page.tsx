"use client";

import { useState, FormEvent, useCallback } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Send,
  CheckCircle2,
} from "lucide-react";
import Footer from "@/components/Footer";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      // Basic validation
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.message.trim()
      ) {
        return;
      }

      setIsSubmitting(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setShowSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => setShowSuccess(false), 5000);
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData],
  );

  const handleInputChange = useCallback(
    (field: keyof typeof formData) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [field]: e.target.value }));
      },
    [],
  );

  return (
    <>
      <main className="relative overflow-x-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-blue)]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl" />
          </div>

          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20">
              <span className="text-sm font-medium text-[var(--accent-blue)]">
                {t("contact.eyebrow")}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              {t("contact.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="bg-[var(--bg-surface)] border border-[var(--border-line)] rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                  {t("contactPage.getInTouch")}
                </h2>

                <div className="space-y-5">
                  <a
                    href="tel:+97694945798"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 transition-all group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 group-hover:bg-[var(--accent-cyan)]/20 transition-all">
                      <Phone className="w-5 h-5 text-[var(--accent-cyan)]" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">
                        {t("contactPage.phone")}
                      </div>
                      <div className="font-medium">+976 9494 5798</div>
                    </div>
                  </a>

                  <a
                    href="tel:+97694351314"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-cyan)]/40 transition-all group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 group-hover:bg-[var(--accent-cyan)]/20 transition-all">
                      <Phone className="w-5 h-5 text-[var(--accent-cyan)]" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">
                        {t("contactPage.alternative")}
                      </div>
                      <div className="font-medium">+976 9435 1314</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@syscotech.club"
                    className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-blue)]/40 transition-all group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 group-hover:bg-[var(--accent-blue)]/20 transition-all">
                      <Mail className="w-5 h-5 text-[var(--accent-blue)]" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">
                        {t("contactPage.email")}
                      </div>
                      <div className="font-medium break-all text-sm">
                        contact@syscotech.club
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)]">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/20">
                      <MapPin className="w-5 h-5 text-[var(--accent-violet)]" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">
                        {t("contactPage.location")}
                      </div>
                      <div className="font-medium text-[var(--text-secondary)]">
                        SHUTIS-MHTS Room 400
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--border-line)]">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
                    {t("contactPage.connectWithUs")}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/SysAndCoTech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-cyan)]/40 hover:scale-110 transition-all group"
                      aria-label="Facebook"
                    >
                      <div className="absolute inset-0 rounded-xl bg-[var(--accent-cyan)]/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                      <Facebook className="relative z-10" size={20} />
                    </a>
                    <a
                      href="https://maps.app.goo.gl/CZxEJy1dYapyd5hW6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] hover:border-[var(--accent-cyan)]/40 hover:scale-110 transition-all group"
                      aria-label="Location"
                    >
                      <div className="absolute inset-0 rounded-xl bg-[var(--accent-cyan)]/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                      <MapPin className="relative z-10" size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg-surface)] border border-[var(--border-line)] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                {t("contactPage.sendMessage")}
              </h2>

              {showSuccess && (
                <div className="mb-4 p-4 rounded-xl bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/30 flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle2 className="w-5 h-5 text-[var(--accent-cyan)]" />
                  <span className="text-[var(--accent-cyan)] text-sm font-medium">
                    {t("contactPage.successMessage")}
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    {t("contactPage.form.yourName")}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:ring-2 focus:ring-[var(--accent-blue)]/10 transition-all"
                    placeholder={t("contactPage.form.placeholder.name")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    {t("contactPage.form.emailAddress")}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:ring-2 focus:ring-[var(--accent-blue)]/10 transition-all"
                    placeholder={t("contactPage.form.placeholder.email")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    {t("contactPage.form.subject")}
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange("subject")}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:ring-2 focus:ring-[var(--accent-blue)]/10 transition-all"
                    placeholder={t("contactPage.form.placeholder.subject")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    {t("contactPage.form.message")}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange("message")}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-base)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:ring-2 focus:ring-[var(--accent-blue)]/10 transition-all resize-none"
                    placeholder={t("contactPage.form.placeholder.message")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)] text-white font-medium hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>{t("contactPage.form.sending")}</span>
                    </>
                  ) : (
                    <>
                      <span>{t("contactPage.form.sendButton")}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <div className="bg-[var(--bg-surface)] border border-[var(--border-line)] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                {t("contactPage.visitUs")}
              </h2>
              <GoogleMapEmbed
                title={t("contactPage.mapTitle")}
                height={420}
                className="mb-6"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
