import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import { GALLERY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and videos from Kerala HVIC events, projects and milestones.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        kicker="Media Gallery"
        title={<>Moments from the <span className="aurora-text">hydrogen valley.</span></>}
        intro="Events, project milestones and behind-the-scenes from across the cluster."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <Reveal key={g.title} delay={(i % 4) * 60} className={i % 5 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}>
              <figure
                className={`glass glass-hover group relative flex h-full min-h-44 flex-col justify-end overflow-hidden rounded-2xl p-5 ${
                  i % 5 === 0 ? "sm:min-h-[23rem]" : ""
                }`}
              >
                <div
                  className={`absolute inset-0 -z-10 opacity-80 transition-transform duration-700 group-hover:scale-110 ${
                    g.accent === "h2"
                      ? "bg-[radial-gradient(120%_120%_at_20%_0%,rgba(0,224,138,0.4),rgba(6,11,20,0.9))]"
                      : "bg-[radial-gradient(120%_120%_at_80%_0%,rgba(0,194,255,0.4),rgba(6,11,20,0.9))]"
                  }`}
                />
                {g.type === "video" && (
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/40 backdrop-blur">
                    <svg viewBox="0 0 24 24" className="h-4 w-4 text-h2" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                )}
                <figcaption className="font-display text-sm font-medium text-fg">{g.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
