import { useEffect, useRef } from "react";

export default function Reveal({
  as: Tag = "div",
  className = "",
  children,
  ...props
}) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    if (!("IntersectionObserver" in window)) {
      element.classList.add("visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.09 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <Tag {...props} ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
