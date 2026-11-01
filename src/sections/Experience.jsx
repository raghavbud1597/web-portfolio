import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import ExperienceItem from "../components/ExperienceItem";
import { experience, education, profile } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="section wrap experience" id="experience">
      <SectionHeading
        label="03 / THE JOURNEY"
        title={
          <>
            Experience
            <br />
            that <em>adds up.</em>
          </>
        }
        description={
          <>
            Different teams. Complex problems.
            <br />A consistent focus on thoughtful delivery.
          </>
        }
        link={{ href: profile.linkedin, label: "LinkedIn" }}
      />
      <div className="timeline">
        {experience.map((job, index) => (
          <ExperienceItem key={job.id} job={job} defaultOpen={index === 0} />
        ))}
      </div>
      <Reveal className="education">
        <span className="eyebrow">ALWAYS LEARNING</span>
        {education.map((item) => (
          <p key={item.title}>
            {item.title}
            <span>{item.institution}</span>
          </p>
        ))}
      </Reveal>
    </section>
  );
}
