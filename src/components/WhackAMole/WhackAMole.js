import React, { useState, useEffect } from "react"
import Mole from "./Moles/Moles"
import Hole from "./Hole/Hole"
import "./WhackAMole.css"
import Score from "./Score/Score"

function WhackAMole() {
  // Variables
  const [mole, setMole] = useState({
    hole: 1,
    isVisible: false,
  })

  const [playing, setPlaying] = useState(false)

  const [counter, setCounter] = useState(0)

  const [score, setScore] = useState(0)

  const [highScore, setHighScore] = useState(0)

  useEffect(() => {
    if (playing === false) return
    if (mole.isVisible === true) {
      const time = Math.round(Math.random() * 700) + 400
      setTimeout(() => {
        setMole({ ...mole, isVisible: false })
      }, time)
    } else {
      const time = Math.round(Math.random() * 2000) + 500
      setTimeout(() => {
        let number = Math.round(Math.random() * 3) + 1
        setMole({ isVisible: true, hole: number })
      }, time)
    }
  }, [mole, playing])

  useEffect(() => {
    if (counter === 20) {
      setPlaying(false)
      setCounter(0)
    }
  }, [counter])

  useEffect(() => {
    if (mole.isVisible === true) {
      let incrementCounter = counter + 1
      setCounter(counter + 1)
    }
  }, [mole.isVisible])

  // Methods
  const gameLoop = () => {
    if (playing === false) {
      setScore(0)
      let number = Math.round(Math.random() * 3) + 1
      setMole({ isVisible: true, hole: number })
      setPlaying(true)
    }
  }

  const handleClick = (event, moleNumber) => {
    event.preventDefault()
    setScore(score + 1)
    if (score >= highScore) {
      setHighScore(highScore + 1)
    }
  }

  return (
    <div className="mole-game">
      <h3 className="game-header">Whack A Mole!</h3>
      <div className="mole-row">
        <Hole>
          {mole.hole === 1 && mole.isVisible === true ? (
            <Mole onClick={e => handleClick(e, 1)}></Mole>
          ) : null}
        </Hole>
        <Hole>
          {mole.hole === 2 && mole.isVisible === true ? (
            <Mole onClick={e => handleClick(e, 2)}></Mole>
          ) : null}
        </Hole>
        <div className="break" />
        <Hole>
          {mole.hole === 3 && mole.isVisible === true ? (
            <Mole onClick={e => handleClick(e, 3)}></Mole>
          ) : null}
        </Hole>
        {/* <Hole>
          {mole.hole === 4 && mole.isVisible === true ? (
            <Mole onClick={e => handleClick(e, 4)}></Mole>
          ) : null}
        </Hole> */}
        <Hole>
          <Mole />
        </Hole>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => gameLoop()}>
          Start
        </button>
      </div>
      <Score score={score} highScore={highScore} />
    </div>
  )
}

export default WhackAMole