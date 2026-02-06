"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
  ];

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-line)]">
      {themes.map(({ name, icon: Icon, label }) => (
        <button
          key={name}
          onClick={() => setTheme(name)}
          className={`
            relative px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium
            transition-all duration-200
            ${
              theme === name
                ? "bg-[var(--bg-surface-active)] text-[var(--text-primary)] shadow-sm"
                : "text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)]"
            }
          `}
          aria-label={`Switch to ${label} mode`}
          title={`Switch to ${label} mode`}
        >
          <Icon className="w-4 h-4" />
          {theme === name && (
            <div className="absolute inset-0 rounded-lg border border-[var(--border-accent)] pointer-events-none" />
          )}
        </button>
      ))}
    </div>
  );
}
