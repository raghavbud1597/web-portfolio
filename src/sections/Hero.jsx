import Avatar from "../components/Avatar";

export default function Hero() {
  return (
    <section className="hero wrap" id="home">
      <div className="hero-top">
        <p className="eyebrow">
          <span className="live-dot"></span> RAGHAV BUDHIRAJA{" "}
          <span className="slash">/</span> SENIOR SOFTWARE DEVELOPER
        </p>
        <span className="edition">PORTFOLIO — 2026</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>
            <span className="line">
              <span>Complex ideas.</span>
            </span>
            <span className="line">
              <span>Effortless</span>
            </span>
            <span className="line lime">
              <span>
                experiences<span className="period">.</span>
              </span>
            </span>
          </h1>
          <div className="hero-bottom">
            <p>
              I turn complex problems into fast, thoughtful interfaces. Built to
              feel right. Engineered to scale.
            </p>
            <a
              className="circle-link"
              href="#work"
              aria-label="Explore selected work"
            >
              ↓
            </a>
          </div>
        </div>
        <Avatar />
      </div>
      <div className="hero-footer">
        <span>REACT · TYPESCRIPT · NEXT.JS · AI WORKFLOWS</span>
        <a href="#about">
          A LITTLE FURTHER DOWN <span>↓</span>
        </a>
      </div>
    </section>
  );
}
