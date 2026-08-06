import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/hooks/useGsap";

gsap.registerPlugin(ScrollTrigger);

const motion = typeof window === "undefined" ? false : prefersReducedMotion;

export function fadeUp(
  targets: gsap.TargetsTarget,
  options: {
    duration?: number;
    delay?: number;
    y?: number;
    opacity?: number;
    ease?: string;
    stagger?: number;
    scrollTrigger?: boolean | gsap.plugins.ScrollTriggerVars;
  } = {}
) {
  if (motion) {
    return null;
  }

  return gsap.fromTo(
    targets,
    {
      opacity: 0,
      y: options.y ?? 26,
    },
    {
      opacity: 1,
      y: 0,
      duration: options.duration ?? 0.9,
      delay: options.delay ?? 0,
      ease: options.ease ?? "power3.out",
      stagger: options.stagger,
      scrollTrigger: options.scrollTrigger || undefined,
    }
  );
}

export function fadeIn(
  targets: gsap.TargetsTarget,
  options: { duration?: number; delay?: number; ease?: string; opacity?: number; scrollTrigger?: boolean | gsap.plugins.ScrollTriggerVars } = {}
) {
  if (motion) {
    return null;
  }

  return gsap.fromTo(
    targets,
    { opacity: 0 },
    {
      opacity: options.opacity ?? 1,
      duration: options.duration ?? 0.9,
      delay: options.delay ?? 0,
      ease: options.ease ?? "power3.out",
      scrollTrigger: options.scrollTrigger || undefined,
    }
  );
}

export function revealOnScroll(
  target: gsap.TargetsTarget,
  config: Partial<gsap.plugins.ScrollTriggerVars> = {}
) {
  if (motion) {
    return null;
  }

  return fadeUp(target, {
    duration: config.duration ?? 0.85,
    delay: config.delay ?? 0,
    y: config.y ?? 28,
    ease: config.ease ?? "power3.out",
    stagger: config.stagger,
    scrollTrigger: {
      trigger: target,
      start: config.start ?? "top 90%",
      end: config.end ?? "bottom 10%",
      toggleActions: "play none none none",
      once: config.once ?? true,
      ...config,
    } as gsap.plugins.ScrollTriggerVars,
  });
}

export function floatSlow(
  target: gsap.TargetsTarget,
  options: { y?: number; duration?: number; delay?: number; ease?: string } = {}
) {
  if (motion) {
    return null;
  }

  return gsap.to(target, {
    y: options.y ?? 12,
    duration: options.duration ?? 7,
    delay: options.delay ?? 0,
    ease: options.ease ?? "sine.inOut",
    repeat: -1,
    yoyo: true,
    overwrite: "auto",
  });
}
