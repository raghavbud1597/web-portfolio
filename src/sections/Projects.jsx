import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import styles from "../styles";
import Button from "./components/Button";

const Projects = () => {
  return (
    <section id="projects">
      <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
        <h2 className={`${styles.heading2}`}>Projects</h2>
      </ScrollAnimation>
      <div className="w-full">
      <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp" initiallyVisible={true}>
          <div className="flex flex-col gap-4 place-content-around lg:flex-row mt-20">
            <Button
              text="View on Github"
              link="https://github.com/raghavbud1597"
              type="large"
            />
            <Button
              text="View on Codepen"
              link="https://codepen.io/raghavbudhiraja"
              type="large"
            />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default Projects