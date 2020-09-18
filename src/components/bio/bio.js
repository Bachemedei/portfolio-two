import React from 'react'
import { graphql } from "gatsby"
import "./bio.css"

function Bio({ data }) {
    console.log(data)
    return (
        <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>{node.rawMarkdownBody}</div>
            ))}
        </div>
    )
}

export default Bio

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {title: {eq: "bio"}}}) {
      edges {
        node {
          id
          rawMarkdownBody
        }
      }
    }
  }
`
