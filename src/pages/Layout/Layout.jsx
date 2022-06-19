import React from 'react';
import Landing from '../Landing/Landing'
import Navigation from '../../components/navigation/Navigation';
import About from '../../components/about/About';


const Layout = () => {


    return(
       <div className="layout">
           <Navigation />
           <Landing />
           <About />
       </div>
    );
}


export default Layout
