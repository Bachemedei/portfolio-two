import React, { useState } from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import Header from "../components/header/header"
// import Layout from "../components/layout"
import Img from "gatsby-image"
import "../components/layout.css"
import Bio from "../components/bio/bio"
import ProfileImage from "../components/projects/image"

function Index({ data }) {
  // Variables
  const [onHover, setHover] = useState(false)

  // Template
  return (
    <div>
      <Header />
      <h1
        css={css`
          display: inline-block;
          border-bottom: 1px solid;
        `}
      >
        Bronwyn Achemedei
      </h1>
      <Bio />
      <h2 className="projects-title">Projects</h2>
      <div className={onHover ? "img-hover" : "img-no-hover"}>
        <img
          src="https://i.picsum.photos/id/1001/200/200.jpg?hmac=J4yq_Q2Zy5CCcNlGMUf26bes2ksQBi_MzvdgW7rAcio"
          alt="Picture"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
        </img>
        {/* {onHover && } */}
      </div>
      <div>
        {/* <ProfileImage data={data} onHover={onHover}></ProfileImage> */}
      </div>
    </div>
  )
}

export default Index

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             featured
//             featuredImage {
//               childImageSharp {
//                 fluid(maxWidth: 200) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             project
//             title
//           }
//           rawMarkdownBody
//         }
//       }
//     }
//   }
// `
