"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import Footer from "@/components/Footer";

export default function CommunityPage() {
  return (
    <>
      <main className="relative overflow-x-hidden min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-32 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-blue)]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-cyan)]/5 rounded-full blur-3xl" />
          </div>

          {/* Corner decorations */}
          <div className="absolute top-24 left-12 w-8 h-8 border-l-2 border-t-2 border-[var(--accent-blue)]/20" />
          <div className="absolute top-24 right-12 w-8 h-8 border-r-2 border-t-2 border-[var(--accent-cyan)]/20" />
          <div className="absolute bottom-24 left-12 w-8 h-8 border-l-2 border-b-2 border-[var(--accent-blue)]/20" />
          <div className="absolute bottom-24 right-12 w-8 h-8 border-r-2 border-b-2 border-[var(--accent-cyan)]/20" />

          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)] rounded-full blur-xl opacity-20" />
              <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-[var(--bg-surface)] border-2 border-[var(--border-line)]">
                <Clock className="w-12 h-12 text-[var(--accent-blue)]" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-6">
            Coming Soon
          </h1>

          <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-4">
            Community Page
          </p>

          <p className="text-base md:text-lg text-[var(--text-muted)] max-w-2xl mx-auto mb-12">
            We&apos;re working hard to bring you an amazing community
            experience. Stay tuned for updates on our events, member showcases,
            and collaboration opportunities!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-8 py-3 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-cyan)] text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
            <a
              href="/join"
              className="px-8 py-3 border border-[var(--border-line)] bg-[var(--bg-surface)] text-[var(--text-primary)] rounded-lg font-medium hover:bg-[var(--bg-surface-hover)] transition-colors"
            >
              Join Our Club
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
