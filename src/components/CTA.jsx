import React from "react";
import styles, { layout } from "../styles";

const CTA = () => {
  return (
    <section
      className={`w-full border-2 rounded-3xl border-slate-100 bg-slate-700 ${layout.sectionReverse} ${styles.paddingX}`}
    >
      <div className={`${styles.flexCenter} min-h-[200px]`}>
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
      
      <div>
        <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] xs:leading-[76px] leading-[66px] text-white`}>Let's work together</h2>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Contact Me
        </button>
        <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default CTA;
