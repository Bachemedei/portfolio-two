import React, { useState } from "react"
import Img from "gatsby-image"
import "./projects.css"
import WhackAMole from "../WhackAMole/WhackAMole"

function Projects({ data }) {
  const { frontmatter, html, id } = data
  const [gameActive, setGame] = useState(false)

  const handleGameClick = () => {
    let gameState = !gameActive
    setGame(gameState)
    console.log(gameState)
  }

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

      <div className="under-title">
        <div className="img-container">
          <Img
            className="portfolio-img"
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
            key={id}
          />
        </div>
        <div className="project-content">
          <h4 className="project-langage">{frontmatter.language}</h4>
          <div
            className="project-description html-text"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          {frontmatter.project_id === 6 ? (
            <div className="play-game">
              <p className="fake-link" onClick={handleGameClick}>
                Play whack-a-mole v2.0
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {gameActive ? <WhackAMole /> : <></>}
    </div>
  )
}

export default Projects
