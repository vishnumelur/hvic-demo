import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { GALLERY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos from Kerala HVIC Foundation events, project milestones and the hydrogen cluster across Kerala.",
};

export default function GalleryPage() {
  return (
    <div className="bg-bg">
      <PageHeader
        kicker="Media Gallery"
        title={
          <>
            Moments from the <span className="accent-italic">hydrogen valley</span>
          </>
        }
        intro="Events, project milestones and scenes from across Kerala&apos;s green-hydrogen ecosystem."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {GALLERY.map((g, i) => (
              <Reveal key={g.title} delay={(i % 3) * 80}>
                <figure className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-card premium-shadow hover-lift">
                  <img
                    src={g.image}
                    alt={g.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* always-on legibility gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {g.type === "video" && (
                    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/85 backdrop-blur-md">
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 text-primary" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  )}

                  <figcaption className="absolute inset-x-0 bottom-0 p-4">
                    <p className="label-caps text-[10px] text-white/70">{g.type}</p>
                    <p className="mt-1 font-display text-sm font-semibold leading-snug text-white">{g.title}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
