"use client";

import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/content";

function Counter({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const dur = 1500;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  const display = value % 1 === 0 ? Math.round(n) : n.toFixed(0);
  return (
    <span ref={ref} className="aurora-text">
      {prefix}{display}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-h2/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan/20 blur-3xl" />
          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center sm:text-left">
                <p className="font-display text-5xl font-bold tracking-tight lg:text-6xl">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-3 font-display text-sm font-semibold text-fg">{s.label}</p>
                <p className="mt-1 text-xs text-faint">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
