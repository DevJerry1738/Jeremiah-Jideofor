import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-BTaSxUZT.mjs";
import { T as Tag, C as Calendar, a as Clock, A as ArrowRight } from "../_libs/lucide-react.mjs";
function ArticleLayout({
  title,
  category,
  date,
  readTime,
  children,
  relatedArticles
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-32 md:pt-40 pb-16 container-page relative scanline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 cyber-grid opacity-[0.15]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-8 text-xs font-mono uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/insights",
              className: "hover:text-foreground transition-colors",
              children: "Insights"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary/50", children: "/" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: category })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-lg font-bold max-w-4xl mb-8 text-foreground", children: title }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-6 md:gap-10 font-mono text-xs text-muted-foreground border-b border-hairline pb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: category })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: readTime })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20 md:py-32 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-dots opacity-[0.1] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "max-w-3xl mx-auto prose prose-invert relative z-10 space-y-8 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-content", children }) }) })
    ] }),
    relatedArticles && relatedArticles.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-hairline bg-surface/20 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-24 md:py-32 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-4", children: "[ RELATED ARTICLES ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-lg uppercase font-semibold", children: "Read Next." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-8", children: relatedArticles.map((article, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: idx * 100, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: article.slug,
            className: "group border border-hairline bg-background p-8 hover-card-premium h-full flex flex-col justify-between transition-all",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[0.62rem] text-primary tracking-widest uppercase border border-primary/20 rounded px-2 py-0.5", children: article.category }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold uppercase tracking-tight mt-6 leading-snug group-hover:text-primary transition-colors", children: article.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex justify-between items-center font-mono text-[0.68rem] text-muted-foreground border-t border-hairline pt-4 group-hover:text-primary/60 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ARTICLE // READ" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
              ] })
            ]
          }
        ) }, article.slug)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-28 md:py-44 border-t border-hairline relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto space-y-8 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow text-primary", children: "[ STRATEGIC PARTNERSHIP ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "display-lg uppercase font-semibold leading-tight", children: "Ready to apply these principles to your organization?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground font-light leading-relaxed", children: "Let's discuss how security-first design and operational excellence can transform your digital systems." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/contact",
            className: "group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-all",
            children: [
              "Start a Conversation",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  d: "M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              ) }) })
            ]
          }
        ) })
      ] }) })
    ] })
  ] });
}
export {
  ArticleLayout as A
};
