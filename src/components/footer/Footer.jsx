import React from "react";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="map">
        
      </div>
      <div className="about">
      <h4>Who we are?</h4>
      <hr />
      <p>Fugiat dolore pariatur aliquip aute anim. Exercitation do sit in aliquip sint consequat veniam mollit cillum. Laboris do quis fugiat Lorem labore. Dolore sint adipisicing eiusmod amet commodo ea aute cillum officia labore eiusmod voluptate id. Qui irure et aliquip fugiat non velit non in ullamco incididunt. Labore id cillum ipsum culpa. Voluptate aute commodo nulla enim elit minim. Officia consectetur ipsum nisi commodo incididunt consequat nisi voluptate fugiat duis cupidatat.</p>
      </div>
      <div className="location">
        <h4>Science, Technology and Robotics Club</h4>
        <div className="detail">
        <i className="fa fa-phone"></i> &nbsp; <a href="tel:977-1-4371637">+977-1-4371637</a>
        </div>

        <div className="detail">
          <a href="mailto:sciencetechrobotics@bnks.edu.np">
           <i className="fa fa-envelope">&nbsp;</i> sciencetechrobotics@bnks.edu.np
          </a>
        </div>

        <div className="detail">
        <i className="fa fa-address-card"></i>&nbsp; P. O. Box 1018
        </div>

        <div className="detail">
       <i className="fa fa-map-marker"></i> &nbsp;  Budhanilkantha, Kathmandu, Nepal
        </div>
        <div className="detail socials">
        <a href="http://instagram.com/#" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
        <a href="http://facebook.com/#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>
        <a href="http://twitter.com/#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
        </div>
      </div>



    </div>
  );
};
export default Footer;
