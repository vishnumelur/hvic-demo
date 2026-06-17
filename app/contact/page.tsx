import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { ORG } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kerala HVIC Foundation — office address, email and phone.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title={<>Let&apos;s build the <span className="aurora-text">future together.</span></>}
        intro="Reach out for partnerships, programmes, media or general enquiries."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <form className="glass rounded-3xl p-8">
              <div className="grid gap-5">
                {[
                  { label: "Full name", type: "text", ph: "Your name" },
                  { label: "Email", type: "email", ph: "you@example.com" },
                  { label: "Subject", type: "text", ph: "How can we help?" },
                ].map((f) => (
                  <label key={f.label} className="block">
                    <span className="text-sm font-medium text-muted">{f.label}</span>
                    <input
                      type={f.type}
                      placeholder={f.ph}
                      className="mt-2 w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-fg outline-none transition-colors placeholder:text-faint focus:border-h2/60"
                    />
                  </label>
                ))}
                <label className="block">
                  <span className="text-sm font-medium text-muted">Message</span>
                  <textarea
                    rows={4}
                    placeholder="Tell us more…"
                    className="mt-2 w-full resize-none rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-fg outline-none transition-colors placeholder:text-faint focus:border-h2/60"
                  />
                </label>
                <button
                  type="button"
                  className="btn-glow w-full rounded-xl bg-gradient-to-r from-h2 to-cyan py-3.5 font-semibold text-ink"
                >
                  Send message
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex h-full flex-col gap-5">
              <div className="glass rounded-3xl p-8">
                <h2 className="font-display text-xl font-semibold">Office</h2>
                <div className="mt-5 space-y-4 text-muted">
                  <p className="flex gap-3">
                    <span className="text-h2">◷</span> {ORG.address}
                  </p>
                  <p className="flex gap-3">
                    <span className="text-h2">✉</span>
                    <a href={`mailto:${ORG.email}`} className="hover:text-h2">{ORG.email}</a>
                  </p>
                  <p className="flex gap-3">
                    <span className="text-h2">☎</span>
                    <a href={`tel:${ORG.phone}`} className="hover:text-h2">{ORG.phone}</a>
                  </p>
                </div>
              </div>

              <div className="glass relative flex-1 overflow-hidden rounded-3xl">
                <iframe
                  title="Kerala HVIC Foundation location"
                  className="h-full min-h-64 w-full opacity-90 grayscale invert-[0.92] hue-rotate-[120deg]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=76.93%2C8.49%2C76.97%2C8.52&layer=mapnik&marker=8.505%2C76.95"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
