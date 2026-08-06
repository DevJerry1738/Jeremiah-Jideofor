import { useRef } from "react";
import { gsap } from "gsap";
import { useGsap } from "@/hooks/useGsap";

export function AnimatedHeader({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLDivElement | null>(null);

  useGsap(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -18,
        duration: 0.7,
        ease: "power3.out",
      });
    }, headerRef);

    return () => ctx.revert();
  }, [], headerRef);

  return (
    <div ref={headerRef} className="relative z-50">
      {children}
    </div>
  );
}
