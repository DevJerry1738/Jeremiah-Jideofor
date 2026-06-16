import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";

export const Route = createFileRoute("/insights/least-privilege")({
  head: () => ({
    meta: [
      { title: "Understanding Least Privilege: Designing Secure Access Control — Jeremiah Jideofor" },
      { name: "description", content: "A deep dive into the principle of least privilege and how to design effective Role-Based Access Control (RBAC) systems in modern business software." },
      { property: "og:title", content: "Understanding Least Privilege: Designing Secure Access Control" },
      { property: "og:description", content: "A deep dive into the principle of least privilege and how to design effective Role-Based Access Control (RBAC) systems." },
      { property: "og:url", content: "/insights/least-privilege" },
    ],
    links: [{ rel: "canonical", href: "/insights/least-privilege" }],
  }),
  component: LeastPrivilegeArticle,
});

function LeastPrivilegeArticle() {
  const relatedArticles = [
    {
      title: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets.",
      slug: "/insights/edge-delivery-security",
      category: "Business Technology",
    },
    {
      title: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt.",
      slug: "/insights/replacing-spreadsheets",
      category: "Product Development",
    },
  ];

  return (
    <ArticleLayout
      title="Understanding Least Privilege: Designing Secure Access Control in Modern Business Software"
      category="Security"
      date="June 14, 2026"
      readTime="5 min read"
      relatedArticles={relatedArticles}
    >
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <p className="text-lg text-foreground font-light">
          Least privilege is a foundational concept in security, but most business software gets it wrong. Here is why this happens and how you can fix it.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            Defining Least Privilege
          </h2>
          <p>
            Least privilege means that a user, process, or system component has access to only the specific resources needed to do their job. Nothing more.
          </p>
          <p className="mt-4">
            While this is easy to explain, putting it into practice requires clear rules at three levels:
          </p>
          <ul className="mt-4 space-y-2 ml-4">
            <li>• <strong>Application Level</strong>: UI controls that restrict what actions users can take</li>
            <li>• <strong>API Level</strong>: Permission checks that verify authorization before processing operations</li>
            <li>• <strong>Database Level</strong>: Row Level Security policies that prevent unauthorized data access</li>
          </ul>
          <p className="mt-4">
            Most teams only build the first layer. That is a major mistake.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            Why Simple Role Based Access Control Fails
          </h2>
          <p>
            Take a common scenario: a nonprofit runs field programs in three countries. Each country has a manager who should only see their own local records.
          </p>
          <p className="mt-4">
            A basic implementation looks like this:
          </p>
          <pre className="mt-4 bg-surface/50 border border-hairline p-4 rounded overflow-x-auto text-sm">
            <code>{`// Frontend only
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
});`}</code>
          </pre>
          <p className="mt-4">
            This approach creates multiple vulnerabilities:
          </p>
          <ul className="mt-4 space-y-2 ml-4">
            <li>• If a frontend developer forgets to hide a navigation link, users can view tabs for all countries</li>
            <li>• An attacker can bypass the API check by modifying the request token</li>
            <li>• A database script could expose all records by accident</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            The Three Layer Defense Model
          </h2>
          <p>
            Real security requires checks at every layer. We designed the systems for the Nigeria Union of Teachers modernization and the YIRH CMS around this structure:
          </p>

          <div className="mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded">
            <p className="font-semibold text-foreground mb-2">Layer 1: Database Row Level Security</p>
            <p className="text-sm">
              Row Level Security in Postgres ensures that even if someone bypasses the application logic, they still cannot read unauthorized rows. Here is an example from YIRH:
            </p>
            <pre className="mt-3 bg-surface/50 border border-hairline p-3 rounded overflow-x-auto text-xs">
              <code>{`CREATE POLICY select_own_team ON team_members
  FOR SELECT USING (
    auth.uid() = created_by 
    OR current_user_role() = 'admin'
  );`}</code>
            </pre>
          </div>

          <div className="mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded">
            <p className="font-semibold text-foreground mb-2">Layer 2: API Authorization</p>
            <p className="text-sm">
              Every API endpoint verifies roles and resource ownership before sending data. For example:
            </p>
            <pre className="mt-3 bg-surface/50 border border-hairline p-3 rounded overflow-x-auto text-xs">
              <code>{`async function updatePublication(pubId, data, user) {
  const pub = await db.publications.findById(pubId);
  if (pub.createdBy !== user.id && user.role !== 'admin') {
    throw new UnauthorizedError();
  }
  return db.publications.update(pubId, data);
}`}</code>
            </pre>
          </div>

          <div className="mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded">
            <p className="font-semibold text-foreground mb-2">Layer 3: UI Visibility Control</p>
            <p className="text-sm">
              UI elements are shown conditionally based on the user role. You should never rely on this alone, but it works well alongside the other layers:
            </p>
            <pre className="mt-3 bg-surface/50 border border-hairline p-3 rounded overflow-x-auto text-xs">
              <code>{`{user.role === 'admin' && (
  <AdminDashboard />
)}`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            Designing a Permission Model
          </h2>
          <p>
            You can start with a simple grid showing roles and resources:
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border border-hairline">
              <thead className="bg-surface/50 border-b border-hairline">
                <tr>
                  <th className="px-4 py-2 text-left">Role</th>
                  <th className="px-4 py-2 text-left">Can View</th>
                  <th className="px-4 py-2 text-left">Can Edit</th>
                  <th className="px-4 py-2 text-left">Can Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hairline">
                <tr>
                  <td className="px-4 py-2 font-mono text-primary">Admin</td>
                  <td className="px-4 py-2">All data</td>
                  <td className="px-4 py-2">All data</td>
                  <td className="px-4 py-2">All data</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-primary">Editor</td>
                  <td className="px-4 py-2">Own content</td>
                  <td className="px-4 py-2">Own content</td>
                  <td className="px-4 py-2">No</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-mono text-primary">Viewer</td>
                  <td className="px-4 py-2">Public data</td>
                  <td className="px-4 py-2">No</td>
                  <td className="px-4 py-2">No</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            This grid translates directly to your database rules, API middleware, and UI code. When you update it, all three layers should align.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            Common Mistakes
          </h2>
          <ul className="space-y-3 ml-4">
            <li>
              <strong>Creating Too Many Roles</strong>
              <p className="text-sm mt-1">Avoid creating highly specific roles. Instead, create capabilities that you can group together. Use fine grained permissions to control access.</p>
            </li>
            <li className="mt-4">
              <strong>Ignoring Machine to Machine Access</strong>
              <p className="text-sm mt-1">Background processes and jobs need their own limited access. A cron job should never run with full admin privileges.</p>
            </li>
            <li className="mt-4">
              <strong>Missing Audit Logs</strong>
              <p className="text-sm mt-1">Log all permission checks and data access to a secure log. If a security issue occurs, you need to know what was accessed and who did it.</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            Summary
          </h2>
          <ul className="space-y-3 ml-4">
            <li>• Check authorization at three levels: database, API, and UI</li>
            <li>• Maintain a clear role and permission grid that everyone can reference</li>
            <li>• Block access by default and explicitly grant permissions</li>
            <li>• Audit permission checks and log failed attempts</li>
            <li>• Review permissions regularly as the team grows</li>
          </ul>
        </div>

        <div className="border-t border-hairline pt-8 mt-12">
          <p className="text-sm text-muted-foreground">
            <strong>About this article:</strong> Principles drawn from the Nigeria Union of Teachers modernization, the YIRH headless CMS, and the PhishGuard security platform.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
