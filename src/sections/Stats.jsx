import { stats } from "../constants";
import styles from "../styles";
import ScrollAnimation from "react-animate-on-scroll";

const Stats = () => (
  <section
    className={`${styles.padding} flex justify-between flex-row flex-wrap sm:mb-20 mb-6`}
  >
    {stats.map((stat) => (
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOut="fadeOutUp"
        key={stat.id}
      >
        <div
          key={stat.id}
          className={`flex-1 flex justify-between items-center flex-row m-3 max-w-[335px]`}
        >
          <h4 className="font-poppins font-semibold text-slate-600 sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px]">
            {stat.value}
          </h4>
          <p className="font-poppins font-semibold md:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      </ScrollAnimation>
    ))}
  </section>
);

export default Stats;
