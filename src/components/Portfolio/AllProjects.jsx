import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Project from "../Project/Project"
import "./portfolio.css"

function AllProjects() {
  const AllProjects = useStaticQuery(graphql`
    query ProjectQuery {
      allMarkdownRemark(
        filter: { frontmatter: { project: { eq: true } } }
        sort: { order: DESC, fields: frontmatter___project_id }
      ) {
        edges {
          node {
            id
            html
            frontmatter {
              project
              project_id
              title
              language
              url
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

  const profileData = AllProjects.allMarkdownRemark.edges

  return (
    <div className="portfolio" id="portfolio">
      <h2 className="portfolio-title">Portfolio</h2>
      {profileData.map(({ node }) => (
        <Project data={node} />
      ))}
    </div>
  )
}

export default AllProjects
