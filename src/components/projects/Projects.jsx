import React from 'react'
import './Projects.css'
import ProjectBox from '../ProjectBox/ProjectBox'

const Projects = () => {


  const events = [
    {
      "name":"Olympiad Training for Class 7 and 8",
      "date":"2022/06/24",
      "details":"The event for junior students to increase their involvement in Olympiads. ",
      "img":"https://www.iota.co.in/uploads/2/1/4/6/21465856/published/mathlympics.png?1537859868",
    },
    
  ]

  
  return (
   <div className="projects">
    <a name="events" ></a>
    <h1 className='page-header' >Events</h1>

    <div className="upcoming">
       <div className="eventsList">
       {events.map(event =>  
         <ProjectBox name={event.name} date={event.date} details={event.details} img={event.img} />
       
)}
       
       </div>
    </div>
   </div>
  )
}

export default Projects