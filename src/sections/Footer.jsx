import styles, { layout } from "../styles";
import { socialMedia } from "../constants";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className={`${layout.sectionReverse} justify-between`}>
      <ScrollAnimation
           
            animateIn="fadeInUp"
            animateOut="fadeOutUp"
            offset={10}
          >
      <p className="text-sm text-slate-400">&copy; {year} Raghav Budhiraja</p>
      </ScrollAnimation>
      <div className={`${styles.flexCenter}`}>
        {socialMedia.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="mr-4"
          >
            <ScrollAnimation
           
           animateIn="fadeInUp"
           animateOut="fadeOutUp"
           offset={10}
         >
            <span
              className="
              text-sm 
              text-slate-400 
              bg-clip-text
              hover:font-bold
              hover:text-transparent
              hover:bg-gradient-to-r 
              hover:from-[#962ec1] 
              hover:to-[#e9877a]
              transition-all
              "
            >
              {item.title}
            </span>
            </ScrollAnimation>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
