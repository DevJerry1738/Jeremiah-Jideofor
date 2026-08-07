import { useEffect, type RefObject } from "react";
import { prefersReducedMotion } from "./useGsap";

const isInViewport = (element: Element) => {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
};

export function useReveal(
  ref: RefObject<HTMLElement | null>,
  config?: {
    threshold?: number;
    rootMargin?: string;
  }
) {
  const threshold = config?.threshold ?? 0.12;
  const rootMargin = config?.rootMargin ?? "0px 0px -12% 0px";

  useEffect(() => {
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
        rootMargin,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, threshold, rootMargin]);
}
