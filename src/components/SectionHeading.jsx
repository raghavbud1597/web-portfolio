import Reveal from "./Reveal";

export default function SectionHeading({ label, title, description, link }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{label}</p>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <a
        className="text-link"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label} <span aria-hidden="true">↗</span>
      </a>
    </Reveal>
  );
}
