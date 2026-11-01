import { Fragment } from "react";
import Reveal from "../components/Reveal";
import ScrollRevealText from "../components/ScrollRevealText";
import { capabilities, toolkit } from "../data/portfolio";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="wrap">
        <div className="about-intro">
          <Reveal as="p" className="eyebrow">
            02 / HOW I THINK
          </Reveal>
          <ScrollRevealText>
            The best frontend work lives where thoughtful design meets
            dependable engineering.
          </ScrollRevealText>
        </div>
        <Reveal className="about-details">
          <p>
            I’m Raghav, a senior software developer who cares as much about how
            a product feels as how it’s built. I connect frontend architecture,
            performance, and product thinking to turn ambitious ideas into
            useful experiences.
          </p>
          <p>
            My approach is simple: understand the problem, build a strong
            foundation, and sweat the details that make everyday interactions
            better.
          </p>
        </Reveal>
        <div className="capabilities">
          {capabilities.map((capability, index) => (
            <Reveal as="article" key={capability.title}>
              <span className="cap-icon" aria-hidden="true">
                {capability.icon}
              </span>
              <span className="cap-num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="toolkit">
          <span className="eyebrow">IN MY TOOLKIT</span>
          <p>
            {toolkit.map((tool, index) => (
              <Fragment key={tool}>
                {index > 0 && <i aria-hidden="true">✳</i>}
                <span>{tool}</span>
              </Fragment>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
