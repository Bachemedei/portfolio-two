import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectImage from "../ProjectImage/ProjectImage"
import "./FeaturedProjects.css"

function FeaturedProjects() {
  const projectSummaries = useStaticQuery(graphql`
    query ImageQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { summary: { eq: true }, project: { eq: true } }
        }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              project
              project_id
              summary
              language
              date
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
  const data = projectSummaries.allMarkdownRemark.edges
  console.log(data)
  return (
    <div>
      <h2 className="projects-title">Featured Projects</h2>
      <div className="featured-projects">
        {data.map(({ node }) => (
          <div className="featured-project">
            <ProjectImage
              image={node.frontmatter.featuredImage.childImageSharp.fluid}
              key={node.id}
              language={node.frontmatter.language}
              summary={node.html}
              title={node.frontmatter.title}
              id={node.frontmatter.project_id}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects
