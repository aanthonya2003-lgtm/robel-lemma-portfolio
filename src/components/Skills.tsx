"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SKILL_GROUPS = [
  {
    label: "Product & UX",
    skills: [
      "Figma",
      "Productboard",
      "Jira",
      "Miro",
      "Notion",
      "Roadmapping",
      "Persona Development",
      "PRD Writing",
      "Agile / Scrum",
    ],
  },
  {
    label: "Analytics",
    skills: [
      "SQL",
      "Excel",
      "Google Analytics 4",
      "A/B Testing",
      "Data Analysis",
      "CRM Segmentation",
      "Market Research",
    ],
  },
  {
    label: "Marketing & Growth",
    skills: [
      "SEO (GSC, SEMrush)",
      "Email Marketing (Mailchimp, HubSpot)",
      "Social Analytics",
    ],
  },
  {
    label: "Core",
    skills: [
      "User Research",
      "Product Strategy",
      "Go-to-Market Planning",
      "Cross-Functional Collaboration",
      "Customer Journey Mapping",
    ],
  },
];

// Flatten for marquee tracks
const ALL_SKILLS = SKILL_GROUPS.flatMap((g) => g.skills);
const ROW_A = ALL_SKILLS.slice(0, Math.ceil(ALL_SKILLS.length / 2));
const ROW_B = ALL_SKILLS.slice(Math.ceil(ALL_SKILLS.length / 2));

export default function Skills() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-heading > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
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

      gsap.fromTo(
        ".skill-group",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skill-groups",
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
      className="relative py-24 md:py-32 bg-[var(--color-surface)]/40 border-y border-white/5 overflow-hidden"
      id="skills"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="skills-heading flex flex-col md:flex-row md:items-end md:justify-between mb-14 md:mb-20 gap-4">
          <div>
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-4">
              / Capabilities
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-[var(--color-text)] leading-[1.05] text-balance max-w-3xl">
              The toolkit.
            </h2>
          </div>
          <p className="text-[var(--color-text)]/70 max-w-md text-sm md:text-base">
            Discovery to delivery — the stack I use to ship product, measure
            impact, and grow audience.
          </p>
        </div>
      </div>

      {/* Infinite marquee rows */}
      <div className="relative w-full mb-10 no-scrollbar overflow-hidden">
        <div className="flex marquee-track gap-4 w-max">
          {[...ROW_A, ...ROW_A].map((s, i) => (
            <span
              key={`a-${i}`}
              className="shrink-0 font-mono text-sm md:text-base tracking-[0.05em] uppercase text-[var(--color-text)]/80 border border-white/10 px-5 py-3 rounded-[var(--radius-button)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="relative w-full mb-16 no-scrollbar overflow-hidden">
        <div
          className="flex marquee-track gap-4 w-max"
          style={{ animationDirection: "reverse", animationDuration: "38s" }}
        >
          {[...ROW_B, ...ROW_B].map((s, i) => (
            <span
              key={`b-${i}`}
              className="shrink-0 font-mono text-sm md:text-base tracking-[0.05em] uppercase text-[var(--color-text)]/80 border border-white/10 px-5 py-3 rounded-[var(--radius-button)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Grouped detail */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="skill-groups grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {SKILL_GROUPS.map((g) => (
            <div key={g.label} className="skill-group">
              <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-4 pb-3 border-b border-white/10">
                {g.label}
              </div>
              <ul className="space-y-2">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="text-[var(--color-text)]/85 text-sm md:text-base"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
