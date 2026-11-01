import Reveal from "../Reveal";

export default function ProjectCard({ project }) {
  const primaryUrl = project.liveUrl || project.repositoryUrl;
  const destination = project.liveUrl ? "live site" : "GitHub repository";

  return (
    <Reveal
      as="article"
      className="project"
      aria-labelledby={`${project.id}-title`}
    >
      <a
        className="project-main"
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} ${destination}`}
      >
        <div className="project-art">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
      </a>
      <div className="project-info">
        <p className="eyebrow">
          {project.number} / {project.category}
        </p>
        <h3 id={`${project.id}-title`}>
          <a href={primaryUrl} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-links">
        {project.liveUrl && (
          <a
            className="project-live-link"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live site`}
          >
            Live site <span aria-hidden="true">↗</span>
          </a>
        )}
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} GitHub repository`}
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </Reveal>
  );
}
