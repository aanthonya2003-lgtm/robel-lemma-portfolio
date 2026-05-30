import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import FeaturedWork from "@/components/FeaturedWork";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <FeaturedWork />
      <About />
      <Skills />
      <Contact />
      <footer className="border-t border-white/10 py-10 px-6 md:px-10 bg-[var(--color-bg)]">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[var(--color-muted)]">
          <div className="font-mono text-[10px] tracking-[0.22em] uppercase">
            © {new Date().getFullYear()} Robel Lemma · San Diego, CA
          </div>
          <div className="flex items-center gap-6 font-mono text-[10px] tracking-[0.22em] uppercase">
            <a
              href="mailto:robelblemma@gmail.com"
              className="hover:text-[var(--color-gold)] transition-colors"
            >
              robelblemma@gmail.com
            </a>
            <a
              href="tel:+18583420231"
              className="hover:text-[var(--color-gold)] transition-colors"
            >
              (858) 342-0231
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
