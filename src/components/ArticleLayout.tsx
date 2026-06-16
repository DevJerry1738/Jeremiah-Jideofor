import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

interface ArticleLayoutProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  children: React.ReactNode;
  relatedArticles?: Array<{
    title: string;
    slug: string;
    category: string;
  }>;
}

export function ArticleLayout({
  title,
  category,
  date,
  readTime,
  children,
  relatedArticles,
}: ArticleLayoutProps) {
  return (
    <>
      {/* Header */}
      <section className="pt-32 md:pt-40 pb-16 container-page relative scanline">
        <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.15]" />

        <div className="relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <Link
              to="/insights"
              className="hover:text-foreground transition-colors"
            >
              Insights
            </Link>
            <span className="text-primary/50">/</span>
            <span className="text-foreground">{category}</span>
          </div>

          {/* Title & Meta */}
          <Reveal>
            <h1 className="display-lg font-bold max-w-4xl mb-8 text-foreground">
              {title}
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap gap-6 md:gap-10 font-mono text-xs text-muted-foreground border-b border-hairline pb-8">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-primary" />
                <span className="text-primary">{category}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{readTime}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="container-page py-20 md:py-32 relative">
        <div className="absolute inset-0 cyber-dots opacity-[0.1] pointer-events-none" />
        <Reveal>
          <article className="max-w-3xl mx-auto prose prose-invert relative z-10 space-y-8 text-foreground">
            <div className="prose-content">
              {children}
            </div>
          </article>
        </Reveal>
      </section>

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="border-t border-hairline bg-surface/20 relative">
          <div className="absolute inset-0 cyber-grid opacity-[0.1] pointer-events-none" />
          <div className="container-page py-24 md:py-32 relative z-10">
            <div className="mb-16">
              <p className="eyebrow mb-4">[ RELATED ARTICLES ]</p>
              <h2 className="display-lg uppercase font-semibold">Read Next.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((article, idx) => (
                <Reveal key={article.slug} delay={idx * 100}>
                  <Link
                    to={article.slug as any}
                    className="group border border-hairline bg-background p-8 hover-card-premium h-full flex flex-col justify-between transition-all"
                  >
                    <div>
                      <span className="font-mono text-[0.62rem] text-primary tracking-widest uppercase border border-primary/20 rounded px-2 py-0.5">
                        {article.category}
                      </span>
                      <h3 className="text-lg font-semibold uppercase tracking-tight mt-6 leading-snug group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                    </div>
                    <div className="mt-12 flex justify-between items-center font-mono text-[0.68rem] text-muted-foreground border-t border-hairline pt-4 group-hover:text-primary/60 transition-colors">
                      <span>ARTICLE // READ</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="container-page py-28 md:py-44 border-t border-hairline relative">
        <div className="absolute inset-0 cyber-grid opacity-[0.05] pointer-events-none" />
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-8 relative z-10">
            <p className="eyebrow text-primary">[ STRATEGIC PARTNERSHIP ]</p>
            <h2 className="display-lg uppercase font-semibold leading-tight">
              Ready to apply these principles to your organization?
            </h2>
            <p className="text-base text-muted-foreground font-light leading-relaxed">
              Let's discuss how security-first design and operational excellence can transform your digital systems.
            </p>
            <div className="pt-6">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-all"
              >
                Start a Conversation
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
      </section>
    </>
  );
}
