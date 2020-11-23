import React, { useState, useEffect, useRef } from "react"
import Header from "../components/header/header"
import AllProjects from "../components/Portfolio/AllProjects"
import "./Home.css"

function Portfolio() {
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

    return (
        <div className="page">
            <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
                <Header />
            </div>
        <AllProjects />
        </div>
    )
}

export default Portfolio
