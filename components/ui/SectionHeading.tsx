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
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Reveal>
        <p className="label-caps text-primary">{kicker}</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={150}>
          <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
