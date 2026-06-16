import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal, SplitReveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jeremiah Jideofor — Independent Technology Consultant" },
      { name: "description", content: "Designing and developing secure web applications, business systems, and digital experiences for modern organizations." },
      { property: "og:title", content: "Jeremiah Jideofor — Independent Technology Consultant" },
      { property: "og:description", content: "Designing and developing secure web applications, business systems, and digital experiences for modern organizations." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const featuredProjects = [
  {
    n: "01",
    name: "NUT",
    title: "Nigeria Union of Teachers — Website Modernization",
    challenge: "The Nigeria Union of Teachers had an outdated legacy website with no content management system, poor authentication infrastructure, no member engagement tools, and outdated technology stack. The organization represents 500k+ teachers across Nigeria's 36 states and needed a modern digital presence.",
    approach: "Architected a modern full-stack platform migrating from legacy MySQL to PostgreSQL (Supabase), implemented self-managed Supabase Auth replacing third-party OAuth, built a comprehensive Admin Dashboard with content management, and designed responsive UI with GSAP animations for engagement.",
    execution: "Built with React 19, TypeScript, Vite, TailwindCSS, shadcn/ui, Supabase, tRPC, and GSAP. Implemented Row-Level Security (RLS) policies, blog/news system, member join flow, newsletter subscriptions, support ticket submission, and full analytics dashboard.",
    impact: "Delivered a modern, animated platform serving 500k+ teachers with admin dashboard enabling content management without developer intervention. Features live news ticker, event management, and real-time member engagement. Live at nutng.org.",
  },
  {
    n: "02",
    name: "YIRH",
    title: "Youth in Research Hub — Website & Headless CMS",
    challenge: "YIRH had no digital presence to showcase research publications, team members, or accept member applications. The organization needed independent content management without requiring developer intervention for each update.",
    approach: "Designed a headless CMS architecture combining a public-facing website with a secure Admin Dashboard. Implemented Supabase Auth with role-based access (Admin/Editor), database-level Row-Level Security, and a multi-tab dashboard for content management.",
    execution: "Built with React 19, TypeScript, Vite, TailwindCSS, Supabase, React Query (7 custom hooks), and GSAP animations. Implemented Docker + Nginx containerization, 8-table PostgreSQL schema with 12+ RLS policies, file storage for publications and avatars, and markdown-based rich text editing.",
    impact: "Delivered a fully functional CMS allowing non-technical staff to independently manage publications, team profiles, blog posts, and applications. Provides secure role-based access, beautiful animations, light/dark theme support, and production-ready deployment. Live at youthinresearchhub.org.",
  },
  {
    n: "03",
    name: "PhishGuard",
    title: "PhishGuard NG — Phishing Simulation & Security Training Platform",
    challenge: "Phishing attacks are the leading entry point for corporate data breaches, yet traditional static security training lacks real-world impact. Organizations needed interactive testing to identify vulnerable employees and provide immediate, targeted training during the critical 'teachable moment.'",
    approach: "Created an interactive phishing simulation platform enabling organizations to run safe mock-phishing campaigns with individual click tracking, immediate educational intervention, and comprehensive performance analytics. Implemented role-based access for Admins, Analysts, and Viewers.",
    execution: "Built with React.js, Node.js/Express, MongoDB, JWT authentication, and bcrypt password hashing. Features campaign management, multi-scenario email templates, unique tracking URLs, real-time click analytics, just-in-time training videos, and standard CSV exports.",
    impact: "A fully functional security awareness platform demonstrating how active testing combined with immediate feedback elevates organizational security posture. Successfully implemented as a core Master's research project at the Nigerian Defence Academy. Open-source on GitHub (github.com/DevJerry1738/phishing-simulator).",
  },
];

const services = [
  { t: "Digital Presence", d: "High-performance editorial platforms that match offline reputational credibility, built to load instantly, rank well, and remain secure." },
  { t: "Business Systems", d: "Tailored workflow engines, ordering portals, and custom CRM systems designed specifically around how your team operates." },
  { t: "Operational Software", d: "Custom back-office panels, inventory systems, and dashboard management tools that increase internal team leverage." },
  { t: "Custom Platforms", d: "Specialized web systems engineered to consolidate multi-country operations, databases, or API pipelines." },
  { t: "Security-Focused Engineering", d: "Application architecture reviews, threat modeling, and code-hardening to align systems with modern security standards." },
  { t: "Technology Consulting", d: "Strategic advisory on software stack decisions, system refactoring roadmaps, and phased digital transformations." },
];

const insights: Array<{
  cat: string;
  title: string;
  read: string;
  slug: "/insights/least-privilege" | "/insights/replacing-spreadsheets" | "/insights/edge-delivery-security";
}> = [
  { cat: "Security", title: "Understanding Least Privilege: Designing Secure Access Control in Modern Business Software.", read: "5 min read", slug: "/insights/least-privilege" },
  { cat: "Product Development", title: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt.", read: "6 min read", slug: "/insights/replacing-spreadsheets" },
  { cat: "Business Technology", title: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets.", read: "4 min read", slug: "/insights/edge-delivery-security" },
];

function Index() {
  const [time, setTime] = useState("");
  
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Lagos" });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden scanline">
        {/* Subtle Cyber Grid Elements */}
        <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.25]" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 20%, rgba(234,179,8,0.08), transparent 40%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.03), transparent 50%)",
          }}
        />

        <div className="container-page relative w-full">
          {/* Header Strip inside Hero */}
          <div className="flex items-center justify-between mb-16 md:mb-24 font-mono text-[0.68rem] text-muted-foreground uppercase tracking-widest border-b border-hairline pb-4">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Available for strategic advisory & development
            </span>
            <span className="hidden md:block">ABUJA, NG · {time || "12:00"} WAT</span>
          </div>

          {/* Bold, Stacked, Oversized Headline */}
          <h1 className="display-xl tracking-tighter flex flex-col font-bold max-w-7xl leading-none">
            <span className="block text-foreground"><SplitReveal text="BUILDING" /></span>
            <span className="block text-primary"><SplitReveal text="SECURE" /></span>
            <span className="block text-foreground"><SplitReveal text="DIGITAL" /></span>
            <span className="block text-foreground"><SplitReveal text="SOLUTIONS" /></span>
          </h1>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-hairline pt-10">
            <div className="md:col-span-6">
              <Reveal delay={200}>
                <p className="text-sm font-mono text-muted-foreground/60 uppercase tracking-widest mb-3">
                  [ PRIMARY MISSION ]
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light">
                  Designing and developing secure web applications, business systems, and digital experiences for modern organizations that demand reliability, compliance, and scale.
                </p>
              </Reveal>
            </div>
            
            <div className="md:col-span-6 md:text-right">
              <Reveal delay={400}>
                <div className="flex flex-wrap md:justify-end items-center gap-4">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-95 transition-all"
                  >
                    Start a Conversation
                    <span className="w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground px-4 py-2 transition-colors border border-hairline rounded-full hover:bg-surface/40"
                  >
                    View Engagements
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CREDIBILITY STRIP */}
      <section className="border-y border-hairline bg-surface/30 relative">
        <div className="absolute inset-0 cyber-dots opacity-20 pointer-events-none" />
        <div className="container-page py-12 md:py-16 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Experience", val: "3+ Years Active" },
              { label: "Scope", val: "Multiple Sectors Served" },
              { label: "Methodology", val: "Security-First Focus" },
              { label: "Stack Integration", val: "Modern Cloud Architectures" },
            ].map((metric, idx) => (
              <Reveal key={metric.label} delay={idx * 100}>
                <div className="border-l border-primary/30 pl-4 md:pl-6 py-2">
                  <p className="text-[0.62rem] font-mono text-muted-foreground uppercase tracking-widest">{metric.label}</p>
                  <p className="mt-2 text-base md:text-lg font-semibold tracking-tight text-foreground">{metric.val}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <Marquee items={["Next.js", "React", "TypeScript", "PostgreSQL", "Node.js", "Access Security (RBAC)", "App Penetration Review", "System Architecture"]} />

      {/* SECTION 3 — SELECTED WORK */}
      <section className="container-page py-24 md:py-36">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div>
            <p className="eyebrow mb-4">[ 01 / SELECTED WORK ]</p>
            <h2 className="display-lg font-semibold max-w-3xl uppercase tracking-tight">
              Quiet systems<br />for critical outcomes.
            </h2>
          </div>
          <Link to="/work" className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground link-underline">
            All Engagements →
          </Link>
        </div>

        {/* Consultancy-style Immersive Case Studies */}
        <div className="space-y-24 md:space-y-36">
          {featuredProjects.map((p, idx) => (
            <Reveal key={p.n} delay={idx * 100}>
              <article className="grid md:grid-cols-12 gap-8 md:gap-16 border-t border-hairline pt-12">
                {/* Meta details */}
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-primary/70">{p.n} // CASE STUDY</span>
                  <h3 className="text-2xl md:text-3xl font-display font-semibold uppercase tracking-tight mt-4">
                    {p.name}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground mt-2">{p.title}</p>

                  <div className="mt-10 border border-hairline bg-surface/50 rounded p-4 font-mono text-[0.68rem] text-muted-foreground space-y-2">
                    <p className="flex justify-between border-b border-hairline/40 pb-1">
                      <span>CLASSIFICATION:</span> <span className="text-foreground">COMMERCIAL</span>
                    </p>
                    <p className="flex justify-between border-b border-hairline/40 pb-1">
                      <span>AUDIT STATE:</span> <span className="text-emerald-500">PASSED</span>
                    </p>
                    <p className="flex justify-between">
                      <span>INTEGRITY STATUS:</span> <span className="text-foreground font-semibold">VERIFIED</span>
                    </p>
                  </div>
                </div>

                {/* Grid of Outcome Details */}
                <div className="md:col-span-8 grid sm:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-8">
                    <div>
                      <p className="eyebrow mb-2">The Challenge</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.challenge}</p>
                    </div>
                    <div>
                      <p className="eyebrow mb-2">The Approach</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.approach}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <p className="eyebrow mb-2">The Execution</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.execution}</p>
                    </div>
                    <div className="border-t border-primary/20 pt-4 bg-primary/5 p-4 rounded">
                      <p className="eyebrow text-primary mb-2">Business Impact</p>
                      <p className="text-sm text-foreground leading-relaxed font-medium">{p.impact}</p>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 4 — SERVICES */}
      <section className="border-t border-hairline bg-surface/20 relative">
        <div className="absolute inset-0 cyber-grid opacity-[0.15] pointer-events-none" />
        <div className="container-page py-24 md:py-36 relative z-10">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="eyebrow mb-4">[ 02 / SERVICE CAPABILITIES ]</p>
              <h2 className="display-lg uppercase font-semibold">Business Solutions.</h2>
              <p className="mt-6 text-muted-foreground text-sm leading-relaxed max-w-sm">
                Engagements are structured entirely around business outcomes and risk containment. Modern tech stacks integrated with rigid security practices.
              </p>
              <Link to="/services" className="inline-flex items-center gap-2 mt-8 text-xs font-mono uppercase tracking-wider text-primary hover:text-primary/80 link-underline">
                View Full Capabilities →
              </Link>
            </div>
            
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-hairline border border-hairline">
              {services.map((s) => (
                <div key={s.t} className="bg-background p-8 md:p-10 hover-card-premium">
                  <p className="font-mono text-[0.62rem] text-primary tracking-widest uppercase mb-6">[ SOLUTION DEFINITION ]</p>
                  <h3 className="text-lg md:text-xl font-semibold uppercase tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-light">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — WHY WORK WITH ME */}
      <section className="container-page py-24 md:py-36">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">[ 03 / TRUST & PARTNERSHIP ]</p>
            <h2 className="display-lg uppercase font-semibold">Why Work With Me.</h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">
              Answers to the critical questions organizations ask when entrusting systems to an external consultant.
            </p>
          </div>
          
          <div className="md:col-span-8 space-y-12">
            {[
              {
                t: "Software Development Experience",
                d: "Over six years of hands-on experience building complex web platforms, business portals, and resilient systems. High familiarity with React, Node, TypeScript, and modern database patterns."
              },
              {
                t: "Cybersecurity Expertise",
                d: "Formal academic training culminating in an MSc in Cybersecurity. Application of strict OWASP benchmarks, robust authentication setups (RBAC/ABAC), and detailed system audits as baseline deliverables."
              },
              {
                t: "Business Understanding",
                d: "I focus on software that increases operating leverage, reduces transaction friction, and hardens operations. Stacks are selected to minimize ongoing maintenance costs."
              },
              {
                t: "End-to-End Delivery",
                d: "No outsourcing or passing off assignments. I manage the process directly—from scoping, system modeling, frontend/backend assembly, security review, and cloud release."
              },
              {
                t: "Long-Term Thinking",
                d: "Clean documentation, well-factored codebases, and structural transparency. Stacks are designed so your in-house team can easily inherit them without onboarding pain."
              }
            ].map((item, idx) => (
              <Reveal key={item.t} delay={idx * 100}>
                <div className="border-b border-hairline pb-8">
                  <div className="flex gap-4 items-baseline">
                    <span className="font-mono text-xs text-primary">0{idx + 1}.</span>
                    <h3 className="text-xl font-display font-semibold uppercase tracking-tight text-foreground">{item.t}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light pl-8 max-w-3xl">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — INSIGHTS */}
      <section className="border-t border-hairline bg-surface/10 relative">
        <div className="absolute inset-0 cyber-dots opacity-[0.25] pointer-events-none" />
        <div className="container-page py-24 md:py-36 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20">
            <div>
              <p className="eyebrow mb-4">[ 04 / INSIGHTS & JOURNAL ]</p>
              <h2 className="display-lg uppercase font-semibold">Strategic Thinking.</h2>
            </div>
            <Link to="/insights" className="text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground link-underline transition-colors">
              View All Articles →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {insights.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 150}>
                <Link
                  to={p.slug}
                  className="group border border-hairline bg-background p-8 hover-card-premium h-full flex flex-col justify-between transition-all hover:bg-surface/50"
                >
                  <div>
                    <span className="font-mono text-[0.62rem] text-primary tracking-widest uppercase border border-primary/20 rounded px-2 py-0.5">
                      {p.cat}
                    </span>
                    <h3 className="text-lg font-semibold uppercase tracking-tight mt-6 leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <div className="mt-12 flex justify-between items-center font-mono text-[0.68rem] text-muted-foreground border-t border-hairline pt-4 group-hover:text-primary/60 transition-colors">
                    <span>ARTICLE // READ</span>
                    <span>{p.read}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — FINAL CTA */}
      <section className="container-page py-28 md:py-44 border-t border-hairline relative">
        <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />
        <Reveal>
          <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10">
            <p className="eyebrow text-primary">[ SECURE INITIATION ]</p>
            <h2 className="display-lg uppercase font-semibold leading-tight">
              Ready to protect and expand your digital systems?
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
              Available for selected system audits, application engineering, and fractional CTO advisory roles. 
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-all"
              >
                Start a Conversation
                <span className="w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45">
                  <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
