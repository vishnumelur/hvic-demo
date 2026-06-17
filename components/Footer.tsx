import Link from "next/link";
import { ORG } from "@/lib/content";
import Logo from "@/components/ui/Logo";

const COLS: { head: string; links: [string, string][] }[] = [
  { head: "Strategy", links: [["Roadmap", "/programmes"], ["Policy Framework", "/about"]] },
  { head: "Ecosystem", links: [["Projects", "/gallery"], ["News & ESG", "/news"]] },
  { head: "Contact", links: [["Tenders & Careers", "/tenders"], ["Inquiries", "/contact"]] },
];

export default function Footer() {
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
            <p className="max-w-sm text-sm leading-relaxed text-muted/80">
              Leading the transition to a sustainable, hydrogen-powered ecosystem through
              innovative policy and precision engineering.
            </p>
            <p className="label-caps pt-2 text-[10px] text-ink/40">
              © {new Date().getFullYear()} Kerala HVIC Foundation · Govt. of Kerala · ANERT
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-7 md:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.head} className="space-y-4">
                <h4 className="label-caps text-[10px] text-ink/45">{c.head}</h4>
                <ul className="space-y-2.5 text-sm font-medium">
                  {c.links.map(([label, href]) => (
                    <li key={label}>
                      <Link href={href} className="text-muted transition-colors hover:text-primary">
                        {label}
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
