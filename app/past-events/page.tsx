"use client";

import Link from "next/link";
import {
  Calendar,
  Trophy,
  Users,
  Code,
  ArrowUpRight,
  LucideIcon,
} from "lucide-react";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatCard {
  icon: LucideIcon;
  count: string;
  label: string;
  color: string;
}

const STATS: StatCard[] = [
  { icon: Calendar, count: "17+", label: "Years of CTF", color: "blue" },
  { icon: Code, count: "10+", label: "Hackathons", color: "cyan" },
  { icon: Users, count: "1000+", label: "Participants", color: "violet" },
  { icon: Trophy, count: "50+", label: "Events", color: "pink" },
];

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
        color: "blue",
      },
      {
        title: "CTF Competition 2024",
        date: "September 2024",
        description: "17th annual competitive programming contest",
        icon: Trophy,
        participants: "80+",
        color: "cyan",
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
        color: "violet",
      },
      {
        title: "CTF Competition 2023",
        date: "September 2023",
        description: "16th annual competitive programming contest",
        icon: Trophy,
        participants: "70+",
        color: "pink",
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
        color: "blue",
      },
      {
        title: "CTF Competition 2022",
        date: "September 2022",
        description: "15th annual competitive programming contest",
        icon: Trophy,
        participants: "65+",
        color: "cyan",
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
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-blue)]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl" />
          </div>

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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-[var(--bg-surface)] border border-[var(--border-line)] rounded-xl p-6 text-center hover:border-[var(--accent-${stat.color})]/40 hover:-translate-y-1 hover:shadow-lg transition-all cursor-pointer group`}
                >
                  <Icon
                    className={`w-6 h-6 text-[var(--accent-${stat.color})] mx-auto mb-3 group-hover:scale-125 transition-transform`}
                  />
                  <div
                    className={`text-3xl font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--accent-${stat.color})] transition-colors`}
                  >
                    {stat.count}
                  </div>
                  <div className="text-sm text-[var(--text-muted)]">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="space-y-12">
            {pastEvents.map((yearData) => (
              <div key={yearData.year} className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-3xl font-bold text-[var(--text-primary)]">
                    {yearData.year}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-line)] to-transparent" />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  {yearData.events.map((event, eventIndex) => {
                    const Icon = event.icon;
                    return (
                      <div
                        key={eventIndex}
                        className="group bg-[var(--bg-surface)] border border-[var(--border-line)] rounded-2xl p-6 hover:border-[var(--accent-blue)]/40 hover:shadow-lg hover:shadow-[var(--accent-blue)]/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4">
                            <div
                              className={`p-3 rounded-xl bg-[var(--accent-${event.color})]/10 border border-[var(--accent-${event.color})]/20 text-[var(--accent-${event.color})] group-hover:scale-110 transition-transform`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                                {event.title}
                              </h3>
                              <p className="text-sm text-[var(--text-muted)]">
                                {event.date}
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-[var(--border-line)]">
                          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                            <Users className="w-4 h-4" />
                            <span>{event.participants} participants</span>
                          </div>
                          <div className="text-xs text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[var(--bg-surface)] border border-[var(--border-line)] rounded-2xl p-12">
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
                className="px-8 py-3 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Join Our Club
              </Link>
              <Link
                href="/"
                className="px-8 py-3 border border-[var(--border-line)] bg-transparent text-[var(--text-primary)] rounded-xl font-medium hover:bg-[var(--bg-surface-hover)] transition-colors"
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
