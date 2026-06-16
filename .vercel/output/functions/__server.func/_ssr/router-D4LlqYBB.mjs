import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-DOiD_LYh.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const links = [
  { to: "/work", label: "Engagements" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Philosophy" },
  { to: "/contact", label: "Contact" }
];
function SiteHeader() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? "backdrop-blur-xl bg-background/80 border-hairline py-3 md:py-4" : "bg-transparent border-transparent py-5 md:py-6"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm tracking-tight font-semibold uppercase", children: "Jeremiah Jideofor" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex items-center gap-2 border border-hairline bg-surface/50 rounded-full px-3 py-1 font-mono text-[0.62rem] text-muted-foreground/80 tracking-widest uppercase", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 rounded-full bg-emerald-500 animate-pulse" }),
              "SYSTEMS: SECURE"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-2", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: l.to,
              className: "px-4 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors relative group",
              activeProps: { className: "text-foreground font-semibold" },
              children: [
                l.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" })
              ]
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "group inline-flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider border border-hairline bg-surface/40 hover:bg-surface hover:border-primary/40 rounded-full pl-5 pr-2 py-1.5 transition-all",
              children: [
                "Start Conversation",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-7 h-7 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, {}) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              "aria-label": "Toggle menu",
              className: "md:hidden w-10 h-10 inline-flex flex-col items-center justify-center gap-1.5 border border-hairline rounded-full bg-surface/40",
              onClick: () => setOpen((v) => !v),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-px w-5 bg-foreground transition-transform duration-300 ${open ? "translate-y-[2px] rotate-45" : ""}` }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `block h-px w-5 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3px] -rotate-45" : ""}` })
              ]
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden fixed inset-x-0 top-[64px] border-b border-hairline bg-background/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container-page py-8 flex flex-col gap-2", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "py-3 text-xl tracking-tight font-display font-medium text-muted-foreground hover:text-foreground border-b border-hairline/40 flex justify-between items-center",
              children: [
                l.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/45 text-xs font-mono", children: "→" })
              ]
            },
            l.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              onClick: () => setOpen(false),
              className: "mt-6 inline-flex items-center justify-between border border-hairline bg-surface rounded-full pl-5 pr-2 py-2 text-xs font-mono uppercase tracking-wider",
              children: [
                "Start Conversation",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowIcon, {}) })
              ]
            }
          )
        ] }) })
      ]
    }
  );
}
function ArrowIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }) });
}
function SiteFooter() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-hairline mt-32 bg-surface/25 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-dots pointer-events-none opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-page py-20 md:py-28 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-6", children: "[ ENGAGEMENT OPPORTUNITY ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "display-lg uppercase max-w-2xl font-semibold tracking-tight", children: [
            "Have a project in mind?",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Let's build something meaningful." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col sm:flex-row items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "mailto:devjerry1738@gmail.com",
                className: "group inline-flex items-center gap-4 border border-hairline hover:border-primary bg-surface/50 rounded-full pl-6 pr-2 py-2 text-xs font-mono uppercase tracking-wider transition-all",
                children: [
                  "devjerry1738@gmail.com",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-10 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://wa.me/2349011448616",
                target: "_blank",
                rel: "noreferrer",
                className: "inline-flex items-center justify-center border border-hairline hover:border-foreground/40 rounded-full px-6 py-4 text-xs font-mono uppercase tracking-wider transition-colors",
                children: "Secure WhatsApp Chat →"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-5 grid grid-cols-2 gap-8 text-sm pt-6 md:pt-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-5", children: "[ NAVIGATE ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 font-mono text-xs uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "text-muted-foreground hover:text-foreground link-underline", children: "Selected Work" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "text-muted-foreground hover:text-foreground link-underline", children: "Services" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "text-muted-foreground hover:text-foreground link-underline", children: "Philosophy" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "text-muted-foreground hover:text-foreground link-underline", children: "Contact" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-5", children: "[ ELSEWHERE ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 font-mono text-xs uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/onyeka-jideofor-7539b33ab/", target: "_blank", rel: "noreferrer", className: "text-muted-foreground hover:text-foreground link-underline", children: "LinkedIn" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/DevJerry1738/", target: "_blank", rel: "noreferrer", className: "text-muted-foreground hover:text-foreground link-underline", children: "GitHub" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/2349011448616", target: "_blank", rel: "noreferrer", className: "text-muted-foreground hover:text-foreground link-underline", children: "WhatsApp" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:devjerry1738@gmail.com", className: "text-muted-foreground hover:text-foreground link-underline", children: "Email Direct" }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 pt-8 border-t border-hairline flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-[0.68rem] text-muted-foreground font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "© ",
            year,
            " Jeremiah Jideofor — Technology Consultant."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-muted-foreground/30", children: "|" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-4 gap-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "STATUS: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-500", children: "SECURED" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "VER: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "2026.06-STABLE" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "KEY: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "0x4F7B22AC" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "uppercase tracking-widest text-muted-foreground/50", children: "ABUJA, NG · Distributed Worldwide" })
      ] })
    ] })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Jeremiah Jideofor — Independent Technology Consultant" },
      { name: "description", content: "Designing and developing secure web applications, business systems, and digital experiences for organizations that demand reliability, security, and scale." },
      { name: "author", content: "Jeremiah Jideofor" },
      { property: "og:title", content: "Jeremiah Jideofor — Independent Technology Consultant" },
      { property: "og:description", content: "Designing and developing secure web applications, business systems, and digital experiences for organizations that demand reliability, security, and scale." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Jeremiah Jideofor" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] }) });
}
const $$splitComponentImporter$8 = () => import("./work-BNVDy67E.mjs");
const Route$9 = createFileRoute("/work")({
  head: () => ({
    meta: [{
      title: "Engagements — Jeremiah Jideofor"
    }, {
      name: "description",
      content: "Detailed consulting case studies across business systems, operational software, corporate publishing, and security engineering."
    }, {
      property: "og:title",
      content: "Engagements — Jeremiah Jideofor"
    }, {
      property: "og:description",
      content: "Detailed consulting case studies across business systems, operational software, corporate publishing, and security engineering."
    }, {
      property: "og:url",
      content: "/work"
    }],
    links: [{
      rel: "canonical",
      href: "/work"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const BASE_URL = "";
const Route$8 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/work", changefreq: "monthly", priority: "0.9" },
          { path: "/services", changefreq: "monthly", priority: "0.8" },
          { path: "/about", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.7" }
        ];
        const urls = entries.map(
          (e) => `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$7 = () => import("./services-CnXTyutW.mjs");
const Route$7 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Capabilities — Jeremiah Jideofor"
    }, {
      name: "description",
      content: "Consulting services and custom solutions: business systems, corporate platforms, security reviews, and strategic technical advisory."
    }, {
      property: "og:title",
      content: "Capabilities — Jeremiah Jideofor"
    }, {
      property: "og:description",
      content: "Consulting services and custom solutions: business systems, corporate platforms, security reviews, and strategic technical advisory."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./insights-Cn2QNM1n.mjs");
const Route$6 = createFileRoute("/insights")({
  head: () => ({
    meta: [{
      title: "Insights & Journal — Jeremiah Jideofor"
    }, {
      name: "description",
      content: "Strategic thinking on security, product development, and business technology. Articles on least privilege, custom software ROI, and edge delivery."
    }, {
      property: "og:title",
      content: "Insights & Journal — Jeremiah Jideofor"
    }, {
      property: "og:description",
      content: "Articles on security, product development, and technology strategy."
    }, {
      property: "og:url",
      content: "/insights"
    }],
    links: [{
      rel: "canonical",
      href: "/insights"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-CuMcPjE7.mjs");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Jeremiah Jideofor"
    }, {
      name: "description",
      content: "Initiate a discussion. Available for system engineering, security reviews, and fractional CTO advisory roles."
    }, {
      property: "og:title",
      content: "Contact — Jeremiah Jideofor"
    }, {
      property: "og:description",
      content: "Initiate a discussion. Available for system engineering, security reviews, and fractional CTO advisory roles."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./about-Duuv1FU-.mjs");
const Route$4 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "Philosophy — Jeremiah Jideofor"
    }, {
      name: "description",
      content: "Our engineering philosophy, security-first methodology, product mindset, and core consulting values."
    }, {
      property: "og:title",
      content: "Philosophy — Jeremiah Jideofor"
    }, {
      property: "og:description",
      content: "Our engineering philosophy, security-first methodology, product mindset, and core consulting values."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-BHrbgLAE.mjs");
const Route$3 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Jeremiah Jideofor — Independent Technology Consultant"
    }, {
      name: "description",
      content: "Designing and developing secure web applications, business systems, and digital experiences for modern organizations."
    }, {
      property: "og:title",
      content: "Jeremiah Jideofor — Independent Technology Consultant"
    }, {
      property: "og:description",
      content: "Designing and developing secure web applications, business systems, and digital experiences for modern organizations."
    }, {
      property: "og:url",
      content: "/"
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./insights.replacing-spreadsheets-CMdJysyE.mjs");
const Route$2 = createFileRoute("/insights/replacing-spreadsheets")({
  head: () => ({
    meta: [{
      title: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt — Jeremiah Jideofor"
    }, {
      name: "description",
      content: "The business case for replacing spreadsheet workflows with custom operational software. Analysis of costs, benefits, and implementation strategies."
    }, {
      property: "og:title",
      content: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt"
    }, {
      property: "og:description",
      content: "The business case for custom operations software versus perpetual spreadsheet maintenance."
    }, {
      property: "og:url",
      content: "/insights/replacing-spreadsheets"
    }],
    links: [{
      rel: "canonical",
      href: "/insights/replacing-spreadsheets"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./insights.least-privilege-DCSG2114.mjs");
const Route$1 = createFileRoute("/insights/least-privilege")({
  head: () => ({
    meta: [{
      title: "Understanding Least Privilege: Designing Secure Access Control — Jeremiah Jideofor"
    }, {
      name: "description",
      content: "A deep dive into the principle of least privilege and how to design effective Role-Based Access Control (RBAC) systems in modern business software."
    }, {
      property: "og:title",
      content: "Understanding Least Privilege: Designing Secure Access Control"
    }, {
      property: "og:description",
      content: "A deep dive into the principle of least privilege and how to design effective Role-Based Access Control (RBAC) systems."
    }, {
      property: "og:url",
      content: "/insights/least-privilege"
    }],
    links: [{
      rel: "canonical",
      href: "/insights/least-privilege"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./insights.edge-delivery-security-Cwoqk53g.mjs");
const Route = createFileRoute("/insights/edge-delivery-security")({
  head: () => ({
    meta: [{
      title: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets — Jeremiah Jideofor"
    }, {
      name: "description",
      content: "How edge computing, Content Security Policies (CSP), and secure delivery pipelines minimize the attack surface of corporate websites."
    }, {
      property: "og:title",
      content: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets"
    }, {
      property: "og:description",
      content: "Architectural strategies for secure, performant web delivery using edge networks and strict security policies."
    }, {
      property: "og:url",
      content: "/insights/edge-delivery-security"
    }],
    links: [{
      rel: "canonical",
      href: "/insights/edge-delivery-security"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WorkRoute = Route$9.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$a
});
const SitemapDotxmlRoute = Route$8.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$a
});
const ServicesRoute = Route$7.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$a
});
const InsightsRoute = Route$6.update({
  id: "/insights",
  path: "/insights",
  getParentRoute: () => Route$a
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$4.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const InsightsReplacingSpreadsheetsRoute = Route$2.update({
  id: "/replacing-spreadsheets",
  path: "/replacing-spreadsheets",
  getParentRoute: () => InsightsRoute
});
const InsightsLeastPrivilegeRoute = Route$1.update({
  id: "/least-privilege",
  path: "/least-privilege",
  getParentRoute: () => InsightsRoute
});
const InsightsEdgeDeliverySecurityRoute = Route.update({
  id: "/edge-delivery-security",
  path: "/edge-delivery-security",
  getParentRoute: () => InsightsRoute
});
const InsightsRouteChildren = {
  InsightsEdgeDeliverySecurityRoute,
  InsightsLeastPrivilegeRoute,
  InsightsReplacingSpreadsheetsRoute
};
const InsightsRouteWithChildren = InsightsRoute._addFileChildren(
  InsightsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  InsightsRoute: InsightsRouteWithChildren,
  ServicesRoute,
  SitemapDotxmlRoute,
  WorkRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
