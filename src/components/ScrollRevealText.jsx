import { useEffect, useRef } from "react";

export default function ScrollRevealText({ children }) {
  const ref = useRef(null);
  const words = children.split(/\s+/);
  useEffect(() => {
    let frame = 0;
    const render = () => {
      const element = ref.current;
      const top = element.getBoundingClientRect().top;
      const fraction = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight * 0.88 - top) / (window.innerHeight * 0.55),
        ),
      );
      Array.from(element.children).forEach((word, index, all) =>
        word.classList.toggle("lit", index / all.length < fraction),
      );
      frame = 0;
    };
    const queue = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    render();
    return () => {
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
      cancelAnimationFrame(frame);
    };
  }, [children]);
  return (
    <h2 ref={ref} className="word-reveal">
      {words.map((word, index) => (
        <span key={`${index}-${word}`}>
          {word}
          {index < words.length - 1 ? " " : ""}
        </span>
      ))}
    </h2>
  );
}
