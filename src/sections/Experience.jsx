import styles from "../styles";
import { experience } from "../constants";
import ScrollAnimation from "react-animate-on-scroll";

const Experience = () => {
  return (
    <section id="experience">
      <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutUp">
        <h2 className={`${styles.heading2}`}>Education & Experience</h2>
      </ScrollAnimation>
      <div className="w-full">
        {experience.map((item) => (
          <ScrollAnimation key={item.id} animateIn="fadeInUp" animateOut="fadeOutUp">
            <div
              key={item.id}
              className="flex items-center justify-start  p-4 border-b-2 border-slate-300"
            >
              <p className="text-left w-[250px]">{item.year}</p>
              <div className="w-full flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:items-center">
                <h3 className="text-lg text-left">{item.title}</h3>
                <p className="text-sm">{item.company}</p>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Experience;
