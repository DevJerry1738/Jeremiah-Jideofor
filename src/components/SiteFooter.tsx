import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline mt-32 bg-surface/25 relative overflow-hidden">
      {/* Decorative Blueprint dots */}
      <div className="absolute inset-0 cyber-dots pointer-events-none opacity-40" />

      <div className="container-page py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Main CTA */}
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">[ ENGAGEMENT OPPORTUNITY ]</p>
            <h2 className="display-lg uppercase max-w-2xl font-semibold tracking-tight">
              Have a project in mind?
              <br />
              <span className="text-muted-foreground">Let's build something meaningful.</span>
            </h2>
            
            <div className="mt-12 flex flex-col sm:flex-row items-start gap-4">
              <a
                href="mailto:jideoforjeremiah@gmail.com"
                className="group inline-flex items-center gap-4 border border-hairline hover:border-primary bg-surface/50 rounded-full pl-6 pr-2 py-2 text-xs font-mono uppercase tracking-wider transition-all"
              >
                jideoforjeremiah@gmail.com
                <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center transition-transform group-hover:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center border border-hairline hover:border-foreground/40 rounded-full px-6 py-4 text-xs font-mono uppercase tracking-wider transition-colors"
              >
                Secure WhatsApp Chat →
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-5 grid grid-cols-2 gap-8 text-sm pt-6 md:pt-0">
            <div>
              <p className="eyebrow mb-5">[ NAVIGATE ]</p>
              <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
                <li><Link to="/work" className="text-muted-foreground hover:text-foreground link-underline">Selected Work</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-foreground link-underline">Services</Link></li>
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground link-underline">Philosophy</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground link-underline">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5">[ ELSEWHERE ]</p>
              <ul className="space-y-3 font-mono text-xs uppercase tracking-wider">
                <li><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground link-underline">LinkedIn</a></li>
                <li><a href="https://github.com/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground link-underline">GitHub</a></li>
                <li><a href="https://wa.me/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground link-underline">WhatsApp</a></li>
                <li><a href="mailto:jideoforjeremiah@gmail.com" className="text-muted-foreground hover:text-foreground link-underline">Email Direct</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Footer Signature */}
        <div className="mt-20 pt-8 border-t border-hairline flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-[0.68rem] text-muted-foreground font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-8">
            <p>© {year} Jeremiah Jideofor — Technology Consultant.</p>
            <span className="hidden sm:inline text-muted-foreground/30">|</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span>STATUS: <span className="text-emerald-500">SECURED</span></span>
              <span>VER: <span className="text-foreground">2026.06-STABLE</span></span>
              <span>KEY: <span className="text-foreground">0x4F7B22AC</span></span>
            </div>
          </div>
          <p className="uppercase tracking-widest text-muted-foreground/50">ABUJA, NG · Distributed Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
