import React from 'react'
import './ProjectBox.css'

const ProjectBox = (props) => {
  return (
    <div className="projectbox box">
    <div className="image">
        <img src={props.img} alt="" />
    </div>
    <div className="text">
        <h1>{props.name}</h1>
        <i>{props.date} </i>
        <p>{props.details}</p>
    </div>
    <button>Learn More!</button>
</div>
  )
}

export default ProjectBox;