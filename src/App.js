import React, { useEffect } from "react";
import Card from "./components/Card";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
    });
  });
  return (
    <div className="min-h-screen py-10 px-3 sm:px-5 bg-grey-100">
      <div data-aos="fade-down" data-aos-duration="700">
        <Card />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
        <About />
      </div>
      <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="500">
        <Skills />
      </div>
      <div data-aos="fade-down" data-aos-duration="600" data-aos-delay="300">
        <Contact />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <Footer />
      </div>
    </div>
  );
}

export default App;
