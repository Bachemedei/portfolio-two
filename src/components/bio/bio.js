import React from "react"
import { graphql } from "gatsby"
import "./bio.css"
import { node } from "prop-types"

function Bio({ data }) {  
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="bio-text" key={node.id}>
            {node.rawMarkdownBody}
          </div>
      ))}       
    </div>
  )
}

export default Bio


  