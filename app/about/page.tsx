import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ORG, TEAM } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kerala HVIC Foundation — a Section 8 not-for-profit under ANERT operationalising the Hydrogen Valley Innovation Cluster across production, storage, distribution, applications, and R&D.",
};

const TIMELINE = [
  {
    date: "Jun 2025",
    text: "₹133 Cr Hydrogen Valley Innovation Cluster approved under the National Green Hydrogen Mission.",
  },
  {
    date: "29 Jul 2025",
    text: "Kerala HVIC Foundation incorporated as a Section 8 not-for-profit company.",
  },
  {
    date: "30 Jul 2025",
    text: "Letter of Award received; the Foundation begins operationalising the cluster.",
  },
  {
    date: "01 Feb 2026",
    text: "MoA exchanged with CIAL for the ₹8.7 Cr hydrogen-bus programme.",
  },
];

const PROFILE_ROWS: [string, string][] = [
  ["Legal form", ORG.section],
  ["Parent agency", ORG.parent],
  ["Incorporated", ORG.incorporated],
  [
    "Mandate",
    "Implement the Hydrogen Valley Innovation Cluster initiatives in Kerala",
  ],
];

// Unique initial letters used for avatar monograms
const AVATAR_INITIALS = ["D", "CE", "HT", "HP"];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <PageHeader
        kicker="About the Foundation"
        title={
          <>
            A government engine for{" "}
            <span className="accent-italic">clean-energy</span> innovation
          </>
        }
        intro={`${ORG.name} was incorporated on ${ORG.incorporated} as a ${ORG.section}, established under ${ORG.parent} to implement the Hydrogen Valley Innovation Cluster in Kerala.`}
      />

      {/* ── Vision + Mission ── */}
      <section className="bg-bg py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeading
            kicker="Purpose"
            title={
              <>
                The <span className="accent-italic">why</span> behind the work
              </>
            }
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Vision card */}
            <Reveal delay={0}>
              <div className="flex h-full flex-col rounded-[2rem] border border-line bg-white p-10 premium-shadow hover-lift">
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                </div>
                <p className="label-caps text-primary">Vision</p>
                <p className="mt-4 text-xl font-semibold leading-snug text-ink">
                  {ORG.vision}
                </p>
              </div>
            </Reveal>

            {/* Mission card */}
            <Reveal delay={110}>
              <div className="flex h-full flex-col rounded-[2rem] border border-line bg-card p-10 hover-lift">
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <p className="label-caps text-primary">Mission</p>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  {ORG.mission}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Organisation profile + Timeline ── */}
      <section className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid gap-20 lg:grid-cols-2 lg:gap-16">

            {/* Organisation profile */}
            <div>
              <SectionHeading
                kicker="Organisation profile"
                title="Who we are"
              />
              <dl className="mt-10 divide-y divide-line">
                {PROFILE_ROWS.map(([key, val], i) => (
                  <Reveal key={key} delay={i * 80}>
                    <div className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-10">
                      <dt className="label-caps w-36 shrink-0 pt-0.5 text-secondary">
                        {key}
                      </dt>
                      <dd className="text-base leading-relaxed text-ink">
                        {val}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>

            {/* Timeline */}
            <div>
              <SectionHeading
                kicker="Journey so far"
                title="Milestones"
              />
              <ol className="mt-10 space-y-0">
                {TIMELINE.map((item, i) => (
                  <Reveal key={item.date} delay={i * 90}>
                    <li className="relative flex gap-6 pb-10 last:pb-0">
                      {/* Vertical connector line */}
                      {i < TIMELINE.length - 1 && (
                        <span
                          className="absolute left-[9px] top-6 h-full w-px bg-line"
                          aria-hidden="true"
                        />
                      )}

                      {/* Green dot */}
                      <span className="relative mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                        <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-accent opacity-25" />
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(0,109,64,0.4)]" />
                      </span>

                      <div className="pt-0.5">
                        <p className="label-caps text-primary">{item.date}</p>
                        <p className="mt-2 text-base leading-relaxed text-muted">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="bg-card py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6">
          <SectionHeading
            center
            kicker="Leadership"
            title={
              <>
                The <span className="accent-italic">team</span> steering the cluster
              </>
            }
            intro="Kerala HVIC Foundation is governed by senior officers drawn from ANERT and the Government of Kerala, bringing deep domain expertise in energy, infrastructure, and policy."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="group flex h-full flex-col items-center rounded-[2rem] border border-line bg-white p-8 text-center premium-shadow hover-lift">
                  {/* Avatar circle with green gradient */}
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white"
                    aria-hidden="true"
                  >
                    <span className="font-display text-sm font-bold tracking-tight">
                      {AVATAR_INITIALS[i] ?? member.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>

                  <p className="mt-5 font-display text-lg font-bold leading-tight tracking-tight text-ink">
                    {member.name}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-muted">
                    {member.role}
                  </p>
                  <span className="mt-3 inline-block rounded-full border border-line bg-card px-3 py-1 label-caps text-[10px] text-secondary">
                    {member.org}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
