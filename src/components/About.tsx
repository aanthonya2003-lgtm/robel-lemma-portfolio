"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cinematic parallax on photo
      gsap.to(".about-photo-inner", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(".about-photo-frame", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Photo clip reveal
      gsap.fromTo(
        ".about-photo-clip",
        { clipPath: "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Text reveal
      gsap.fromTo(
        ".about-text > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".about-text",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Highlight bullets
      gsap.fromTo(
        ".about-highlight",
        { opacity: 0, x: -16 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".about-highlights",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative py-24 md:py-40 overflow-hidden"
      id="about"
    >
      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="ghost-watermark absolute right-[-3vw] top-[10%] text-[18vw] z-0 hidden md:block"
      >
        ABOUT
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          {/* Photo */}
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="about-photo-frame relative">
              <div className="about-photo-clip relative aspect-[3/4] overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)]">
                <div
                  className="about-photo-inner absolute inset-[-8%] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.squarespace-cdn.com/content/v1/68ffdfd4c75c430290b4067d/6e876833-6154-4b10-8662-4e82eed00f7a/IMG_3540.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/40 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-[var(--color-gold)] text-[var(--color-bg)] px-5 py-3 rounded-[var(--radius-button)]">
                <div className="font-mono text-[10px] tracking-[0.22em] uppercase">
                  Class of
                </div>
                <div className="font-display text-3xl font-bold leading-none">
                  2025
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="about-text">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-4">
                / About
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-text)] leading-[1.05] mb-8 text-balance">
                A founder mindset, applied to product.
              </h2>
              <div className="space-y-5 text-[var(--color-text)]/85 text-base md:text-lg leading-relaxed max-w-2xl">
                <p>
                  I&apos;m Robel — a Product Manager and founder based in San Diego. I
                  graduated from UC San Diego in 2025 with a B.S. in Business /
                  Managerial Economics, but most of what I know about building came
                  from running real ventures while still a student.
                </p>
                <p>
                  At <span className="text-[var(--color-gold)]">Lemma Limited</span>,
                  I led a small team to <span className="text-[var(--color-text)]">10M+ cross-platform views</span> —
                  shipping content, measuring what worked, and rebuilding the
                  playbook every week. At{" "}
                  <span className="text-[var(--color-gold)]">PYR Studios</span>,
                  I co-founded a content and strategy hub serving artists,
                  musicians, and brands across Southern California.
                </p>
                <p>
                  Today I&apos;m bringing that founder lens — bias for action, ROI
                  thinking, customer obsession — into product management roles where
                  I can do the same work at scale.
                </p>
              </div>

              <div className="about-highlights mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl">
                {[
                  "Founder of 2 ventures",
                  "10M+ audience built from zero",
                  "UCSD Managerial Economics &apos;25",
                  "Bilingual · SoCal-based",
                ].map((h, i) => (
                  <div
                    key={i}
                    className="about-highlight flex items-center gap-3 text-[var(--color-text)]/80 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--color-gold)] rotate-45 shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: h }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
