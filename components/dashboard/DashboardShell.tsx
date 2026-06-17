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

function initialsOf(name?: string) {
  return (name || "AM").split(" ").map((s) => s[0]).slice(0, 2).join("");
}

function NavItem({
  item,
  active,
  onNavigate,
}: {
  item: (typeof DASH_NAV)[number];
  active: boolean;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`group relative flex items-center gap-3 rounded-xl px-2.5 py-2 text-sm transition-all duration-200 ${
        active ? "bg-card font-semibold text-ink" : "font-medium text-muted hover:bg-card/70 hover:text-ink"
      }`}
    >
      {active && (
        <span className="absolute -left-1 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-primary" />
      )}
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl transition-all duration-200 ${
          active
            ? "bg-primary text-white shadow-[0_6px_16px_-6px_rgba(0,109,64,0.7)]"
            : "bg-card text-muted group-hover:text-primary"
        }`}
      >
        <Icon className="h-[18px] w-[18px]" />
      </span>
      <span className="truncate">{item.label}</span>
    </Link>
  );
}

function SidebarBody({
  pathname,
  name,
  role,
  onLogout,
  onNavigate,
}: {
  pathname: string;
  name?: string;
  role?: string;
  onLogout: () => void;
  onNavigate?: () => void;
}) {
  return (
    <>
      <div className="flex-1 overflow-y-auto px-3 py-4 no-scrollbar">
        <p className="mb-2 px-3 label-caps text-[10px] text-muted/50">Menu</p>
        <nav className="space-y-1">
          {DASH_NAV.map((n) => (
            <NavItem key={n.href} item={n} active={pathname === n.href} onNavigate={onNavigate} />
          ))}
        </nav>
      </div>

      <div className="border-t border-line p-3">
        <div className="flex items-center gap-3 rounded-2xl bg-card p-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
            {initialsOf(name)}
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-ink">{name}</p>
            <p className="truncate text-xs text-muted">{role}</p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-white py-2.5 text-sm font-semibold text-ink transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
        >
          <IconLogout className="h-4 w-4" /> Sign out
        </button>
      </div>
    </>
  );
}

function Brand({ onClose }: { onClose?: () => void }) {
  return (
    <div className="flex h-16 items-center gap-2.5 border-b border-line px-5">
      <Logo className="h-8 w-8" />
      <span className="font-display text-lg font-extrabold tracking-tight text-ink">Kerala HVIC</span>
      <span className="ml-1 rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
        Admin
      </span>
      {onClose && (
        <button onClick={onClose} aria-label="Close menu" className="ml-auto grid h-9 w-9 place-items-center rounded-lg text-muted hover:bg-card">
          <IconClose className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const raw = usePathname() || "/dashboard";
  const pathname = raw.replace(/\/+$/, "") || "/dashboard";
  const router = useRouter();
  const { user, logout } = useAuth();
  const [drawer, setDrawer] = useState(false);

  const current = DASH_NAV.find((n) => n.href === pathname) ?? DASH_NAV[0];

  function doLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Sidebar (desktop) */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-line bg-white lg:flex">
        <Brand />
        <SidebarBody pathname={pathname} name={user?.name} role={user?.role} onLogout={doLogout} />
      </aside>

      {/* Mobile drawer */}
      {drawer && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="animate-fade absolute inset-0 bg-ink/40 backdrop-blur-sm" onClick={() => setDrawer(false)} />
          <aside
            className="animate-drawer absolute left-0 top-0 flex h-dvh w-[18rem] max-w-[86%] flex-col rounded-r-3xl bg-white shadow-2xl"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <Brand onClose={() => setDrawer(false)} />
            <SidebarBody
              pathname={pathname}
              name={user?.name}
              role={user?.role}
              onLogout={doLogout}
              onNavigate={() => setDrawer(false)}
            />
          </aside>
        </div>
      )}

      {/* Main column */}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-line bg-white/80 px-4 backdrop-blur-xl sm:px-8">
          <button onClick={() => setDrawer(true)} className="grid h-10 w-10 place-items-center rounded-xl text-ink hover:bg-card lg:hidden" aria-label="Open menu">
            <IconMenu className="h-5 w-5" />
          </button>
          <h1 className="font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl">{current.label}</h1>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-line bg-card px-3.5 py-2 sm:flex">
              <IconSearch className="h-4 w-4 text-muted/70" />
              <input placeholder="Search…" className="w-32 bg-transparent text-sm text-ink outline-none placeholder:text-muted/50" />
            </div>
            <button className="relative grid h-10 w-10 place-items-center rounded-full text-muted hover:bg-card" aria-label="Notifications">
              <IconBell2 className="h-5 w-5" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-primary" />
            </button>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
              {initialsOf(user?.name)}
            </span>
          </div>
        </header>

        <div className="mx-auto max-w-[1100px] p-4 sm:p-8">{children}</div>
      </div>
    </div>
  );
}
