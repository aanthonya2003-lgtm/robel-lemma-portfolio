import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found",
  description: "404 — this page doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] bg-[var(--color-bg)] flex items-center justify-center px-6 md:px-10 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="ghost-watermark absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[42vw] z-0 leading-none"
      >
        404
      </div>
      <div className="relative z-10 max-w-2xl text-center">
        <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-gold)] mb-6">
          / 404 — Lost in transit
        </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-text)] leading-[0.95] mb-6 text-balance">
          That page doesn&apos;t exist.
        </h1>
        <p className="text-[var(--color-text)]/75 text-lg leading-relaxed mb-10 max-w-md mx-auto">
          The URL may have changed, or you followed a stale link. Let&apos;s get
          you back to something real.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="font-mono text-[12px] tracking-[0.22em] uppercase bg-[var(--color-gold)] text-[var(--color-bg)] px-7 py-4 rounded-[2px] hover:bg-[var(--color-text)] transition-colors duration-300"
          >
            Back to Home →
          </Link>
          <Link
            href="/work"
            className="font-mono text-[12px] tracking-[0.22em] uppercase border border-[var(--color-text)]/30 text-[var(--color-text)] px-7 py-4 rounded-[2px] hover:border-[var(--color-text)] transition-colors duration-300"
          >
            See My Work
          </Link>
        </div>
      </div>
    </main>
  );
}
