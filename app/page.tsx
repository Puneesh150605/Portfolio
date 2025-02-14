"use client"

import { useEffect } from "react"

import AOS from "aos"
import "aos/dist/aos.css"
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  console.log("fgfgfg");
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // This will make animations trigger every time an element scrolls into view
      mirror: true, // This will trigger animations when scrolling up as well
    })
  }, [])

  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      <Header />
     <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
      <Footer /> 
    </main>
  )
}

