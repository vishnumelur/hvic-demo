import Link from "next/link";
import { NEWS, TENDERS, GALLERY } from "@/lib/content";
import { DashHeader, Card, StatCard, Badge, btnPrimary } from "@/components/dashboard/ui";
import {
  IconTrend, IconNews, IconBriefcase, IconImage, IconPlus, IconArrowRight,
} from "@/components/ui/Icons";

const openTenders = TENDERS.filter((t) => t.status === "Open").length;

const ACTIVITY = [
  { who: "Aanya Menon", action: "published", item: "MoA signed with CIAL for ₹8.7 Cr project", when: "2h ago", tone: "green" as const },
  { who: "Rahul Nair", action: "uploaded 6 photos to", item: "Media Gallery", when: "5h ago", tone: "blue" as const },
  { who: "System", action: "scheduled tender close for", item: "HVIC/2026/H2/07", when: "1d ago", tone: "amber" as const },
  { who: "Aanya Menon", action: "edited", item: "About → Vision & Mission", when: "2d ago", tone: "gray" as const },
];

const QUICK = [
  { label: "New news post", href: "/dashboard/news" },
  { label: "Publish tender", href: "/dashboard/tenders" },
  { label: "Upload media", href: "/dashboard/media" },
  { label: "Invite user", href: "/dashboard/users" },
];

const STATUS = [
  ["SSL / HTTPS", "Secure", "green"],
  ["Daily backup", "Healthy", "green"],
  ["Uptime (30d)", "99.98%", "green"],
  ["Storage used", "42%", "amber"],
] as const;

export default function DashboardOverview() {
  return (
    <>
      <DashHeader title="Welcome back, Aanya" subtitle="Here's what's happening across the HVIC platform today.">
        <Link href="/dashboard/news" className={btnPrimary()}>
          <IconPlus className="h-4 w-4" /> New post
        </Link>
      </DashHeader>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Monthly visitors" value="48.2K" delta="+12.4%" icon={<IconTrend className="h-5 w-5" />} />
        <StatCard label="Published news" value={String(NEWS.length)} delta="+3 this wk" icon={<IconNews className="h-5 w-5" />} />
        <StatCard label="Open tenders" value={String(openTenders)} icon={<IconBriefcase className="h-5 w-5" />} />
        <StatCard label="Media assets" value={String(GALLERY.length)} delta="+6" icon={<IconImage className="h-5 w-5" />} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Recent activity */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <h3 className="font-display text-lg font-bold text-ink">Recent activity</h3>
            <Link href="/dashboard/news" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
              View all <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="divide-y divide-line">
            {ACTIVITY.map((a, i) => (
              <li key={i} className="flex items-center gap-4 px-6 py-4">
                <Badge tone={a.tone}>{a.who.split(" ")[0]}</Badge>
                <p className="flex-1 text-sm text-muted">
                  <span className="font-semibold text-ink">{a.who}</span> {a.action}{" "}
                  <span className="font-medium text-ink">{a.item}</span>
                </p>
                <span className="shrink-0 text-xs text-muted/70">{a.when}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Quick actions + status */}
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="font-display text-lg font-bold text-ink">Quick actions</h3>
            <div className="mt-4 grid gap-2.5">
              {QUICK.map((q) => (
                <Link
                  key={q.label}
                  href={q.href}
                  className="flex items-center justify-between rounded-xl border border-line px-4 py-3 text-sm font-medium text-ink transition-colors hover:border-primary hover:text-primary"
                >
                  {q.label}
                  <IconPlus className="h-4 w-4 text-primary" />
                </Link>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-display text-lg font-bold text-ink">System status</h3>
            <ul className="mt-4 space-y-3">
              {STATUS.map(([k, v, tone]) => (
                <li key={k} className="flex items-center justify-between text-sm">
                  <span className="text-muted">{k}</span>
                  <Badge tone={tone}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" /> {v}
                  </Badge>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}
