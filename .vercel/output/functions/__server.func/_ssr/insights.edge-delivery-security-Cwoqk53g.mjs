import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as ArticleLayout } from "./ArticleLayout-DPA3SyVl.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./Reveal-BTaSxUZT.mjs";
import "../_libs/lucide-react.mjs";
function EdgeDeliverySecurityArticle() {
  const relatedArticles = [{
    title: "Understanding Least Privilege: Designing Secure Access Control in Modern Business Software.",
    slug: "/insights/least-privilege",
    category: "Security"
  }, {
    title: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt.",
    slug: "/insights/replacing-spreadsheets",
    category: "Product Development"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleLayout, { title: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets", category: "Business Technology", date: "June 10, 2026", readTime: "4 min read", relatedArticles, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 text-muted-foreground leading-relaxed", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground font-light", children: "A corporate website is often the most public part of an organization. It is open to the internet, vital for business, and a common target for attacks. Even so, many teams treat hosting as a minor detail, deploying to shared setups without looking at security. This can be costly and risky." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "The Classic Server Setup" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Most sites use a simple layout:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-4 bg-surface/50 border border-hairline p-4 rounded overflow-x-auto text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `User -> Shared Web Server -> Database -> CMS Admin Portal (Same Server)
              ↓
              Attack surface: 3 entry points, 1 perimeter` }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "Why this is risky:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Public content and admin tools share the same server" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• A security bug in the CMS database can expose the public site" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Page loading is slower because the server performs checks for every user" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Heavy traffic can slow down or crash the whole management dashboard" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "The Edge First Architecture" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A safer way is to separate public content from administration tools:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-4 bg-surface/50 border border-hairline p-4 rounded overflow-x-auto text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `Public Users -> Edge Network (CDN) -> Static Content
                                            ↓
                                      (Only if dynamic)
                                            ↓
                                    Origin Server -> Database
                                            ↓
Admins -> Separate Portal (Different Server) -> Admin Database` }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "This setup separates the frontend from the backend. The public site remains static by default, which means:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Pages are built once and served as plain files instead of generating on the fly" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Global content delivery networks serve files from locations close to users" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• The public site does not need to query a database to load a page" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Security risks are low since there is no server side code for attackers to exploit" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "How YIRH Benefits From This" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We used this architecture when modernizing YIRH:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-3", children: "Separated Systems" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Public site: Built as static files and served via global networks" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Admin portal: A separate application requiring login and using a dedicated database" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Benefit: Any issue on the public site does not expose admin tools or data" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-3", children: "Content Security Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mb-3", children: "Strict rules in the browser prevent untrusted scripts from running:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-surface/50 border border-hairline p-3 rounded overflow-x-auto text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self' cdn.jsdelivr.net; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data: https:; 
  connect-src 'self' api.example.com;` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-3", children: "This policy tells the browser to only run scripts from trusted locations and block everything else." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-3", children: "No Dynamic Injection Points" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Because public pages are built beforehand, there are no templates rendering user input on the server. Even if a bug is found in the build process, it does not affect live traffic directly." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "Performance and Security Work Together" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The best part is that a setup designed for security also runs much faster." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Files load in milliseconds globally" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "A user loads cached files from a nearby node rather than waiting for your main server to respond." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "No database queries during page loads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Since page data is already built, the database is never hit by visitors, protecting it from traffic surges." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Scaling without high costs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Global networks handle massive traffic easily. A sudden surge in readers will not crash your server." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "How to Set This Up" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You can follow these steps:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-hairline p-4 rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Step 1: Separate Public and Admin Systems" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Keep the public website static. Run the admin dashboard as a separate app with login controls." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-hairline p-4 rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Step 2: Use a Content Delivery Network" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Serve the public files using a modern hosting network so content is cached near users." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-hairline p-4 rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Step 3: Configure Security Headers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Configure headers like content security policies to block browser level attacks." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-hairline p-4 rounded", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Step 4: Automate the Build Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "When editors publish updates, trigger an automated system to build and deploy the files." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "Comparing the Two Approaches" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Here is how a standard setup compares to an edge architecture:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm border border-hairline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface/50 border-b border-hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Metric" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Traditional" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Edge Architecture" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-hairline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-primary", children: "Server hosting" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "$100-500/month" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "$0-50/month (CDN only)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-primary", children: "Performance" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "50-80 Lighthouse score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "95-100 Lighthouse score" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-primary", children: "Attack surface" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "Large (3-5 injection points)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "Minimal (static content only)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-primary", children: "Scaling capacity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "Limited (single origin)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "Infinite (global CDN)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-primary", children: "Maintenance burden" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "Ongoing patching required" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "Minimal (managed by CDN provider)" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "When to Use Other Approaches" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This setup works best for:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Content sites like blogs and documentation portals" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Corporate/institutional websites" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ High traffic sites where service stability is a priority" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Teams looking for high performance without high maintenance duties" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "It is less suited for:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✗ Websites that change content for each individual user on every page load" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✗ Applications that need updates to display in real time without a build step" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "Summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Separate public and admin tools since they have different security needs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Serve static content via networks for speed and safety" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Use security headers to block attacks in the browser" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Keep the public path static to avoid data injection issues" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• This approach is safer and reduces hosting expenses" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-hairline pt-8 mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "About this article:" }),
      " Principles drawn from the YIRH website deployment and the Nigeria Union of Teachers platform architecture."
    ] }) })
  ] }) });
}
export {
  EdgeDeliverySecurityArticle as component
};
