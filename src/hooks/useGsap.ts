import type { RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP as useGSAPRaw } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
useGSAPRaw.register(gsap);

const isPrefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const prefersReducedMotion = isPrefersReducedMotion();

export function useGsap(
  callback: () => void | (() => void),
  dependencies: readonly any[] = [],
  scope?: RefObject<Element | null>
) {
  return useGSAPRaw(callback, { scope, dependencies });
}

export { gsap, ScrollTrigger };
