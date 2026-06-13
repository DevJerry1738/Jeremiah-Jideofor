import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Philosophy — Jeremiah Jideofor" },
      { name: "description", content: "Our engineering philosophy, security-first methodology, product mindset, and core consulting values." },
      { property: "og:title", content: "Philosophy — Jeremiah Jideofor" },
      { property: "og:description", content: "Our engineering philosophy, security-first methodology, product mindset, and core consulting values." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const principles = [
  {
    n: "01",
    t: "Clarity Before Code",
    d: "Every software engineering engagement must be anchored in a commercial or operational objective. We write code only when it provides direct leverage, automates manual overhead, or contains risk."
  },
  {
    n: "02",
    t: "Boring is Stable",
    d: "We choose mature, highly supported stacks and design predictable database schemas. Code is authored to be inherited. Future engineering teams should read, maintain, and expand the system with zero friction."
  },
  {
    n: "03",
    t: "Least Privilege by Default",
    d: "Authentication and authorization are treated as base layers, not additions. We restrict database permissions, lock API routes, and audit administrative actions to protect user records."
  },
  {
    n: "04",
    t: "Transparent Deliverables",
    d: "We provide detailed technical documentation, complete type definitions, and test suites. You retain complete ownership of the system, with zero vendor lock-in."
  }
];

function AboutPage() {
  return (
    <>
      <section className="pt-36 md:pt-48 pb-20 container-page relative overflow-hidden scanline">
        {/* Subtle Grid overlay */}
        <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.2]" />
        
        <p className="eyebrow mb-6">[ CONSULTING MANIFESTO ]</p>
        <h1 className="display-xl max-w-[20ch] font-bold text-foreground">
          PHILOSOPHY OVER BIOGRAPHY.
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground text-lg font-light leading-relaxed">
          Establishing resilient digital infrastructure. How we think about software, manage operational risk, and deliver value to organizations.
        </p>
      </section>

      <div className="hairline" />

      {/* CORE PILLARS OF OPERATION */}
      <section className="container-page py-20 md:py-32 relative">
        <div className="absolute inset-0 cyber-dots opacity-[0.15] pointer-events-none" />
        
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-4">
            <p className="eyebrow">[ CORE PERSPECTIVE ]</p>
            <h2 className="text-3xl font-display font-semibold uppercase tracking-tight mt-3">Strategic Pillars</h2>
          </div>
          
          <div className="md:col-span-8 space-y-12 text-sm leading-relaxed">
            <Reveal>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-2">[ APPROACH TO TECHNOLOGY ]</h3>
                <h4 className="text-xl font-semibold uppercase tracking-tight text-foreground mb-3">Pragmatic & Purposeful Engineering</h4>
                <p className="text-muted-foreground font-light max-w-2xl leading-relaxed">
                  Code is a maintenance liability; working systems are assets. Stacks are selected for their long-term viability, documentation quality, and support. We build using modern TypeScript, React, and PostgreSQL, structuring database queries and frontend views to guarantee sub-second loads and stable performance under load.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-2">[ SECURITY-FIRST THINKING ]</h3>
                <h4 className="text-xl font-semibold uppercase tracking-tight text-foreground mb-3">Defensive by Default</h4>
                <p className="text-muted-foreground font-light max-w-2xl leading-relaxed">
                  With formal MSc training in cybersecurity, we build defensively. Every web asset is designed around robust request sanitation, access control verification, and safe data schemas. We actively threat-model database boundaries, third-party integrations, and authorization flows to ensure your assets remain hardened against modern vulnerability vectors.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-2">[ PRODUCT MINDSET ]</h3>
                <h4 className="text-xl font-semibold uppercase tracking-tight text-foreground mb-3">Focus on Operational Leverage</h4>
                <p className="text-muted-foreground font-light max-w-2xl leading-relaxed">
                  We look at software through an operational lens. We study how your staff coordinates orders, manages donor records, or publishes reports to map logical database relationships. The goal is to build interfaces that reduce user fatigue, eliminate transcription errors, and accelerate core operations.
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="border-l-2 border-primary pl-6">
                <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-2">[ PROFESSIONAL VALUES ]</h3>
                <h4 className="text-xl font-semibold uppercase tracking-tight text-foreground mb-3">Uncompromising Transparency</h4>
                <p className="text-muted-foreground font-light max-w-2xl leading-relaxed">
                  A consulting engagement demands absolute clarity on progress, timelines, and risks. We maintain structured project checklists, write clean and self-documenting code, and supply detailed schemas. You retain complete ownership and clarity over your technology assets.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="hairline" />

      {/* CORE OPERATIONAL PRINCIPLES */}
      <section className="container-page py-20 md:py-32 relative">
        <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />
        
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow">[ METHODOLOGY ]</p>
            <h2 className="text-3xl font-display font-semibold uppercase tracking-tight mt-3">OPERATING PRINCIPLES</h2>
          </div>
          
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-10">
            {principles.map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <div className="border border-hairline bg-surface/25 p-6 rounded hover:border-primary/20 transition-colors">
                  <span className="font-mono text-xs text-primary">{p.n} // RULES</span>
                  <h3 className="text-xl font-semibold uppercase tracking-tight mt-4 text-foreground">{p.t}</h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-light">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
