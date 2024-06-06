import { skills } from "../constants";
import styles from "../styles";
import ScrollAnimation from "react-animate-on-scroll";

const Skills = () => {
  return (
    <section id="skills" className={`${styles.marginY}`}>
      <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
        <h2 className={`${styles.heading2}`}>My Programming Skills</h2>
      </ScrollAnimation>

      <div className="flex w-full">
        {skills.map((skill) => (
          <ScrollAnimation animateIn="slideInRight" animateOut="slideOutLeft" key={skill.id}>
            <div key={skill.id} className="flex">
              <img
                src={skill.icon}
                alt={skill.title}
                className=" h-[80px] m-8 grayscale hover:grayscale-0"
              />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Skills;
