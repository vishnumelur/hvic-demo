"use client";

import { PARTNERS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";

export default function Partners() {
  const t = useT();
  // Seamless marquee. Two rules make it loop with no jump and no blank gap:
  //   1. Spacing lives on each item (mr-*), NOT flex `gap`. A shared flex gap is
  //      also inserted between the two copies, so translateX(-50%) would undershoot
  //      the true period by half a gap and visibly jump. Per-item margin keeps the
  //      two copies exactly equal width, so -50% lands on a seamless boundary.
  //   2. Repeat the list so ONE copy is wider than any desktop viewport; otherwise
  //      after the -50% shift the second copy can't fill the screen and a blank
  //      space appears on the right.
  const seq = [...PARTNERS, ...PARTNERS, ...PARTNERS];
  const row = [...seq, ...seq];

  return (
    <section className="border-y border-line py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <p className="text-center label-caps text-[10px] text-ink/40">
            {t.partners.built}
          </p>
        </Reveal>
      </div>

      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center" style={{ animationDuration: "80s" }}>
          {row.map((p, i) => (
            <span
              key={`${p}-${i}`}
              aria-hidden={i >= seq.length}
              className="mr-10 whitespace-nowrap font-display text-lg font-bold tracking-tight text-ink/45 sm:mr-14 sm:text-xl"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
