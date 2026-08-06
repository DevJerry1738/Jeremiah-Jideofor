import { useEffect, useRef, useState, type ReactNode } from "react";
import { prefersReducedMotion } from "@/hooks/useGsap";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const isInViewport = (target: Element) => {
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
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal-hidden ${className}`}
      style={{ transitionDelay: `${delay / 1000}s` }}
    >
      {children}
    </div>
  );
}

export function SplitReveal({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
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
  return (
    <span ref={ref} className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
          <span
            className="inline-block"
            style={{
              transform: visible ? "translateY(0)" : "translateY(110%)",
              transition: `transform 0.85s cubic-bezier(0.2,0.7,0.2,1) ${i * 50}ms`,
            }}
          >
            {w}
          </span>
        </span>
      ))}
    </span>
  );
}
