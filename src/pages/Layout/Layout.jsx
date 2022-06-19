import React from 'react';
import Landing from '../Landing/Landing'
import Navigation from '../../components/navigation/Navigation';


const Layout = () => {


    return(
       <div className="layout">
           <Navigation />
           <Landing />
       </div>
    );
}


export default Layout
