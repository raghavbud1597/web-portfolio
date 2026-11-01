import { useEffect, useState } from "react";
import { useMediaQuery } from "./useMediaQuery";

export function useMotionPreferences() {
  const systemReduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [manualOff, setManualOff] = useState(() => {
    try {
      return sessionStorage.getItem("motion-off") === "true";
    } catch {
      return false;
    }
  });
  const disabled = systemReduced || manualOff;

  useEffect(() => {
    const previous = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = disabled
      ? "auto"
      : "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = previous;
    };
  }, [disabled]);

  const toggle = () => {
    if (systemReduced) return;
    const next = !manualOff;
    setManualOff(next);
    try {
      sessionStorage.setItem("motion-off", String(next));
    } catch {
      return;
    }
  };

  return { disabled, systemReduced, toggle };
}
