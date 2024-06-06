import React from "react";
import Tilt from "react-parallax-tilt";

const SkillTag = ({ id, title, description }) => {
  const tagStyle = {
    sectionWrapper: `
      p-8
      border-2
      rounded-2xl
      border-slate-200
      text-left
      h-full
      w-full
      hover:shadow-neu-inner
      select-none
    `,
    heading: `
      text-2xl
      font-bold
      text-slate-500
      py-2
    `,
    description: `
      text-slate-400
    `
  };

  return (
    <Tilt>
      <div key={id} className={tagStyle.sectionWrapper}>
        <h1 className={tagStyle.heading}>{title}</h1>
        <p className={tagStyle.description}>{description}</p>
      </div>
    </Tilt>
  );
};

export default SkillTag;
