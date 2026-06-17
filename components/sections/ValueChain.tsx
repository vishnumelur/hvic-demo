import { VALUE_CHAIN } from "@/lib/content";
import { ICONS } from "@/components/ui/Icons";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function ValueChain() {
  return (
    <section id="valley" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="The Hydrogen Valley"
          title={<>One state. The <span className="aurora-text">entire value chain.</span></>}
          intro="Kerala HVIC integrates every stage of the green-hydrogen economy into a single, connected innovation cluster — the only initiative of its kind in India."
        />

        <div className="relative mt-16">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-h2/40 to-transparent lg:block" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {VALUE_CHAIN.map((node, i) => {
              const Icon = ICONS[node.icon];
              return (
                <Reveal key={node.id} delay={i * 90}>
                  <div className="glass glass-hover group relative h-full rounded-2xl p-6">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl border border-h2/30 bg-h2/10 text-h2 transition-colors group-hover:bg-h2/20">
                        <Icon className="h-6 w-6" />
                      </span>
                      <span className="font-display text-sm text-faint">0{i + 1}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold">{node.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{node.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
