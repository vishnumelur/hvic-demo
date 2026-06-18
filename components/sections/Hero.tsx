"use client";

import Link from "next/link";
import { IconArrowRight } from "@/components/ui/Icons";
import { useT } from "@/lib/i18n";

export default function Hero() {
  const t = useT();
  return (
    <section className="hero-glow relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="z-10 py-16 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-primary">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="label-caps text-[10px]">{t.hero.badge}</span>
          </div>

          <h1 className="hero-title mt-7 font-display text-[clamp(2.5rem,7vw,5rem)] leading-tight text-ink">
            {t.hero.lead && <>{t.hero.lead} </>}
            <span className="accent-italic">{t.hero.accent}</span>{" "}
            {t.hero.tail}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted/90 sm:text-xl">
            {t.hero.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/programmes"
              className="btn-primary premium-shadow inline-flex min-w-[12.5rem] items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-ink px-7 py-4 font-semibold text-white"
            >
              {t.hero.explore}
              <IconArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="glass-card inline-flex min-w-[10.5rem] items-center justify-center whitespace-nowrap rounded-2xl px-7 py-4 font-medium text-ink transition-colors hover:bg-white"
            >
              {t.hero.specs}
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative h-[460px] sm:h-[560px] lg:h-[680px]">
          <div className="group relative h-full w-full overflow-hidden rounded-[40px] premium-shadow">
            <img
              src="/img/hero.jpg"
              alt="Green hydrogen logistics corridor through Kerala's hills"
              className="absolute inset-0 h-full w-full scale-110 object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-bg/30 via-transparent to-transparent" />

            <div className="glass-card absolute right-6 top-6 animate-float rounded-3xl p-5 sm:right-8 sm:top-8">
              <div className="font-display text-3xl font-extrabold text-primary">94.2%</div>
              <div className="label-caps mt-0.5 text-[10px] text-ink/55">{t.hero.gridPurity}</div>
            </div>

            <div className="glass-card absolute bottom-6 left-6 rounded-2xl px-4 py-3 sm:bottom-8 sm:left-8">
              <div className="flex items-center gap-2">
                <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
                <span className="text-sm font-semibold text-ink">{t.hero.corridor}</span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-16 -left-10 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute -top-16 -right-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-[140px]" />
        </div>
      </div>
    </section>
  );
}
