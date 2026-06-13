import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/work", label: "Engagements" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Philosophy" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-hairline py-3 md:py-4"
          : "bg-transparent border-transparent py-5 md:py-6"
      }`}
    >
      <div className="container-page flex items-center justify-between">
        {/* Brand Identity Logo */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="font-display text-sm tracking-tight font-semibold uppercase">
              Jeremiah Jideofor
            </span>
          </Link>

          {/* Subtle Cyber Status Indicator */}
          <div className="hidden lg:flex items-center gap-2 border border-hairline bg-surface/50 rounded-full px-3 py-1 font-mono text-[0.62rem] text-muted-foreground/80 tracking-widest uppercase">
            <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            SYSTEMS: SECURE
          </div>
        </div>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors relative group"
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              {l.label}
              <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider border border-hairline bg-surface/40 hover:bg-surface hover:border-primary/40 rounded-full pl-5 pr-2 py-1.5 transition-all"
          >
            Start Conversation
            <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center transition-transform group-hover:rotate-45">
              <ArrowIcon />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger menu */}
        <button
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 inline-flex flex-col items-center justify-center gap-1.5 border border-hairline rounded-full bg-surface/40"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-px w-5 bg-foreground transition-transform duration-300 ${open ? "translate-y-[2px] rotate-45" : ""}`} />
          <span className={`block h-px w-5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed inset-x-0 top-[64px] border-b border-hairline bg-background/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="container-page py-8 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-xl tracking-tight font-display font-medium text-muted-foreground hover:text-foreground border-b border-hairline/40 flex justify-between items-center"
              >
                {l.label}
                <span className="text-muted-foreground/45 text-xs font-mono">→</span>
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-between border border-hairline bg-surface rounded-full pl-5 pr-2 py-2 text-xs font-mono uppercase tracking-wider"
            >
              Start Conversation
              <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center">
                <ArrowIcon />
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
