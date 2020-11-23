import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { graphql, useStaticQuery } from "gatsby"
import "./ProjectImage.css"
import Img from "gatsby-image"

function ProjectImage({ onHover, image, language, summary, title, id }) {
  console.log(onHover)

  // console.log(summary)

  //Template
  return (
    <div className="featured-project">
      {/* {data.map(({ node }) => ( */}
      <div className="project-img">
        <AnchorLink to={`/portfolio/#project${id}`}>
          <Img className="img" fluid={image} />
        </AnchorLink>
        <div className="project-text">
          {/* <h3>{node.frontmatter.title}</h3> */}
          <h4 className="project-language">{language}</h4>
          <div
            className="project-summary"
            dangerouslySetInnerHTML={{
              __html: summary,
            }}
          />
        </div>
      </div>
      {/* ))} */}
      <p className="summary-title">{title}</p>
    </div>
  )
}

export default ProjectImage
