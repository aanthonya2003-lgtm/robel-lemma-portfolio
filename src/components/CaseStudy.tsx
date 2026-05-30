"use client";

import Link from "next/link";
import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import MagneticButton from "./MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface CaseStudySection {
  label: string;
  title: string;
  body: ReactNode;
}

interface CaseStudyProps {
  index: string;
  name: string;
  role: string;
  thesis: string;
  heroStat: { value: string; label: string };
  heroImage: string;
  externalLink?: { label: string; href: string };
  sections: CaseStudySection[];
  next: { label: string; href: string };
}

export default function CaseStudy({
  index,
  name,
  role,
  thesis,
  heroStat,
  heroImage,
  externalLink,
  sections,
  next,
}: CaseStudyProps) {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const sectionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const split = new SplitType(headlineRef.current, {
      types: "lines,words",
      lineClass: "split-line",
    });

    const ctx = gsap.context(() => {
      gsap.set(split.words, { opacity: 0, y: 50, rotateX: -18 });
      gsap.set(".cs-hero-meta > *", { opacity: 0, y: 16 });
      gsap.set(".cs-hero-thesis", { opacity: 0, y: 20 });
      gsap.set(".cs-hero-stat > *", { opacity: 0, y: 16 });

      gsap.to(split.words, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.05,
        delay: 0.3,
      });
      gsap.to(".cs-hero-meta > *", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.5,
      });
      gsap.to(".cs-hero-thesis", {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 1.0,
      });
      gsap.to(".cs-hero-stat > *", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
        delay: 1.15,
      });

      // Parallax hero photo
      gsap.to(".cs-hero-photo", {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Section reveals
      gsap.utils.toArray<HTMLElement>(".cs-section").forEach((sec) => {
        gsap.fromTo(
          sec.querySelectorAll(".cs-reveal"),
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: {
              trigger: sec,
              start: "top 75%",
              end: "top 25%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="cs-hero-photo absolute inset-[-8%]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${heroImage}')` }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/65 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]/40" />
        </div>

        <div
          aria-hidden="true"
          className="ghost-watermark absolute right-[-2vw] bottom-[-4vw] text-[22vw] z-[1]"
        >
          {index}
        </div>

        <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-32">
          <div className="cs-hero-meta flex items-center gap-4 mb-6 md:mb-10 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-muted)]">
            <span className="h-px w-10 bg-[var(--color-gold)]" />
            <span>Case Study / {index}</span>
            <span className="opacity-50">/</span>
            <span className="text-[var(--color-gold)]">{role}</span>
          </div>
          <div className="split-perspective max-w-5xl">
            <h1
              ref={headlineRef}
              className="font-display text-[clamp(2.5rem,8.5vw,7rem)] leading-[0.95] font-bold text-[var(--color-text)] text-balance"
            >
              {name}
            </h1>
          </div>
          <p className="cs-hero-thesis mt-8 max-w-3xl text-[var(--color-text)]/85 text-lg md:text-2xl leading-snug text-balance">
            {thesis}
          </p>
          <div className="cs-hero-stat mt-10 flex items-end gap-6">
            <div className="font-display text-5xl md:text-7xl font-bold text-[var(--color-gold)] leading-none">
              {heroStat.value}
            </div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-muted)] pb-2">
              {heroStat.label}
            </div>
            {externalLink && (
              <a
                href={externalLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hidden md:inline-flex underline-link font-mono text-[12px] tracking-[0.22em] uppercase text-[var(--color-text)]"
              >
                {externalLink.label} ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Sections */}
      <div ref={sectionsRef} className="relative bg-[var(--color-bg)]">
        {sections.map((sec, i) => (
          <section
            key={i}
            className="cs-section relative py-20 md:py-28 border-b border-white/5"
          >
            <div className="max-w-[1200px] mx-auto px-6 md:px-10">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-4">
                  <div className="cs-reveal sticky top-28">
                    <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-3">
                      / {String(i + 1).padStart(2, "0")} — {sec.label}
                    </div>
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--color-text)] leading-[1.05] text-balance">
                      {sec.title}
                    </h2>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="cs-reveal prose prose-invert max-w-none text-[var(--color-text)]/85 text-base md:text-lg leading-relaxed space-y-5">
                    {sec.body}
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Next CTA */}
      <section className="relative py-24 md:py-32 bg-[var(--color-surface)]/40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-4">
            / Up Next
          </div>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-8 leading-[1.05]">
            {next.label}
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton
              as="a"
              href={next.href}
              className="font-mono text-[12px] tracking-[0.22em] uppercase bg-[var(--color-gold)] text-[var(--color-bg)] px-8 py-4 rounded-[2px] hover:bg-[var(--color-text)] transition-colors duration-300"
            >
              See Next Project →
            </MagneticButton>
            <Link
              href="/contact"
              className="font-mono text-[12px] tracking-[0.22em] uppercase border border-[var(--color-text)]/30 text-[var(--color-text)] px-8 py-4 rounded-[2px] hover:border-[var(--color-text)] transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
