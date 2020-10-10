import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { graphql, useStaticQuery } from "gatsby"
import "./ProjectImage.css"
import Img from "gatsby-image"

function ProjectImage({ onHover }) {
  console.log(onHover)
  const profileData = useStaticQuery(graphql`
    query ImageQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { summary: { eq: true }, project: { eq: true } }
        }
        sort: { order: DESC, fields: frontmatter___project_id }
      ) {
        edges {
          node {
            id
            frontmatter {
              project
              project_id
              title
              language
              summary
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
            }
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
          <AnchorLink to="/#project1">
            <Img
              className="img"
              fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
              key={node.id}
            />
          </AnchorLink>
          <div className="project-text">
            <h3>{node.frontmatter.title}</h3>
            <h4 className="project-language">{node.frontmatter.language}</h4>
            <p>{node.frontmatter.summary}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectImage
