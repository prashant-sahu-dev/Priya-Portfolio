import { useState, useEffect } from "react";
import "./App.css";
import "./welcome.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in"); // 'fade-in' | 'fade-out'

  const words = ["Beauty", "Elegance", "You"];

  useEffect(() => {
    let timers = [];

    if (fadeState === "fade-in") {
      timers.push(setTimeout(() => setFadeState("stay"), 1000)); // after fade-in complete
    } else if (fadeState === "stay") {
      timers.push(
        setTimeout(() => setFadeState("fade-out"), 1000) // stay duration
      );
    } else if (fadeState === "fade-out") {
      timers.push(
        setTimeout(() => {
          if (wordIndex < words.length - 1) {
            setWordIndex((prev) => prev + 1);
            setFadeState("fade-in");
          } else {
            setShowWelcome(false);
          }
        }, 500)
      );
    }

    return () => timers.forEach((t) => clearTimeout(t));
  }, [fadeState, wordIndex]);

  return (
    <>
      {showWelcome ? (
        <div className="welcome-screen">
          <h1 className={`welcome-word ${fadeState}`}>{words[wordIndex]}</h1>
        </div>
      ) : (
        <>
          <div className="app-background-overlay" id="hero">
            <Header />
            <Hero />
          </div>
          <div id="about">
            <AboutMe />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
