import React from "react"
import "./header.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Logo from "../../images/logo.png"

function Header() {
  return (
    <div className="header sticky-inner">
      <div className="home-link">
        <AnchorLink to="/#home">
          <span>Home</span>
        </AnchorLink>
      </div>
      <img className="header-logo" src={Logo} alt="logo" />
      <div className="nav-links">
        <AnchorLink className="portfolio-link" to="/portfolio">
          Portfolio
        </AnchorLink>
        <AnchorLink className="contact-link" to="/#contact">
          Contact
        </AnchorLink>
      </div>
    </div>
  )
}

export default Header
