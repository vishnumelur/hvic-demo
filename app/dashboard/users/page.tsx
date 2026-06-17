"use client";

import { useState } from "react";
import {
  DashHeader,
  Card,
  Badge,
  StatCard,
  btnPrimary,
  iconBtn,
} from "@/components/dashboard/ui";
import {
  IconUsers,
  IconUser,
  IconPlus,
  IconPencil,
  IconTrash,
} from "@/components/ui/Icons";

type Role = "Administrator" | "Editor" | "Viewer";
type Status = "Active" | "Invited";

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  status: Status;
}

const SEED_USERS: User[] = [
  { id: 1, name: "Aanya Menon",      email: "aanya@keralahvic.org",   role: "Administrator", status: "Active"  },
  { id: 2, name: "Rahul Nair",       email: "rahul@keralahvic.org",   role: "Editor",        status: "Active"  },
  { id: 3, name: "Devika Pillai",    email: "devika@keralahvic.org",  role: "Editor",        status: "Active"  },
  { id: 4, name: "Arjun Menon",      email: "arjun@keralahvic.org",   role: "Viewer",        status: "Active"  },
  { id: 5, name: "Fathima Rasheed",  email: "fathima@keralahvic.org", role: "Viewer",        status: "Invited" },
  { id: 6, name: "Joseph Thomas",    email: "joseph@keralahvic.org",  role: "Administrator", status: "Invited" },
];

const ROLE_TONES: Record<Role, "green" | "blue" | "gray"> = {
  Administrator: "green",
  Editor:        "blue",
  Viewer:        "gray",
};

const ROLE_LEGEND: { role: Role; desc: string }[] = [
  { role: "Administrator", desc: "Full access — manage content, users, and settings" },
  { role: "Editor",        desc: "Content only — create and publish without admin controls" },
  { role: "Viewer",        desc: "Read-only — browse the console without making changes" },
];

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

let nextId = SEED_USERS.length + 1;

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(SEED_USERS);

  const totalCount    = users.length;
  const adminCount    = users.filter((u) => u.role === "Administrator").length;
  const pendingCount  = users.filter((u) => u.status === "Invited").length;

  function handleInvite() {
    setUsers((prev) => [
      ...prev,
      {
        id:     nextId++,
        name:   "New Invitee",
        email:  "invitee@keralahvic.org",
        role:   "Viewer",
        status: "Invited",
      },
    ]);
  }

  function handleDelete(id: number) {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }

  return (
    <>
      {/* ── Page header ─────────────────────────────────────────────── */}
      <DashHeader
        title="Users &amp; Roles"
        subtitle="Manage who can access the console and what they can do."
      >
        <button onClick={handleInvite} className={btnPrimary()}>
          <IconPlus className="h-4 w-4" />
          Invite user
        </button>
      </DashHeader>

      {/* ── Stat cards ──────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <StatCard
          label="Total users"
          value={String(totalCount)}
          icon={<IconUsers className="h-5 w-5" />}
        />
        <StatCard
          label="Administrators"
          value={String(adminCount)}
          icon={<IconUser className="h-5 w-5" />}
        />
        <StatCard
          label="Pending invites"
          value={String(pendingCount)}
          icon={<IconUsers className="h-5 w-5" />}
        />
      </div>

      {/* ── Role legend ─────────────────────────────────────────────── */}
      <div className="mt-6 flex flex-wrap items-start gap-3">
        {ROLE_LEGEND.map(({ role, desc }) => (
          <div key={role} className="flex items-center gap-2">
            <Badge tone={ROLE_TONES[role]}>{role}</Badge>
            <span className="text-xs text-muted">{desc}</span>
          </div>
        ))}
      </div>

      {/* ── User list ───────────────────────────────────────────────── */}
      <Card className="mt-6">
        <ul className="divide-y divide-line">
          {users.map((user, idx) => {
            const isProtected = idx === 0;
            return (
              <li className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6">
                {/* Identity — avatar + name/email always on one line */}
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                    {initials(user.name)}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-ink">{user.name}</p>
                    <p className="truncate text-sm text-muted">{user.email}</p>
                  </div>
                </div>

                {/* Meta — badges + actions on one compact line (mobile & desktop) */}
                <div className="flex items-center gap-2 pl-[3.25rem] sm:gap-3 sm:pl-0">
                  <Badge tone={ROLE_TONES[user.role]}>{user.role}</Badge>
                  <Badge tone={user.status === "Active" ? "green" : "amber"}>
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {user.status}
                  </Badge>
                  <div className="ml-auto flex shrink-0 items-center gap-2 sm:ml-1">
                    <button className={iconBtn()} aria-label={`Edit ${user.name}`} title="Edit user">
                      <IconPencil className="h-4 w-4" />
                    </button>
                    {!isProtected && (
                      <button
                        className={iconBtn()}
                        aria-label={`Delete ${user.name}`}
                        title="Remove user"
                        onClick={() => handleDelete(user.id)}
                      >
                        <IconTrash className="h-4 w-4" />
                      </button>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Card>
    </>
  );
}
