import React from "react";
import './Landing.css';



const Landing = () => {

    return(
        <div className="landing">
                <div className="content">
                    <h1>Welcome to the STR Club</h1>
                    <p>Imagine, Invent, Inspire</p>
                    <button className="explore"><a href="#about">Learn More!</a></button>
                </div>
                
        </div>

    );
}

export default Landing;