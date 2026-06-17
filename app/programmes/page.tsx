import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { VALUE_CHAIN, PROJECTS } from "@/lib/content";
import { ICONS } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Programmes",
  description: "Green-hydrogen programmes and projects across Kerala's full value chain.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHeader
        kicker="Programmes & Services"
        title={<>The value chain, <span className="aurora-text">end to end.</span></>}
        intro="Kerala HVIC operates programmes across every stage of the hydrogen economy — and turns them into flagship projects on the ground."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {VALUE_CHAIN.map((node, i) => {
            const Icon = ICONS[node.icon];
            return (
              <Reveal key={node.id} delay={i * 70}>
                <div className="glass glass-hover h-full rounded-2xl p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-h2/30 bg-h2/10 text-h2">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold">{node.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{node.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <h2 className="mt-24 font-display text-3xl font-bold tracking-tight">Flagship projects</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <article className="glass glass-hover group relative overflow-hidden rounded-3xl p-8">
                <div className={`absolute -right-14 -top-14 h-40 w-40 rounded-full blur-3xl ${p.accent === "h2" ? "bg-h2/20" : "bg-cyan/20"}`} />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-line px-3 py-1 text-xs text-h2-soft">{p.tag}</span>
                    <span className="font-display text-sm font-semibold text-cyan-soft">{p.cost}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
