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
function LeastPrivilegeArticle() {
  const relatedArticles = [{
    title: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets.",
    slug: "/insights/edge-delivery-security",
    category: "Business Technology"
  }, {
    title: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt.",
    slug: "/insights/replacing-spreadsheets",
    category: "Product Development"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleLayout, { title: "Understanding Least Privilege: Designing Secure Access Control in Modern Business Software", category: "Security", date: "June 14, 2026", readTime: "5 min read", relatedArticles, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8 text-muted-foreground leading-relaxed", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground font-light", children: "Least privilege is a foundational concept in security, but most business software gets it wrong. Here is why this happens and how you can fix it." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "Defining Least Privilege" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Least privilege means that a user, process, or system component has access to only the specific resources needed to do their job. Nothing more." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "While this is easy to explain, putting it into practice requires clear rules at three levels:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "• ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Application Level" }),
          ": UI controls that restrict what actions users can take"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "• ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "API Level" }),
          ": Permission checks that verify authorization before processing operations"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "• ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Database Level" }),
          ": Row Level Security policies that prevent unauthorized data access"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "Most teams only build the first layer. That is a major mistake." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "Why Simple Role Based Access Control Fails" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Take a common scenario: a nonprofit runs field programs in three countries. Each country has a manager who should only see their own local records." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "A basic implementation looks like this:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-4 bg-surface/50 border border-hairline p-4 rounded overflow-x-auto text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `// Frontend only
if (user.role === "program_manager") {
  return <BeneficiaryDashboard />;
}

// Backend only
router.get("/beneficiaries", (req, res) => {
  if (req.user.role === "program_manager") {
    const data = Beneficiary.find({});
    return res.json(data);
  }
  res.status(403).send("Forbidden");
});` }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "This approach creates multiple vulnerabilities:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• If a frontend developer forgets to hide a navigation link, users can view tabs for all countries" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• An attacker can bypass the API check by modifying the request token" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• A database script could expose all records by accident" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "The Three Layer Defense Model" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Real security requires checks at every layer. We designed the systems for the Nigeria Union of Teachers modernization and the YIRH CMS around this structure:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Layer 1: Database Row Level Security" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Row Level Security in Postgres ensures that even if someone bypasses the application logic, they still cannot read unauthorized rows. Here is an example from YIRH:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-3 bg-surface/50 border border-hairline p-3 rounded overflow-x-auto text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `CREATE POLICY select_own_team ON team_members
  FOR SELECT USING (
    auth.uid() = created_by 
    OR current_user_role() = 'admin'
  );` }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Layer 2: API Authorization" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Every API endpoint verifies roles and resource ownership before sending data. For example:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-3 bg-surface/50 border border-hairline p-3 rounded overflow-x-auto text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `async function updatePublication(pubId, data, user) {
  const pub = await db.publications.findById(pubId);
  if (pub.createdBy !== user.id && user.role !== 'admin') {
    throw new UnauthorizedError();
  }
  return db.publications.update(pubId, data);
}` }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground mb-2", children: "Layer 3: UI Visibility Control" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "UI elements are shown conditionally based on the user role. You should never rely on this alone, but it works well alongside the other layers:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "mt-3 bg-surface/50 border border-hairline p-3 rounded overflow-x-auto text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: `{user.role === 'admin' && (
  <AdminDashboard />
)}` }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "Designing a Permission Model" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "You can start with a simple grid showing roles and resources:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm border border-hairline", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-surface/50 border-b border-hairline", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Can View" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Can Edit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2 text-left", children: "Can Delete" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-hairline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-primary", children: "Admin" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "All data" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "All data" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "All data" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-primary", children: "Editor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "Own content" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "Own content" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "No" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2 font-mono text-primary", children: "Viewer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "Public data" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "No" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2", children: "No" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4", children: "This grid translates directly to your database rules, API middleware, and UI code. When you update it, all three layers should align." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "Common Mistakes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Creating Too Many Roles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Avoid creating highly specific roles. Instead, create capabilities that you can group together. Use fine grained permissions to control access." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Ignoring Machine to Machine Access" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Background processes and jobs need their own limited access. A cron job should never run with full admin privileges." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Missing Audit Logs" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "Log all permission checks and data access to a secure log. If a security issue occurs, you need to know what was accessed and who did it." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight", children: "Summary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 ml-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Check authorization at three levels: database, API, and UI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Maintain a clear role and permission grid that everyone can reference" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Block access by default and explicitly grant permissions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Audit permission checks and log failed attempts" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Review permissions regularly as the team grows" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-hairline pt-8 mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "About this article:" }),
      " Principles drawn from the Nigeria Union of Teachers modernization, the YIRH headless CMS, and the PhishGuard security platform."
    ] }) })
  ] }) });
}
export {
  LeastPrivilegeArticle as component
};
