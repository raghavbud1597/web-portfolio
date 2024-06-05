import "./App.css";
import {
  Navbar,
  CTA,
  Stats,
  Footer,
  Hero,
  Experience,
  Skills,
} from "./components";
import WhyMe from "./components/WhyMe";
import styles, { layout } from "./styles";

function App() {
  return (
    <div className={`bg-slate-50 w-full my-4`}>
      <div className={` ${layout.pageWrapper}`}>
        <div className={`${layout.sectionWrapper}`}>
          <Navbar />
        </div>
        <div className={`${layout.sectionWrapper} my-0 md:my-20 lg:my-30`}>
          <Hero />
        </div>
        <div className={`${layout.sectionWrapper} `}>
          <Stats />
        </div>
        <div className={`${layout.sectionWrapper}`}>
          <Skills />
        </div>
        <div className={`${layout.sectionWrapper} my-0 md:my-20`}>
          <Experience />
        </div>
        <div className={`${layout.sectionWrapper} my-0 md:my-20`}>
          <WhyMe />
        </div>
        <div className={`${layout.sectionWrapper} my-2 md:my-10`}>
          <CTA />
        </div>
        <div className={`${layout.sectionWrapper}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
