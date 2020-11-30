import React, { useState, useEffect, useRef } from "react"
import Header from "../components/header/header"
import "../components/layout.css"
import About from "../components/About/About"
import "./Home.css"
import Contact from "../components/Contact/Contact"
import Intro from "../components/Intro/Intro"
import FeaturedProjects from "../components/FeaturedProjects/FeaturedProjects"

function Home() {
  // Variables
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  // Template
  return (
    <div id="home" className="page">
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <Header />
      </div>
      <Intro/>
      <FeaturedProjects />
      <About />
      <Contact />
    </div>
  )
}

export default Home
