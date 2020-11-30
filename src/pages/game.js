import React, { useState, useEffect, useRef } from "react"
import Header from "../components/header/header"
import WhackAMole from "../components/WhackAMole/WhackAMole"
import "./game.css"

function Game() {
  const [isSticky, setSticky] = useState(false)
  const ref = useRef(null)
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0)
    }
  }
  return (
    <div className="portfolio-page-game">
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
                <Header />
            </div>
      <WhackAMole />
    </div>
  )
}

export default Game
