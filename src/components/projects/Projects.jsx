import React from 'react'
import './Projects.css'
import ProjectBox from '../ProjectBox/ProjectBox'
import events from '../../data/Events.json'

const Projects = () => {



  
  return (
   <div className="projects">
    <a name="events" ></a>
    <h1 className='page-header' >Events</h1>

    <div className="upcoming">
       <div className="eventsList">
       {events.events.map(event =>  
         <ProjectBox name={event.name} date={event.date} details={event.snippet} img={event.image_src} id={event.id} />
       
)}
       
       </div>
    </div>
   </div>
  )
}

export default Projects