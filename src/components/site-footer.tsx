import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Linkedin } from "lucide-react";

const SOCIALS = [
  { href: "https://instagram.com/customeragent.si", label: "Instagram", icon: <Instagram className="h-4 w-4" /> },
  { href: "https://linkedin.com/company/customeragent", label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
  { href: "https://x.com/customeragentsi", label: "X", icon: <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden><path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8-9.2L1 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L7.4 3.9H5.4L17.7 20Z" /></svg> },
];
import { Reveal } from "@/components/anim";

export function SiteFooter() {
  return (
    <footer className="grain relative overflow-hidden bg-ink text-ink-fg">
      <div className="grid-lines absolute inset-0" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="eyebrow text-signal">Let's talk</p>
          <Link
            to="/contact"
            className="group mt-4 inline-flex flex-wrap items-baseline gap-3"
          >
            <span className="headline text-4xl transition-colors group-hover:text-signal md:text-6xl">
              hello@customeragent.si
            </span>
            <ArrowUpRight className="h-8 w-8 text-ink-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal md:h-12 md:w-12" />
          </Link>
        </Reveal>

        <div className="mt-16 flex flex-col gap-8 border-t border-ink-border pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-xl font-bold tracking-tight">
            customeragent<span className="text-signal">.</span>
          </p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted" aria-label="Footer">
            <Link to="/" className="transition-colors hover:text-ink-fg">Home</Link>
            <Link to="/services" className="transition-colors hover:text-ink-fg">Services</Link>
            <Link to="/work" className="transition-colors hover:text-ink-fg">Work</Link>
            <Link to="/about" className="transition-colors hover:text-ink-fg">About</Link>
            <Link to="/blog" className="transition-colors hover:text-ink-fg">Blog</Link>
            <Link to="/contact" className="transition-colors hover:text-ink-fg">Contact</Link>
            <Link to="/privacy-policy" className="transition-colors hover:text-ink-fg">Privacy Policy</Link>
          </nav>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-border text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-signal hover:text-signal">
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} customeragent. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
