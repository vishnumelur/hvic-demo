"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/ui/Logo";
import { useAuth } from "@/lib/auth";
import {
  IconGrid, IconNews, IconBriefcase, IconImage, IconUsers, IconSettings,
  IconLogout, IconSearch, IconBell2, IconMenu, IconClose,
} from "@/components/ui/Icons";

export const DASH_NAV = [
  { label: "Overview", href: "/dashboard", icon: IconGrid },
  { label: "News & Notices", href: "/dashboard/news", icon: IconNews },
  { label: "Tenders & Careers", href: "/dashboard/tenders", icon: IconBriefcase },
  { label: "Media Gallery", href: "/dashboard/media", icon: IconImage },
  { label: "Users & Roles", href: "/dashboard/users", icon: IconUsers },
  { label: "Settings", href: "/dashboard/settings", icon: IconSettings },
];

function NavList({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <nav className="space-y-1">
      {DASH_NAV.map((n) => {
        const active = pathname === n.href;
        const Icon = n.icon;
        return (
          <Link
            key={n.href}
            href={n.href}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
              active ? "bg-primary/10 text-primary" : "text-muted hover:bg-card hover:text-ink"
            }`}
          >
            <Icon className="h-5 w-5" />
            {n.label}
          </Link>
        );
      })}
    </nav>
  );
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const raw = usePathname() || "/dashboard";
  const pathname = raw.replace(/\/+$/, "") || "/dashboard";
  const router = useRouter();
  const { user, logout } = useAuth();
  const [drawer, setDrawer] = useState(false);

  const current = DASH_NAV.find((n) => n.href === pathname) ?? DASH_NAV[0];
  const initials = (user?.name || "AM").split(" ").map((s) => s[0]).slice(0, 2).join("");

  function doLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Sidebar (desktop) */}
      <aside className="fixed inset-y-0 left-0 hidden w-64 flex-col border-r border-line bg-white lg:flex">
        <div className="flex h-16 items-center gap-2.5 border-b border-line px-6">
          <Logo className="h-8 w-8" />
          <span className="font-display text-lg font-extrabold tracking-tight text-ink">Kerala HVIC</span>
          <span className="ml-1 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">Admin</span>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <NavList pathname={pathname} />
        </div>
        <div className="border-t border-line p-4">
          <div className="flex items-center gap-3 rounded-xl bg-card p-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">{initials}</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{user?.name}</p>
              <p className="truncate text-xs text-muted">{user?.role}</p>
            </div>
            <button onClick={doLogout} aria-label="Log out" className="grid h-8 w-8 place-items-center rounded-lg text-muted hover:bg-white hover:text-primary">
              <IconLogout className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile drawer */}
      {drawer && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setDrawer(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-72 flex-col bg-white">
            <div className="flex h-16 items-center justify-between border-b border-line px-5">
              <span className="flex items-center gap-2.5">
                <Logo className="h-8 w-8" />
                <span className="font-display text-lg font-extrabold text-ink">Kerala HVIC</span>
              </span>
              <button onClick={() => setDrawer(false)} aria-label="Close"><IconClose className="h-5 w-5 text-muted" /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4"><NavList pathname={pathname} onNavigate={() => setDrawer(false)} /></div>
            <div className="border-t border-line p-4">
              <button onClick={doLogout} className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-muted hover:bg-card">
                <IconLogout className="h-5 w-5" /> Log out
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main column */}
      <div className="lg:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-line bg-white/80 px-4 backdrop-blur-xl sm:px-8">
          <button onClick={() => setDrawer(true)} className="grid h-10 w-10 place-items-center rounded-xl text-ink hover:bg-card lg:hidden" aria-label="Open menu">
            <IconMenu className="h-5 w-5" />
          </button>
          <h1 className="font-display text-xl font-extrabold tracking-tight text-ink">{current.label}</h1>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-line bg-card px-3.5 py-2 sm:flex">
              <IconSearch className="h-4 w-4 text-muted/70" />
              <input placeholder="Search…" className="w-32 bg-transparent text-sm text-ink outline-none placeholder:text-muted/50" />
            </div>
            <button className="relative grid h-10 w-10 place-items-center rounded-full text-muted hover:bg-card" aria-label="Notifications">
              <IconBell2 className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary" />
            </button>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">{initials}</span>
          </div>
        </header>

        <div className="mx-auto max-w-[1100px] p-4 sm:p-8">{children}</div>
      </div>
    </div>
  );
}
