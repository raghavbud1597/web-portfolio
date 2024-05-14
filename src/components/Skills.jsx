import React from "react";
import { skills } from "../constants";
import styles from "../styles";

const Skills = () => {
  return (
    <section id="skills" className={`${styles.marginY}`}>
      <h2 className={`${styles.heading2}`}>My Programming Skills</h2>
      <div className="flex w-full relative overflow-hidden">
        {skills.map((skill) => (
          <div key={skill.id} className="logosSlide flex">
            <img src={skill.icon} alt={skill.title} className=" h-[80px] m-8 grayscale hover:grayscale-0"/>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
