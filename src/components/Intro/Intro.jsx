import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Logo from "../../images/logo.png"
import "./Intro.css"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Intro() {
  const intro = useStaticQuery(graphql`
    query IntroQuery {
      allMarkdownRemark(
        filter: { frontmatter: { title: { regex: "/about-intro/" } } }
      ) {
        edges {
          node {
            id
            html
          }
        }
      }
    }
  `)

  return (
    <div className="intro">
      <div className="page-top">
        <div className="intro-text">
          <h1 className="heading">Bronwyn Achemedei</h1>
          {intro.allMarkdownRemark.edges.map(({ node }) => (
            <div className="intro-bio">
              <div
                className="html-text"
                dangerouslySetInnerHTML={{ __html: node.html }}
              />
              <div className="about-link-container">
                <p className="about-link-p">Find out more</p>
                <AnchorLink className="about-link" to="/#about">
                  about me.
                </AnchorLink>
              </div>
            </div>
          ))}
        </div>
        <img className="logo" src={Logo} alt="logo" />
      </div>
    </div>
  )
}

export default Intro
