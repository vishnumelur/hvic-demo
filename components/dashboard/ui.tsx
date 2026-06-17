// Presentational dashboard primitives (design-spec aligned). No hooks — safe in
// both server and client components.
import type { ReactNode } from "react";

export function DashHeader({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className="font-display text-2xl font-extrabold tracking-tight text-ink">{title}</h2>
        {subtitle && <p className="mt-1.5 text-muted">{subtitle}</p>}
      </div>
      {children && <div className="flex shrink-0 items-center gap-3">{children}</div>}
    </div>
  );
}

export function Card({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`rounded-2xl border border-line bg-white premium-shadow ${className}`}>{children}</div>
  );
}

const TONES: Record<string, string> = {
  green: "bg-accent/15 text-primary-700",
  amber: "bg-amber-100 text-amber-700",
  blue: "bg-blue-100 text-blue-700",
  gray: "bg-card text-muted",
};

export function Badge({ tone = "gray", children }: { tone?: keyof typeof TONES; children: ReactNode }) {
  return (
    <span className={`inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${TONES[tone]}`}>
      {children}
    </span>
  );
}

export function StatCard({
  label,
  value,
  delta,
  icon,
}: {
  label: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 premium-shadow hover-lift">
      <div className="flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/15 bg-primary/10 text-primary">
          {icon}
        </span>
        {delta && <span className="text-xs font-semibold text-primary">{delta}</span>}
      </div>
      <div className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink">{value}</div>
      <div className="mt-1 text-sm text-muted">{label}</div>
    </div>
  );
}

export function btnPrimary() {
  return "btn-primary inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white";
}
export function btnGhost() {
  return "inline-flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:text-primary";
}
export function iconBtn() {
  return "grid h-9 w-9 place-items-center rounded-lg border border-line bg-white text-muted transition-colors hover:border-primary hover:text-primary";
}
