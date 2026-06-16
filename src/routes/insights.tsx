import { createFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router';
import { Reveal } from "@/components/Reveal";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights & Journal — Jeremiah Jideofor" },
      { name: "description", content: "Strategic thinking on security, product development, and business technology. Articles on least privilege, custom software ROI, and edge delivery." },
      { property: "og:title", content: "Insights & Journal — Jeremiah Jideofor" },
      { property: "og:description", content: "Articles on security, product development, and technology strategy." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

const articles = [
  {
    id: "least-privilege",
    slug: "/insights/least-privilege",
    category: "Security",
    title: "Understanding Least Privilege: Designing Secure Access Control in Modern Business Software.",
    excerpt: "A deep dive into the principle of least privilege and how to design effective Role-Based Access Control (RBAC) systems in modern business software.",
    date: "June 14, 2026",
    readTime: "5 min read",
  },
  {
    id: "replacing-spreadsheets",
    slug: "/insights/replacing-spreadsheets",
    category: "Product Development",
    title: "Replacing Spreadsheets: How Custom Operations Software Pays Back Technical Debt.",
    excerpt: "The business case for replacing spreadsheet workflows with custom operational software. Analysis of costs, benefits, implementation strategies.",
    date: "June 12, 2026",
    readTime: "6 min read",
  },
  {
    id: "edge-delivery-security",
    slug: "/insights/edge-delivery-security",
    category: "Business Technology",
    title: "Edge Delivery & Security: Minimizing the Attack Surface of Corporate Web Assets.",
    excerpt: "How edge computing, Content Security Policies (CSP), and secure delivery pipelines minimize the attack surface of corporate websites.",
    date: "June 10, 2026",
    readTime: "4 min read",
  },
];

function InsightsPage() {
  const categories = Array.from(new Set(articles.map((a) => a.category)));
  const location = useLocation();
  const isExactInsights = location.pathname === "/insights" || location.pathname === "/insights/";

  if (!isExactInsights) {
    return <Outlet />;
  }

  return (
    <>
      {/* Header */}
      <section className="pt-36 md:pt-48 pb-16 container-page relative scanline">
        <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.15]" />
        <div className="relative z-10">
          <Reveal>
            <p className="eyebrow mb-6">[ INSIGHTS & JOURNAL ]</p>
            <h1 className="display-xl max-w-5xl font-bold text-foreground mb-8">
              Strategic thinking on technology, security, and organizational operations.
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
              Regular articles on building secure systems, product development strategy, and modernizing operations. Updated with insights from real-world engagements and consulting work.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="hairline" />

      {/* Category Navigation */}
      <section className="container-page py-12 md:py-16">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 border border-hairline rounded-full text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-surface/50 transition-all"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="container-page py-16 md:py-24 relative">
        <div className="absolute inset-0 cyber-dots opacity-[0.1] pointer-events-none" />
        <div className="space-y-12 relative z-10">
          {articles.map((article, idx) => (
            <Reveal key={article.id} delay={idx * 100}>
              <Link
                to={article.slug}
                className="group block border border-hairline bg-surface/10 p-8 md:p-10 hover-card-premium transition-all"
              >
                <div className="grid md:grid-cols-12 gap-8">
                  {/* Meta */}
                  <div className="md:col-span-3">
                    <span className="font-mono text-[0.62rem] text-primary tracking-widest uppercase border border-primary/20 rounded px-2 py-0.5">
                      {article.category}
                    </span>
                    <div className="flex flex-wrap gap-4 mt-6 font-mono text-[0.68rem] text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-9 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-tight text-foreground group-hover:text-primary transition-colors leading-snug">
                        {article.title}
                      </h3>
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-primary/60 group-hover:text-primary font-mono text-xs uppercase tracking-widest transition-colors">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Outlet for child article pages */}
      <Outlet />

      {/* Subscribe CTA */}
      <section className="border-t border-hairline bg-surface/20 relative">
        <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />
        <div className="container-page py-24 md:py-32 relative z-10">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <p className="eyebrow text-primary">[ STAY UPDATED ]</p>
              <h2 className="display-lg uppercase font-semibold">Get new articles in your inbox.</h2>
              <p className="text-muted-foreground font-light leading-relaxed">
                Strategic insights on security, product development, and technology strategy, delivered weekly.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-all"
                >
                  Subscribe to Updates
                  <span className="w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
