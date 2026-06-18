import { PARTNERS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

export default function Partners() {
  // duplicate the list so the -50% translate loops seamlessly
  const row = [...PARTNERS, ...PARTNERS];

  return (
    <section className="border-y border-line py-12 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <p className="text-center label-caps text-[10px] text-ink/40">
            Built with Kerala&apos;s leading institutions
          </p>
        </Reveal>
      </div>

      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14">
          {row.map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="whitespace-nowrap font-display text-lg font-bold tracking-tight text-ink/45 sm:text-xl"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
