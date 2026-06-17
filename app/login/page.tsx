"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { useAuth, DEMO } from "@/lib/auth";
import { IconMail, IconLock, IconArrowRight } from "@/components/ui/Icons";

const BULLETS = [
  "Manage news, tenders, gallery & pages",
  "Role-based access for your team",
  "Live ecosystem metrics at a glance",
];

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = login(email, password);
    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError(res.error || "Login failed");
      setLoading(false);
    }
  }

  function fillDemo() {
    setEmail(DEMO.email);
    setPassword(DEMO.password);
    setError("");
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-[1.05fr_1fr]">
      {/* Visual panel */}
      <div className="relative hidden overflow-hidden lg:block">
        <img src="/img/energy.jpg" alt="Renewable energy in Kerala" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-700/90 via-primary/70 to-primary/30" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/15 backdrop-blur-md">
              <Logo className="h-9 w-9" />
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight">Kerala HVIC</span>
          </Link>
          <div className="max-w-md text-white">
            <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight">
              The control room for Kerala&apos;s <span className="accent-italic text-white">hydrogen</span> future.
            </h2>
            <ul className="mt-8 space-y-3">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-center gap-3 text-white/90">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/20">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l4 4L19 7" /></svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <p className="label-caps text-[10px] text-white/60">Govt. of Kerala · ANERT · Admin Console</p>
        </div>
      </div>

      {/* Form panel */}
      <div className="hero-glow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-8 inline-flex items-center gap-2.5 lg:hidden">
            <Logo className="h-9 w-9" />
            <span className="font-display text-xl font-extrabold tracking-tight text-ink">Kerala HVIC</span>
          </Link>

          <p className="label-caps text-primary">Admin Console</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-ink">Welcome back</h1>
          <p className="mt-2 text-muted">Sign in to manage the Foundation&apos;s digital presence.</p>

          <form onSubmit={submit} className="mt-8 space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-ink">Email</span>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-line bg-card px-4 transition-colors focus-within:border-primary">
                <IconMail className="h-5 w-5 text-muted/60" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@keralahvic.org"
                  className="w-full bg-transparent py-3 text-ink outline-none placeholder:text-muted/50"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-ink">Password</span>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-line bg-card px-4 transition-colors focus-within:border-primary">
                <IconLock className="h-5 w-5 text-muted/60" />
                <input
                  type={show ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-transparent py-3 text-ink outline-none placeholder:text-muted/50"
                />
                <button type="button" onClick={() => setShow((s) => !s)} className="text-xs font-semibold text-primary">
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </label>

            {error && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 font-semibold text-white disabled:opacity-70"
            >
              {loading ? "Signing in…" : "Sign in"}
              {!loading && <IconArrowRight className="h-5 w-5" />}
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-6 rounded-2xl border border-line bg-card/60 p-5">
            <div className="flex items-center justify-between">
              <p className="label-caps text-[10px] text-primary">Demo credentials</p>
              <button onClick={fillDemo} className="text-xs font-semibold text-primary hover:underline">
                Use demo credentials
              </button>
            </div>
            <dl className="mt-3 space-y-1.5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Email</dt>
                <dd className="font-medium text-ink">{DEMO.email}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted">Password</dt>
                <dd className="font-medium text-ink">{DEMO.password}</dd>
              </div>
            </dl>
          </div>

          <Link href="/" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary">
            ← Back to website
          </Link>
        </div>
      </div>
    </div>
  );
}
