import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutMe from './components/AboutMe.jsx'
import Portfolio from './components/Portfolio.jsx'
import Services from './components/Services.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
function App() {

  return (
    <>
      <div className="app-background-overlay">
      <Header />
      <Hero />
      </div>
      <AboutMe />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      <Footer></Footer>
    </>
  )
}

export default App
