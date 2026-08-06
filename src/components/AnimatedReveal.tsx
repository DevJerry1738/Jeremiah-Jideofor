import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0,
  y = 28,
  duration = 0.82,
  start = "top 90%",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  duration?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target || prefersReducedMotion) return;

    const animation = gsap.from(target, {
      opacity: 0,
      y,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: target,
        start,
        toggleActions: "play none none none",
        once: true,
      },
      stagger,
    });

    return () => {
      animation.kill();
      const trigger = ScrollTrigger.getById(animation.vars.id as string);
      if (trigger) trigger.kill();
    };
  }, [delay, duration, stagger, start, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
