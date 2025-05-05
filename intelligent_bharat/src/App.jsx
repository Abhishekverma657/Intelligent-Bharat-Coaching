import AboutUs from "./components/About";
import ContactSection from "./components/ContactSection";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ResultsSection from "./components/ResultsSection";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-5 py-6 min-h-screen">
        <Slider />
        <div id="about">
          <AboutUs />
        </div>
        <div id="selections">
          <ResultsSection />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id="courses">
          <ContactSection />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
