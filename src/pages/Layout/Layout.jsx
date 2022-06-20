import React from 'react';
import Landing from '../Landing/Landing'
import Navigation from '../../components/navigation/Navigation';
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';
import Team from '../../components/team/Team'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'


const Layout = () => {


    return(
       <div className="layout">
           <Navigation />
           <Landing />
           <About />
           <Projects />
           <Team />
           <Contact />
           <Footer />
       </div>
    );
}


export default Layout
