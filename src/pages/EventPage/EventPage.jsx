import React from 'react';
import "./EventPage.css";
import events from '../../data/Posts.json';
import {useParams, Link} from 'react-router-dom'
import ScrollToTop from '../../components/scrollToTop';
import { useEffect } from 'react';

const EventPage = ({match}) => {
  const id = useParams();
  const event = events.events.filter(e => e.id == id.id)[0];
  
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <div className='EventPage'>
       <h1>{event.name}</h1>
      <img src={event.image_src} alt="" />
      <i>{event.date}</i>
       
        <p>{event.details}</p>
      <Link to='/'>  <button> <i className="fa fa-arrow-left"></i>&nbsp; Go Back</button></Link>
    </div>
  )
}

export default EventPage;