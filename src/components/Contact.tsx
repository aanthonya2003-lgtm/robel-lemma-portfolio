"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-content > *",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
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
      className="relative py-28 md:py-44 bg-[var(--color-bg)] overflow-hidden"
      id="contact"
    >
      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        className="ghost-watermark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] z-0 whitespace-nowrap"
      >
        ROBEL
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <div className="contact-content">
          <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-6">
            / Let&apos;s Talk
          </div>
          <h2 className="font-display text-5xl md:text-8xl font-bold text-[var(--color-text)] leading-[0.95] mb-8 text-balance">
            Let&apos;s build something.
          </h2>
          <p className="text-[var(--color-text)]/80 text-lg md:text-xl max-w-2xl mx-auto mb-14 text-balance">
            Open to PM roles, advisory engagements, and venture conversations.
            Reach out — I respond within 48 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <MagneticButton
              as="a"
              href="/contact"
              className="font-mono text-[12px] tracking-[0.22em] uppercase bg-[var(--color-gold)] text-[var(--color-bg)] px-8 py-4 rounded-[2px] hover:bg-[var(--color-text)] transition-colors duration-300"
            >
              Send Me a Message →
            </MagneticButton>
            <MagneticButton
              as="a"
              href="mailto:robelblemma@gmail.com"
              className="font-mono text-[12px] tracking-[0.22em] uppercase border border-[var(--color-text)]/30 text-[var(--color-text)] px-8 py-4 rounded-[2px] hover:border-[var(--color-text)] transition-colors duration-300"
            >
              robelblemma@gmail.com
            </MagneticButton>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 pt-10 border-t border-white/10 max-w-3xl mx-auto">
            <a
              href="tel:+18583420231"
              className="group flex items-center gap-3 text-[var(--color-text)]/80 hover:text-[var(--color-gold)] transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] group-hover:text-[var(--color-gold)] transition-colors">
                Call
              </span>
              <span className="font-display text-xl">(858) 342-0231</span>
            </a>
            <span className="hidden sm:block w-px h-6 bg-white/10" />
            <a
              href="https://lemmalimited.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[var(--color-text)]/80 hover:text-[var(--color-gold)] transition-colors"
            >
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] group-hover:text-[var(--color-gold)] transition-colors">
                Book
              </span>
              <span className="font-display text-xl">lemmalimited.com ↗</span>
            </a>
          </div>

          <div className="mt-16 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)]">
            San Diego · CA — Available Worldwide
          </div>
        </div>
      </div>
    </section>
  );
}
