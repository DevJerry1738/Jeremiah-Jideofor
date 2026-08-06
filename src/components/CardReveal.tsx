import { useEffect, useRef, type ReactNode } from "react";
import { prefersReducedMotion } from "@/hooks/useGsap";

export function CardReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

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
        threshold: 0.15,
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
