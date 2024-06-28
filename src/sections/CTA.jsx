import styles, { layout } from "../styles";
import Button  from "./components/Button";
import ScrollAnimation from "react-animate-on-scroll";

const CTA = () => {
  return (
    <ScrollAnimation animateIn="zoomIn" animateOut="zoomOut">
    <section
      className={`w-full border-2 rounded-[3rem] border-slate-100 bg-slate-700 ${layout.section} md:px-10 lg:px-30 justify-center`}
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
        <h2 className={`font-poppins font-semibold text-4xl text-white text-left`}>Let's connect to discuss your project today and discover how I breathe life into design through code!</h2>
        <div className="flex gap-2 flex-col lg:flex-row my-4">
          <Button text="Contact Me" link="mailto:raghavbudhiraja78@gmail.com" type="light"/>
          <Button text="Download CV" link="https://drive.google.com/file/d/17RHXjbgz1oZOiLEo8To4Jk8l_dqQUl_T/view" type="light"/>
        </div>
      </div>
    </section>
    </ScrollAnimation>
  );
};

export default CTA;
