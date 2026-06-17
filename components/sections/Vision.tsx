import Reveal from "@/components/ui/Reveal";

export default function Vision() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-h2">Our Vision</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 font-display text-3xl font-medium leading-[1.25] tracking-tight sm:text-4xl lg:text-[2.9rem]">
            To establish Kerala as an{" "}
            <span className="aurora-text">early supplier of green hydrogen</span> and{" "}
            <span className="aurora-text">green ammonia</span> to global markets — driving
            a just and decarbonised energy transition.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <div className="mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-h2 to-transparent" />
        </Reveal>
      </div>
    </section>
  );
}
