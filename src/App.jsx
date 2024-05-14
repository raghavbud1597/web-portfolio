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
import styles, { layout } from "./styles";

function App() {
  return (
    <div className="bg-slate-50 w-full my-2">
      <div className={` ${layout.pageWrapper}`}>
        <div className={`${layout.sectionWrapper}`}>
          <Navbar />
        </div>
        <div className={`${layout.sectionWrapper} my-0 md:my-10`}>
          <Hero />
        </div>
        <div className={`${layout.sectionWrapper}`}>
          <Stats />
        </div>
        <div className={`${layout.sectionWrapper}`}>
          <Skills />
        </div>
        <div className={`${layout.sectionWrapper}`}>
          <Experience />
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
