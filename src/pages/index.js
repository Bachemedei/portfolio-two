import React from "react"
import { css } from "@emotion/core"
import Header from "../components/header/header"
import "../components/layout.css"
import Bio from "../components/bio/bio"
import ProjectImage from "../components/ProjectImage/ProjectImage"
import ButtonLink from "../components/ButtonLink/ButtonLink"
import "./Home.css"

function Home() {
  // Variables

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
      <div className="featured-projects">
        <ProjectImage />
        <ButtonLink value="See More" url="/portfolio/"/>
      </div>
    </div>
  )
}

export default Home
