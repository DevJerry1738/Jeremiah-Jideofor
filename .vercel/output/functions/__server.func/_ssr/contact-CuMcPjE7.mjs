import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Reveal } from "./Reveal-BTaSxUZT.mjs";
import { a as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DEkQBszW.mjs";
import "../_libs/seroval.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const submitContactForm = createServerFn({
  method: "POST"
}).inputValidator(objectType({
  name: stringType().min(1, "Name is required"),
  email: stringType().email("Invalid email address"),
  org: stringType().optional(),
  topic: stringType(),
  message: stringType().min(1, "Message is required")
})).handler(createSsrRpc("51496c6ca2b5055341948a46205d4083f7301883d1e1b16d00d2abd04c02d91c"));
const topics = ["Custom Platform", "Security Audit", "Technical Advisory", "Partnership"];
function ContactPage() {
  const [topic, setTopic] = reactExports.useState("Custom Platform");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [sent, setSent] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const onSubmit = async (e) => {
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
          message: String(data.get("message") ?? "")
        }
      });
      setSent(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError(err?.message || "Something went wrong while routing your enquiry.");
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "pt-36 md:pt-48 pb-16 container-page relative overflow-hidden scanline", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 cyber-grid opacity-[0.2]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-6", children: "[ SECURED CHANNEL ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "display-xl max-w-[20ch] font-bold text-foreground", children: "LET'S BUILD SOMETHING VALUABLE" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-muted-foreground text-lg font-light leading-relaxed", children: "Available for selected custom platforms, security audits, and fractional CTO roles. Please complete the enquiry routing below." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hairline" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container-page py-20 md:py-28 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 cyber-dots opacity-[0.15] pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-16 lg:gap-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-hairline bg-surface/30 p-8 rounded relative overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: "[ DIRECT COMMUNICATION ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-6 mt-6 font-mono text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.62rem] text-muted-foreground uppercase tracking-widest mb-1", children: "Secure Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:devjerry1738@gmail.com", className: "text-base font-semibold text-foreground hover:text-primary transition-colors link-underline", children: "devjerry1738@gmail.com" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.62rem] text-muted-foreground uppercase tracking-widest mb-1", children: "WhatsApp Endpoint" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/2349011448616", target: "_blank", rel: "noreferrer", className: "text-base font-semibold text-foreground hover:text-primary transition-colors link-underline", children: "Establish Secure Chat →" })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-hairline bg-surface/10 p-8 rounded", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: "[ ELSEWHERE ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 mt-6 font-mono text-xs uppercase tracking-wider", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.linkedin.com/in/onyeka-jideofor-7539b33ab/", target: "_blank", rel: "noreferrer", className: "text-muted-foreground hover:text-foreground link-underline", children: "LinkedIn Professional Profile" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/DevJerry1738/", target: "_blank", rel: "noreferrer", className: "text-muted-foreground hover:text-foreground link-underline", children: "GitHub Source Log" }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 240, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[0.68rem] text-muted-foreground/80 space-y-2 border-l border-primary/40 pl-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "uppercase tracking-widest text-primary font-semibold", children: "[ KEY FINGERPRINT ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-light tracking-wide break-all", children: "PGP: 9E3A 4B2C 7D8F 1A5E 0B6D 8C7A 4F2E 1D9C 0B7A 4F2E" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "border border-hairline bg-surface/25 p-8 md:p-10 rounded space-y-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-4", children: "[ ROUTING TOPIC ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: topics.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setTopic(t), disabled: submitting, className: `px-4 py-2.5 rounded font-mono text-xs border transition-all ${topic === t ? "bg-primary text-primary-foreground border-primary" : "border-hairline bg-background text-muted-foreground hover:text-foreground hover:border-foreground/30"}`, children: t.toUpperCase() }, t)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your Name", name: "name", type: "text", required: true, placeholder: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email Address", name: "email", type: "email", required: true, placeholder: "name@company.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Organization", name: "org", type: "text", placeholder: "Company / Entity Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "eyebrow mb-3 block", children: "[ DESCRIPTION OF ENGAGEMENT ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "message", required: true, rows: 4, placeholder: "Provide a brief summary of the business challenge, required scope, timeline, and security provisions.", className: "w-full bg-background border border-hairline focus:border-primary rounded outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/45 transition-colors resize-none" })
          ] }),
          sent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-xs font-mono rounded", children: "[ SUCCESS ] YOUR ENQUIRY HAS BEEN SECURELY ROUTED TO DEVELOPMENT." }),
          error && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-mono rounded", children: [
            "[ ERROR ] ",
            error.toUpperCase()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: submitting, className: "w-full sm:w-auto group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground rounded-full pl-7 pr-2 py-2 text-xs font-mono uppercase tracking-wider font-semibold hover:opacity-90 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed", children: [
              submitting ? "Routing Enquiry..." : "Submit Enquiry",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-9 h-9 rounded-full bg-primary-foreground text-primary inline-flex items-center justify-center transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[0.62rem] text-muted-foreground/60 uppercase tracking-widest text-right", children: "CONNECTION STATUS: DIRECT" })
          ] })
        ] }) }) })
      ] })
    ] })
  ] });
}
function Field({
  label,
  name,
  type,
  placeholder,
  required
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: name, className: "eyebrow mb-3 block", children: `[ ${label.toUpperCase()} ]` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required, placeholder, className: "w-full bg-background border border-hairline focus:border-primary rounded outline-none px-4 py-3 text-sm placeholder:text-muted-foreground/45 transition-colors" })
  ] });
}
export {
  ContactPage as component
};
