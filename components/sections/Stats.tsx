"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

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
  return (
    <section className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="label-caps text-primary">Precision Data</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
              Ecosystem Metrics
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2">
            <span className="pulse-dot h-2 w-2 rounded-full bg-primary" />
            <span className="label-caps text-[10px] text-muted">Live Pulse</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 70}>
              <div className="hover-lift h-full rounded-[2rem] border border-line bg-card p-8">
                <div className="font-display text-5xl font-extrabold tracking-tight text-ink">
                  <Counter value={s.value} />
                  <span className="ml-1.5 align-top text-xl font-bold text-primary">{s.unit}</span>
                </div>
                <div className="mt-3 font-display text-lg font-bold text-ink">{s.label}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted/70">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
