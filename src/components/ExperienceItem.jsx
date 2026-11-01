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
        <ul className="job-achievements">
          {job.description.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        {job.skills && <span>{job.skills}</span>}
      </div>
    </Reveal>
  );
}
