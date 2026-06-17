import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { ORG, TEAM } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kerala HVIC Foundation — a Section 8 not-for-profit under ANERT operationalising the Hydrogen Valley Innovation Cluster.",
};

const TIMELINE = [
  { date: "Jun 2025", text: "₹133 Cr Hydrogen Valley Innovation Cluster approved under the National Green Hydrogen Mission." },
  { date: "29 Jul 2025", text: "Kerala HVIC Foundation incorporated as a Section 8 not-for-profit company." },
  { date: "30 Jul 2025", text: "Letter of Award received; Foundation begins operationalising the cluster." },
  { date: "01 Feb 2026", text: "MoA exchanged with CIAL for the ₹8.7 Cr hydrogen-bus programme." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        kicker="About the Foundation"
        title={<>A government-backed engine for <span className="aurora-text">clean-energy innovation.</span></>}
        intro={`${ORG.name} was incorporated on ${ORG.incorporated} as a ${ORG.section}, established under ${ORG.parent} to implement the Hydrogen Valley Innovation Cluster in Kerala.`}
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8">
              <h2 className="font-display text-2xl font-semibold text-h2">Vision</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{ORG.vision}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass h-full rounded-3xl p-8">
              <h2 className="font-display text-2xl font-semibold text-cyan">Mission</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted">{ORG.mission}</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">Organisation profile</h2>
            <dl className="mt-8 space-y-5">
              {[
                ["Legal form", ORG.section],
                ["Parent agency", ORG.parent],
                ["Incorporated", ORG.incorporated],
                ["Mandate", "Implement the Hydrogen Valley Innovation Cluster (HVIC) initiatives in Kerala"],
              ].map(([k, v]) => (
                <Reveal key={k}>
                  <div className="flex flex-col gap-1 border-b border-line pb-4 sm:flex-row sm:gap-8">
                    <dt className="w-40 shrink-0 text-sm uppercase tracking-wider text-faint">{k}</dt>
                    <dd className="text-fg">{v}</dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">Journey so far</h2>
            <ol className="mt-8 space-y-6">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.date} delay={i * 80}>
                  <li className="relative flex gap-5 pl-2">
                    <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-h2 shadow-[0_0_12px_#00e08a]" />
                    <div>
                      <p className="font-display text-sm font-semibold text-h2-soft">{t.date}</p>
                      <p className="mt-1 text-muted">{t.text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl font-bold tracking-tight">Leadership</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 70}>
                <div className="glass glass-hover rounded-2xl p-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-h2 to-cyan opacity-90" />
                  <p className="mt-5 font-display text-lg font-semibold">{m.name}</p>
                  <p className="text-sm text-muted">{m.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-faint">{m.org}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
