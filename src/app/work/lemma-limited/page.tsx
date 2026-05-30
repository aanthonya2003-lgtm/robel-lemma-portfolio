import type { Metadata } from "next";
import CaseStudy from "@/components/CaseStudy";

export const metadata: Metadata = {
  title: "Lemma Limited — Case Study",
  description:
    "How Robel Lemma founded Lemma Limited and grew it to 10M+ cross-platform views through short-form media, audience research, and disciplined iteration.",
};

export default function LemmaLimitedPage() {
  return (
    <main className="bg-[var(--color-bg)]">
      <CaseStudy
        index="01"
        name="Lemma Limited"
        role="Founder · CEO"
        thesis="A media startup built on the bet that short-form storytelling, treated like product, can move audiences at scale — with founder-level discipline replacing studio-level overhead."
        heroStat={{ value: "10M+", label: "Cross-platform views" }}
        heroImage="https://images.squarespace-cdn.com/content/v1/68ffdfd4c75c430290b4067d/4001db17-8e47-4bcf-a0c3-23968a8b2009/Untitled-173.jpg"
        externalLink={{ label: "lemmalimited.com", href: "https://lemmalimited.com" }}
        sections={[
          {
            label: "Problem",
            title: "Why most short-form media never compounds.",
            body: (
              <>
                <p>
                  Creator-led media looks abundant from the outside. From the
                  inside, most of it never compounds. Posts ship without a
                  hypothesis. Numbers come back without a debrief. The next post
                  gets made the same way as the last one.
                </p>
                <p>
                  The gap I saw: there was no shortage of talent or distribution
                  — there was a shortage of <em>operating discipline</em>. The
                  same people who would A/B test a landing page would publish
                  ten videos a week with zero documented thesis. I wanted to run
                  media the way PMs run product.
                </p>
              </>
            ),
          },
          {
            label: "Research",
            title: "Validating the audience before scaling the format.",
            body: (
              <>
                <p>
                  Before committing to a content pillar, I mapped the audience
                  signal manually — comments, save rates, watch-through curves,
                  share velocity. I treated each platform like a different
                  market: a winning hook on TikTok is a dying hook on Reels two
                  weeks later.
                </p>
                <p>
                  I documented every test in a simple operating log: what we
                  tried, what we expected, what actually happened. That log
                  became the moat. After 90 days we could predict performance
                  bands on most posts inside ±25%. Nothing fancy — just
                  discipline that most creator teams skip.
                </p>
              </>
            ),
          },
          {
            label: "Execution",
            title: "Treating the content engine like a product backlog.",
            body: (
              <>
                <p>
                  We ran the company on a weekly cadence. Monday: review last
                  week&apos;s analytics, identify the top-performing hook
                  patterns, formalize the learning. Tuesday–Thursday: shoot and
                  cut against a brief, not against vibes. Friday: ship and
                  measure.
                </p>
                <p>
                  Every brief had three things — the audience it was for, the
                  emotional take-away, and the testable hypothesis. If a video
                  didn&apos;t have all three, it didn&apos;t get shot. That
                  single filter killed about a third of our backlog and
                  doubled our hit rate.
                </p>
                <p>
                  Distribution wasn&apos;t an afterthought either. We had a
                  cross-platform repurpose flow, native-first cuts per platform,
                  and a posting window calibrated to each channel&apos;s
                  audience timezone. Tools I leaned on: Notion for the backlog,
                  GA4 + native analytics for measurement, and a lightweight CRM
                  approach to track the most engaged accounts as a proto-fan
                  base.
                </p>
              </>
            ),
          },
          {
            label: "Results",
            title: "10M+ views — and a repeatable operating system.",
            body: (
              <>
                <p>
                  Lemma Limited crossed{" "}
                  <span className="text-[var(--color-gold)]">
                    10M+ cross-platform views
                  </span>{" "}
                  while staying lean. More importantly, by the end the engine
                  was repeatable — we could brief a new content pillar and have
                  a credible performance forecast before the first cut shipped.
                </p>
                <p>
                  Beyond the headline number, the business compounded in ways
                  that mattered to me as a founder: a documented playbook, a
                  small but loyal returning audience, and inbound conversations
                  with brands and artists who wanted to plug into the system.
                </p>
              </>
            ),
          },
          {
            label: "Learnings",
            title: "What I&rsquo;d do differently next time.",
            body: (
              <>
                <p>
                  <strong className="text-[var(--color-text)]">
                    Pick a smaller wedge earlier.
                  </strong>{" "}
                  Generalist content is forgiving in the first month and brutal
                  by month six. I would now pre-commit to a tighter niche before
                  validation, even at the cost of slower early growth.
                </p>
                <p>
                  <strong className="text-[var(--color-text)]">
                    Build the measurement system on day one.
                  </strong>{" "}
                  We built ours around month three, which means our first ninety
                  days of learning are blurrier than they should be. A clean
                  metrics layer compounds — set it up before you ship a single
                  post.
                </p>
                <p>
                  <strong className="text-[var(--color-text)]">
                    Treat distribution as a product surface.
                  </strong>{" "}
                  The biggest wins came when we stopped thinking of platforms as
                  pipes and started thinking of them as distinct products with
                  distinct users. That mental shift is the same one good PMs
                  make about channels in B2B.
                </p>
              </>
            ),
          },
        ]}
        next={{
          label: "PYR Studios — Content & strategy hub.",
          href: "/work/pyr-studios",
        }}
      />
    </main>
  );
}
