"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-md bg-[var(--color-bg)]/70 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-[1600px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl md:text-2xl tracking-tight text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors"
          >
            Robel<span className="text-[var(--color-gold)]">.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="underline-link font-mono text-[12px] tracking-[0.18em] uppercase text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://robellemma.com/s/Resume-Robel-Lemma.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] tracking-[0.18em] uppercase border border-[var(--color-gold)] text-[var(--color-gold)] px-4 py-2 rounded-[2px] hover:bg-[var(--color-gold)] hover:text-[var(--color-bg)] transition-all duration-300"
              >
                Resume ↗
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden relative w-11 h-11 flex items-center justify-center -mr-2"
          >
            <span
              className={`absolute h-px w-6 bg-[var(--color-text)] transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-6 bg-[var(--color-text)] transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden bg-[var(--color-bg)]"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              }}
              className="h-full flex flex-col justify-center items-center gap-8 px-6"
            >
              {links.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                  }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl text-[var(--color-text)] hover:text-[var(--color-gold)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <a
                  href="https://robellemma.com/s/Resume-Robel-Lemma.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm tracking-[0.18em] uppercase border border-[var(--color-gold)] text-[var(--color-gold)] px-6 py-3 rounded-[2px]"
                >
                  Resume ↗
                </a>
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="absolute bottom-10 left-0 right-0 text-center font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-muted)]"
              >
                San Diego · CA
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
