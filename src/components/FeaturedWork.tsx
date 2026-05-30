"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Project {
  index: string;
  title: string;
  role: string;
  thesis: string;
  metric: string;
  metricLabel: string;
  image: string;
  href: string;
  external?: string;
}

const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Lemma Limited",
    role: "Founder · CEO",
    thesis: "Media startup turning short-form storytelling into measurable audience.",
    metric: "10M+",
    metricLabel: "Cross-platform views",
    image:
      "https://images.squarespace-cdn.com/content/v1/68ffdfd4c75c430290b4067d/4001db17-8e47-4bcf-a0c3-23968a8b2009/Untitled-173.jpg",
    href: "/work/lemma-limited",
    external: "https://lemmalimited.com",
  },
  {
    index: "02",
    title: "PYR Studios",
    role: "Co-Founder",
    thesis: "Play Your Role — content and strategy hub for artists, musicians, and brands.",
    metric: "Chula Vista",
    metricLabel: "California-based",
    image:
      "https://images.squarespace-cdn.com/content/v1/68ffdfd4c75c430290b4067d/34c19c4a-f4fa-4945-97ae-32962d92106b/PNG+image+2.jpg",
    href: "/work/pyr-studios",
  },
];

export default function FeaturedWork() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading reveal
      gsap.fromTo(
        ".fw-heading > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Card clip-path wipe + content fade
      gsap.utils.toArray<HTMLElement>(".fw-card").forEach((card, i) => {
        const cover = card.querySelector(".fw-cover");
        const content = card.querySelectorAll(".fw-content > *");

        if (cover) {
          gsap.fromTo(
            cover,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.4,
              ease: "power3.out",
              delay: i * 0.15,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 30%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        gsap.fromTo(
          content,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            delay: i * 0.15 + 0.3,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 30%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative py-24 md:py-40 bg-[var(--color-bg)]"
      id="work"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="fw-heading flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-4">
              / Selected Work
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-text)] leading-[1.05] text-balance max-w-3xl">
              Two ventures. One founder lens.
            </h2>
          </div>
          <Link
            href="/work"
            className="underline-link font-mono text-[12px] tracking-[0.22em] uppercase text-[var(--color-text)] self-start md:self-auto"
          >
            All Work →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROJECTS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="fw-card group relative block"
            >
              <div className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)]">
                <div
                  className="fw-cover absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  style={{ backgroundImage: `url('${p.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/30 to-transparent" />

                {/* index */}
                <div className="absolute top-6 left-6 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)]">
                  / {p.index}
                </div>

                {/* metric overlay */}
                <div className="absolute top-6 right-6 text-right">
                  <div className="font-display text-4xl md:text-5xl font-bold text-[var(--color-text)] leading-none">
                    {p.metric}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-text)]/70 mt-1">
                    {p.metricLabel}
                  </div>
                </div>

                {/* bottom content */}
                <div className="fw-content absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-2">
                    {p.role}
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-text)] leading-tight mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[var(--color-text)]/75 text-sm md:text-base max-w-md text-balance">
                    {p.thesis}
                  </p>
                  <div className="mt-5 flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)]">
                    Read case study
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
