"use client";

import Link from "next/link";
import { NEWS } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { IconArrowRight } from "@/components/ui/Icons";
import { useT } from "@/lib/i18n";

export default function NewsTeaser() {
  const t = useT();
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker={t.news.kicker} title={t.news.title} />
          <Reveal>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
            >
              {t.news.viewAll} <IconArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {NEWS.map((n, i) => {
            const c = t.news.items[i];
            return (
              <Reveal key={n.title} delay={i * 60}>
                <Link
                  href="/news"
                  className="group flex flex-col gap-3 py-6 transition-colors hover:bg-card/50 sm:flex-row sm:items-center sm:gap-8"
                >
                  <span className="w-28 shrink-0 font-display text-sm font-medium text-muted/70">{n.date}</span>
                  <span className="shrink-0 sm:w-32">
                    <span className="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">{c.category}</span>
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-lg font-semibold text-ink transition-colors group-hover:text-primary">
                      {c.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted">{c.excerpt}</span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
