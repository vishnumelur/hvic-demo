import { PARTNERS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function Partners() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-faint">
            Built with Kerala&apos;s leading institutions
          </p>
        </Reveal>
      </div>
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {row.map((p, i) => (
            <div
              key={`${p}-${i}`}
              className="glass flex h-16 shrink-0 items-center rounded-xl px-7 font-display text-sm font-semibold text-muted"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
