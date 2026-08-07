import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = height > 0 ? Math.min(100, Math.max(0, (scrollTop / height) * 100)) : 0;
      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 h-1 pointer-events-none z-[60] bg-transparent">
      <div
        ref={barRef}
        className="h-full bg-primary/90 shadow-[0_0_18px_rgba(234,179,8,0.22)] transition-[width] duration-150 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
}
