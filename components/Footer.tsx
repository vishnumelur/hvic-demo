import Link from "next/link";
import { NAV, ORG } from "@/lib/content";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-line">
      <div className="hairline absolute inset-x-0 top-0" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10" />
              <div>
                <p className="font-display text-lg font-semibold">{ORG.name}</p>
                <p className="text-xs uppercase tracking-[0.18em] text-faint">
                  {ORG.govt} · ANERT
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              {ORG.vision}
            </p>
            <p className="mt-4 text-xs text-faint">
              Incorporated {ORG.incorporated} · {ORG.section}
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-fg">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm text-muted transition-colors hover:text-h2">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-fg">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>{ORG.address}</li>
              <li>
                <a href={`mailto:${ORG.email}`} className="hover:text-h2">{ORG.email}</a>
              </li>
              <li>
                <a href={`tel:${ORG.phone}`} className="hover:text-h2">{ORG.phone}</a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {["X", "in", "f", "▶"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={`social ${s}`}
                  className="glass glass-hover grid h-9 w-9 place-items-center rounded-lg text-xs text-muted"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} {ORG.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-h2 shadow-[0_0_8px_#00e08a]" />
            A Government of Kerala initiative under ANERT
          </p>
        </div>
      </div>
    </footer>
  );
}
