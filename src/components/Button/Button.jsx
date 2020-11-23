import { Link } from "gatsby"
import React from "react"
import "./Button.css"

function Button({ value }) {
  return (
    <div className="btn-container">
      <button className="btn">{value}</button>
    </div>
  )
}

export default Button
