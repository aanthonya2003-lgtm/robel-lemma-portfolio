"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  format?: "number" | "year";
}

const STATS: Stat[] = [
  { value: 10, suffix: "M+", label: "Cross-Platform Views", format: "number" },
  { value: 2, suffix: "", label: "Companies Founded", format: "number" },
  { value: 4, suffix: "+", label: "Years Building", format: "number" },
  { value: 2025, suffix: "", label: "UCSD Class Year", format: "year" },
];

export default function Stats() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".stat-item");

      items.forEach((item, idx) => {
        const valEl = item.querySelector<HTMLSpanElement>(".stat-value");
        const labelEl = item.querySelector<HTMLDivElement>(".stat-label");
        if (!valEl) return;
        const target = parseFloat(valEl.dataset.value || "0");
        const format = valEl.dataset.format || "number";
        const obj = { v: 0 };

        gsap.fromTo(
          item,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: idx * 0.08,
            scrollTrigger: {
              trigger: rootRef.current,
              start: "top 80%",
              end: "bottom 30%",
              toggleActions: "play none none reverse",
            },
          }
        );

        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            if (format === "year") {
              valEl.textContent = Math.round(obj.v).toString();
            } else {
              valEl.textContent = Math.round(obj.v).toString();
            }
          },
        });

        if (labelEl) {
          gsap.fromTo(
            labelEl,
            { opacity: 0, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              delay: idx * 0.08 + 0.2,
              scrollTrigger: {
                trigger: rootRef.current,
                start: "top 80%",
                end: "bottom 30%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative py-20 md:py-32 border-y border-white/5 bg-[var(--color-surface)]/40"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item text-left md:text-center">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-3">
                {String(i + 1).padStart(2, "0")} /
              </div>
              <div className="font-display text-5xl md:text-7xl font-bold text-[var(--color-text)] leading-none">
                <span
                  className="stat-value"
                  data-value={s.value}
                  data-format={s.format}
                >
                  0
                </span>
                <span className="text-[var(--color-gold)]">{s.suffix}</span>
              </div>
              <div className="stat-label mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
