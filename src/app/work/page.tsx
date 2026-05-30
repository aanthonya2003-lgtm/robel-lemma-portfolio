import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected ventures by Robel Lemma — Lemma Limited (10M+ views) and PYR Studios. Founder, PM, and digital strategy case studies.",
};

const PROJECTS = [
  {
    index: "01",
    title: "Lemma Limited",
    role: "Founder · CEO",
    year: "2021 — Present",
    thesis:
      "Media startup turning short-form storytelling into measurable audience growth.",
    metrics: [
      { v: "10M+", l: "Cross-platform views" },
      { v: "Multi-platform", l: "Distribution" },
      { v: "Founder-led", l: "Lean operations" },
    ],
    image:
      "https://images.squarespace-cdn.com/content/v1/68ffdfd4c75c430290b4067d/4001db17-8e47-4bcf-a0c3-23968a8b2009/Untitled-173.jpg",
    href: "/work/lemma-limited",
  },
  {
    index: "02",
    title: "PYR Studios",
    role: "Co-Founder",
    year: "Chula Vista, CA",
    thesis:
      "Play Your Role — content and strategy hub serving artists, musicians, and brands across SoCal.",
    metrics: [
      { v: "SoCal", l: "Regional focus" },
      { v: "Multi-vertical", l: "Artists · Brands · Musicians" },
      { v: "Co-founded", l: "Operating partner" },
    ],
    image:
      "https://images.squarespace-cdn.com/content/v1/68ffdfd4c75c430290b4067d/34c19c4a-f4fa-4945-97ae-32962d92106b/PNG+image+2.jpg",
    href: "/work/pyr-studios",
  },
];

export default function WorkIndexPage() {
  return (
    <main className="bg-[var(--color-bg)]">
      {/* Hero */}
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 px-6 md:px-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="ghost-watermark absolute right-[-3vw] top-[20%] text-[22vw] z-0 hidden md:block"
        >
          WORK
        </div>
        <div className="relative z-10 max-w-[1600px] mx-auto">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-6">
            / Selected Work · 2021 — Present
          </div>
          <h1 className="font-display text-5xl md:text-8xl font-bold text-[var(--color-text)] leading-[0.95] max-w-5xl text-balance">
            Two ventures. One founder lens.
          </h1>
          <p className="mt-8 max-w-2xl text-[var(--color-text)]/80 text-lg md:text-xl leading-relaxed">
            Each project below was built while completing my degree at UC San
            Diego. Each one shaped the way I think about product, audience, and
            execution.
          </p>
        </div>
      </section>

      {/* Project rows */}
      <section className="px-6 md:px-10 pb-24 md:pb-32">
        <div className="max-w-[1600px] mx-auto space-y-12 md:space-y-20">
          {PROJECTS.map((p, i) => (
            <Link
              key={p.title}
              href={p.href}
              className="group block"
            >
              <article className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
                <div
                  className={`md:col-span-7 relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    style={{ backgroundImage: `url('${p.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/40 via-transparent to-transparent" />
                  <div className="absolute top-5 left-5 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)]">
                    / {p.index}
                  </div>
                </div>
                <div
                  className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-3">
                    {p.role} · {p.year}
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-[var(--color-text)] leading-tight mb-4">
                    {p.title}
                  </h2>
                  <p className="text-[var(--color-text)]/80 text-base md:text-lg leading-relaxed mb-6 text-balance">
                    {p.thesis}
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-6 border-y border-white/10 py-4">
                    {p.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="font-display text-lg md:text-xl font-bold text-[var(--color-gold)]">
                          {m.v}
                        </div>
                        <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-[var(--color-muted)] mt-1">
                          {m.l}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[12px] tracking-[0.22em] uppercase text-[var(--color-gold)]">
                    Read case study
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="border-t border-white/10 py-16 md:py-24 px-6 md:px-10 bg-[var(--color-surface)]/40">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-4">
            / Next
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-8 leading-[1.05] text-balance">
            Want to see the operating playbook?
          </h2>
          <Link
            href="/contact"
            className="inline-block font-mono text-[12px] tracking-[0.22em] uppercase bg-[var(--color-gold)] text-[var(--color-bg)] px-8 py-4 rounded-[2px] hover:bg-[var(--color-text)] transition-colors duration-300"
          >
            Get in Touch →
          </Link>
        </div>
      </section>
    </main>
  );
}
