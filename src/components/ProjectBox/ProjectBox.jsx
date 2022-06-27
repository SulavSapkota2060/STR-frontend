import React from 'react'
import './ProjectBox.css'
import { Link } from 'react-router-dom'

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
   <Link to={`eventDetails/${props.id}`}> <button>Learn More</button></Link>
</div>
  )
}

export default ProjectBox;