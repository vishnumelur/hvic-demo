import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconArrowRight,
} from "@/components/ui/Icons";
import { ORG } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kerala HVIC Foundation — office address, email and phone.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Contact"
        title={
          <>
            Let&apos;s build the{" "}
            <span className="accent-italic">future</span> together
          </>
        }
        intro="Reach out for partnerships, programmes, media or general enquiries. Our team responds within one business day."
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* ── Contact Form ── */}
            <Reveal>
              <div className="bg-white rounded-[2rem] border border-line premium-shadow p-10">
                <Reveal delay={60}>
                  <p className="label-caps text-primary mb-2">Send a message</p>
                  <h2 className="font-display text-2xl text-ink mb-8">
                    We&apos;d love to hear from you
                  </h2>
                </Reveal>

                <div className="grid gap-5">
                  {/* Full name */}
                  <Reveal delay={80}>
                    <label className="block">
                      <span className="block text-sm font-semibold text-ink mb-1.5">
                        Full name
                      </span>
                      <input
                        type="text"
                        placeholder="Your name"
                        className="w-full rounded-xl border border-line bg-card px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
                      />
                    </label>
                  </Reveal>

                  {/* Email */}
                  <Reveal delay={110}>
                    <label className="block">
                      <span className="block text-sm font-semibold text-ink mb-1.5">
                        Email
                      </span>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        className="w-full rounded-xl border border-line bg-card px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
                      />
                    </label>
                  </Reveal>

                  {/* Subject */}
                  <Reveal delay={140}>
                    <label className="block">
                      <span className="block text-sm font-semibold text-ink mb-1.5">
                        Subject
                      </span>
                      <input
                        type="text"
                        placeholder="How can we help?"
                        className="w-full rounded-xl border border-line bg-card px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
                      />
                    </label>
                  </Reveal>

                  {/* Message */}
                  <Reveal delay={170}>
                    <label className="block">
                      <span className="block text-sm font-semibold text-ink mb-1.5">
                        Message
                      </span>
                      <textarea
                        rows={5}
                        placeholder="Tell us more…"
                        className="w-full resize-none rounded-xl border border-line bg-card px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
                      />
                    </label>
                  </Reveal>

                  {/* Submit */}
                  <Reveal delay={200}>
                    <button
                      type="button"
                      className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-semibold text-white"
                    >
                      Send message
                      <IconArrowRight className="h-4 w-4" />
                    </button>
                  </Reveal>
                </div>
              </div>
            </Reveal>

            {/* ── Right column: Office info + Map ── */}
            <Reveal delay={120}>
              <div className="flex h-full flex-col gap-6">
                {/* Office card */}
                <div className="bg-white rounded-[2rem] border border-line premium-shadow p-10">
                  <p className="label-caps text-primary mb-2">Our office</p>
                  <h2 className="font-display text-2xl text-ink mb-8">
                    Find us in Thiruvananthapuram
                  </h2>

                  <ul className="space-y-6">
                    {/* Address */}
                    <li className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary">
                        <IconMapPin className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink mb-0.5">
                          Address
                        </p>
                        <p className="text-muted leading-relaxed">
                          {ORG.address}
                        </p>
                      </div>
                    </li>

                    {/* Email */}
                    <li className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary">
                        <IconMail className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink mb-0.5">
                          Email
                        </p>
                        <a
                          href={`mailto:${ORG.email}`}
                          className="text-muted transition-colors hover:text-primary"
                        >
                          {ORG.email}
                        </a>
                      </div>
                    </li>

                    {/* Phone */}
                    <li className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-card text-primary">
                        <IconPhone className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink mb-0.5">
                          Phone
                        </p>
                        <a
                          href={`tel:${ORG.phone}`}
                          className="text-muted transition-colors hover:text-primary"
                        >
                          {ORG.phone}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Map card */}
                <div className="flex-1 overflow-hidden rounded-[2rem] border border-line min-h-64">
                  <iframe
                    title="Kerala HVIC Foundation location"
                    loading="lazy"
                    className="h-full min-h-64 w-full"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=76.93%2C8.49%2C76.97%2C8.52&layer=mapnik&marker=8.505%2C76.95"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
