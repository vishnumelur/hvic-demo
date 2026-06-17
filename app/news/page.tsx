import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { NEWS } from "@/lib/content";

export const metadata: Metadata = {
  title: "News & Notifications",
  description: "Latest news, circulars and notifications from Kerala HVIC Foundation.",
};

const NOTICES = [
  { date: "05 Jun 2026", title: "EOI: CMS-based official website development", type: "Circular" },
  { date: "22 May 2026", title: "Notice: Stakeholder consultation on H₂ refuelling standards", type: "Notice" },
  { date: "10 May 2026", title: "Circular: Safety protocols for hydrogen mobility pilots", type: "Circular" },
];

export default function NewsPage() {
  return (
    <>
      <PageHeader
        kicker="Newsroom"
        title={<>News &amp; <span className="aurora-text">notifications</span></>}
        intro="Announcements, milestones, circulars and downloadable notices from the Foundation."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold tracking-tight">Latest news</h2>
            <div className="mt-6 grid gap-5">
              {NEWS.map((n, i) => (
                <Reveal key={n.title} delay={i * 70}>
                  <article className="glass glass-hover rounded-2xl p-7">
                    <div className="flex items-center gap-3 text-sm">
                      <span className="rounded-full border border-line px-3 py-1 text-xs text-h2-soft">{n.category}</span>
                      <span className="text-faint">{n.date}</span>
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold">{n.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{n.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-h2">
                      Read more
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <aside>
            <h2 className="font-display text-2xl font-bold tracking-tight">Notifications</h2>
            <div className="mt-6 glass rounded-2xl p-5">
              <ul className="divide-y divide-line">
                {NOTICES.map((c) => (
                  <li key={c.title} className="py-4">
                    <div className="flex items-center justify-between text-xs text-faint">
                      <span>{c.type}</span>
                      <span>{c.date}</span>
                    </div>
                    <a href="#" className="mt-1.5 flex items-start gap-2 text-sm text-fg transition-colors hover:text-h2">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-h2" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="btn-glow mt-4 w-full rounded-xl border border-line py-2.5 text-sm font-medium text-muted hover:text-fg">
                View archive
              </button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
