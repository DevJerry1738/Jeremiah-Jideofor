import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 1s cubic-bezier(0.2,0.7,0.2,1) ${delay}ms, transform 1s cubic-bezier(0.2,0.7,0.2,1) ${delay}ms`
      },
      className,
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
        transition: `transform 0.9s cubic-bezier(0.2,0.7,0.2,1) ${i * 60}ms`
      },
      children: w
    }
  ) }, i)) });
}
export {
  Reveal as R,
  SplitReveal as S
};
