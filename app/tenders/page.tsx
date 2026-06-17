import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { IconDownload, IconArrowRight } from "@/components/ui/Icons";
import { TENDERS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Tenders & Careers",
  description:
    "Open tenders, procurement notices and career opportunities at Kerala HVIC Foundation.",
};

export default function TendersPage() {
  const tenders = TENDERS.filter((t) => t.type === "Tender");
  const careers = TENDERS.filter((t) => t.type === "Career");

  const groups = [
    { label: "Open tenders", items: tenders },
    { label: "Careers", items: careers },
  ];

  return (
    <div className="bg-bg">
      <PageHeader
        kicker="Tenders &amp; Careers"
        title={
          <>
            Build the{" "}
            <span className="accent-italic">hydrogen economy</span>{" "}
            with us.
          </>
        }
        intro="Current tenders, procurement notices and career openings at Kerala HVIC Foundation. We welcome partners, engineers and innovators committed to a zero-carbon Kerala."
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1280px] space-y-20 px-6">
          {groups.map((group) => (
            <div key={group.label}>
              {/* Group heading */}
              <Reveal>
                <h2 className="font-display text-3xl text-ink">
                  {group.label}
                </h2>
              </Reveal>

              {/* Row cards */}
              <div className="mt-8 flex flex-col gap-4">
                {group.items.map((item, i) => (
                  <Reveal key={item.ref} delay={i * 80}>
                    <div className="rounded-[2rem] border border-line bg-white premium-shadow hover-lift flex flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
                      {/* Left — meta + title + dates */}
                      <div className="min-w-0 flex-1">
                        {/* Status pill + ref */}
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 label-caps text-primary">
                            {item.status}
                          </span>
                          <span className="font-mono text-sm font-medium text-muted tracking-wide">
                            {item.ref}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="mt-4 font-display text-lg text-ink leading-snug">
                          {item.title}
                        </h3>

                        {/* Dates */}
                        <p className="mt-2 text-sm text-muted">
                          Posted {item.posted} &middot; Closes{" "}
                          <span className="font-semibold text-primary">
                            {item.closes}
                          </span>
                        </p>
                      </div>

                      {/* Right — action buttons */}
                      <div className="flex shrink-0 flex-wrap items-center gap-3">
                        {/* Download outline button */}
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary"
                        >
                          <IconDownload className="h-4 w-4" />
                          Download
                        </a>

                        {/* Primary CTA */}
                        <a
                          href="#"
                          className="btn-primary inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
                        >
                          {item.type === "Career" ? "Apply" : "Submit bid"}
                          <IconArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          {/* Empty-state fallback (rendered only if both groups are empty) */}
          {tenders.length === 0 && careers.length === 0 && (
            <Reveal>
              <div className="rounded-[2rem] border border-line bg-card px-8 py-16 text-center">
                <p className="text-muted">
                  No open listings at this time. Check back soon.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}
