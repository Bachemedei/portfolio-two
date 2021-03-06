import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import "./RecentProjects.css"
// import { node } from "prop-types"
// import Button from "../Button/Button"
// import WhackAMole from "../WhackAMole/WhackAMole"

function RecentProjects() {
  const RecentProjects = useStaticQuery(graphql`
    query RecentProjectQuery {
      allMarkdownRemark(
        filter: { frontmatter: { project: { eq: true } } }
        sort: { order: DESC, fields: frontmatter___project_id }
      ) {
        edges {
          node {
            html
            frontmatter {
              project
              project_id
              title
              language
              date
            }
          }
        }
      }
    }
  `)

  const profileData = RecentProjects.allMarkdownRemark.edges
  const [projectIndex, setIndex] = useState(0)
  const handleClick = index => {
    setIndex(index)
  }

  return (
    <div className="recent-projects-wrapper">
      <h2 className="projects-title">Recent Projects</h2>
      <div className="recent-projects">
        <div className="project-titles">
          {profileData.map(({ node }, index) => (
            <div className="title-wrapper">
              <h5
                className={`recent-project-title ${
                  index === projectIndex ? `selected` : ``
                }`}
                onClick={() => handleClick(index)}
                key={index}
              >
                {node.frontmatter.title}
              </h5>
              <div className="title-colour"></div>
            </div>
          ))}
        </div>
        <div className="project-detail">
          <p className="date">
            {profileData[projectIndex].node.frontmatter.date}
          </p>
          <div
            className="project-summary"
            dangerouslySetInnerHTML={{
              __html: profileData[projectIndex].node.html,
            }}
          />
          <AnchorLink
            to={`/#project${profileData[projectIndex].node.frontmatter.project_id}`}
          >
            <p className="project-link">Learn more</p>
          </AnchorLink>
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
