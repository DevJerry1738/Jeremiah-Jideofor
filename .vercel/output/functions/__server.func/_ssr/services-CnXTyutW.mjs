import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-BTaSxUZT.mjs";
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
const capabilities = [{
  n: "01",
  title: "Digital Presence",
  problem: "Premium offline brands and advisory firms often have slow, template-built web portals that fail to reflect their institutional credibility to high-value clients.",
  solution: "We design and engineer bespoke, typography-focused editorial websites powered by a headless CMS and served over global edge CDN networks.",
  value: "Establishes immediate trust with institutional partners, maximizes page performance, and simplifies content publishing without developer intervention.",
  outcome: "Perfect 100/100 Lighthouse metrics, sub-second global load times, secure content structures, and fully responsive layouts."
}, {
  n: "02",
  title: "Business Systems",
  problem: "Critical business workflows rely on shared spreadsheets, manual messaging threads, and fragmented data pools, leading to transcription errors and delayed billing.",
  solution: "Bespoke database engines, retailer ordering platforms, and automated workflow pipelines built around how your organization actually works.",
  value: "Eliminates operational latency, prevents manual record-keeping errors, and consolidates sales or inventory ledgers in real-time.",
  outcome: "Clean transactional tables, automated invoice exports, credit validation checks, and simple dashboard controls."
}, {
  n: "03",
  title: "Operational Software",
  problem: "Internal staff utilize overly complex admin dashboards that expose sensitive user details and leave no auditable trace of administrative actions.",
  solution: "Secure, role-based admin consoles and user management portals configured with least-privilege constraints and activity tracking.",
  value: "Safeguards proprietary corporate data, limits internal exposure risk, and speeds up operational checklists.",
  outcome: "Audit-ready system logs, multi-stage approval flows, granular permission rules (RBAC), and optimized batch operations."
}, {
  n: "04",
  title: "Custom Platforms",
  problem: "Off-the-shelf SaaS systems fail to reflect complex regional logistics, multi-currency credit rules, or specialized NGO field metric tracking.",
  solution: "Bespoke web applications built on secure, scalable cloud architectures, designed to handle offline data queues and high database concurrency.",
  value: "Complete technical independence. The software adapts exactly to your business model, with zero licensing overhead.",
  outcome: "Optimized database schemas, high-throughput APIs, custom task queues, and clean, self-documenting codebases."
}, {
  n: "05",
  title: "Security-Focused Engineering",
  problem: "Legacy codebases or third-party web apps are shipped with unvalidated authentication loops, unsecured databases, and data-leaking API routes.",
  solution: "Comprehensive application-level security reviews, threat-modeling logs, and structural code hardening based on OWASP benchmarks.",
  value: "Protects sensitive user records, prevents injection attacks, and establishes compliance for formal enterprise security audits.",
  outcome: "Secured authentication modules, clean input sanitation pipelines, threat log reports, and a prioritized vulnerability fix roadmap."
}, {
  n: "06",
  title: "Technology Consulting",
  problem: "Leadership teams face engineering uncertainty when planning migrations, selecting cloud architectures, or rebuilding legacy systems, risking costly delays.",
  solution: "Strategic technology advisory, buy-vs-build analysis, refactoring roadmaps, and independent technical code audits.",
  value: "Saves significant cost by preventing architectural mistakes, ensuring your tech investments align with business strategy.",
  outcome: "Detailed architecture design documents, migration blueprints, stack selection reviews, and written code health reports."
}];
function ServicesPage() {
  const [activeCapability, setActiveCapability] = reactExports.useState("01");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-36 md:pt-48 pb-20 container-page relative overflow-hidden scanline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 cyber-grid opacity-[0.2]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-6", children: "[ SERVICES & CAPABILITIES ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-xl max-w-[18ch] font-bold text-foreground", children: "BUSINESS SOLUTIONS FOR SCALE." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-muted-foreground text-lg font-light leading-relaxed", children: "We construct secure, maintainable web systems tailored for high-stakes business environments. Scoped around commercial outcomes and structural security." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex flex-wrap gap-2 border-b border-hairline pb-8 font-mono text-xs", children: capabilities.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveCapability(c.n), className: `px-5 py-3 rounded border transition-all ${activeCapability === c.n ? "bg-primary text-primary-foreground border-primary" : "border-hairline hover:bg-surface/50 text-muted-foreground hover:text-foreground"}`, children: [
        c.n,
        " // ",
        c.title.toUpperCase()
      ] }, c.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16 md:py-24 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-dots opacity-[0.15] pointer-events-none" }),
      capabilities.filter((c) => c.n === activeCapability).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-hairline bg-surface/30 p-8 rounded relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: "[ CAPABILITY PROFILE ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-display font-semibold uppercase tracking-tight mt-4", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-hairline/60 font-mono text-[0.62rem] text-muted-foreground space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "SERVICE CODE: ",
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground", children: [
                  "SRV-",
                  c.n,
                  "-PRO"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "CLASSIFICATION: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "ENTERPRISE READY" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "DELIVERY PROTOCOL: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500 font-semibold", children: "DIRECT CONTRACT" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-hairline bg-surface/10 p-6 rounded flex items-center justify-between font-mono text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "STATUS: AVAILABLE Q2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 bg-emerald-500 rounded-full animate-pulse" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-hairline pb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-red-500/80 mb-2", children: "[ 01 / THE BUSINESS PROBLEM ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground font-light leading-relaxed", children: c.problem })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-hairline pb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary mb-2", children: "[ 02 / OUR TECHNICAL SOLUTION ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-foreground font-light leading-relaxed", children: c.solution })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-hairline pb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-foreground mb-2", children: "[ 03 / MEASURABLE BUSINESS VALUE ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground font-light leading-relaxed", children: c.value })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary/5 border border-primary/20 p-6 rounded", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary mb-2", children: "[ 04 / EXPECTED TECHNICAL DELIVERABLE ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-foreground font-medium leading-relaxed", children: c.outcome })
          ] })
        ] })
      ] }) }, c.n))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-24 md:py-32 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded border border-hairline p-8 md:p-14 bg-surface/30 max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-8 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-3", children: "[ ENGAGEMENT LIFECYCLE ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-display font-semibold uppercase tracking-tight text-foreground", children: "How We Partner." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed font-light", children: "Every project starts with a structured discovery call to clarify commercial outcomes. We provide a transparent technical proposal detailing scope, database models, security provisions, and fixed-price contracts." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-4 md:text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-all", children: [
          "Initiate Discussion",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
        ] }) })
      ] }) }) })
    ] })
  ] });
}
export {
  ServicesPage as component
};
