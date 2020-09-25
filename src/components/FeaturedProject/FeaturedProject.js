import React from 'react'
import ProjectImage from '../ProjectImage/ProjectImage'
import "./FeaturedProject.css"

function FeaturedProject() {
    return (
        <div className="featured-project">
            <ProjectImage />
            <p className="project-text">
                This is some text
            </p>
        </div>
    )
}

export default FeaturedProject
