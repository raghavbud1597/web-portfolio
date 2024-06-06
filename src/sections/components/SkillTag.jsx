import Tilt from "react-parallax-tilt";

const SkillTag = ({ id= 0, title='', description='' }) => {
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
      group
    `,
    heading: `
      text-2xl
      font-bold
      text-slate-500
      py-2
      inline-block
      bg-clip-text
      group-hover:text-transparent
      group-hover:bg-gradient-to-r 
      group-hover:from-[#962ec1] 
      group-hover:via-[#e9877a] 
      group-hover:to-[#e9877a]
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
