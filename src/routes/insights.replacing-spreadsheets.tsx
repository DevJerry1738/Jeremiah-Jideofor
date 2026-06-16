import { createFileRoute } from "@tanstack/react-router";
import { ArticleLayout } from "@/components/ArticleLayout";

export const Route = createFileRoute("/insights/replacing-spreadsheets")({
  head: () => ({
    meta: [
      { title: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt — Jeremiah Jideofor" },
      { name: "description", content: "The business case for replacing spreadsheet workflows with custom operational software. Analysis of costs, benefits, and implementation strategies." },
      { property: "og:title", content: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt" },
      { property: "og:description", content: "The business case for custom operations software versus perpetual spreadsheet maintenance." },
      { property: "og:url", content: "/insights/replacing-spreadsheets" },
    ],
    links: [{ rel: "canonical", href: "/insights/replacing-spreadsheets" }],
  }),
  component: ReplacingSpreadsheetsArticle,
});

function ReplacingSpreadsheetsArticle() {
  const relatedArticles = [
    {
      title: "Understanding Least Privilege: Designing Secure Access Control in Modern Business Software.",
      slug: "/insights/least-privilege",
      category: "Security",
    },
    {
      title: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets.",
      slug: "/insights/edge-delivery-security",
      category: "Business Technology",
    },
  ];

  return (
    <ArticleLayout
      title="Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt"
      category="Product Development"
      date="June 12, 2026"
      readTime="6 min read"
      relatedArticles={relatedArticles}
    >
      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <p className="text-lg text-foreground font-light">
          Every growing organization reaches a point where spreadsheets are not enough. Data gets corrupted. Reconciliations take weeks. Decision making crawls to a halt. The real question is whether you build a custom system now or wait until it costs you much more.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            The Unseen Cost of Spreadsheets
          </h2>
          <p>
            Spreadsheets cost far more than they seem. For example, a distributor might receive orders over messaging apps and phone calls, then type them manually into a spreadsheet.
          </p>
          <p className="mt-4 font-semibold text-foreground">Direct Costs:</p>
          <ul className="mt-2 space-y-2 ml-4">
            <li>• three hours daily of manual data entry</li>
            <li>• eight hours weekly of reconciliation work</li>
            <li>• monthly accounting reviews</li>
          </ul>
          <p className="mt-4 font-semibold text-foreground">Indirect Costs:</p>
          <ul className="mt-2 space-y-2 ml-4">
            <li>• Errors from manual entry often cost thousands in correction overhead</li>
            <li>• Shipping delays lead to lost revenue</li>
            <li>• Unchecked files create compliance risk</li>
            <li>• The finance team spends all their time typing data rather than analyzing trends</li>
          </ul>
          <p className="mt-6 font-semibold text-foreground">
            The total cost can easily exceed three hundred thousand dollars annually in losses and delays.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            The Value of a Custom System
          </h2>
          <p>
            Building a custom ordering system like Stockwell costs about twenty five thousand dollars including design, development, and deployment.
          </p>
          <p className="mt-4">
            <strong>First Year Returns:</strong>
          </p>
          <ul className="mt-2 space-y-2 ml-4">
            <li>• Manual entry is almost entirely eliminated, saving significant time</li>
            <li>• Order error rates drop to nearly zero</li>
            <li>• Reconciliation time drops to just a couple of hours a week</li>
            <li>• Faster shipping increases order volume and revenue</li>
          </ul>
          <p className="mt-4">
            <strong>First year benefit: over two hundred thousand dollars</strong>
          </p>
          <p className="mt-2 text-foreground font-semibold">
            The system pays for itself in just over a month.
          </p>
          <p className="mt-4 font-light">
            Every subsequent year brings clear savings with minimal upkeep.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            How to Choose
          </h2>
          <div className="mt-6 border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded">
            <p className="font-semibold text-foreground mb-3">When to Build</p>
            <ul className="space-y-2 text-sm">
              <li>• You have staff spending half their time on manual typing</li>
              <li>• Error rates are hurting revenue or compliance</li>
              <li>• You are scaling fast and spreadsheets are a bottleneck</li>
              <li>• Multiple teams use the same data and are out of sync</li>
            </ul>
          </div>

          <div className="mt-6 border-l-4 border-red-500/50 pl-6 bg-red-500/5 p-4 rounded">
            <p className="font-semibold text-foreground mb-3">When to Wait</p>
            <ul className="space-y-2 text-sm">
              <li>• The workflow is only needed occasionally</li>
              <li>• You are not sure if this process will exist next year</li>
              <li>• The process takes up very little of your team's time</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            A Phased Approach to Building
          </h2>
          <p>
            We modernized the system for the Nigeria Union of Teachers using distinct phases to lower risk:
          </p>

          <div className="mt-6 space-y-4">
            <div className="border border-hairline p-4 rounded">
              <p className="font-semibold text-foreground mb-2">Phase 1: MVP (Weeks 1-3)</p>
              <p className="text-sm">Build the core workflow. This includes post creation and publication management. We focus on minimal features and maximum speed.</p>
              <p className="text-xs text-muted-foreground mt-2">• Team feedback: Immediate</p>
            </div>

            <div className="border border-hairline p-4 rounded">
              <p className="font-semibold text-foreground mb-2">Phase 2: Admin Dashboard (Weeks 4-6)</p>
              <p className="text-sm">Add admin controls. This allows staff to manage content without developer help, which brings true independence.</p>
              <p className="text-xs text-muted-foreground mt-2">• Stakeholder adoption: Significant improvement</p>
            </div>

            <div className="border border-hairline p-4 rounded">
              <p className="font-semibold text-foreground mb-2">Phase 3: Advanced Features (Weeks 7+)</p>
              <p className="text-sm">Analytics, reporting, and integrations. We build these based on real feedback rather than guesses.</p>
              <p className="text-xs text-muted-foreground mt-2">• ROI: Incremental improvements to the existing system</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            The Technical Debt of Spreadsheets
          </h2>
          <p>
            Spreadsheets create technical debt quickly:
          </p>
          <ul className="mt-4 space-y-3 ml-4">
            <li>
              <strong>Silos:</strong> Often only one person understands the file structure. If they leave, the next person spends days figuring it out.
            </li>
            <li className="mt-3">
              <strong>Version Control Issues:</strong> People share separate copies and make changes, leading to different versions and reconciliation headaches.
            </li>
            <li className="mt-3">
              <strong>Fragile Formulas:</strong> Formulas can break silently, letting incorrect data flow through the system for weeks.
            </li>
            <li className="mt-3">
              <strong>Scaling Bottlenecks:</strong> Adding new products, regions, or departments requires rebuilding the sheet layout.
            </li>
            <li className="mt-3">
              <strong>Audit Risks:</strong> There is no history showing who changed what or when, making compliance audits difficult.
            </li>
          </ul>
          <p className="mt-4">
            Custom systems solve these problems. For example, the YIRH CMS has:
          </p>
          <ul className="mt-3 space-y-2 ml-4">
            <li>• Full change history and audit logs</li>
            <li>• Role based access so only authorized users make changes</li>
            <li>• Data validation rules to prevent errors</li>
            <li>• Scalable design to support growth without restructuring</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            Three Simple Questions
          </h2>
          <p>
            Ask these three questions before making a decision:
          </p>
          <div className="mt-6 space-y-4">
            <div className="border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded">
              <p className="font-semibold text-foreground">1. What is this process worth to your organization?</p>
              <p className="text-sm mt-2">If the savings or risk mitigation from this process exceeds the initial build cost, custom software is justified.</p>
            </div>

            <div className="border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded">
              <p className="font-semibold text-foreground">2. Will this process still exist in three years?</p>
              <p className="text-sm mt-2">If yes, build a custom solution. If no, optimize what you have.</p>
            </div>

            <div className="border-l-4 border-primary/50 pl-6 bg-primary/5 p-4 rounded">
              <p className="font-semibold text-foreground">3. Can you find an existing tool that fits?</p>
              <p className="text-sm mt-2">Standard tools can work for some workflows. But if your process is highly specialized, a custom tool is faster and cheaper in the long run.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-foreground mb-4 uppercase tracking-tight">
            Summary
          </h2>
          <ul className="space-y-3 ml-4">
            <li>• Spreadsheets are expensive in disguise, considering error rates and manual work</li>
            <li>• Custom systems often pay for themselves quickly</li>
            <li>• A phased approach lowers risk</li>
            <li>• The goal is enabling your team to operate without developer help</li>
            <li>• Success is measured in saved hours and reduced errors</li>
          </ul>
        </div>

        <div className="border-t border-hairline pt-8 mt-12">
          <p className="text-sm text-muted-foreground">
            <strong>About this article:</strong> Case studies drawn from the Nigeria Union of Teachers modernization and the Stockwell B2B platform.
          </p>
        </div>
      </div>
    </ArticleLayout>
  );
}
