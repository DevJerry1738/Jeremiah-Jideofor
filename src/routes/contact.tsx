import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
import { submitContactForm } from "@/lib/api/contact.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jeremiah Jideofor" },
      { name: "description", content: "Initiate a discussion. Available for system engineering, security reviews, and fractional CTO advisory roles." },
      { property: "og:title", content: "Contact — Jeremiah Jideofor" },
      { property: "og:description", content: "Initiate a discussion. Available for system engineering, security reviews, and fractional CTO advisory roles." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const topics = ["Custom Platform", "Security Audit", "Technical Advisory", "Partnership"] as const;

function ContactPage() {
  const [topic, setTopic] = useState<(typeof topics)[number]>("Custom Platform");
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await submitContactForm({
        data: {
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          org: String(data.get("org") ?? ""),
          topic,
          message: String(data.get("message") ?? ""),
        },
      });
      setSent(true);
      form.reset();
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Something went wrong while routing your enquiry.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-36 md:pt-48 pb-16 container-page relative overflow-hidden scanline">
        {/* Grid Overlay */}
        <div className="pointer-events-none absolute inset-0 cyber-grid opacity-[0.2]" />
        
        <p className="eyebrow mb-6">[ SECURED CHANNEL ]</p>
        <h1 className="display-xl max-w-[20ch] font-bold text-foreground">
          LET'S BUILD SOMETHING VALUABLE
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground text-lg font-light leading-relaxed">
          Available for selected custom platforms, security audits, and fractional CTO roles. Please complete the enquiry routing below.
        </p>
      </section>

      <div className="hairline" />

      <section className="container-page py-20 md:py-28 relative">
        <div className="absolute inset-0 cyber-dots opacity-[0.15] pointer-events-none" />

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-12">
            <Reveal>
              <div className="border border-hairline bg-surface/30 p-8 rounded relative overflow-hidden">
                <span className="font-mono text-xs text-primary">[ DIRECT COMMUNICATION ]</span>
                <ul className="space-y-6 mt-6 font-mono text-sm">
                  <li>
                    <p className="text-[0.62rem] text-muted-foreground uppercase tracking-widest mb-1">Secure Email</p>
                    <a href="mailto:devjerry1738@gmail.com" className="text-base font-semibold text-foreground hover:text-primary transition-colors link-underline">
                      devjerry1738@gmail.com
                    </a>
                  </li>
                  <li>
                    <p className="text-[0.62rem] text-muted-foreground uppercase tracking-widest mb-1">WhatsApp Endpoint</p>
                    <a href="https://wa.me/2349011448616" target="_blank" rel="noreferrer" className="text-base font-semibold text-foreground hover:text-primary transition-colors link-underline">
                      Establish Secure Chat →
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-hairline bg-surface/10 p-8 rounded">
                <span className="font-mono text-xs text-primary">[ ELSEWHERE ]</span>
                <ul className="space-y-3 mt-6 font-mono text-xs uppercase tracking-wider">
                  <li>
                    <a href="https://www.linkedin.com/in/onyeka-jideofor-7539b33ab/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground link-underline">
                      LinkedIn Professional Profile
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/DevJerry1738/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground link-underline">
                      GitHub Source Log
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="font-mono text-[0.68rem] text-muted-foreground/80 space-y-2 border-l border-primary/40 pl-4">
                <p className="uppercase tracking-widest text-primary font-semibold">[ KEY FINGERPRINT ]</p>
                <p className="font-light tracking-wide break-all">
                  PGP: 9E3A 4B2C 7D8F 1A5E 0B6D 8C7A 4F2E 1D9C 0B7A 4F2E
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={onSubmit} className="border border-hairline bg-surface/25 p-8 md:p-10 rounded space-y-10">
                {/* Topic selector */}
                <div>
                  <p className="eyebrow mb-4">[ ROUTING TOPIC ]</p>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setTopic(t)}
                        disabled={submitting}
                        className={`px-4 py-2.5 rounded font-mono text-xs border transition-all ${
                          topic === t
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-hairline bg-background text-muted-foreground hover:text-foreground hover:border-foreground/30"
                        }`}
                      >
                        {t.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid sm:grid-cols-2 gap-8">
                  <Field label="Your Name" name="name" type="text" required placeholder="Full Name" />
                  <Field label="Email Address" name="email" type="email" required placeholder="name@company.com" />
                </div>

                <Field label="Organization" name="org" type="text" placeholder="Company / Entity Name" />

                <div>
                  <label className="eyebrow mb-3 block">[ DESCRIPTION OF ENGAGEMENT ]</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Provide a brief summary of the business challenge, required scope, timeline, and security provisions."
                    className="w-full bg-background border border-hairline focus:border-primary rounded outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/45 transition-colors resize-none"
                  />
                </div>

                {/* Feedback Alerts */}
                {sent && (
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono rounded">
                    [ SUCCESS ] YOUR ENQUIRY HAS BEEN SECURELY ROUTED TO DEVELOPMENT.
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-mono rounded">
                    [ ERROR ] {error.toUpperCase()}
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Routing Enquiry..." : "Submit Enquiry"}
                    <span className="w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45">
                      <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>

                  <span className="font-mono text-[0.62rem] text-muted-foreground/60 uppercase tracking-widest text-right">
                    CONNECTION STATUS: DIRECT
                  </span>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="w-full">
      <label htmlFor={name} className="eyebrow mb-3 block">{`[ ${label.toUpperCase()} ]`}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background border border-hairline focus:border-primary rounded outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/45 transition-colors"
      />
    </div>
  );
}
