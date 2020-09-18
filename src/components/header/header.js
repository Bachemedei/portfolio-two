import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"
import "./header.css"

function Header() {
  return (
    <div className="header">
      <div className="home-link">
        <Link to={`/`}>Home</Link>
      </div>
      <div className="nav-links">
        <Link className="portfolio-link" to={`/portfolio/`}>
          Portfolio
        </Link>
        <Link className="contact-link" to={`contact`}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
