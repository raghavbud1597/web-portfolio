import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const ref = useRef(null);
  useEffect(() => {
    let frame = 0;
    const render = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      ref.current.style.width = `${total > 0 ? Math.min(100, (window.scrollY / total) * 100) : 0}%`;
      frame = 0;
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const observer = new ResizeObserver(queue);
    observer.observe(document.body);
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    render();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <div ref={ref} className="progress" aria-hidden="true" />;
}
