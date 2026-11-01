import Reveal from "./Reveal";

export default function ExperienceItem({ job, defaultOpen = false }) {
  return (
    <Reveal as="details" open={defaultOpen}>
      <summary>
        <span className="job-date">{job.period}</span>
        <div>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
        <span className="job-plus" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="job-description">
        {job.description.map((line) => (
          <div key={line}>{line}</div>
        ))}
        {job.skills && <span>{job.skills}</span>}
      </div>
    </Reveal>
  );
}
