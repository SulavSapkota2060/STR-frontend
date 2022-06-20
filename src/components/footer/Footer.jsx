import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <div className='footer-container'>

      <div className="map">
        <iframe src="" frameborder="1" width="300" height="200"></iframe>
      </div>

      <div className="details-container">
        {/* ph
          email
          po
          address */}
        <div className="detail">
          <a href="tel:977-1-4371637">977-1-4371637</a>
        </div>

        <div className="detail">
          <a href="mailto:sciencetechrobotics@bnks.edu.np">sciencetechrobotics@bnks.edu.np</a>
        </div>

        <div className="detail">
          <p>P. O. Box 1018</p>
        </div>
        
        <div className="detail">
          <p>Budhanilkantha, Kathmandu, Nepal</p>
        </div>
      </div>
    </div>
  )
}
export default Footer;
