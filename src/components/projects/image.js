import React, { useState } from "react"
import "./projects.css"
import Img from "gatsby-image"

function ProfileImage({ data, onHover }) {
  console.log(onHover)

  //Template
  return (
    <div className="all-imgs">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Img
        //   onMouseEnter={() => setHover(true)}
        //   onMouseLeave={() => setHover(false)}
          className="img"
          fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          key={node.id}
        />
      ))}
    </div>
  )
}

export default ProfileImage
