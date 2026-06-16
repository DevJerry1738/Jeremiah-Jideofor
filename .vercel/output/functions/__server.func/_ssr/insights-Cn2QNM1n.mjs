import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useLocation, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-BTaSxUZT.mjs";
import { C as Calendar, a as Clock, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const articles = [{
  id: "least-privilege",
  slug: "/insights/least-privilege",
  category: "Security",
  title: "Understanding Least Privilege: Designing Secure Access Control in Modern Business Software.",
  excerpt: "A deep dive into the principle of least privilege and how to design effective Role-Based Access Control (RBAC) systems in modern business software.",
  date: "June 14, 2026",
  readTime: "5 min read"
}, {
  id: "replacing-spreadsheets",
  slug: "/insights/replacing-spreadsheets",
  category: "Product Development",
  title: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt.",
  excerpt: "The business case for replacing spreadsheet workflows with custom operational software. Analysis of costs, benefits, implementation strategies.",
  date: "June 12, 2026",
  readTime: "6 min read"
}, {
  id: "edge-delivery-security",
  slug: "/insights/edge-delivery-security",
  category: "Business Technology",
  title: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets.",
  excerpt: "How edge computing, Content Security Policies (CSP), and secure delivery pipelines minimize the attack surface of corporate websites.",
  date: "June 10, 2026",
  readTime: "4 min read"
}];
function InsightsPage() {
  const categories = Array.from(new Set(articles.map((a) => a.category)));
  const location = useLocation();
  const isExactInsights = location.pathname === "/insights" || location.pathname === "/insights/";
  if (!isExactInsights) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-36 md:pt-48 pb-16 container-page relative scanline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 cyber-grid opacity-[0.15]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-6", children: "[ INSIGHTS & JOURNAL ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-xl max-w-5xl font-bold text-foreground mb-8", children: "Strategic thinking on technology, security, and organizational operations." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground font-light max-w-2xl leading-relaxed", children: "Regular articles on building secure systems, product development strategy, and modernizing operations. Updated with insights from real-world engagements and consulting work." }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container-page py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: categories.map((cat) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-4 py-2 border border-hairline rounded-full text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-surface/50 transition-all", children: cat }, cat)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-16 md:py-24 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-dots opacity-[0.1] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12 relative z-10", children: articles.map((article, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: article.slug, className: "group block border border-hairline bg-surface/10 p-8 md:p-10 hover-card-premium transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[0.62rem] text-primary tracking-widest uppercase border border-primary/20 rounded px-2 py-0.5", children: article.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mt-6 font-mono text-[0.68rem] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: article.date })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-3 h-3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: article.readTime })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-9 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl md:text-2xl font-semibold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug", children: article.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl", children: article.excerpt })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-2 text-primary/60 group-hover:text-primary font-mono text-xs uppercase tracking-widest transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Read Article" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
          ] })
        ] })
      ] }) }) }, article.id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-hairline bg-surface/20 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-page py-24 md:py-32 relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "[ STAY UPDATED ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-lg uppercase font-semibold", children: "Get new articles in your inbox." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-light leading-relaxed", children: "Strategic insights on security, product development, and technology strategy, delivered weekly." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-all", children: [
          "Subscribe to Updates",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
        ] }) })
      ] }) }) })
    ] })
  ] });
}
export {
  InsightsPage as component
};
