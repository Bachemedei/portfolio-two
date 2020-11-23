import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./About.css"

function About() {
  const bioData = useStaticQuery(graphql`
    query NonPageQuery {
      allMarkdownRemark(filter: { frontmatter: { bio: { eq: true } } }) {
        edges {
          node {
            id
            html
          }
        }
      }
    }
  `)
  // console.log(bioData)
  return (
    <div id="about">
      <h2 className="projects-title">About</h2>
      {bioData.allMarkdownRemark.edges.map(({ node }) => (
        <div
          className="bio-text html-text"
          dangerouslySetInnerHTML={{ __html: node.html }}
        />
      ))}
    </div>
  )
}

export default About
