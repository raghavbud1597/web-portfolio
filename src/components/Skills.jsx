import React from "react";
import { skills } from "../constants";
import styles from "../styles";

const Skills = () => {
  return (
    <section id="skills" className={`${styles.marginY}`}>
      <h2 className={`${styles.heading2} text-slate-600`}>My Programming Skills</h2>
      <div className="flex">
        {skills.map((skill) => (
          <div key={skill.id} className={`border-2 border-slate-300 ${styles.flexCenter} flex-col rounded-full p-8 flex-wrap mx-4`}>
            <img src={skill.icon} alt={skill.title} className="w-[50px]"/>
            <h1>{skill.title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
