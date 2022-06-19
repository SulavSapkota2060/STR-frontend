import React from 'react';
import Landing from '../Landing/Landing'
import Navigation from '../../components/navigation/Navigation';
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';


const Layout = () => {


    return(
       <div className="layout">
           <Navigation />
           <Landing />
           <About />
           <Projects />
       </div>
    );
}


export default Layout
