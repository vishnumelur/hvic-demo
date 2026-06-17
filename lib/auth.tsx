"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

// Demo-only client-side auth for the static pitch build (no backend).
export const DEMO = {
  email: "demo@keralahvic.org",
  password: "hvic2026",
  name: "Aanya Menon",
  role: "Administrator",
};

const STORAGE_KEY = "hvic_demo_auth";

export type User = { email: string; name: string; role: string } | null;

type AuthCtx = {
  user: User;
  ready: boolean;
  login: (email: string, password: string) => { ok: boolean; error?: string };
  logout: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const login = useCallback((email: string, password: string) => {
    if (email.trim().toLowerCase() === DEMO.email && password === DEMO.password) {
      const u = { email: DEMO.email, name: DEMO.name, role: DEMO.role };
      setUser(u);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
      } catch {
        /* ignore */
      }
      return { ok: true };
    }
    return { ok: false, error: "Invalid credentials. Use the demo login below." };
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  return <Ctx.Provider value={{ user, ready, login, logout }}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
