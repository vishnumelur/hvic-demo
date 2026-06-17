import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { GALLERY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos and videos from Kerala HVIC Foundation events, project milestones and behind-the-scenes moments across the hydrogen cluster.",
};

export default function GalleryPage() {
  return (
    <div className="bg-bg">
      <PageHeader
        kicker="Media Gallery"
        title={
          <>
            Moments from the{" "}
            <span className="accent-italic">hydrogen valley.</span>
          </>
        }
        intro="Events, project milestones and behind-the-scenes from across Kerala&#39;s hydrogen ecosystem."
      />

      <section className="py-24">
        <div className="mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {GALLERY.map((g, i) => {
              const isHero = i === 0;

              return (
                <Reveal key={g.title} delay={i * 70}>
                  <figure
                    className={[
                      "group relative overflow-hidden rounded-[1.5rem] hover-lift premium-shadow bg-card border border-line",
                      isHero
                        ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {/* Image */}
                    <div
                      className={[
                        "w-full overflow-hidden",
                        isHero ? "aspect-[16/10]" : "aspect-[4/3]",
                      ].join(" ")}
                    >
                      <img
                        src={g.image}
                        alt={g.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>

                    {/* Gradient overlay with caption */}
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-[1.5rem]">
                      <div className="p-5">
                        <p className="label-caps text-white/70 mb-1">
                          {g.type === "video" ? "Video" : "Photo"}
                        </p>
                        <p className="font-display text-sm text-white leading-snug">
                          {g.title}
                        </p>
                      </div>
                    </div>

                    {/* Persistent caption bar (non-hover) */}
                    <figcaption className="px-4 py-3 group-hover:opacity-0 transition-opacity duration-300">
                      <p className="label-caps text-muted truncate">{g.type}</p>
                      <p className="mt-0.5 font-display text-xs text-ink truncate">
                        {g.title}
                      </p>
                    </figcaption>

                    {/* Video play badge */}
                    {g.type === "video" && (
                      <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-line shadow-md">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-4 w-4 text-primary translate-x-0.5"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}
                  </figure>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
