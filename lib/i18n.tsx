"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { STRINGS, type Dict } from "@/lib/i18n/strings";

export type Lang = "en" | "ml";
const KEY = "hvic_lang";

type Ctx = { lang: Lang; setLang: (l: Lang) => void };
const LangCtx = createContext<Ctx>({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let saved: Lang = "en";
    try {
      const v = localStorage.getItem(KEY);
      if (v === "ml" || v === "en") saved = v;
    } catch {
      /* ignore */
    }
    setLangState(saved);
    document.documentElement.lang = saved;
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(KEY, l);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = l;
  };

  return <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  return useContext(LangCtx);
}

/** Returns the full translated content dictionary for the active language. */
export function useT(): Dict {
  const { lang } = useLang();
  return STRINGS[lang];
}
