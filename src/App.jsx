import { MotionContext } from "./context/MotionContext";
import { useMotionPreferences } from "./hooks/useMotionPreferences";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import ProofBar from "./sections/ProofBar";
import Work from "./sections/Work";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const motion = useMotionPreferences();
  return (
    <MotionContext value={motion}>
      <div
        className={`portfolio motion-ready${motion.disabled ? " motion-off" : ""}`}
      >
        <a className="skip" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">
          <Hero />
          <ProofBar />
          <Work />
          <About />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionContext>
  );
}
