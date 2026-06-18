"use client";

import { HUBS } from "@/lib/content";
import Reveal from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";

/**
 * Accurate Kerala outline. Generated from real district geometry
 * (udit-001/india-maps-data census polygons), dissolved to the state boundary
 * and projected equirectangular (cos-latitude corrected) into a 0 0 555.6 1000
 * viewBox. The hub markers below are the real city lat/longs projected with the
 * SAME projection, so they sit at their true geographic positions.
 */
const KERALA_PATH =
  "M56.6 131.6L72.8 175.2L78.6 171.4L83.9 174.7L95.2 187.4L98.6 197.7L106.7 207.6L113.2 208.5L126.6 224.8L129.7 225.5L128 227.3L132.9 228.4L143.4 241.4L149.7 242.7L146.1 244.6L163.8 292.7L167.3 296L173.9 295.9L181.3 304.2L189.7 326.5L192.3 328L204.5 363.9L209.3 371.5L227.6 444.6L269.2 536L282.8 580L293.9 577.8L283.9 580.4L295.4 621L299.8 624.7L299.1 630.4L309.2 676L308.2 667.6L317.2 735.7L323.3 756.8L353.5 823.6L351.6 815.7L366.8 864.5L370.8 869.5L380.5 874L396.1 892.6L400 900.9L456.8 971.3L462.6 981.5L486.9 1000L493.7 992.9L502.4 991.1L503.3 994.2L503.5 985.3L498.8 986.1L500.7 982L498.4 979.6L502.2 979.8L510.6 966.4L515.2 965.7L509.5 953.7L512.2 951.2L517.7 954.8L522.7 952.5L527.5 943.5L519.3 930.9L519.8 927L509.5 916.3L510.7 912.9L502.7 900.2L503.3 898.5L507.4 900.2L508.8 894.1L513 894.4L512.1 892L515.6 890.9L516.2 885.7L523.2 877.9L521.8 870.5L513.9 864.1L513.9 859L507.7 859.3L508.4 852.9L497.6 838.1L502.1 832.9L508.7 832.5L511.9 820.7L524.1 808.8L523.3 801.5L520.7 800.7L527.2 794.7L527.1 776.5L530.9 773.8L531.1 768L536.6 768L540.2 748.7L545 741.2L551.3 740.8L552.7 732.6L555.6 729.8L553 725.7L549.7 727.6L542 716.9L544.4 709.1L539.7 715.5L536.6 714L537.6 709.8L534.9 709L524.5 715.6L516.7 713.7L511.1 706.6L502.1 706.8L505 696.8L510.7 688.5L510 682.5L514.4 680.7L516.4 672L514.2 667.8L519.4 665.6L518.2 661.6L514 660.1L514.3 655.1L517.4 653.6L511.9 648L513.2 641.9L519.4 631.5L525.1 628.7L521.2 618L523.2 614.3L510.1 601.2L510.8 594.4L518.1 591.9L523.9 593.6L525.5 579.7L530 572.3L528.5 569.2L522.2 569.6L523.1 562.2L515.2 550.5L516.9 542.4L505 541.3L475.1 557.7L476.2 563.2L461.6 572L452.4 567.9L446.3 568.7L437.9 559.6L437.9 554.7L432.5 557.6L428.1 552.5L432.5 539.2L427 533.1L429.1 530.3L425.4 526.8L431.3 501.6L430.3 488.4L425.7 486.9L424.2 482.2L425 479.8L439.8 478.8L436.3 468.7L442 461.1L445.2 447.1L443.9 441.3L432.8 439.1L433.6 434.3L428.1 427L417.9 422.8L409 422.9L395 416.8L390.4 412.2L403.5 389.7L414.6 392.2L420.1 390.4L422.1 386.7L417.2 389.3L410.3 386.1L409.6 382.4L412 381.2L409.5 375.9L410.6 368.6L407 369.5L402.7 365.1L401.3 367.2L399 361.7L406.3 356.2L407.8 350.8L399.5 345.6L384.5 355.5L363.8 357.4L356.2 351.7L350.4 352.3L350.6 355.4L347.3 357L343.8 353.9L346.2 345.5L361.1 338.6L366.4 332L364.5 329L367.3 325.1L366.8 319L358.2 320L360.2 316.2L347.8 312.3L338 304.6L338.6 300.6L334.1 301.7L322 294.9L318.4 297.8L311.6 295.3L309.4 291.5L301.2 294.8L302.1 287.1L298.3 281.5L301.9 281.7L298.2 272.5L308.2 265.2L313.2 271.8L320.5 266.4L321.8 268.2L329.8 265L331.9 258.8L341.6 258.5L344.2 254.9L338.2 249.5L335.3 240.7L340.5 237.4L336.9 233.8L337.6 230.2L324.1 234.7L316.8 231.8L314.4 224.4L308.4 218.3L296.1 219.2L293 214.9L292.6 207.3L288.8 205.1L281.3 205.4L273.4 209.8L272.1 181.1L247.9 191.8L218.8 187.2L213.8 180.6L210 180L208.5 173.7L203.8 168.4L202.3 164.2L204.2 158.9L193.4 157.6L185 160.9L182.4 152.5L173.3 154.7L167.8 143.7L164.2 142L158.2 144L145.2 132L146.7 128.7L134.7 112.2L119.3 112.3L123.2 108L118.5 99.5L120.9 93.8L111.7 89.5L108.8 85.1L108.8 74.9L114.8 76.3L121.2 71.6L119.7 65.6L112.3 65.1L107.5 73.3L102.3 73.5L101.5 65.6L95.3 64.8L95 60.5L90 60.2L87.8 54.5L88.3 50L92.1 46.9L97.6 49.1L99.9 45.1L88.6 39.6L80.8 50.4L77 50.4L74.4 45.1L72.7 45.8L74.6 43L72.2 40.4L72.9 36.9L64.1 38.7L58.9 33.4L63.9 27.5L62.2 25.1L53.3 25.4L51.9 21.6L47.5 19.9L47.5 27L39.1 28.5L37.5 24.1L40.8 22.3L39.9 16.8L29.1 17.7L31.4 14.9L25.1 12.6L31 6.1L29.7 0.9L26.6 0L26.1 2.7L22 4.1L14.2 3.2L3.2 9.1L0.3 8L3.9 19L8.4 22.3L4.4 19.4L13.2 40.7L18 35.3L14.1 40.3L15.7 44.3L16.2 41.7L18.9 42.2L15.4 45.2L23.2 65.3L32.2 83.7L38 90.3L56.6 131.6Z";

// real city lat/longs projected into the path's coordinate space
const NODE_XY: Record<string, [number, number]> = {
  Kannur: [109.8, 204.5],
  Kozhikode: [199.3, 341.2],
  Thrissur: [294, 503.6],
  Kochi: [305.6, 636.1],
  Kottayam: [361, 711.5],
  Kollam: [381.3, 866.6],
  Thiruvananthapuram: [451.7, 948.6],
};

export default function EcosystemMap() {
  const t = useT();
  const nodes = HUBS.map((h) => {
    const [cx, cy] = NODE_XY[h.name] ?? [0, 0];
    return { ...h, cx, cy };
  });
  const route = nodes.map((n, i) => `${i === 0 ? "M" : "L"}${n.cx} ${n.cy}`).join(" ");

  return (
    <section className="py-14 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="glass-card relative overflow-hidden rounded-[2rem] p-6 sm:rounded-[2.5rem] sm:p-10 lg:p-12">
            <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="label-caps text-primary">{t.map.kicker}</p>
                <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-ink sm:mt-3 sm:text-4xl lg:text-5xl">
                  {t.map.title}
                </h2>
                <p className="mt-3 max-w-md text-base leading-relaxed text-muted sm:mt-5 sm:text-lg">
                  {t.map.intro}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    ["12", t.map.hubs],
                    ["7", t.map.districts],
                    ["100%", t.map.renewable],
                  ].map(([v, l]) => (
                    <div key={l} className="rounded-xl bg-white/55 px-3 py-2.5">
                      <div className="font-display text-xl font-extrabold text-ink sm:text-2xl">{v}</div>
                      <div className="label-caps text-[10px] text-muted">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map — accurate Kerala outline, height-locked to the original footprint */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto mt-6 w-fit sm:mt-0">
                  <svg
                    viewBox="0 0 555.6 1000"
                    className="block h-[247px] w-auto sm:h-[312px] lg:h-[364px]"
                    role="img"
                    aria-label="Map of Kerala hydrogen hubs"
                  >
                    <defs>
                      <linearGradient id="kfill" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#00e08a" stopOpacity="0.16" />
                        <stop offset="1" stopColor="#006d40" stopOpacity="0.08" />
                      </linearGradient>
                    </defs>
                    <path d={KERALA_PATH} fill="url(#kfill)" stroke="#006d40" strokeOpacity="0.4" strokeWidth="3" strokeLinejoin="round" />
                    {/* connecting corridor */}
                    <path d={route} fill="none" stroke="#00e08a" strokeOpacity="0.55" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="9 8" />
                    {nodes.map((n) => (
                      <g key={n.name}>
                        {n.primary && (
                          <circle cx={n.cx} cy={n.cy} r="9" fill="none" stroke="#00e08a" strokeWidth="2.5">
                            <animate attributeName="r" values="9;28" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="stroke-opacity" values="0.85;0" dur="3s" repeatCount="indefinite" />
                          </circle>
                        )}
                        <circle cx={n.cx} cy={n.cy} r={n.primary ? 9 : 6} fill={n.primary ? "#006d40" : "#00e08a"} />
                      </g>
                    ))}
                  </svg>
                  <span className="absolute bottom-2 right-2 rounded-full bg-white/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary backdrop-blur-md">
                    {t.map.kerala}
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
