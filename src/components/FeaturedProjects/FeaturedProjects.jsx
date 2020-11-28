import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
import ProjectImage from "../ProjectImage/ProjectImage"
import "./FeaturedProjects.css"

function FeaturedProjects() {
  const projectSummaries = useStaticQuery(graphql`
    query ImageQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { summary: { eq: true }, project: { eq: true } }
        }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
              project
              project_id
              summary
              language
              date
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 200) {
                    src
                    aspectRatio
                    base64
                    sizes
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const data = projectSummaries.allMarkdownRemark.edges
  const projectData = data.map(({ node }) => ({
    // image: node.frontmatter.featuredImage.childImageSharp.fluid.src,
    image: require(`../../images/project${node.frontmatter.project_id}.png`),
    // image: require("../../images/project1.png"),
    summary: node.html,
    title: node.frontmatter.title,
    id: node.frontmatter.project_id,
  }))
  console.log(projectData)
  return (
    <div>
      <h2 className="projects-title">Featured Projects</h2>
      {/* <div className="featured-projects">
        {data.map(({ node }) => (
          <div className="featured-project">
            <ProjectImage
              image={node.frontmatter.featuredImage.childImageSharp.fluid}
              key={node.id}
              language={node.frontmatter.language}
              summary={node.html}
              title={node.frontmatter.title}
              id={node.frontmatter.project_id}
            />
          </div>
        ))}
      </div> */}
      <div className="img-carousel">
        <Carousel infiniteLoop="true" autoPlay="true" stopOnHover="true">
          {projectData.map(project => (
            <div>
              <img src={project.image} alt="img" />
              <p
                className="legend"
                dangerouslySetInnerHTML={{
                  __html: project.summary,
                }}
              ></p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default FeaturedProjects
