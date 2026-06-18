import { HUBS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";

const KERALA_PATH =
  "M40 6 C33 16 28 26 31 37 C33 45 27 53 33 63 C38 71 40 82 48 92 C54 100 56 112 64 124 C71 114 71 101 67 91 C63 81 65 71 61 61 C57 53 59 43 53 35 C49 27 51 16 45 7 Z";

export default function EcosystemMap() {
  // node coords in a 100 x 130 viewBox
  const nodes = HUBS.map((h) => ({ ...h, cx: h.x, cy: h.y * 1.3 }));
  const route = nodes.map((n, i) => `${i === 0 ? "M" : "L"}${n.cx} ${n.cy}`).join(" ");

  return (
    <section className="py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-10 lg:p-12">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="label-caps text-primary">Live Network</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:mt-3 sm:text-4xl lg:text-5xl">
                  Ecosystem Map
                </h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
                  Live distribution of hydrogen hubs and refuelling nodes across Kerala — from
                  Kannur to Thiruvananthapuram.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["12", "Hubs"],
                    ["7", "Districts"],
                    ["100%", "Renewable"],
                  ].map(([v, l]) => (
                    <div key={l} className="rounded-xl bg-white/55 px-3 py-2.5">
                      <div className="font-display text-xl font-extrabold text-ink sm:text-2xl">{v}</div>
                      <div className="label-caps text-[10px] text-muted">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto mt-6 max-w-[190px] sm:mt-0 sm:max-w-[240px] lg:max-w-[280px]">
                  <svg viewBox="0 0 100 130" className="h-auto w-full" role="img" aria-label="Map of Kerala hydrogen hubs">
                    <defs>
                      <linearGradient id="kfill" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#00e08a" stopOpacity="0.16" />
                        <stop offset="1" stopColor="#006d40" stopOpacity="0.08" />
                      </linearGradient>
                    </defs>
                    <path d={KERALA_PATH} fill="url(#kfill)" stroke="#006d40" strokeOpacity="0.35" strokeWidth="0.8" />
                    {/* connecting route */}
                    <path d={route} fill="none" stroke="#00e08a" strokeOpacity="0.5" strokeWidth="0.7" strokeDasharray="2 1.6" />
                    {nodes.map((n) => (
                      <g key={n.name}>
                        {n.primary && (
                          <circle cx={n.cx} cy={n.cy} r="2.2" fill="none" stroke="#00e08a" strokeWidth="0.6">
                            <animate attributeName="r" values="2.2;7" dur="2.4s" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" values="0.9;0" dur="2.4s" repeatCount="indefinite" />
                          </circle>
                        )}
                        <circle cx={n.cx} cy={n.cy} r={n.primary ? 2.4 : 1.6} fill={n.primary ? "#006d40" : "#00e08a"} />
                      </g>
                    ))}
                  </svg>
                  <span className="absolute bottom-2 right-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur-md">
                    Kerala
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
