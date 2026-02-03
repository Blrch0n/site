"use client";

import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <>
      <main className="relative overflow-x-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-32">
          {/* Background decoration */}
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

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-[var(--bg-base)]/98 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <a
                    href="tel:+97694945798"
                    className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] group-hover:bg-[var(--bg-surface-hover)] group-hover:border-[var(--accent-cyan)] transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">
                        Phone
                      </div>
                      <div className="font-medium">+976 9494 5798</div>
                    </div>
                  </a>

                  <a
                    href="tel:+97694351314"
                    className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] group-hover:bg-[var(--bg-surface-hover)] group-hover:border-[var(--accent-cyan)] transition-all">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">
                        Alternative Phone
                      </div>
                      <div className="font-medium">+976 9435 1314</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@syscotech.club"
                    className="flex items-center gap-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)] group-hover:bg-[var(--bg-surface-hover)] group-hover:border-[var(--accent-cyan)] transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">
                        Email
                      </div>
                      <div className="font-medium break-all">
                        contact@syscotech.club
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-[var(--text-secondary)]">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">
                        Location
                      </div>
                      <div className="font-medium">SHUTIS-MHTS Room 400</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-[var(--border-line)]">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://www.facebook.com/SysAndCoTech/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] hover:-translate-y-1 hover:border-[var(--accent-cyan)] transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://goo.gl/maps/Qwv3RYvybs8YqJsS8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)] hover:-translate-y-1 hover:border-[var(--accent-cyan)] transition-all"
                      aria-label="Location"
                    >
                      <MapPin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[var(--bg-base)]/98 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Send us a Message
              </h2>

              <form className="space-y-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-[var(--bg-surface-hover)] transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-[var(--bg-surface-hover)] transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-[var(--bg-surface-hover)] transition-all"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[var(--text-secondary)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-line)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-blue)]/40 focus:bg-[var(--bg-surface-hover)] transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[var(--accent-blue)]/30 bg-[var(--accent-blue)]/10 text-[var(--text-primary)] font-medium hover:border-[var(--accent-blue)]/50 hover:bg-[var(--accent-blue)]/20 hover:shadow-[0_0_24px_var(--panel-glow)] transition-all duration-200 relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue)]/20 via-[var(--accent-cyan)]/20 to-[var(--accent-blue)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="bg-[var(--bg-base)]/98 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                Find Us
              </h2>
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-[var(--bg-surface)] flex items-center justify-center">
                <a
                  href="https://goo.gl/maps/Qwv3RYvybs8YqJsS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  <MapPin size={48} />
                  <span className="text-lg font-medium">
                    View on Google Maps
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
