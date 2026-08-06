import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { p as prefersReducedMotion } from "./router-CuEUZlIb.mjs";
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const applyVisible = () => {
      el.classList.add("reveal-visible");
      el.classList.remove("reveal-hidden");
    };
    if (prefersReducedMotion) {
      applyVisible();
      return;
    }
    const isInViewport = (target) => {
      const rect = target.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };
    if (isInViewport(el)) {
      applyVisible();
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        applyVisible();
        observer.disconnect();
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -10% 0px"
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
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
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const words = text.split(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, className, children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden align-bottom mr-[0.25em]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
  SplitReveal as S
};
