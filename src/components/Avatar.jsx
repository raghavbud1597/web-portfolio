import avatar from "../assets/avatar.webp";

export default function Avatar() {
  return (
    <div className="avatar-frame">
      <div className="avatar-label">
        <span>THE HUMAN BEHIND THE CODE</span>
        <span>01 / RB</span>
      </div>
      <div className="avatar-stage">
        <img
          className="avatar-image"
          src={avatar}
          alt="Illustrated avatar of Raghav Budhiraja with black glasses, swept-back hair, a beard, and a charcoal hoodie"
          width="960"
          height="960"
          fetchPriority="high"
        />
      </div>
      <div className="avatar-shade" />
      <svg className="avatar-orbit" viewBox="0 0 400 400" aria-hidden="true">
        <ellipse
          cx="200"
          cy="200"
          rx="185"
          ry="76"
          transform="rotate(-35 200 200)"
        />
        <ellipse
          cx="200"
          cy="200"
          rx="185"
          ry="76"
          transform="rotate(35 200 200)"
        />
      </svg>
      <div className="avatar-caption">
        <span>
          Software developer.
          <br />
          Product thinker.
        </span>
        <span className="avatar-accent" aria-hidden="true">
          ✳
        </span>
      </div>
    </div>
  );
}
