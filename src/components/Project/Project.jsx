import React, { useState } from "react"
import Img from "gatsby-image"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./projects.css"
import WhackAMole from "../WhackAMole/WhackAMole"
import LanguageTags from "../LanguageTags/LanguageTags"

function Projects({ data }) {
  const { frontmatter, html, id } = data
  // const [gameActive, setGame] = useState(false)

  // const handleGameClick = () => {
  //   let gameState = !gameActive
  //   setGame(gameState)
  //   console.log(gameState)
  // }

  return (
    <div
      className={`project ${frontmatter.project_id % 2 === 0 ? `even` : `odd`}`}
      id={`project${frontmatter.project_id}`}
    >
      {frontmatter.url !== "undefined" ? (
        <a href={frontmatter.url}>
          <h3 className="project-title">{frontmatter.title}</h3>
        </a>
      ) : (
        <div>
          <h3 className="project-title">{frontmatter.title}</h3>
        </div>
      )}
      <LanguageTags languageString={frontmatter.language} />
      <div className="under-title">
        <div className="img-container">
          <Img
            className="portfolio-img"
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
            key={id}
          />
        </div>
        <div className="project-content">
          <div
            className="project-description html-text"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {frontmatter.project_id === 6 ? (
            <div className="play-game">
              <AnchorLink className="game" to="/game">
                Play whack-a-mole v2.0
              </AnchorLink>
              {/* <p className="fake-link" onClick={handleGameClick}>
                Play whack-a-mole v2.0
              </p> */}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* {gameActive ? <WhackAMole /> : <></>} */}
    </div>
  )
}

export default Projects
