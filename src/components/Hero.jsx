import React from "react";
import ProfilePicture from "./ProfilePicture";
import Tags from "./Tags";
import { tags } from "../constants";
import styles, { layout } from "../styles";

const Hero = () => {
  return (
    <section className={`${layout.sectionReverse}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col text-slate-500`}
      >
        <p>Hello there, my name is</p>
        <h1 className="font-montserrat font-bold lg:text-[5rem] text-[3.5rem] lg:leading-[5rem] leading-[3.5rem] text-left tracking-tight text-slate-600">
          Raghav
        </h1>
        <h1 className="font-montserrat font-bold lg:text-[5rem] text-[3.5rem] lg:leading-[5rem] leading-[3.5rem] tracking-tight text-left">
            Budhiraja
        </h1>
        <h1 className="font-montserrat font-bold md:text-[2.5rem] text-[2rem] md:leading-[2.6rem] leading-[2rem] text-left tracking-tight text-gradient">
            Web Developer & Designer
        </h1>
      </div>
      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10`}>
        <ProfilePicture />
      </div>
      
    </section>
  );
};

export default Hero;

/* 
<section className={`flex flex-col md:flex-row  ${styles.paddingY} ${styles.marginY}`}>
      <div className="flex flex-col items-center md:items-start justify-center w-full md:mx-6">
        <p>Hello there, my name is</p>
        <h1 className="text-gradient text-[70px] leading-[80px]">Raghav</h1>
        <h1 className="text-gradient text-[70px] leading-[80px]">Budhiraja</h1>
      </div>
      <div className="flex justify-center items-center w-full md:mx-10">
      <ProfilePicture/>
      </div>
      <div className="flex flex-wrap w-full md:mx-10">
        {tags.map((tag) => (
          <Tags key={tag.id} title={tag.title} bgColor={tag.bgColor} />
        ))}
      </div>
    </section>

*/
