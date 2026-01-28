"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, Hash, UserPlus } from "lucide-react";
import { useCommandPalette } from "./useCommandPalette";
import { useJoinModal } from "../JoinModalProvider";

interface CommandItem {
  id: string;
  label: string;
  type: "section" | "external" | "action";
  href?: string;
  description?: string;
}

const commands: CommandItem[] = [
  {
    id: "join",
    label: "Join Sys&CoTech",
    type: "action",
    description: "Apply for membership",
  },
  {
    id: "intro",
    label: "INTRO",
    type: "section",
    href: "#hero",
    description: "Hero section",
  },
  {
    id: "about",
    label: "ABOUT",
    type: "section",
    href: "#about",
    description: "Who we are",
  },
  {
    id: "core",
    label: "CORE",
    type: "section",
    href: "#pillars",
    description: "Six pillars",
  },
  {
    id: "training",
    label: "TRAINING",
    type: "section",
    href: "#programs",
    description: "Programs",
  },
  {
    id: "showcase",
    label: "SHOWCASE",
    type: "section",
    href: "#projects",
    description: "Member projects",
  },
  {
    id: "events",
    label: "EVENTS",
    type: "section",
    href: "#events",
    description: "Activities",
  },
  {
    id: "faq",
    label: "FAQ",
    type: "section",
    href: "#faq",
    description: "Questions",
  },
  {
    id: "contact",
    label: "CONTACT",
    type: "section",
    href: "#contact",
    description: "Get in touch",
  },
  {
    id: "facebook",
    label: "Facebook",
    type: "external",
    href: "https://www.facebook.com/syscotech",
    description: "Visit our page",
  },
  {
    id: "hackathon",
    label: "Hackathon Site",
    type: "external",
    href: "https://devhackathon.mn",
    description: "Dev Hackathon",
  },
  {
    id: "location",
    label: "Google Maps",
    type: "external",
    href: "https://maps.app.goo.gl/yourLocationLink",
    description: "Find us",
  },
];

export default function CommandPalette() {
  const { isOpen, closePalette, openCount } = useCommandPalette();
  const { openModal } = useJoinModal();
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredCommands = useMemo(() => {
    if (!search.trim()) return commands;
    const query = search.toLowerCase();
    return commands.filter(
      (cmd) =>
        cmd.label.toLowerCase().includes(query) ||
        cmd.description?.toLowerCase().includes(query),
    );
  }, [search]);

  // Handle search input changes and reset selection
  const handleSearchChange = useCallback((value: string) => {
    setSearch(value);
    setSelectedIndex(0);
  }, []);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleSelectCommand = useCallback(
    (cmd: CommandItem) => {
      closePalette();

      if (cmd.type === "action") {
        // Handle action commands
        if (cmd.id === "join") {
          setTimeout(() => openModal(), 100);
        }
      } else if (cmd.type === "section") {
        // Smooth scroll to section
        setTimeout(() => {
          const element = document.querySelector(cmd.href!);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      } else {
        // Open external link
        window.open(cmd.href, "_blank", "noopener,noreferrer");
      }
    },
    [closePalette, openModal],
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (filteredCommands.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) =>
            (prev - 1 + filteredCommands.length) % filteredCommands.length,
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        handleSelectCommand(filteredCommands[selectedIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, handleSelectCommand]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        key={openCount}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4"
        onClick={closePalette}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />

        {/* Palette */}
        <motion.div
          initial={{ scale: 0.96, y: -20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.96, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Corner brackets */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-white/20" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-white/20" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-white/20" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-white/20" />

          <div className="bg-[rgba(7,8,11,0.95)] backdrop-blur-2xl border border-white/8 rounded-xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-4 border-b border-white/8">
              <Search className="w-5 h-5 text-white/40" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search commands..."
                className="flex-1 bg-transparent text-white placeholder:text-white/30 outline-none text-sm"
              />
              <span className="text-[10px] font-mono text-white/30 tracking-wider">
                ESC
              </span>
            </div>

            {/* Results */}
            <div className="max-h-[400px] overflow-y-auto">
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-8 text-center text-white/40 text-sm">
                  No results found
                </div>
              ) : (
                <div className="py-2">
                  {filteredCommands.map((cmd, index) => (
                    <button
                      key={cmd.id}
                      onClick={() => handleSelectCommand(cmd)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                        index === selectedIndex
                          ? "bg-white/[0.08] border-l-2 border-[var(--accent-blue)]"
                          : "hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/8">
                        {cmd.type === "section" ? (
                          <Hash className="w-4 h-4 text-[var(--accent-cyan)]" />
                        ) : cmd.type === "action" ? (
                          <UserPlus className="w-4 h-4 text-[var(--accent-blue)]" />
                        ) : (
                          <ExternalLink className="w-4 h-4 text-[var(--accent-pink)]" />
                        )}
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-sm font-medium text-white">
                          {cmd.label}
                        </div>
                        {cmd.description && (
                          <div className="text-xs text-white/40">
                            {cmd.description}
                          </div>
                        )}
                      </div>
                      {cmd.type === "section" && (
                        <span className="text-[9px] font-mono text-white/30 tracking-wider uppercase">
                          JUMP
                        </span>
                      )}
                      {cmd.type === "action" && (
                        <span className="text-[9px] font-mono text-white/30 tracking-wider uppercase">
                          ACTION
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/8 bg-white/[0.02]">
              <div className="flex items-center gap-4 text-[10px] font-mono text-white/30 tracking-wider">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                    ↑↓
                  </kbd>
                  NAVIGATE
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                    ↵
                  </kbd>
                  SELECT
                </span>
              </div>
              <span className="text-[9px] font-mono text-white/20 tracking-wider">
                COMMAND PALETTE
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
