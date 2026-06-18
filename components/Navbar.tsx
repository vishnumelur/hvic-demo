"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useT } from "@/lib/i18n";
import Logo from "@/components/ui/Logo";
import LangToggle from "@/components/ui/LangToggle";
import {
  IconAtom, IconRoute, IconImage, IconNews, IconBriefcase, IconMail,
  IconUser, IconChevronRight, IconClose, IconMenu,
} from "@/components/ui/Icons";

const NAV_ICONS: Record<string, (p: { className?: string }) => React.ReactElement> = {
  "/programmes": IconAtom,
  "/about": IconRoute,
  "/gallery": IconImage,
  "/news": IconNews,
  "/tenders": IconBriefcase,
  "/contact": IconMail,
};

export default function Navbar() {
  const t = useT();
  const NAV = t.nav.items;
  const pathname = usePathname() || "/";
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "border-line bg-white/80 backdrop-blur-xl" : "border-transparent bg-white/40 backdrop-blur-md"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1280px] items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Logo className="h-8 w-8" />
            <span className="whitespace-nowrap font-display text-xl font-extrabold tracking-tight text-ink">Kerala HVIC</span>
          </Link>

          {/* Same control on every width: language toggle (home only) + menu button */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            {isHome && <LangToggle />}
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-full text-ink transition-colors hover:bg-card"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen menu (same on desktop and mobile) */}
      {open && (
        <div className="animate-fade fixed inset-0 z-[60] bg-bg">
          <div className="hero-glow pointer-events-none absolute inset-0" />

          <div className="relative mx-auto flex h-dvh w-full max-w-lg flex-col">
            <div className="flex h-20 shrink-0 items-center justify-between px-6">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                <Logo className="h-8 w-8" />
                <span className="font-display text-xl font-extrabold tracking-tight text-ink">Kerala HVIC</span>
              </Link>
              <div className="flex items-center gap-2">
                {isHome && <LangToggle />}
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink"
                >
                  <IconClose className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative flex-1 overflow-y-auto px-5 pb-4">
              <p className="animate-rise mb-2 px-2 label-caps text-[10px] text-muted/50">{t.nav.navigate}</p>
              <nav className="animate-rise overflow-hidden rounded-3xl border border-line bg-white premium-shadow" style={{ animationDelay: "40ms" }}>
                <div className="divide-y divide-line">
                  {NAV.map((n) => {
                    const Icon = NAV_ICONS[n.href] ?? IconChevronRight;
                    return (
                      <Link
                        key={n.href}
                        href={n.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-4 px-4 py-3 transition-colors hover:bg-card"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-card text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                          <Icon className="h-[18px] w-[18px]" />
                        </span>
                        <span className="flex-1 font-display text-base font-bold tracking-tight text-ink">{n.label}</span>
                        <IconChevronRight className="h-5 w-5 text-muted/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>

            <div
              className="animate-rise relative shrink-0 space-y-3 border-t border-line bg-white/85 px-5 pt-5 backdrop-blur-xl"
              style={{ animationDelay: "120ms", paddingBottom: "calc(env(safe-area-inset-bottom) + 1.25rem)" }}
            >
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="btn-primary flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 font-semibold text-white"
              >
                <IconUser className="h-5 w-5" /> {t.nav.signIn}
              </Link>
              <div className="flex items-center justify-center gap-2 pt-1 text-xs text-muted">
                <IconMail className="h-3.5 w-3.5 text-primary" />
                <a href="mailto:info@keralahvic.org" className="hover:text-primary">info@keralahvic.org</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
