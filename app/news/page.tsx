import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { IconArrowRight, IconDownload } from "@/components/ui/Icons";
import { NEWS } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Notifications",
  description:
    "Latest news, circulars and downloadable notifications from the Kerala HVIC Foundation.",
};

const NOTICES = [
  {
    date: "05 Jun 2026",
    type: "Circular",
    title: "EOI: CMS-based official website development",
  },
  {
    date: "22 May 2026",
    type: "Notice",
    title: "Stakeholder consultation on H₂ refuelling standards",
  },
  {
    date: "10 May 2026",
    type: "Circular",
    title: "Safety protocols for hydrogen mobility pilots",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        kicker="Newsroom"
        title={
          <>
            News &amp; <span className="accent-italic">notifications</span>
          </>
        }
        intro="Announcements, milestones, circulars and downloadable notices from the Foundation."
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* ── Left: Latest News (col-span-2) ── */}
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="font-display text-2xl text-ink">
                  Latest news
                </h2>
              </Reveal>

              <div className="mt-8 grid gap-6">
                {NEWS.map((item, i) => (
                  <Reveal key={item.title} delay={i * 80}>
                    <article className="rounded-[2rem] border border-line bg-white premium-shadow hover-lift p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-primary/8 px-3 py-1 label-caps text-primary">
                          {item.category}
                        </span>
                        <span className="text-sm text-muted">{item.date}</span>
                      </div>

                      <h3 className="mt-4 font-display text-xl text-ink">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-base leading-relaxed text-muted">
                        {item.excerpt}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-75">
                        Read more
                        <IconArrowRight className="h-4 w-4" />
                      </span>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* ── Right: Notifications sidebar ── */}
            <aside>
              <Reveal delay={60}>
                <h2 className="font-display text-2xl text-ink">
                  Notifications
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-8 rounded-[2rem] border border-line bg-card premium-shadow p-6">
                  <ul className="divide-y divide-line">
                    {NOTICES.map((notice) => (
                      <li key={notice.title} className="py-5 first:pt-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <span className="label-caps text-primary">
                            {notice.type}
                          </span>
                          <span className="text-xs text-muted">
                            {notice.date}
                          </span>
                        </div>

                        <a
                          href="#"
                          className="mt-2 flex items-start gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-75"
                        >
                          <IconDownload className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{notice.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-line">
                    <button
                      type="button"
                      className="w-full rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      View archive
                    </button>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
