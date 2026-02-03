"use client";

import Link from "next/link";
import { Calendar, Trophy, Users, Code } from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const pastEvents = [
  {
    year: "2024-2025",
    events: [
      {
        title: "Dev Hackathon 2024",
        date: "October 2024",
        description:
          "10th annual hackathon introducing innovative ideas and solutions",
        icon: Code,
        participants: "50+",
      },
      {
        title: "CTF Competition 2024",
        date: "September 2024",
        description: "17th annual competitive programming contest",
        icon: Trophy,
        participants: "80+",
      },
    ],
  },
  {
    year: "2023-2024",
    events: [
      {
        title: "Dev Hackathon 2023",
        date: "October 2023",
        description: "9th annual hackathon with record participation",
        icon: Code,
        participants: "45+",
      },
      {
        title: "CTF Competition 2023",
        date: "September 2023",
        description: "16th annual competitive programming contest",
        icon: Trophy,
        participants: "70+",
      },
    ],
  },
  {
    year: "2022-2023",
    events: [
      {
        title: "Dev Hackathon 2022",
        date: "October 2022",
        description: "8th annual hackathon focusing on social impact",
        icon: Code,
        participants: "40+",
      },
      {
        title: "CTF Competition 2022",
        date: "September 2022",
        description: "15th annual competitive programming contest",
        icon: Trophy,
        participants: "65+",
      },
    ],
  },
];

export default function PastEventsPage() {
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

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20">
              <span className="text-sm font-medium text-[var(--accent-blue)]">
                {t("pastEvents.eyebrow")}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
              {t("pastEvents.title")}
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              {t("pastEvents.description")}
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-[var(--bg-base)]/98 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[var(--accent-blue)]" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                17+
              </div>
              <div className="text-sm text-[var(--text-muted)]">
                Years of CTF
              </div>
            </div>

            <div className="bg-[var(--bg-base)]/98 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 flex items-center justify-center">
                  <Code className="w-6 h-6 text-[var(--accent-cyan)]" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                10+
              </div>
              <div className="text-sm text-[var(--text-muted)]">Hackathons</div>
            </div>

            <div className="bg-[var(--bg-base)]/98 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-violet)]/10 border border-[var(--accent-violet)]/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[var(--accent-violet)]" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                1000+
              </div>
              <div className="text-sm text-[var(--text-muted)]">
                Participants
              </div>
            </div>

            <div className="bg-[var(--bg-base)]/98 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl p-6 text-center">
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-lg bg-[var(--accent-pink)]/10 border border-[var(--accent-pink)]/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-[var(--accent-pink)]" />
                </div>
              </div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">
                50+
              </div>
              <div className="text-sm text-[var(--text-muted)]">Events</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {pastEvents.map((yearData) => (
              <div key={yearData.year} className="relative">
                {/* Year Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-2">
                    {yearData.year}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)] rounded-full" />
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {yearData.events.map((event, eventIndex) => {
                    const Icon = event.icon;
                    return (
                      <div
                        key={eventIndex}
                        className="bg-[var(--bg-base)]/98 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl p-6 hover:border-[var(--accent-blue)]/40 hover:shadow-[0_0_24px_var(--panel-glow)] transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-7 h-7 text-[var(--accent-blue)]" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
                              {event.title}
                            </h3>
                            <p className="text-sm text-[var(--text-muted)] mb-3">
                              {event.date}
                            </p>
                            <p className="text-[var(--text-secondary)] mb-4">
                              {event.description}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                              <Users className="w-4 h-4" />
                              <span>{event.participants} participants</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-[var(--bg-base)]/98 backdrop-blur-2xl border border-[var(--border-line)] rounded-xl p-12">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Be Part of Our Next Event
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Join us in creating more memorable moments and pushing the
              boundaries of innovation together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="px-8 py-3 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Join Our Club
              </Link>
              <Link
                href="/"
                className="px-8 py-3 border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-primary)] rounded-lg font-medium hover:bg-[var(--bg-surface-hover)] transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
