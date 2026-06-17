import Link from "next/link";
import { NEWS } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function NewsTeaser() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Newsroom"
            title={<>Latest news &amp; <span className="aurora-text">notifications</span></>}
          />
          <Reveal>
            <Link href="/news" className="glass glass-hover rounded-xl px-5 py-3 text-sm font-medium">
              View all updates
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 divide-y divide-line border-y border-line">
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={i * 70}>
              <Link
                href="/news"
                className="group flex flex-col gap-3 py-6 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="w-28 shrink-0 font-display text-sm text-faint">{n.date}</span>
                <span className="w-32 shrink-0">
                  <span className="rounded-full border border-line px-3 py-1 text-xs text-h2-soft">{n.category}</span>
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg font-medium transition-colors group-hover:text-h2">{n.title}</span>
                  <span className="mt-1 block text-sm text-muted">{n.excerpt}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
