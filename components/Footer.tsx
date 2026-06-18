"use client";

import Link from "next/link";
import { ORG } from "@/lib/content";
import Logo from "@/components/ui/Logo";
import { useT } from "@/lib/i18n";

export default function Footer() {
  const t = useT();
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto max-w-[1280px] px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="space-y-5 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="font-display text-xl font-extrabold tracking-tight text-ink">
                Kerala HVIC
              </span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted/80">{t.footer.tagline}</p>
            <p className="label-caps pt-2 text-[10px] text-ink/40">
              © {new Date().getFullYear()} Kerala HVIC Foundation · {t.footer.govt}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            {t.footer.cols.map((c) => (
              <div key={c.head} className="space-y-4">
                <h4 className="label-caps text-[10px] text-ink/45">{c.head}</h4>
                <ul className="space-y-2.5 text-sm font-medium">
                  {c.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="text-muted transition-colors hover:text-primary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="col-span-2 space-y-2 text-sm text-muted md:col-span-3 md:flex md:items-center md:gap-6 md:space-y-0 md:pt-4">
              <a href={`mailto:${ORG.email}`} className="hover:text-primary">{ORG.email}</a>
              <a href={`tel:${ORG.phone}`} className="hover:text-primary">{ORG.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
