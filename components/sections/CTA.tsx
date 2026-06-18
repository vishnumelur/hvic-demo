"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { IconArrowRight } from "@/components/ui/Icons";
import { useT } from "@/lib/i18n";

export default function CTA() {
  const t = useT();
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-6 py-20 text-center sm:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(0,224,138,0.22),transparent_70%)]" />
            <div className="absolute -bottom-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/30 blur-[120px]" />
            <div className="relative mx-auto max-w-3xl">
              <p className="label-caps text-accent">{t.cta.kicker}</p>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                {t.cta.lead}{" "}
                <span className="accent-italic text-accent">{t.cta.accent}</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">{t.cta.body}</p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-4 font-semibold text-primary-700"
                >
                  {t.cta.getInTouch} <IconArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/tenders"
                  className="rounded-2xl border border-white/20 px-7 py-4 font-medium text-white transition-colors hover:bg-white/10"
                >
                  {t.cta.tenders}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
