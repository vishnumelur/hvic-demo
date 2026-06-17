import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-20 text-center sm:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(0,224,138,0.18),transparent_70%)]" />
            <div className="relative mx-auto max-w-3xl">
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Partner with Kerala&apos;s
                <br />
                <span className="aurora-text">hydrogen revolution.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
                Industry, research and government working as one cluster. Explore
                collaboration, tenders and career opportunities with the Foundation.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="btn-glow rounded-xl bg-gradient-to-r from-h2 to-cyan px-7 py-3.5 font-semibold text-ink">
                  Get in touch
                </Link>
                <Link href="/tenders" className="glass glass-hover rounded-xl px-7 py-3.5 font-medium">
                  View tenders &amp; careers
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
