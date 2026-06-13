import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Capabilities — Jeremiah Jideofor" },
      { name: "description", content: "Consulting services and custom solutions: business systems, corporate platforms, security reviews, and strategic technical advisory." },
      { property: "og:title", content: "Capabilities — Jeremiah Jideofor" },
      { property: "og:description", content: "Consulting services and custom solutions: business systems, corporate platforms, security reviews, and strategic technical advisory." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const capabilities = [
  {
    n: "01",
    title: "Digital Presence",
    problem: "Premium offline brands and advisory firms often have slow, template-built web portals that fail to reflect their institutional credibility to high-value clients.",
    solution: "We design and engineer bespoke, typography-focused editorial websites powered by a headless CMS and served over global edge CDN networks.",
    value: "Establishes immediate trust with institutional partners, maximizes page performance, and simplifies content publishing without developer intervention.",
    outcome: "Perfect 100/100 Lighthouse metrics, sub-second global load times, secure content structures, and fully responsive layouts."
  },
  {
    n: "02",
    title: "Business Systems",
    problem: "Critical business workflows rely on shared spreadsheets, manual messaging threads, and fragmented data pools, leading to transcription errors and delayed billing.",
    solution: "Bespoke database engines, retailer ordering platforms, and automated workflow pipelines built around how your organization actually works.",
    value: "Eliminates operational latency, prevents manual record-keeping errors, and consolidates sales or inventory ledgers in real-time.",
    outcome: "Clean transactional tables, automated invoice exports, credit validation checks, and simple dashboard controls."
  },
  {
    n: "03",
    title: "Operational Software",
    problem: "Internal staff utilize overly complex admin dashboards that expose sensitive user details and leave no auditable trace of administrative actions.",
    solution: "Secure, role-based admin consoles and user management portals configured with least-privilege constraints and activity tracking.",
    value: "Safeguards proprietary corporate data, limits internal exposure risk, and speeds up operational checklists.",
    outcome: "Audit-ready system logs, multi-stage approval flows, granular permission rules (RBAC), and optimized batch operations."
  },
  {
    n: "04",
    title: "Custom Platforms",
    problem: "Off-the-shelf SaaS systems fail to reflect complex regional logistics, multi-currency credit rules, or specialized NGO field metric tracking.",
    solution: "Bespoke web applications built on secure, scalable cloud architectures, designed to handle offline data queues and high database concurrency.",
    value: "Complete technical independence. The software adapts exactly to your business model, with zero licensing overhead.",
    outcome: "Optimized database schemas, high-throughput APIs, custom task queues, and clean, self-documenting codebases."
  },
  {
    n: "05",
    title: "Security-Focused Engineering",
    problem: "Legacy codebases or third-party web apps are shipped with unvalidated authentication loops, unsecured databases, and data-leaking API routes.",
    solution: "Comprehensive application-level security reviews, threat-modeling logs, and structural code hardening based on OWASP benchmarks.",
    value: "Protects sensitive user records, prevents injection attacks, and establishes compliance for formal enterprise security audits.",
    outcome: "Secured authentication modules, clean input sanitation pipelines, threat log reports, and a prioritized vulnerability fix roadmap."
  },
  {
    n: "06",
    title: "Technology Consulting",
    problem: "Leadership teams face engineering uncertainty when planning migrations, selecting cloud architectures, or rebuilding legacy systems, risking costly delays.",
    solution: "Strategic technology advisory, buy-vs-build analysis, refactoring roadmaps, and independent technical code audits.",
    value: "Saves significant cost by preventing architectural mistakes, ensuring your tech investments align with business strategy.",
    outcome: "Detailed architecture design documents, migration blueprints, stack selection reviews, and written code health reports."
  }
];

function ServicesPage() {
  const [activeCapability, setActiveCapability] = useState<string>("01");

  return (
    <>
      <section className="pt-36 md:pt-48 pb-20 container-page relative overflow-hidden scanline">
        {/* Subtle Grid overlay */}
        <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.2]" />
        
        <p className="eyebrow mb-6">[ SERVICES & CAPABILITIES ]</p>
        <h1 className="display-xl max-w-[18ch] font-bold text-foreground">
          BUSINESS SOLUTIONS FOR SCALE.
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground text-lg font-light leading-relaxed">
          We construct secure, maintainable web systems tailored for high-stakes business environments. Scoped around commercial outcomes and structural security.
        </p>

        {/* Tab Selector */}
        <div className="mt-16 flex flex-wrap gap-2 border-b border-hairline pb-8 font-mono text-xs">
          {capabilities.map((c) => (
            <button
              key={c.n}
              onClick={() => setActiveCapability(c.n)}
              className={`px-5 py-3 rounded border transition-all ${
                activeCapability === c.n
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-hairline hover:bg-surface/50 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.n} // {c.title.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <div className="hairline" />

      {/* Services Matrix Details */}
      <section className="container-page py-16 md:py-24 relative">
        <div className="absolute inset-0 cyber-dots opacity-[0.15] pointer-events-none" />

        {capabilities
          .filter((c) => c.n === activeCapability)
          .map((c) => (
            <Reveal key={c.n}>
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Visual Accent Column */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="border border-hairline bg-surface/30 p-8 rounded relative overflow-hidden">
                    <span className="font-mono text-xs text-primary">[ CAPABILITY PROFILE ]</span>
                    <h2 className="text-3xl font-display font-semibold uppercase tracking-tight mt-4">{c.title}</h2>
                    <div className="mt-8 pt-6 border-t border-hairline/60 font-mono text-[0.62rem] text-muted-foreground space-y-2">
                      <p>SERVICE CODE: <span className="text-foreground">SRV-{c.n}-PRO</span></p>
                      <p>CLASSIFICATION: <span className="text-foreground">ENTERPRISE READY</span></p>
                      <p>DELIVERY PROTOCOL: <span className="text-emerald-500 font-semibold">DIRECT CONTRACT</span></p>
                    </div>
                  </div>

                  <div className="border border-hairline bg-surface/10 p-6 rounded flex items-center justify-between font-mono text-xs text-muted-foreground">
                    <span>STATUS: AVAILABLE Q2</span>
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  </div>
                </div>

                {/* Structured Consulting Matrix */}
                <div className="lg:col-span-8 space-y-10">
                  {/* Problem Statement */}
                  <div className="border-b border-hairline pb-6">
                    <p className="eyebrow text-red-500/80 mb-2">[ 01 / THE BUSINESS PROBLEM ]</p>
                    <p className="text-base text-muted-foreground font-light leading-relaxed">{c.problem}</p>
                  </div>

                  {/* Proposed Solution */}
                  <div className="border-b border-hairline pb-6">
                    <p className="eyebrow text-primary mb-2">[ 02 / OUR TECHNICAL SOLUTION ]</p>
                    <p className="text-base text-foreground font-light leading-relaxed">{c.solution}</p>
                  </div>

                  {/* Business Value */}
                  <div className="border-b border-hairline pb-6">
                    <p className="eyebrow text-foreground mb-2">[ 03 / MEASURABLE BUSINESS VALUE ]</p>
                    <p className="text-base text-muted-foreground font-light leading-relaxed">{c.value}</p>
                  </div>

                  {/* Expected Outcome */}
                  <div className="bg-primary/5 border border-primary/20 p-6 rounded">
                    <p className="eyebrow text-primary mb-2">[ 04 / EXPECTED TECHNICAL DELIVERABLE ]</p>
                    <p className="text-base text-foreground font-medium leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
      </section>

      <div className="hairline" />

      {/* Engagement Workflow CTA */}
      <section className="container-page py-24 md:py-32 relative">
        <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />
        <Reveal>
          <div className="rounded border border-hairline p-8 md:p-14 bg-surface/30 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <p className="eyebrow mb-3">[ ENGAGEMENT LIFECYCLE ]</p>
                <h3 className="text-2xl font-display font-semibold uppercase tracking-tight text-foreground">How We Partner.</h3>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed font-light">
                  Every project starts with a structured discovery call to clarify commercial outcomes. We provide a transparent technical proposal detailing scope, database models, security provisions, and fixed-price contracts.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-all"
                >
                  Initiate Discussion
                  <span className="w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
