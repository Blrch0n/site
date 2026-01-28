"use client";

import { useState, useEffect, ReactNode } from "react";
import { CommandPaletteContext } from "./useCommandPalette";

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openCount, setOpenCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) setOpenCount((c) => c + 1);
          return !prev;
        });
      }
      // "/" key when not in input/textarea
      else if (
        e.key === "/" &&
        !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement).tagName)
      ) {
        e.preventDefault();
        if (!isOpen) setOpenCount((c) => c + 1);
        setIsOpen(true);
      }
      // Escape to close
      else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const openPalette = () => {
    setOpenCount((c) => c + 1);
    setIsOpen(true);
  };
  const closePalette = () => setIsOpen(false);
  const togglePalette = () => {
    setIsOpen((prev) => {
      if (!prev) setOpenCount((c) => c + 1);
      return !prev;
    });
  };

  return (
    <CommandPaletteContext.Provider
      value={{ isOpen, openPalette, closePalette, togglePalette, openCount }}
    >
      {children}
    </CommandPaletteContext.Provider>
  );
}
