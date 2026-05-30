import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "PYR Studios — Case Study",
  description:
    "Co-founding PYR (Play Your Role) Studios — a Chula Vista–based content and strategy hub serving artists, musicians, and brands across Southern California.",
};

export default function PYRStudiosPage() {
  return (
    <main className="bg-[var(--color-bg)]">
      <CaseStudy
        index="02"
        name="PYR Studios"
        role="Co-Founder"
        thesis="Play Your Role — a content and strategy hub in Chula Vista, CA, built to be the operating partner for artists, musicians, and brands who don&rsquo;t need an agency, they need a teammate."
        heroStat={{ value: "SoCal", label: "Chula Vista · California" }}
        heroImage="https://images.squarespace-cdn.com/content/v1/68ffdfd4c75c430290b4067d/34c19c4a-f4fa-4945-97ae-32962d92106b/PNG+image+2.jpg"
        sections={[
          {
            label: "Problem",
            title: "Talent everywhere — operating infrastructure nowhere.",
            body: (
              <>
                <p>
                  Southern California is dense with artists, independent
                  musicians, and emerging brands. What it&apos;s short on — at
                  least at the indie tier — is the operating layer that turns
                  raw talent into consistent output.
                </p>
                <p>
                  Most of the people we wanted to work with were either DIYing
                  everything (and burning out) or getting priced into agency
                  contracts that didn&apos;t fit their stage. There was a gap in
                  the middle: a hub that could operate <em>with</em> them, not
                  for them.
                </p>
              </>
            ),
          },
          {
            label: "Research",
            title: "Listening tour before we built anything.",
            body: (
              <>
                <p>
                  Before we put up signage or branding, we ran a listening tour
                  — informal conversations with artists, managers, and brand
                  owners across the region. We were testing one hypothesis: was
                  the gap in tools, in time, or in trust?
                </p>
                <p>
                  Trust came up every single time. The clients we wanted had
                  been burned by people who didn&apos;t understand their work,
                  didn&apos;t deliver, or treated the relationship as
                  transactional. That insight changed the shape of PYR from
                  &ldquo;agency&rdquo; into &ldquo;operating partner.&rdquo;
                </p>
              </>
            ),
          },
          {
            label: "Execution",
            title: "Building a hub, not a service menu.",
            body: (
              <>
                <p>
                  Co-founding PYR meant making early decisions on positioning,
                  operating model, and the day-one client mix. We chose Chula
                  Vista intentionally — close enough to San Diego and Tijuana to
                  draw from both communities, far enough to be its own scene.
                </p>
                <p>
                  Where Lemma Limited was about scaling one operator&apos;s
                  output, PYR was about scaling many operators&apos; output
                  through a shared infrastructure: content production, creative
                  direction, social strategy, and the kind of unglamorous
                  back-office work that lets artists focus on craft.
                </p>
                <p>
                  My role split between strategy and operations — defining the
                  service shape, sitting in on client kickoffs, helping
                  formalize the working rhythms. Same operating instincts as
                  Lemma, applied to a multi-client business.
                </p>
              </>
            ),
          },
          {
            label: "Results",
            title: "A regional hub with a defensible identity.",
            body: (
              <>
                <p>
                  PYR established itself as a recognizable Chula Vista–based
                  studio operating across artists, musicians, and brands. The
                  win that mattered most: clients who came in for one engagement
                  stayed for the next one. Retention is the lagging indicator
                  that says the operating model is actually working.
                </p>
                <p>
                  PYR also gave me reps I couldn&apos;t have gotten anywhere
                  else — cross-functional collaboration, prioritization across
                  competing client needs, and the operational humility of
                  shipping in a team where the founders are also the operators.
                </p>
              </>
            ),
          },
          {
            label: "Learnings",
            title: "The PM muscles I built here.",
            body: (
              <>
                <p>
                  <strong className="text-[var(--color-text)]">
                    Customer research compounds.
                  </strong>{" "}
                  The listening tour we did at the start was the single highest
                  ROI investment in the business. Every later decision got
                  cheaper because of it. I now treat customer discovery as a
                  non-negotiable phase, not a thing to skip when timelines slip.
                </p>
                <p>
                  <strong className="text-[var(--color-text)]">
                    Positioning is a constraint, not a tagline.
                  </strong>{" "}
                  Choosing &ldquo;operating partner&rdquo; over
                  &ldquo;agency&rdquo; ruled out clients, services, and revenue
                  shapes. That was the point. The discipline of saying no is
                  what made the brand legible.
                </p>
                <p>
                  <strong className="text-[var(--color-text)]">
                    Multi-stakeholder PM is its own skill.
                  </strong>{" "}
                  Running a hub is closer to PM in a platform business than
                  anything else I&apos;ve done. Different users with different
                  goals, all sharing infrastructure. That muscle is exactly what
                  I want to keep training in a product org.
                </p>
              </>
            ),
          },
        ]}
        next={{
          label: "Lemma Limited — 10M+ views, founder-led.",
          href: "/work/lemma-limited",
        }}
      />
    </main>
  );
}
