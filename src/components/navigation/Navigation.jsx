import React from 'react'
import './Navigation.css'
import { useEffect } from 'react';

const Navigation = () => {

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <div className="topnav" id="myTopnav">
    <a href="#home" className="">Home</a>
    <a href="#about">About</a>
    <a href="#events">Events</a>
    <a href="#team">Team</a>
    <a href="#contact">Contact</a>
    <a href="javascript:void(0);" className="icon" onClick={myFunction}>
      <i className="fa fa-bars"></i>
    </a>
  </div>
  );
}

export default Navigation;