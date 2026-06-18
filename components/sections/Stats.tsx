"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";

function Counter({ value }: { value: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const dur = 1400;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              setN(value * (1 - Math.pow(1 - p, 3)));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <span ref={ref}>{Math.round(n)}</span>;
}

export default function Stats() {
  const t = useT();
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-12 md:flex-row md:items-end">
          <div>
            <p className="label-caps text-primary">{t.stats.kicker}</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              {t.stats.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2">
            <span className="pulse-dot h-2 w-2 rounded-full bg-primary" />
            <span className="label-caps text-[10px] text-muted">{t.stats.live}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-4 lg:gap-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="hover-lift flex h-full items-center gap-4 rounded-2xl border border-line bg-card p-4 lg:flex-col lg:items-start lg:rounded-[2rem] lg:p-8">
                {/* Number — proportionally smaller than the heading on mobile */}
                <div className="w-[4.5rem] shrink-0 font-display text-2xl font-extrabold tracking-tight text-ink lg:w-auto lg:text-5xl">
                  <Counter value={s.value} />
                  <span className="ml-0.5 align-top text-xs font-bold text-primary lg:ml-1.5 lg:text-xl">{s.unit}</span>
                </div>
                {/* Label + (desktop) description */}
                <div className="min-w-0 flex-1 lg:mt-3 lg:flex-none">
                  <div className="font-display text-base font-bold text-ink lg:text-lg">{t.stats.items[i].label}</div>
                  <p className="mt-1.5 hidden text-sm leading-relaxed text-muted/70 lg:block">{t.stats.items[i].sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
