import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./bio.css"
import { node } from "prop-types"

function Bio() {
  const bioData = useStaticQuery(graphql`
    query NonPageQuery {
      allMarkdownRemark(filter: { frontmatter: { project: { eq: false } } }) {
        edges {
          node {
            id
            rawMarkdownBody
          }
        }
      }
    }
  `)
  // console.log(bioData)
  return (
    <div>
      {bioData.allMarkdownRemark.edges.map(({ node }) => (
        <p className="bio-text" key={node.id}>
          {node.rawMarkdownBody}
        </p>
      ))}
    </div>
  )
}

export default Bio
