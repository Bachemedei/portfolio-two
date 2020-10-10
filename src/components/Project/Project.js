import React from "react"
import Img from "gatsby-image"
import "./projects.css"

function Projects({ data }) {
  const { frontmatter, html, id } = data
  return (
    <div
      className={`project ${frontmatter.project_id % 2 === 0 ? `even` : `odd`}`}
      id={`project${frontmatter.project_id}`}
    >
      <h3 className="project-title">{frontmatter.title}</h3>
      <div className="under-title">
        <div className="img-container">
          <Img
            className="project-img"
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
            key={id}
          />
        </div>
        <div className="project-content">
          <h4 className="project-langage">{frontmatter.language}</h4>
          <div
            className="project-description"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
