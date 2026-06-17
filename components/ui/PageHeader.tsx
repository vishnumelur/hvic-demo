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
    <header className="relative overflow-hidden pt-40 pb-16">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_100%_at_50%_-10%,rgba(0,224,138,0.16),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-h2">
            <span className="h-px w-8 bg-h2" />
            {kicker}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
