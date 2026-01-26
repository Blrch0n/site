"use client";

import { useTheme } from "@/lib/theme-provider";
import { Button } from "./Button";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-custom backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 accent-bg rounded-xl flex items-center justify-center font-bold text-white">
            S&C
          </div>
          <span className="font-bold text-xl hidden sm:block">Sys&CoTech</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Бидний тухай
          </a>
          <a
            href="#trainings"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Сургалтууд
          </a>
          <a
            href="#community"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Нийгэмлэг
          </a>
          <a
            href="#faq"
            className="hover:text-[var(--accent)] transition-colors"
          >
            Асуулт
          </a>
        </div>

        {/* Theme Toggle + CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl surface border border-custom flex items-center justify-center hover:border-[var(--accent)] transition-all"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          <Button variant="primary" className="hidden sm:block">
            Элсэх
          </Button>
        </div>
      </div>
    </nav>
  );
}
