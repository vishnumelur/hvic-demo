"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/auth";
import DashboardShell from "@/components/dashboard/DashboardShell";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (ready && !user) router.replace("/login");
  }, [ready, user, router]);

  if (!ready || !user) {
    return (
      <div className="grid min-h-screen place-items-center bg-bg">
        <div className="flex flex-col items-center gap-4 text-muted">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-primary" />
          <p className="text-sm">Loading console…</p>
        </div>
      </div>
    );
  }

  return <DashboardShell>{children}</DashboardShell>;
}
