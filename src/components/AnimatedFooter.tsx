import { useRef } from "react";
import { gsap } from "gsap";
import { useGsap } from "@/hooks/useGsap";

export function AnimatedFooter({ children }: { children: React.ReactNode }) {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useGsap(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, [], footerRef);

  return <div ref={footerRef}>{children}</div>;
}
