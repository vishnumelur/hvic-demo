import Reveal from "@/components/ui/Reveal";

export default function PageHeader({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <header className="hero-glow relative overflow-hidden pt-36 pb-14">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <p className="label-caps text-primary">{kicker}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
