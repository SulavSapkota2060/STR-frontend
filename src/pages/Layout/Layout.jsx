import React from 'react';
import Home from '../Home/Home'
import Navigation from '../../components/navigation/Navigation';


const Layout = () => {


    return(
       <div className="layout">
           <Navigation />
           <Home />
       </div>
    );
}


export default Layout
