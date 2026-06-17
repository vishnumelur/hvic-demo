import { PROJECTS } from "@/lib/content";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          kicker="Flagship Programmes"
          title={<>From roadmap to <span className="aurora-text">real-world impact.</span></>}
          intro="Hydrogen is already moving people and freight across Kerala — at the airport, on the backwaters and along our highways."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="glass glass-hover group relative h-full overflow-hidden rounded-3xl p-8">
                <div
                  className={`absolute -right-16 -top-16 h-44 w-44 rounded-full blur-3xl transition-opacity duration-500 group-hover:opacity-90 ${
                    p.accent === "h2" ? "bg-h2/20" : "bg-cyan/20"
                  }`}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-h2-soft">
                      {p.tag}
                    </span>
                    <span className="font-display text-sm font-semibold text-cyan-soft">{p.cost}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{p.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-muted">{p.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-h2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
