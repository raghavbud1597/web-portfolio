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
import styles from "./styles";

function App() {
  return (
    <div className="bg-slate-50 w-full overflow-hidden">
      <div className={`bg-slate-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} ${styles.paddingX} xl:px-0`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-slate-50 ${styles.flexStart} my-0 md:my-10`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-slate-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Skills />
        </div>
      </div>
      <div className="w-full">
        
        <Experience />
      </div>
    
      <div className={`bg-slate-50 ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          
          
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
