import React from "react";
import styles, { layout } from "../styles";
import Button  from "./Button";

const CTA = () => {
  return (
    <section
      className={`w-full border-2 rounded-[3rem] border-slate-100 bg-slate-700 ${layout.sectionReverse} md:px-10 lg:px-40 justify-center`}
    >
      <div className={`${styles.flexCenter} min-h-[200px] px-20`}>
        <div className="relative">
          <div className="
          relative 
          w-[200px] 
          h-[200px] 
          before:content-[''] 
          before:absolute 
          before:w-[200px] 
          before:h-[100px]
          before:bg-sky-400
          before:rounded-br-[100px]
          before:rounded-bl-[100px]
          before:bottom-0
          before:left-0
          animate-bowl
          ">
            <div className="
              absolute
              top-[50%]
              left-[-15px]
              w-[40px]
              h-[40px]
              bg-white
              rounded-[50%]
              translate-y-[-100%]
              animate-ball
            ">

            </div>
          </div>
        </div>
      </div>
      
      <div className={`flex justify-center items-center md:items-start  px-10 md:px20 py-10 md:py-0 flex-col`}>
        <h2 className={`font-poppins font-semibold md:text-[48px] text-[40px] md:leading-[52px] leading-[44px] text-white text-left`}>Let's work together</h2>
        <div className="flex gap-2 flex-col lg:flex-row my-4">
          <Button text="Contact Me" link="mailto:raghavbudhiraja78@gmail.com" />
          <Button text="Download CV" link="https://drive.google.com/file/d/1mAyc7CaOj8kSDrpDFpXbsq-lBHPX89gj/view?usp=drive_link" />
        </div>
      </div>
    </section>
  );
};

export default CTA;
