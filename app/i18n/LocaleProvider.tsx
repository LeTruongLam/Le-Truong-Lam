"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { defaultLocale, Locale, messages } from "./locales";

type AllMessages = typeof messages;
type MessagesForLocale = AllMessages[Locale];
type SectionKey = keyof MessagesForLocale;

type LocaleContextValue = {
  locale: Locale;
  messages: MessagesForLocale;
  t: <K extends SectionKey>(section: K) => MessagesForLocale[K];
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("locale") as Locale | null;
    if (stored && messages[stored]) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", next);
    }
  };

  const value = useMemo<LocaleContextValue>(() => {
    const currentMessages = messages[locale];
    return {
      locale,
      messages: currentMessages,
      t: (section) => currentMessages[section],
      setLocale,
    };
  }, [locale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useI18n must be used within LocaleProvider");
  }
  return ctx;
}


