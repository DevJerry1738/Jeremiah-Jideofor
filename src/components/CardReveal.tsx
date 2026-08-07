import { useRef, type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

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
  useReveal(ref, { threshold: 0.15, rootMargin: "0px 0px -12% 0px" });

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
