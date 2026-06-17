import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { TENDERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tenders & Careers",
  description: "Open tenders, job notifications and career opportunities at Kerala HVIC.",
};

export default function TendersPage() {
  const tenders = TENDERS.filter((t) => t.type === "Tender");
  const careers = TENDERS.filter((t) => t.type === "Career");

  return (
    <>
      <PageHeader
        kicker="Tenders & Careers"
        title={<>Build the <span className="aurora-text">hydrogen economy</span> with us.</>}
        intro="Current tenders, procurement notices and career openings at Kerala HVIC Foundation."
      />

      <section className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6">
        {[
          { label: "Open tenders", items: tenders },
          { label: "Careers", items: careers },
        ].map((group) => (
          <div key={group.label}>
            <h2 className="font-display text-2xl font-bold tracking-tight">{group.label}</h2>
            <div className="mt-6 grid gap-4">
              {group.items.map((t, i) => (
                <Reveal key={t.ref} delay={i * 70}>
                  <div className="glass glass-hover flex flex-col gap-4 rounded-2xl p-6 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className="rounded-full bg-h2/15 px-3 py-1 font-medium text-h2-soft">{t.status}</span>
                        <span className="font-mono text-faint">{t.ref}</span>
                      </div>
                      <h3 className="mt-3 font-display text-lg font-semibold">{t.title}</h3>
                      <p className="mt-1.5 text-sm text-muted">
                        Posted {t.posted} · Closes <span className="text-cyan-soft">{t.closes}</span>
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-3">
                      <a href="#" className="glass rounded-xl px-4 py-2.5 text-sm font-medium text-muted hover:text-fg">Download</a>
                      <a href="#" className="btn-glow rounded-xl bg-gradient-to-r from-h2 to-cyan px-4 py-2.5 text-sm font-semibold text-ink">
                        {t.type === "Career" ? "Apply" : "Submit bid"}
                      </a>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
