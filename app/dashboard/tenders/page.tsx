"use client";

import { useState } from "react";
import { TENDERS } from "@/lib/content";
import {
  DashHeader,
  Card,
  Badge,
  StatCard,
  btnPrimary,
  iconBtn,
} from "@/components/dashboard/ui";
import {
  IconPlus,
  IconPencil,
  IconTrash,
  IconBriefcase,
  IconSearch,
  IconArrowRight,
} from "@/components/ui/Icons";

type TenderRow = {
  id: number;
  type: "Tender" | "Career";
  ref: string;
  title: string;
  posted: string;
  closes: string;
  status: "Open" | "Draft" | "Closed";
};

let _nextId = TENDERS.length + 1;

const seed: TenderRow[] = TENDERS.map((t, i) => ({
  id: i + 1,
  type: t.type as "Tender" | "Career",
  ref: t.ref,
  title: t.title,
  posted: t.posted,
  closes: t.closes,
  status: t.status as "Open" | "Draft" | "Closed",
}));

type Filter = "All" | "Tender" | "Career";

const FILTER_LABELS: Filter[] = ["All", "Tender", "Career"];

function statusTone(status: string): "green" | "amber" | "gray" {
  if (status === "Open") return "green";
  if (status === "Draft") return "amber";
  return "gray";
}

export default function TendersPage() {
  const [rows, setRows] = useState<TenderRow[]>(seed);
  const [filter, setFilter] = useState<Filter>("All");

  const total = rows.length;
  const openCount = rows.filter((r) => r.status === "Open").length;
  const closingThisWeek = 2;

  function handlePublish() {
    const newRow: TenderRow = {
      id: _nextId++,
      type: "Tender",
      ref: "HVIC/2026/NEW",
      title: "Untitled tender",
      posted: "Today",
      closes: "—",
      status: "Draft",
    };
    setRows((prev) => [newRow, ...prev]);
  }

  function handleDelete(id: number) {
    setRows((prev) => prev.filter((r) => r.id !== id));
  }

  const visible =
    filter === "All" ? rows : rows.filter((r) => r.type === filter);

  return (
    <>
      <DashHeader
        title="Tenders &amp; Careers"
        subtitle="Publish tenders, manage job notifications and track deadlines."
      >
        <button onClick={handlePublish} className={btnPrimary()}>
          <IconPlus className="h-4 w-4" /> Publish tender
        </button>
      </DashHeader>

      {/* Stat cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label="Total listings"
          value={String(total)}
          icon={<IconBriefcase className="h-5 w-5" />}
        />
        <StatCard
          label="Open"
          value={String(openCount)}
          delta="Active"
          icon={<IconArrowRight className="h-5 w-5" />}
        />
        <StatCard
          label="Closing this week"
          value={String(closingThisWeek)}
          delta="Urgent"
          icon={<IconSearch className="h-5 w-5" />}
        />
      </div>

      {/* Filter chips */}
      <div className="mt-6 flex items-center gap-2">
        {FILTER_LABELS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={
              filter === f
                ? "inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-white"
                : "inline-flex items-center rounded-full border border-line bg-white px-4 py-1.5 text-sm font-semibold text-muted transition-colors hover:border-primary hover:text-primary"
            }
          >
            {f}
          </button>
        ))}
      </div>

      {/* Listing card */}
      <Card className="mt-4">
        {visible.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-card text-muted">
              <IconBriefcase className="h-6 w-6" />
            </span>
            <p className="font-display text-base font-bold text-ink">
              No listings found
            </p>
            <p className="text-sm text-muted">
              No tenders or careers match the current filter. Publish one to get
              started.
            </p>
          </div>
        ) : (
          <ul className="divide-y divide-line">
            {visible.map((row) => (
              <li
                key={row.id}
                className="flex flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center"
              >
                {/* Left meta */}
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge tone={row.type === "Tender" ? "blue" : "green"}>
                      {row.type}
                    </Badge>
                    <span className="font-mono text-xs text-muted">
                      {row.ref}
                    </span>
                  </div>
                  <p className="font-display font-bold text-ink">{row.title}</p>
                  <p className="text-sm text-muted">
                    Posted {row.posted} &middot; Closes{" "}
                    <span className="font-semibold text-primary">
                      {row.closes}
                    </span>
                  </p>
                </div>

                {/* Right: status + actions */}
                <div className="flex shrink-0 items-center gap-3">
                  <Badge tone={statusTone(row.status)}>{row.status}</Badge>
                  <button
                    className={iconBtn()}
                    aria-label={`Edit ${row.title}`}
                  >
                    <IconPencil className="h-4 w-4" />
                  </button>
                  <button
                    className={iconBtn()}
                    aria-label={`Delete ${row.title}`}
                    onClick={() => handleDelete(row.id)}
                  >
                    <IconTrash className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </>
  );
}
