import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { p as prefersReducedMotion } from "./router-BF4rO8wo.mjs";
const isInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
};
function useReveal(ref, config) {
  const threshold = config?.threshold ?? 0.12;
  const rootMargin = config?.rootMargin ?? "0px 0px -12% 0px";
  reactExports.useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reveal = () => {
      element.classList.add("reveal-visible");
      element.classList.remove("reveal-hidden");
    };
    if (prefersReducedMotion) {
      reveal();
      return;
    }
    if (isInViewport(element)) {
      reveal();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        reveal();
        observer.disconnect();
      },
      {
        threshold,
        rootMargin
      }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  useReveal(ref, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: `reveal-hidden ${className}`,
      style: { transitionDelay: `${delay / 1e3}s` },
      children
    }
  );
}
function SplitReveal({ text, className = "" }) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -18% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const words = text.split(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, className, "aria-hidden": "true", children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden align-bottom mr-[0.25em]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-block",
      style: {
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: `transform 0.85s cubic-bezier(0.2,0.7,0.2,1) ${i * 50}ms`
      },
      children: w
    }
  ) }, i)) });
}
export {
  Reveal as R,
  SplitReveal as S,
  useReveal as u
};
