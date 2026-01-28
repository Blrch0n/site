"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);

export const sections = [
  { id: "hero", label: "INTRO" },
  { id: "about", label: "ABOUT" },
  { id: "pillars", label: "CORE" },
  { id: "programs", label: "TRAINING" },
  { id: "projects", label: "SHOWCASE" },
  { id: "events", label: "EVENTS" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "CONTACT" },
];

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Get all visible entries
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Find the entry with highest intersection ratio
          const mostVisible = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev,
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: "-80px 0px -40% 0px",
      },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within ActiveSectionProvider",
    );
  }
  return context;
}
