import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/projects/ProjectCard";
import { profile, projects } from "../data/portfolio";

export default function Work() {
  return (
    <section className="section wrap" id="work">
      <SectionHeading
        label="01 / SELECTED WORK"
        title={
          <>
            Less noise.
            <br />
            More <em>purpose.</em>
          </>
        }
        description={
          <>
            A few things I’ve built, from data-rich interfaces
            <br className="desktop" /> to playful everyday tools.
          </>
        }
        link={{ href: profile.github, label: "All projects" }}
      />
      <div className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
