import Reveal from "../components/Reveal";
import { profile } from "../data/portfolio";

export default function ProofBar() {
  return (
    <Reveal className="proof-bar wrap">
      <p>
        Good interfaces are felt.
        <br />
        <span>Great engineering makes them possible.</span>
      </p>
      <div>
        <strong>
          7<span>+</span>
        </strong>
        <small>YEARS BUILDING FOR THE WEB</small>
      </div>
      <a href={profile.resume} target="_blank" rel="noopener">
        View résumé <span>↗</span>
      </a>
    </Reveal>
  );
}
