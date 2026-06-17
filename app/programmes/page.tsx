import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { VALUE_CHAIN, ROADMAP } from "@/lib/content";
import { ICONS, IconArrowRight } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Green-hydrogen programmes across Kerala&apos;s full value chain — from production and storage to transport and R&D.",
};

function StatusChip({ status }: { status: string }) {
  const map: Record<string, string> = {
    Active: "bg-accent text-primary-700",
    Pilot: "bg-primary/10 text-primary",
    Staging: "bg-tertiary/40 text-on-tertiary",
  };
  return (
    <span
      className={`label-caps rounded-full px-3 py-1 text-[10px] ${map[status] ?? "bg-card text-muted"}`}
    >
      {status}
    </span>
  );
}

export default function ProgrammesPage() {
  return (
    <>
      {/* ── Page header ──────────────────────────────────────── */}
      <PageHeader
        kicker="Programmes & Technology"
        title={
          <>
            The value chain,{" "}
            <span className="accent-italic">end to end</span>
          </>
        }
        intro="Kerala HVIC operates across every stage of the hydrogen economy — production, storage, distribution, applications and R&amp;D — turning strategy into flagship projects on the ground."
      />

      {/* ── Value-chain grid ─────────────────────────────────── */}
      <section className="bg-bg py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <p className="label-caps text-primary">The Technology Stack</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
              Five pillars of a{" "}
              <span className="accent-italic">zero-carbon</span> economy
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              From megawatt electrolysers to backwater houseboats — every node
              in the chain is engineered to work together.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_CHAIN.map((node, i) => {
              const Icon = ICONS[node.icon];
              return (
                <Reveal key={node.id} delay={i * 80}>
                  <div className="h-full rounded-[2rem] border border-line bg-white p-8 premium-shadow hover-lift">
                    {/* Icon square */}
                    <span className="inline-grid h-12 w-12 place-items-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-6 font-display text-xl text-ink">
                      {node.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted">
                      {node.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Flagship projects ────────────────────────────────── */}
      <section className="bg-card py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <Reveal>
            <p className="label-caps text-primary">Strategic Roadmap</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 max-w-2xl font-display text-4xl text-ink sm:text-5xl">
              Flagship <span className="accent-italic">projects</span>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Four programmes translating Kerala&apos;s green-hydrogen ambition
              into infrastructure that moves people, goods and energy.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {ROADMAP.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <article className="group h-full overflow-hidden rounded-[2.5rem] border border-line bg-white premium-shadow hover-lift">
                  {/* Photo */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                    {/* Overlay chips */}
                    <div className="absolute left-5 top-5 flex gap-2">
                      <span className="label-caps rounded-full border border-white/30 bg-black/30 px-3 py-1 text-[10px] text-white backdrop-blur-md">
                        {p.tag}
                      </span>
                      <StatusChip status={p.status} />
                    </div>
                  </div>

                  {/* Body */}
                  <div className="space-y-4 p-8">
                    <p className="label-caps text-[10px] text-primary">
                      {p.phase}
                    </p>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="leading-relaxed text-muted/85">{p.desc}</p>
                    <Link
                      href="/contact"
                      className="group/link inline-flex items-center gap-2 font-semibold text-ink"
                    >
                      View details
                      <IconArrowRight className="h-5 w-5 text-primary transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
