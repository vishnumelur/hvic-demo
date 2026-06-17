import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
  kicker,
  title,
  intro,
  center = false,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-h2">
          <span className="h-px w-8 bg-h2" />
          {kicker}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
