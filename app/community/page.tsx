"use client";

import Link from "next/link";
import {
  Users,
  Calendar,
  MessageSquare,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import Footer from "@/components/Footer";

interface PreviewCard {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const PREVIEW_CARDS: PreviewCard[] = [
  {
    icon: Users,
    title: "Member Directory",
    description:
      "Connect with fellow members, see who's working on what, and find collaboration opportunities.",
    color: "blue",
  },
  {
    icon: Calendar,
    title: "Event Calendar",
    description:
      "Stay updated with upcoming workshops, hackathons, and social gatherings all in one place.",
    color: "cyan",
  },
  {
    icon: MessageSquare,
    title: "Discussion Forum",
    description:
      "Share ideas, ask questions, and engage in meaningful tech discussions with the community.",
    color: "violet",
  },
];

export default function CommunityPage() {
  return (
    <>
      <main className="relative overflow-x-hidden min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-32">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-blue)]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl" />
          </div>

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-[var(--accent-blue)]/10 border border-[var(--accent-blue)]/20">
              <Sparkles className="w-4 h-4 text-[var(--accent-blue)]" />
              <span className="text-sm font-medium text-[var(--accent-blue)]">
                Building Something Special
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-6">
              Community Hub
            </h1>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              We&apos;re crafting a space where our members can connect,
              collaborate, and grow together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {PREVIEW_CARDS.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`bg-[var(--bg-surface)] border border-[var(--border-line)] rounded-2xl p-6 hover:border-[var(--accent-${card.color})]/40 hover:-translate-y-2 hover:shadow-lg hover:shadow-[var(--accent-${card.color})]/10 transition-all duration-300 cursor-pointer group`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-[var(--accent-${card.color})]/10 border border-[var(--accent-${card.color})]/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all`}
                  >
                    <Icon
                      className={`w-6 h-6 text-[var(--accent-${card.color})]`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-${card.color})] transition-colors`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm group-hover:text-[var(--text-primary)] transition-colors">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-[var(--bg-surface)] border border-[var(--border-line)] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              Want to Be Notified?
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-xl mx-auto">
              Join our club now and be the first to know when the community hub
              launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="px-8 py-3 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)] text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Join the Club
              </Link>
              <Link
                href="/"
                className="px-8 py-3 border border-[var(--border-line)] bg-transparent text-[var(--text-primary)] rounded-xl font-medium hover:bg-[var(--bg-surface-hover)] transition-colors"
              >
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
