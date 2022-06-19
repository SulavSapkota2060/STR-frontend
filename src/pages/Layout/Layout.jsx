import React from 'react';
import Landing from '../Landing/Landing'
import Navigation from '../../components/navigation/Navigation';
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';
import Team from '../../components/team/Team'


const Layout = () => {


    return(
       <div className="layout">
           <Navigation />
           <Landing />
           <About />
           <Projects />
           <Team />
       </div>
    );
}


export default Layout
