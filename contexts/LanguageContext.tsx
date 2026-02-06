"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { translations, TranslationKey } from "@/lib/translations";
import { safeLocalStorage } from "@/lib/utils";

export type Language = "en" | "mn";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const STORAGE_KEY = "language";
const DEFAULT_LANGUAGE: Language = "en";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const saved = safeLocalStorage.getItem(STORAGE_KEY) as Language | null;
  if (saved && (saved === "en" || saved === "mn")) {
    return saved;
  }
  return DEFAULT_LANGUAGE;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    safeLocalStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const t = useCallback(
    (key: TranslationKey): string => {
      const translation = translations[language]?.[key];
      if (!translation) {
        console.warn(`Missing translation for key: ${key}`);
        return key;
      }
      return translation;
    },
    [language],
  );

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
