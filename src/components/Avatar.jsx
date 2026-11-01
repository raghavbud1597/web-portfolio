import { useRef } from "react";
import avatar from "../assets/avatar.png";
import { useMotion } from "../hooks/useMotion";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Avatar() {
  const ref = useRef(null);
  const { disabled } = useMotion();
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reset = () => {
    ref.current.style.setProperty("--avatar-x", "0deg");
    ref.current.style.setProperty("--avatar-y", "0deg");
  };
  const tilt = (event) => {
    if (disabled || !finePointer) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    ref.current.style.setProperty("--avatar-x", `${(-y * 7).toFixed(2)}deg`);
    ref.current.style.setProperty("--avatar-y", `${(x * 9).toFixed(2)}deg`);
  };
  return (
    <div
      ref={ref}
      className="portrait-frame avatar-frame"
      onPointerMove={tilt}
      onPointerLeave={reset}
    >
      <div className="portrait-label">
        <span>THE HUMAN BEHIND THE CODE</span>
        <span>01 / RB</span>
      </div>
      <div className="avatar-stage">
        <img
          className="professional-avatar"
          src={avatar}
          alt="Cartoon professional avatar of Raghav Budhiraja with black glasses, side-swept hair, and a trimmed beard"
          width="1254"
          height="1254"
          fetchPriority="high"
        />
      </div>
      <div className="portrait-shade" />
      <svg className="orbit" viewBox="0 0 400 400" aria-hidden="true">
        <ellipse
          cx="200"
          cy="200"
          rx="185"
          ry="76"
          transform="rotate(-35 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="185"
          ry="76"
          transform="rotate(35 200 200)"
        />
      </svg>
      <div className="portrait-caption">
        <span>
          Frontend engineer.
          <br />
          Product thinker.
        </span>
        <span className="asterisk" aria-hidden="true">
          ✳
        </span>
      </div>
    </div>
  );
}
