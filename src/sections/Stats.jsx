import { stats } from "../constants";
import styles from "../styles";

const Stats = () => (
  <section className={`${styles.padding} flex justify-between flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-between items-center flex-row m-3 max-w-[300px]`} >
        <h4 className="font-poppins font-semibold text-slate-600 sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px]">
          {stat.value}
        </h4>
        <p className="font-poppins font-semibold md:text-[20px] text-[15px] sm:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;