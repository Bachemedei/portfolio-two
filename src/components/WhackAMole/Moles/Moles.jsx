import React from "react"
import "./Moles.css"
import Fella from "./mole-fella2.png"

function Mole({ onClick }) {
  return (
    <button className="mole-btn" onClick={onClick}>
      <img className="mole-img" src={Fella} alt="Mole" />
    </button>
  )
}

export default Mole
