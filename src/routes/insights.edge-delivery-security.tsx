import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";

export const Route = createFileRoute("/insights/edge-delivery-security")({
  head: () => ({
    meta: [
      { title: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets — Jeremiah Jideofor" },
      { name: "description", content: "How edge computing, Content Security Policies (CSP), and secure delivery pipelines minimize the attack surface of corporate websites." },
      { property: "og:title", content: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets" },
      { property: "og:description", content: "Architectural strategies for secure, performant web delivery using edge networks and strict security policies." },
      { property: "og:url", content: "/insights/edge-delivery-security" },
    ],
    links: [{ rel: "canonical", href: "/insights/edge-delivery-security" }],
  }),
  component: EdgeDeliverySecurityArticle,
});
function EdgeDeliverySecurityArticle() {
  const relatedArticles = [
    {
      title: "Understanding Least Privilege: Designing Secure Access Control in Modern Business Software.",
      slug: "/insights/least-privilege",
      category: "Security",
    },
    {
      title: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt.",
      slug: "/insights/replacing-spreadsheets",
      category: "Product Development",
    },
  ];

  return (
    <ArticleLayout
      title="Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets"
      category="Business Technology"
      date="June 10, 2026"
      readTime="4 min read"
      relatedArticles={relatedArticles}
    >
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <p className="text-lg text-foreground font-light">
          A corporate website is often the most public part of an organization. It is open to the internet, vital for business, and a common target for attacks. Even so, many teams treat hosting as a minor detail, deploying to shared setups without looking at security. This can be costly and risky.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            The Classic Server Setup
          </h2>
          <p>
            Most sites use a simple layout:
          </p>
          <pre className="mt-4 bg-surface/50 border border-hairline p-4 rounded overflow-x-auto text-sm">
            <code>{`User -> Shared Web Server -> Database -> CMS Admin Portal (Same Server)
              ↓
              Attack surface: 3 entry points, 1 perimeter`}</code>
          </pre>
          <p className="mt-4">
            Why this is risky:
          </p>
          <ul className="mt-3 space-y-2 ml-4">
            <li>• Public content and admin tools share the same server</li>
            <li>• A security bug in the CMS database can expose the public site</li>
            <li>• Page loading is slower because the server performs checks for every user</li>
            <li>• Heavy traffic can slow down or crash the whole management dashboard</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            The Edge First Architecture
          </h2>
          <p>
            A safer way is to separate public content from administration tools:
          </p>
          <pre className="mt-4 bg-surface/50 border border-hairline p-4 rounded overflow-x-auto text-sm">
            <code>{`Public Users -> Edge Network (CDN) -> Static Content
                                            ↓
                                      (Only if dynamic)
                                            ↓
                                    Origin Server -> Database
                                            ↓
Admins -> Separate Portal (Different Server) -> Admin Database`}</code>
          </pre>
          <p className="mt-4">
            This setup separates the frontend from the backend. The public site remains static by default, which means:
          </p>
          <ul className="mt-3 space-y-2 ml-4">
            <li>• Pages are built once and served as plain files instead of generating on the fly</li>
            <li>• Global content delivery networks serve files from locations close to users</li>
            <li>• The public site does not need to query a database to load a page</li>
            <li>• Security risks are low since there is no server side code for attackers to exploit</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            How YIRH Benefits From This
          </h2>
          <p>
            We used this architecture when modernizing YIRH:
          </p>

          <div className="mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded">
            <p className="font-semibold text-foreground mb-3">Separated Systems</p>
            <ul className="space-y-2 text-sm">
              <li>• Public site: Built as static files and served via global networks</li>
              <li>• Admin portal: A separate application requiring login and using a dedicated database</li>
              <li>• Benefit: Any issue on the public site does not expose admin tools or data</li>
            </ul>
          </div>

          <div className="mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded">
            <p className="font-semibold text-foreground mb-3">Content Security Policy</p>
            <p className="text-sm mb-3">Strict rules in the browser prevent untrusted scripts from running:</p>
            <pre className="bg-surface/50 border border-hairline p-3 rounded overflow-x-auto text-xs">
              <code>{`Content-Security-Policy: 
  default-src 'self'; 
  script-src 'self' cdn.jsdelivr.net; 
  style-src 'self' 'unsafe-inline'; 
  img-src 'self' data: https:; 
  connect-src 'self' api.example.com;`}</code>
            </pre>
            <p className="text-sm mt-3">This policy tells the browser to only run scripts from trusted locations and block everything else.</p>
          </div>

          <div className="mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded">
            <p className="font-semibold text-foreground mb-3">No Dynamic Injection Points</p>
            <p className="text-sm">Because public pages are built beforehand, there are no templates rendering user input on the server. Even if a bug is found in the build process, it does not affect live traffic directly.</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            Performance and Security Work Together
          </h2>
          <p>
            The best part is that a setup designed for security also runs much faster.
          </p>
          <ul className="mt-4 space-y-3 ml-4">
            <li>
              <strong>Files load in milliseconds globally</strong>
              <p className="text-sm mt-1">A user loads cached files from a nearby node rather than waiting for your main server to respond.</p>
            </li>
            <li className="mt-4">
              <strong>No database queries during page loads</strong>
              <p className="text-sm mt-1">Since page data is already built, the database is never hit by visitors, protecting it from traffic surges.</p>
            </li>
            <li className="mt-4">
              <strong>Scaling without high costs</strong>
              <p className="text-sm mt-1">Global networks handle massive traffic easily. A sudden surge in readers will not crash your server.</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            How to Set This Up
          </h2>
          <p>
            You can follow these steps:
          </p>

          <div className="mt-6 space-y-4">
            <div className="border border-hairline p-4 rounded">
              <p className="font-semibold text-foreground mb-2">Step 1: Separate Public and Admin Systems</p>
              <p className="text-sm">Keep the public website static. Run the admin dashboard as a separate app with login controls.</p>
            </div>

            <div className="border border-hairline p-4 rounded">
              <p className="font-semibold text-foreground mb-2">Step 2: Use a Content Delivery Network</p>
              <p className="text-sm">Serve the public files using a modern hosting network so content is cached near users.</p>
            </div>

            <div className="border border-hairline p-4 rounded">
              <p className="font-semibold text-foreground mb-2">Step 3: Configure Security Headers</p>
              <p className="text-sm">Configure headers like content security policies to block browser level attacks.</p>
            </div>

            <div className="border border-hairline p-4 rounded">
              <p className="font-semibold text-foreground mb-2">Step 4: Automate the Build Process</p>
              <p className="text-sm">When editors publish updates, trigger an automated system to build and deploy the files.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            Comparing the Two Approaches
          </h2>
          <p>
            Here is how a standard setup compares to an edge architecture:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border border-hairline">
              <thead className="bg-surface/50 border-b border-hairline">
                <tr>
                  <th className="px-4 py-2 text-left">Metric</th>
                  <th className="px-4 py-2 text-left">Traditional</th>
                  <th className="px-4 py-2 text-left">Edge Architecture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="px-4 py-2 font-mono text-primary">Server hosting</td>
                  <td className="px-4 py-2">$100-500/month</td>
                  <td className="px-4 py-2">$0-50/month (CDN only)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-primary">Performance</td>
                  <td className="px-4 py-2">50-80 Lighthouse score</td>
                  <td className="px-4 py-2">95-100 Lighthouse score</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-primary">Attack surface</td>
                  <td className="px-4 py-2">Large (3-5 injection points)</td>
                  <td className="px-4 py-2">Minimal (static content only)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-primary">Scaling capacity</td>
                  <td className="px-4 py-2">Limited (single origin)</td>
                  <td className="px-4 py-2">Infinite (global CDN)</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-primary">Maintenance burden</td>
                  <td className="px-4 py-2">Ongoing patching required</td>
                  <td className="px-4 py-2">Minimal (managed by CDN provider)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            When to Use Other Approaches
          </h2>
          <p>
            This setup works best for:
          </p>
          <ul className="mt-4 space-y-2 ml-4">
            <li>✓ Content sites like blogs and documentation portals</li>
            <li>✓ Corporate/institutional websites</li>
            <li>✓ High traffic sites where service stability is a priority</li>
            <li>✓ Teams looking for high performance without high maintenance duties</li>
          </ul>
          <p className="mt-4">
            It is less suited for:
          </p>
          <ul className="space-y-2 ml-4">
            <li>✗ Websites that change content for each individual user on every page load</li>
            <li>✗ Applications that need updates to display in real time without a build step</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            Summary
          </h2>
          <ul className="space-y-3 ml-4">
            <li>• Separate public and admin tools since they have different security needs</li>
            <li>• Serve static content via networks for speed and safety</li>
            <li>• Use security headers to block attacks in the browser</li>
            <li>• Keep the public path static to avoid data injection issues</li>
            <li>• This approach is safer and reduces hosting expenses</li>
          </ul>
        </div>

        <div className="border-t border-hairline pt-8 mt-12">
          <p className="text-sm text-muted-foreground">
            <strong>About this article:</strong> Principles drawn from the YIRH website deployment and the Nigeria Union of Teachers platform architecture.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
