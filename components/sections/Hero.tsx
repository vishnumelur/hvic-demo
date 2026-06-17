"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ORG } from "@/lib/content";

const HydrogenHero = dynamic(() => import("@/components/three/HydrogenHero"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      {/* 3D layer */}
      <div className="absolute inset-0 lg:left-1/3">
        <HydrogenHero />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pt-28 sm:px-6">
        <div className="max-w-2xl">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-h2-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-h2 shadow-[0_0_10px_#00e08a]" />
            Government of Kerala · Established under ANERT · {ORG.incorporated}
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">
            Powering Kerala&apos;s
            <br />
            <span className="aurora-text">Hydrogen Future</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Kerala is the only Indian state building a complete green-hydrogen value
            chain — from production and storage to distribution, real-world
            applications and research.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/programmes"
              className="btn-glow rounded-xl bg-gradient-to-r from-h2 to-cyan px-6 py-3.5 font-semibold text-ink"
            >
              Explore the Valley
            </Link>
            <Link
              href="/about"
              className="glass glass-hover rounded-xl px-6 py-3.5 font-medium text-fg"
            >
              About the Foundation
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            {[
              ["₹133 Cr", "Pilot investment"],
              ["57 T", "Green H₂ / year"],
              ["1 GW", "Electrolyser hub"],
            ].map(([v, l]) => (
              <div key={l}>
                <p className="font-display text-2xl font-bold aurora-text">{v}</p>
                <p className="text-xs uppercase tracking-wider text-faint">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-faint">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-line p-1.5">
          <span className="h-2 w-1 animate-float rounded-full bg-h2" />
        </div>
      </div>
    </section>
  );
}
