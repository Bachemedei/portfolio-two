import React, { Fragement, useState, useEffect, useRef } from "react"
import Header from "../components/header/header"
import "../components/layout.css"
import About from "../components/About/About"
import RecentProjects from "../components/RecentProjects/RecentProjects"
import "./Home.css"
import AllProjects from "../components/Portfolio/AllProjects"
import Contact from "../components/Contact/Contact"

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
    <div id="home">
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <Header />
      </div>
      <About />
      <RecentProjects />
      <AllProjects />
      <Contact />
    </div>
  )
}

export default Home
