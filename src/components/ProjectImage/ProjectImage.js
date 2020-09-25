import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./ProjectImage.css"
import Img from "gatsby-image"

function ProjectImage({ onHover }) {
  console.log(onHover)
  const profileData = useStaticQuery(graphql`
    query ImageQuery {
      allMarkdownRemark(filter: { frontmatter: { project: { eq: true } } }) {
        edges {
          node {
            id
            frontmatter {
              featured
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    src
                    aspectRatio
                    base64
                    sizes
                    srcSet
                  }
                }
              }
              project
              title
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)

  const data = profileData.allMarkdownRemark.edges
  //Template
  return (
    <div className="all-imgs">
      {data.map(({ node }) => (
        <div className="featured-project">
          <Img
            className="img"
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            key={node.id}
          />
          <div className="project-text">
            <h3>{node.frontmatter.title}</h3>
            <p>{node.rawMarkdownBody}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectImage
