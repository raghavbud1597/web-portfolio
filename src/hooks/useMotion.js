import { useContext } from "react";
import { MotionContext } from "../context/MotionContext";

export function useMotion() {
  const value = useContext(MotionContext);
  if (!value)
    throw new Error("Motion controls require a MotionContext provider.");
  return value;
}
