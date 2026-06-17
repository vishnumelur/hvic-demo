import { PARTNERS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function Partners() {
  return (
    <section className="border-y border-line py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <p className="mb-8 text-center label-caps text-[10px] text-ink/40">
            Built with Kerala&apos;s leading institutions
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0">
            {PARTNERS.map((p) => (
              <span key={p} className="font-display text-lg font-bold tracking-tight text-ink">
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
