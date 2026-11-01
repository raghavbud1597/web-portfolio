import { useMotion } from "../hooks/useMotion";
import { profile } from "../data/portfolio";

export default function Footer() {
  const { disabled, systemReduced, toggle } = useMotion();
  return (
    <footer className="wrap">
      <a className="brand" href="#home" aria-label="Back to home">
        r<span>b</span>
        <i>®</i>
      </a>
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <div>
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub ↗
        </a>
        <a href={profile.codepen} target="_blank" rel="noopener noreferrer">
          CodePen ↗
        </a>
        <button
          id="motion-toggle"
          type="button"
          aria-pressed={disabled}
          aria-disabled={systemReduced}
          title={
            systemReduced
              ? "Reduced motion follows your system preference"
              : "Toggle animation"
          }
          onClick={toggle}
        >
          Motion: {disabled ? "off" : "on"}
        </button>
      </div>
      <a className="top-link" href="#home" aria-label="Back to top">
        ↑
      </a>
    </footer>
  );
}
