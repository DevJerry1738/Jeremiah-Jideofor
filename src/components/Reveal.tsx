import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

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
  useReveal(ref, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });

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
  return (
    <span ref={ref} className={className} aria-hidden="true">
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
