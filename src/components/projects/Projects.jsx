import React from 'react'
import './Projects.css'
import ProjectBox from '../ProjectBox/ProjectBox'

const Projects = () => {
  return (
   <div className="projects">
    <h1>Projects</h1>

    <div className="upcoming">
       <div className="row justify-content-center">
        <div className="col-4">
         <ProjectBox />
        </div>

        <div className="col-4">
        <ProjectBox />
        </div>
       </div>
    </div>
   </div>
  )
}

export default Projects