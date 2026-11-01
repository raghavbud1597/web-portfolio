import { useActiveSection } from "../hooks/useActiveSection";
import { profile } from "../data/portfolio";

export default function Navbar() {
  const activeSection = useActiveSection();

  return (
    <header>
      <a className="brand" href="#home" aria-label="Raghav Budhiraja home">
        r<span>b</span>
        <i>®</i>
      </a>
      <nav aria-label="Main navigation">
        <a
          href="#work"
          className={activeSection === "work" ? "active" : undefined}
          aria-current={activeSection === "work" ? "location" : undefined}
        >
          Work
        </a>
        <a
          href="#about"
          className={activeSection === "about" ? "active" : undefined}
          aria-current={activeSection === "about" ? "location" : undefined}
        >
          About
        </a>
        <a
          href="#experience"
          className={activeSection === "experience" ? "active" : undefined}
          aria-current={activeSection === "experience" ? "location" : undefined}
        >
          Experience
        </a>
      </nav>
      <a className="header-contact" href={profile.emailHref}>
        Let’s talk <span>↗</span>
      </a>
    </header>
  );
}
