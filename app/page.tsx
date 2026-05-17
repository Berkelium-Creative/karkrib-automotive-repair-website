"use client";
import { Bebas_Neue, Manrope, JetBrains_Mono } from "next/font/google";
import content from "../data/content.json";

const display = Bebas_Neue({ subsets: ["latin"], weight: ["400"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });

const INK = "#050505";
const SLATE = "#1E293B";
const HORIZON = "#2563EB";
const SILVER = "#94A3B8";
const ICE = "#F8FAFC";
const WHITE = "#FFFFFF";
const MUTED = "#64748B";

const HERO_PHOTO = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1800&q=80&auto=format&fit=crop";
const DETAIL_PHOTO = "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?w=1200&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen`} style={{ backgroundColor: ICE, color: INK, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.9s ease-out both; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }
        .display-text { font-family: var(--font-display); letter-spacing: 0.02em; }
        .mono-text { font-family: var(--font-mono); }
        .grid-bg { background-image: linear-gradient(${SILVER}33 1px, transparent 1px), linear-gradient(90deg, ${SILVER}33 1px, transparent 1px); background-size: 80px 80px; }
        .gradient-fade { background: linear-gradient(180deg, ${INK} 0%, ${SLATE} 100%); }
        .blue-rule { background: ${HORIZON}; height: 3px; }
      `}</style>

      <header style={{ backgroundColor: INK, borderBottom: `1px solid ${SLATE}` }}>
        <div className="mono-text text-[10px] uppercase tracking-[0.4em] text-center py-2.5" style={{ backgroundColor: HORIZON, color: WHITE }}>
          IRVINE AUTO CENTER · BAY 8 · CERTIFIED TECHNICIANS
        </div>
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <div className="display-text text-3xl tracking-wider" style={{ color: WHITE }}>KARKRIB</div>
            <div className="mono-text text-[10px] uppercase tracking-widest" style={{ color: HORIZON }}>AUTOMOTIVE</div>
          </div>
          <div className="hidden md:flex items-center gap-8 mono-text text-xs uppercase tracking-widest">
            <a href="#about" style={{ color: SILVER }}>Shop</a>
            <a href="#services" style={{ color: SILVER }}>Services</a>
            <a href="#reviews" style={{ color: SILVER }}>Reviews</a>
            <a href="#visit" style={{ color: SILVER }}>Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="display-text px-6 py-3 text-base tracking-wider" style={{ backgroundColor: HORIZON, color: WHITE }}>QUOTE →</a>
        </nav>
      </header>

      <section className="relative gradient-fade overflow-hidden" style={{ minHeight: 720 }}>
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, transparent 0%, ${INK}DD 70%, ${INK} 100%)` }} />
        <div className="absolute inset-0" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.35 }} />
        <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-10 items-end" style={{ minHeight: 720 }}>
          <div className="md:col-span-8 fade-up">
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-8 inline-flex items-center gap-3" style={{ color: HORIZON }}>
              <span className="inline-block w-12 h-px" style={{ backgroundColor: HORIZON }}></span>
              {c.hero.eyebrow}
            </div>
            <h1 className="display-text text-7xl md:text-9xl leading-[0.9] mb-8 tracking-wider" style={{ color: WHITE }}>
              {c.hero.heading.toUpperCase()}
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl mb-10" style={{ color: SILVER }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-6">
              <a href={c.hero.ctaLink} className="display-text px-10 py-4 text-lg tracking-wider inline-flex items-center gap-3" style={{ backgroundColor: HORIZON, color: WHITE }}>
                {c.hero.ctaText.toUpperCase()} <span>→</span>
              </a>
              <a href="#services" className="mono-text text-xs uppercase tracking-widest inline-flex items-center gap-2" style={{ color: WHITE }}>
                <span>▼</span> See the service manifest
              </a>
            </div>
          </div>
          <div className="md:col-span-4 fade-up delay-2 mono-text text-xs uppercase tracking-widest space-y-3" style={{ color: SILVER }}>
            <div className="border-l-2 pl-4" style={{ borderColor: HORIZON }}>
              <div className="text-[10px] opacity-70 mb-1">// RATED</div>
              <div className="display-text text-3xl tracking-wider" style={{ color: WHITE }}>4.8 ★ / 18</div>
            </div>
            <div className="border-l-2 pl-4" style={{ borderColor: HORIZON }}>
              <div className="text-[10px] opacity-70 mb-1">// OPEN</div>
              <div className="display-text text-3xl tracking-wider" style={{ color: WHITE }}>MON–SAT 9:30–5</div>
            </div>
            <div className="border-l-2 pl-4" style={{ borderColor: HORIZON }}>
              <div className="text-[10px] opacity-70 mb-1">// LOCATION</div>
              <div className="display-text text-3xl tracking-wider" style={{ color: WHITE }}>BAY 8 · IRVINE</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b" style={{ borderColor: SILVER, backgroundColor: ICE }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="mono-text text-xs uppercase tracking-[0.4em] mb-3" style={{ color: HORIZON }}>// {c.about.label}</div>
            <h2 className="display-text text-5xl md:text-6xl leading-[1.0] tracking-wider mb-3" style={{ color: INK }}>{c.about.heading.toUpperCase()}</h2>
            <div className="blue-rule w-16 mt-6 mb-8" />
            <div className="mono-text text-xs uppercase tracking-widest space-y-2" style={{ color: MUTED }}>
              <div>// ASE-CERTIFIED</div>
              <div>// EUROPEAN & DOMESTIC</div>
              <div>// COMPUTERIZED DIAGNOSTIC</div>
              <div>// SAME-DAY SERVICE</div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="space-y-6 text-lg leading-relaxed mb-10" style={{ color: INK }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
            <div className="overflow-hidden border-2" style={{ borderColor: INK, aspectRatio: "16/9" }}>
              <div className="w-full h-full" style={{ backgroundImage: `url("${DETAIL_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 border-b" style={{ borderColor: SILVER, backgroundColor: INK }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <div className="mono-text text-xs uppercase tracking-[0.5em] mb-3" style={{ color: HORIZON }}>// SERVICE MANIFEST</div>
              <h2 className="display-text text-5xl md:text-7xl leading-[0.95] tracking-wider" style={{ color: WHITE }}>WHAT WE BUILD.</h2>
            </div>
            <div className="mono-text text-xs uppercase tracking-widest" style={{ color: SILVER }}>// ALL JOBS — WRITTEN QUOTE FIRST</div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ backgroundColor: HORIZON }}>
            {c.services.map((s: any, i: number) => (
              <article key={i} className="p-8 flex flex-col h-full" style={{ backgroundColor: SLATE }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="mono-text text-[10px] uppercase tracking-widest" style={{ color: HORIZON }}>// JOB {String(i + 1).padStart(2, "0")}</div>
                  <div className="display-text text-2xl tracking-wider" style={{ color: HORIZON }}>{s.price}</div>
                </div>
                <h3 className="display-text text-3xl mb-4 tracking-wider leading-tight" style={{ color: WHITE }}>{s.title.toUpperCase()}</h3>
                <p className="text-sm leading-relaxed flex-grow" style={{ color: SILVER }}>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 border-b" style={{ borderColor: SILVER, backgroundColor: ICE }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mono-text text-xs uppercase tracking-[0.5em] mb-3" style={{ color: HORIZON }}>// FIELD REPORTS</div>
          <h2 className="display-text text-5xl md:text-6xl leading-[1.0] mb-14 tracking-wider" style={{ color: INK }}>WHAT OUR CUSTOMERS SAY.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="p-8 flex flex-col h-full" style={{ backgroundColor: WHITE, border: `1px solid ${SILVER}` }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: HORIZON }}>★</span>)}
                  </div>
                  <div className="mono-text text-[10px] uppercase tracking-widest" style={{ color: MUTED }}>// 0{i + 1}</div>
                </div>
                <blockquote className="text-base leading-relaxed mb-6 flex-grow" style={{ color: INK }}>"{r.text}"</blockquote>
                <figcaption className="pt-4" style={{ borderTop: `1px solid ${SILVER}` }}>
                  <div className="display-text text-2xl tracking-wider" style={{ color: INK }}>{r.name.toUpperCase()}</div>
                  <div className="mono-text text-[10px] uppercase tracking-widest mt-1" style={{ color: HORIZON }}>// {r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: HORIZON }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="mono-text text-xs uppercase tracking-[0.5em] mb-4" style={{ color: WHITE, opacity: 0.85 }}>// COORDINATES</div>
            <h2 className="display-text text-6xl md:text-8xl leading-[0.9] mb-8 tracking-wider" style={{ color: WHITE }}>BRING IT IN.</h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: WHITE, opacity: 0.92 }}>Bay 8 of the Irvine Auto Center on Auto Center Drive. Drop the keys, get a written quote inside an hour, and ride home on us.</p>

            <dl className="space-y-5 mb-10">
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1" style={{ color: WHITE, opacity: 0.7 }}>// ADDRESS</dt>
                <dd className="text-xl font-semibold" style={{ color: WHITE }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-1" style={{ color: WHITE, opacity: 0.7 }}>// DIRECT</dt>
                <dd className="display-text text-4xl tracking-wider"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: WHITE }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="mono-text text-xs uppercase tracking-[0.35em] mb-2" style={{ color: WHITE, opacity: 0.7 }}>// HOURS</dt>
                <dd>
                  <table className="text-sm mono-text uppercase" style={{ color: WHITE }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1 font-bold">{day}</td>
                          <td>{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="overflow-hidden border-2" style={{ borderColor: WHITE, minHeight: 420 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="500" style={{ border: 0, filter: "grayscale(40%)" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center" style={{ backgroundColor: INK, color: SILVER }}>
        <div className="display-text text-3xl tracking-wider mb-2" style={{ color: WHITE }}>KARKRIB AUTOMOTIVE</div>
        <div className="mono-text text-xs uppercase tracking-[0.4em] opacity-80" style={{ color: HORIZON }}>// IRVINE AUTO CENTER · BAY 8</div>
        <div className="mono-text text-xs uppercase tracking-[0.35em] mt-4 opacity-60">© {new Date().getFullYear()} KARKRIB AUTOMOTIVE · IRVINE, CA</div>
      </footer>
    </main>
  );
}
