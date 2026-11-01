import Reveal from "../Reveal";
import DashboardPreview from "./DashboardPreview";
import WordlePreview from "./WordlePreview";
import GridPreview from "./GridPreview";

const previews = {
  dashboard: DashboardPreview,
  wordle: WordlePreview,
  grid: GridPreview,
};

export default function ProjectCard({ project }) {
  const Preview = previews[project.id];
  return (
    <Reveal
      as="a"
      className={`project${project.wide ? " project-wide" : ""}`}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.title} on GitHub`}
    >
      <div aria-hidden="true">
        <Preview />
      </div>
      <div className="project-info">
        <div>
          <p className="eyebrow">
            {project.number} / {project.category}
          </p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          <b aria-hidden="true">↗</b>
        </div>
      </div>
    </Reveal>
  );
}
