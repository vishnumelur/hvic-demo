"use client";

import Link from "next/link";
import { ROADMAP } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { IconArrowRight } from "@/components/ui/Icons";
import { useT } from "@/lib/i18n";

function StatusChip({ statusKey, label }: { statusKey: string; label: string }) {
  const map: Record<string, string> = {
    Active: "bg-accent text-primary-700",
    Pilot: "bg-primary/10 text-primary",
    Staging: "bg-tertiary/40 text-on-tertiary",
  };
  return (
    <span className={`label-caps rounded-full px-3 py-1 text-[10px] ${map[statusKey] ?? "bg-card text-muted"}`}>
      {label}
    </span>
  );
}

export default function Projects() {
  const t = useT();
  return (
    <section id="roadmap" className="bg-card py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <SectionHeading center kicker={t.roadmap.kicker} title={t.roadmap.title} />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {ROADMAP.map((p, i) => {
            const c = t.roadmap.cards[i];
            return (
              <Reveal key={p.title} delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-[2.5rem] border border-line bg-white premium-shadow hover-lift">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute left-5 top-5 flex gap-2">
                      <span className="label-caps rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] text-white backdrop-blur-md">
                        {c.tag}
                      </span>
                      <StatusChip statusKey={p.status} label={c.status} />
                    </div>
                  </div>
                  <div className="space-y-4 p-8">
                    <p className="label-caps text-[10px] text-primary">{c.phase}</p>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{c.title}</h3>
                    <p className="leading-relaxed text-muted/85">{c.desc}</p>
                    <Link
                      href="/programmes"
                      className="group/link inline-flex items-center gap-2 font-semibold text-ink"
                    >
                      {t.roadmap.view}
                      <IconArrowRight className="h-5 w-5 text-primary transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
