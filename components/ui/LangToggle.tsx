"use client";

import { useLang } from "@/lib/i18n";

const OPTIONS = [
  { code: "en" as const, label: "EN" },
  { code: "ml" as const, label: "മ" },
];

export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-full border border-line bg-white/70 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {OPTIONS.map((o) => (
        <button
          key={o.code}
          type="button"
          onClick={() => setLang(o.code)}
          aria-pressed={lang === o.code}
          aria-label={o.code === "en" ? "English" : "മലയാളം"}
          className={`min-w-7 rounded-full px-2 py-1 text-xs font-bold transition-colors ${
            lang === o.code ? "bg-primary text-white" : "text-muted hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
