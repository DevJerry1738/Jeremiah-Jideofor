import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SplitReveal, R as Reveal } from "./Reveal-BTaSxUZT.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function Marquee({ items }) {
  const doubled = [...items, ...items];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden border-y border-hairline py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex whitespace-nowrap marquee", children: doubled.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "display-md text-muted-foreground/70 mx-10 inline-flex items-center gap-10", children: [
    item,
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-2xl", children: "✦" })
  ] }, i)) }) });
}
const featuredProjects = [{
  n: "01",
  name: "NUT",
  title: "Nigeria Union of Teachers — Website Modernization",
  challenge: "The Nigeria Union of Teachers had an outdated legacy website with no content management system, poor authentication infrastructure, no member engagement tools, and outdated technology stack. The organization represents 500k+ teachers across Nigeria's 36 states and needed a modern digital presence.",
  approach: "Architected a modern full-stack platform migrating from legacy MySQL to PostgreSQL (Supabase), implemented self-managed Supabase Auth replacing third-party OAuth, built a comprehensive Admin Dashboard with content management, and designed responsive UI with GSAP animations for engagement.",
  execution: "Built with React 19, TypeScript, Vite, TailwindCSS, shadcn/ui, Supabase, tRPC, and GSAP. Implemented Row-Level Security (RLS) policies, blog/news system, member join flow, newsletter subscriptions, support ticket submission, and full analytics dashboard.",
  impact: "Delivered a modern, animated platform serving 500k+ teachers with admin dashboard enabling content management without developer intervention. Features live news ticker, event management, and real-time member engagement. Live at nutng.org."
}, {
  n: "02",
  name: "YIRH",
  title: "Youth in Research Hub — Website & Headless CMS",
  challenge: "YIRH had no digital presence to showcase research publications, team members, or accept member applications. The organization needed independent content management without requiring developer intervention for each update.",
  approach: "Designed a headless CMS architecture combining a public-facing website with a secure Admin Dashboard. Implemented Supabase Auth with role-based access (Admin/Editor), database-level Row-Level Security, and a multi-tab dashboard for content management.",
  execution: "Built with React 19, TypeScript, Vite, TailwindCSS, Supabase, React Query (7 custom hooks), and GSAP animations. Implemented Docker + Nginx containerization, 8-table PostgreSQL schema with 12+ RLS policies, file storage for publications and avatars, and markdown-based rich text editing.",
  impact: "Delivered a fully functional CMS allowing non-technical staff to independently manage publications, team profiles, blog posts, and applications. Provides secure role-based access, beautiful animations, light/dark theme support, and production-ready deployment. Live at youthinresearchhub.org."
}, {
  n: "03",
  name: "PhishGuard",
  title: "PhishGuard NG — Phishing Simulation & Security Training Platform",
  challenge: "Phishing attacks are the leading entry point for corporate data breaches, yet traditional static security training lacks real-world impact. Organizations needed interactive testing to identify vulnerable employees and provide immediate, targeted training during the critical 'teachable moment.'",
  approach: "Created an interactive phishing simulation platform enabling organizations to run safe mock-phishing campaigns with individual click tracking, immediate educational intervention, and comprehensive performance analytics. Implemented role-based access for Admins, Analysts, and Viewers.",
  execution: "Built with React.js, Node.js/Express, MongoDB, JWT authentication, and bcrypt password hashing. Features campaign management, multi-scenario email templates, unique tracking URLs, real-time click analytics, just-in-time training videos, and standard CSV exports.",
  impact: "A fully functional security awareness platform demonstrating how active testing combined with immediate feedback elevates organizational security posture. Successfully implemented as a core Master's research project at the Nigerian Defence Academy. Open-source on GitHub (github.com/DevJerry1738/phishing-simulator)."
}];
const services = [{
  t: "Digital Presence",
  d: "High-performance editorial platforms that match offline reputational credibility, built to load instantly, rank well, and remain secure."
}, {
  t: "Business Systems",
  d: "Tailored workflow engines, ordering portals, and custom CRM systems designed specifically around how your team operates."
}, {
  t: "Operational Software",
  d: "Custom back-office panels, inventory systems, and dashboard management tools that increase internal team leverage."
}, {
  t: "Custom Platforms",
  d: "Specialized web systems engineered to consolidate multi-country operations, databases, or API pipelines."
}, {
  t: "Security-Focused Engineering",
  d: "Application architecture reviews, threat modeling, and code-hardening to align systems with modern security standards."
}, {
  t: "Technology Consulting",
  d: "Strategic advisory on software stack decisions, system refactoring roadmaps, and phased digital transformations."
}];
const insights = [{
  cat: "Security",
  title: "Understanding Least Privilege: Designing Secure Access Control in Modern Business Software.",
  read: "5 min read",
  slug: "/insights/least-privilege"
}, {
  cat: "Product Development",
  title: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt.",
  read: "6 min read",
  slug: "/insights/replacing-spreadsheets"
}, {
  cat: "Business Technology",
  title: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets.",
  read: "4 min read",
  slug: "/insights/edge-delivery-security"
}];
function Index() {
  const [time, setTime] = reactExports.useState("");
  reactExports.useEffect(() => {
    const fmt = () => (/* @__PURE__ */ new Date()).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Africa/Lagos"
    });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1e3 * 30);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex items-center pt-32 md:pt-40 pb-20 overflow-hidden scanline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 cyber-grid opacity-[0.25]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-[0.35]", style: {
        backgroundImage: "radial-gradient(circle at 10% 20%, rgba(234,179,8,0.08), transparent 40%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.03), transparent 50%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page relative w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-16 md:mb-24 font-mono text-[0.68rem] text-muted-foreground uppercase tracking-widest border-b border-hairline pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" }),
            "Available for strategic advisory & development"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden md:block", children: [
            "ABUJA, NG · ",
            time || "12:00",
            " WAT"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "display-xl tracking-tighter flex flex-col font-bold max-w-7xl leading-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitReveal, { text: "BUILDING" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitReveal, { text: "SECURE" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitReveal, { text: "DIGITAL" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SplitReveal, { text: "SOLUTIONS" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-hairline pt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 200, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-muted-foreground/60 uppercase tracking-widest mb-3", children: "[ PRIMARY MISSION ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl font-light", children: "Designing and developing secure web applications, business systems, and digital experiences for modern organizations that demand reliability, compliance, and scale." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-6 md:text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap md:justify-end items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-95 transition-all", children: [
              "Start a Conversation",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground px-4 py-2 transition-colors border border-hairline rounded-full hover:bg-surface/40", children: "View Engagements" })
          ] }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-y border-hairline bg-surface/30 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-dots opacity-20 pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-12 md:py-16 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [{
        label: "Experience",
        val: "3+ Years Active"
      }, {
        label: "Scope",
        val: "Multiple Sectors Served"
      }, {
        label: "Methodology",
        val: "Security-First Focus"
      }, {
        label: "Stack Integration",
        val: "Modern Cloud Architectures"
      }].map((metric, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l border-primary/30 pl-4 md:pl-6 py-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.62rem] font-mono text-muted-foreground uppercase tracking-widest", children: metric.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base md:text-lg font-semibold tracking-tight text-foreground", children: metric.val })
      ] }) }, metric.label)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, { items: ["Next.js", "React", "TypeScript", "PostgreSQL", "Node.js", "Access Security (RBAC)", "App Penetration Review", "System Architecture"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-24 md:py-36", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-4", children: "[ 01 / SELECTED WORK ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-lg font-semibold max-w-3xl uppercase tracking-tight", children: [
            "Quiet systems",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "for critical outcomes."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground link-underline", children: "All Engagements →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-24 md:space-y-36", children: featuredProjects.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "grid md:grid-cols-12 gap-8 md:gap-16 border-t border-hairline pt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-primary/70", children: [
            p.n,
            " // CASE STUDY"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-display font-semibold uppercase tracking-tight mt-4", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-mono text-muted-foreground mt-2", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 border border-hairline bg-surface/50 rounded p-4 font-mono text-[0.68rem] text-muted-foreground space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between border-b border-hairline/40 pb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "CLASSIFICATION:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "COMMERCIAL" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between border-b border-hairline/40 pb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AUDIT STATE:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500", children: "PASSED" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "INTEGRITY STATUS:" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "VERIFIED" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8 grid sm:grid-cols-2 gap-8 md:gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-2", children: "The Challenge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.challenge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-2", children: "The Approach" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.approach })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-2", children: "The Execution" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: p.execution })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-primary/20 pt-4 bg-primary/5 p-4 rounded", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary mb-2", children: "Business Impact" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground leading-relaxed font-medium", children: p.impact })
            ] })
          ] })
        ] })
      ] }) }, p.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-hairline bg-surface/20 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-grid opacity-[0.15] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-24 md:py-36 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-4", children: "[ 02 / SERVICE CAPABILITIES ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-lg uppercase font-semibold", children: "Business Solutions." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground text-sm leading-relaxed max-w-sm", children: "Engagements are structured entirely around business outcomes and risk containment. Modern tech stacks integrated with rigid security practices." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 mt-8 text-xs font-mono uppercase tracking-wider text-primary hover:text-primary/80 link-underline", children: "View Full Capabilities →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-8 grid sm:grid-cols-2 gap-px bg-hairline border border-hairline", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8 md:p-10 hover-card-premium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[0.62rem] text-primary tracking-widest uppercase mb-6", children: "[ SOLUTION DEFINITION ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg md:text-xl font-semibold uppercase tracking-tight", children: s.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground leading-relaxed font-light", children: s.d })
        ] }, s.t)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-24 md:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-4", children: "[ 03 / TRUST & PARTNERSHIP ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-lg uppercase font-semibold", children: "Why Work With Me." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm", children: "Answers to the critical questions organizations ask when entrusting systems to an external consultant." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-8 space-y-12", children: [{
        t: "Software Development Experience",
        d: "Over six years of hands-on experience building complex web platforms, business portals, and resilient systems. High familiarity with React, Node, TypeScript, and modern database patterns."
      }, {
        t: "Cybersecurity Expertise",
        d: "Formal academic training culminating in an MSc in Cybersecurity. Application of strict OWASP benchmarks, robust authentication setups (RBAC/ABAC), and detailed system audits as baseline deliverables."
      }, {
        t: "Business Understanding",
        d: "I focus on software that increases operating leverage, reduces transaction friction, and hardens operations. Stacks are selected to minimize ongoing maintenance costs."
      }, {
        t: "End-to-End Delivery",
        d: "No outsourcing or passing off assignments. I manage the process directly—from scoping, system modeling, frontend/backend assembly, security review, and cloud release."
      }, {
        t: "Long-Term Thinking",
        d: "Clean documentation, well-factored codebases, and structural transparency. Stacks are designed so your in-house team can easily inherit them without onboarding pain."
      }].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-hairline pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-baseline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-primary", children: [
            "0",
            idx + 1,
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-display font-semibold uppercase tracking-tight text-foreground", children: item.t })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed font-light pl-8 max-w-3xl", children: item.d })
      ] }) }, item.t)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-hairline bg-surface/10 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-dots opacity-[0.25] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-24 md:py-36 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-4", children: "[ 04 / INSIGHTS & JOURNAL ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-lg uppercase font-semibold", children: "Strategic Thinking." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/insights", className: "text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground link-underline transition-colors", children: "View All Articles →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: insights.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 150, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: p.slug, className: "group border border-hairline bg-background p-8 hover-card-premium h-full flex flex-col justify-between transition-all hover:bg-surface/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[0.62rem] text-primary tracking-widest uppercase border border-primary/20 rounded px-2 py-0.5", children: p.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold uppercase tracking-tight mt-6 leading-snug group-hover:text-primary transition-colors", children: p.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex justify-between items-center font-mono text-[0.68rem] text-muted-foreground border-t border-hairline pt-4 group-hover:text-primary/60 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ARTICLE // READ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.read })
          ] })
        ] }) }, p.title)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-28 md:py-44 border-t border-hairline relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-4xl mx-auto space-y-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "[ SECURE INITIATION ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-lg uppercase font-semibold leading-tight", children: "Ready to protect and expand your digital systems?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground font-light max-w-xl mx-auto leading-relaxed", children: "Available for selected system audits, application engineering, and fractional CTO advisory roles." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-all", children: [
          "Start a Conversation",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
        ] }) })
      ] }) })
    ] })
  ] });
}
export {
  Index as component
};
