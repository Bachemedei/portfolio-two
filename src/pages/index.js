import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
// import { rhythm } from "../utils/typography"
import Header from "../components/header/header"
// import Layout from "../components/layout"
// import Img from "gatsby-image"
import "../components/layout.css"
import Bio from "../components/bio/bio"

function index() {
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
      <Bio></Bio>
  </div>
  )
}

export default index

