import { skills } from "../constants";
import styles from "../styles";
import ScrollAnimation from "react-animate-on-scroll";

const marqueeSkills = [...skills, ...skills];

const Skills = () => {
  return (
    <section id="skills" className={`${styles.marginY}`}>
      <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
        <h2 className={`${styles.heading2}`}>Technologies I Work With</h2>
      </ScrollAnimation>

      <div className="relative w-full overflow-hidden py-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

        <div className="skills-marquee-track flex items-center gap-6 sm:gap-8 md:gap-10">
          {marqueeSkills.map((skill, index) => (
            <div
              key={`${skill.id}-${index}`}
              className="flex shrink-0 items-center justify-center px-2 sm:px-3 md:px-4"
              aria-hidden={index >= skills.length}
            >
              <img
                src={skill.icon}
                alt={index >= skills.length ? "" : skill.title}
                className="h-10 w-auto grayscale transition duration-300 ease-out hover:grayscale-0 sm:h-12 md:h-16 lg:h-20"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
