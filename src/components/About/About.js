import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./About.css"

function About() {
  const bioData = useStaticQuery(graphql`
    query NonPageQuery {
      allMarkdownRemark(filter: { frontmatter: { project: { eq: false } } }) {
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
    <div className="about">
      <h1 className="heading">Bronwyn Achemedei</h1>
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
