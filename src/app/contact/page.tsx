import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Robel Lemma — Product Manager, founder, and digital strategist based in San Diego. Reply within 48 hours.",
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-bg)] min-h-[100dvh]">
      <section className="relative pt-32 md:pt-44 pb-20 md:pb-32 px-6 md:px-10 overflow-hidden">
        <div
          aria-hidden="true"
          className="ghost-watermark absolute right-[-3vw] top-[15%] text-[20vw] z-0 hidden md:block"
        >
          CONTACT
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — copy */}
            <div className="lg:col-span-5">
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-6">
                / Get in Touch
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-text)] leading-[0.95] mb-8 text-balance">
                Let&apos;s build something.
              </h1>
              <p className="text-[var(--color-text)]/80 text-lg leading-relaxed mb-10 text-balance">
                Open to PM roles, advisory engagements, and venture
                conversations. The fastest way to reach me is the form — or
                pick your channel below.
              </p>

              <div className="space-y-6 border-t border-white/10 pt-8">
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] mb-2">
                    Email
                  </div>
                  <a
                    href="mailto:robelblemma@gmail.com"
                    className="font-display text-xl md:text-2xl text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors underline-link"
                  >
                    robelblemma@gmail.com
                  </a>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] mb-2">
                    Phone
                  </div>
                  <a
                    href="tel:+18583420231"
                    className="font-display text-xl md:text-2xl text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors underline-link"
                  >
                    (858) 342-0231
                  </a>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] mb-2">
                    Book
                  </div>
                  <a
                    href="https://lemmalimited.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl md:text-2xl text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors underline-link"
                  >
                    lemmalimited.com ↗
                  </a>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-muted)] mb-2">
                    Location
                  </div>
                  <div className="font-display text-xl md:text-2xl text-[var(--color-text)]">
                    San Diego, CA
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              <div className="bg-[var(--color-surface)]/60 backdrop-blur-sm border border-white/10 rounded-[var(--radius-card)] p-6 md:p-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
