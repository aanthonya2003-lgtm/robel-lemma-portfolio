"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import MagneticButton from "./MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headlineRef.current) return;

    const split = new SplitType(headlineRef.current, {
      types: "lines,words",
      lineClass: "split-line",
    });

    const ctx = gsap.context(() => {
      // Initial set
      gsap.set(split.words, { opacity: 0, y: 60, rotateX: -20 });
      gsap.set([subRef.current, bodyRef.current], { opacity: 0, y: 24 });
      gsap.set(ctaRef.current?.children || [], { opacity: 0, y: 16 });
      gsap.set(metaRef.current, { opacity: 0 });

      // Headline reveal
      gsap.to(split.words, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.3,
      });

      gsap.to(subRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.9,
      });

      gsap.to(bodyRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 1.05,
      });

      gsap.to(ctaRef.current?.children || [], {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        delay: 1.25,
      });

      gsap.to(metaRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        delay: 1.55,
      });

      // Parallax on hero photo while scrolling out
      gsap.to(".hero-photo-inner", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, rootRef);

    return () => {
      ctx.revert();
      split.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-[100dvh] min-h-[640px] w-full overflow-hidden"
    >
      {/* B&W photo backdrop with Ken Burns */}
      <div className="absolute inset-0 z-0">
        <div className="hero-photo-inner absolute inset-[-5%]">
          <div
            className="kenburns absolute inset-0 bg-cover bg-center grayscale"
            style={{
              backgroundImage:
                "url('https://images.squarespace-cdn.com/content/v1/68ffdfd4c75c430290b4067d/10e69f6e-93d5-4479-891a-3bd88075bd36/Untitled-169.jpg')",
            }}
          />
        </div>
        {/* Cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-[var(--color-bg)]/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-[var(--color-bg)]/40" />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="ghost-watermark absolute left-[-2vw] bottom-[-4vw] text-[26vw] z-[1]"
      >
        RL
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1600px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-32">
        <div
          ref={metaRef}
          className="flex items-center gap-4 mb-6 md:mb-10 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-muted)]"
        >
          <span className="h-px w-10 bg-[var(--color-gold)]" />
          <span>San Diego · CA</span>
          <span className="opacity-50">/</span>
          <span className="text-[var(--color-gold)]">Class of 2025</span>
        </div>

        <div className="split-perspective max-w-5xl">
          <h1
            ref={headlineRef}
            className="font-display text-[clamp(2.5rem,8.5vw,7.5rem)] leading-[0.95] font-bold text-[var(--color-text)] text-balance"
          >
            Building Products That Move People.
          </h1>
        </div>

        <p
          ref={subRef}
          className="mt-8 md:mt-10 font-mono text-[12px] md:text-sm tracking-[0.22em] uppercase text-[var(--color-gold)]"
        >
          PM · Founder · Digital Strategist
        </p>

        <p
          ref={bodyRef}
          className="mt-5 max-w-2xl text-[var(--color-text)]/85 text-base md:text-lg leading-relaxed text-balance"
        >
          UCSD Managerial Economics. Founded two companies. Built an audience of
          10M+. Now applying that founder lens to product management.
        </p>

        <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            as="a"
            href="/work"
            className="font-mono text-[12px] tracking-[0.22em] uppercase bg-[var(--color-gold)] text-[var(--color-bg)] px-7 py-4 rounded-[2px] hover:bg-[var(--color-text)] transition-colors duration-300"
          >
            View My Work →
          </MagneticButton>
          <MagneticButton
            as="a"
            href="https://robellemma.com/s/Resume-Robel-Lemma.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] tracking-[0.22em] uppercase border border-[var(--color-text)]/30 text-[var(--color-text)] px-7 py-4 rounded-[2px] hover:border-[var(--color-text)] transition-colors duration-300"
          >
            Download Resume ↗
          </MagneticButton>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">
        <span>Scroll</span>
        <span className="block h-12 w-px bg-gradient-to-b from-[var(--color-muted)] to-transparent" />
      </div>
    </section>
  );
}
