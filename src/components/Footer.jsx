import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-bar">
        <div className="details-box">
          <p className="foot-head">FitMate</p>
          <div className="useful-links">
            <a href="">About</a>
            <a href="">Company</a>
            <a href="">Blogs</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
        <div className="details-box">
          <p className="foot-head">Technologies</p>
          <div className="useful-links">
            <a href="https://developer.nutritionix.com/">Nutritionix API</a>
            <a href="https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb/details/">ExerciseDB API</a>
            <a href="https://react.dev/">React.JS</a>
            <a href="https://firebase.google.com/">Firebase</a>
          </div>
        </div>
        <div className="details-box">
          <p className="foot-head">Contributions</p>
          <div className="useful-links">
            <a href="">Punya Prashun</a>
            <a href="">Jattin Kumar Thakur</a>
            <a href="">Avinash Ojha</a>
            <a href="">Ahan Bhardwaj</a>
          </div>
        </div>
        <div className="details-box">
          <p className="foot-head">Socials</p>
          <div className="useful-links">
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">LinkedIn</a>
            <a href="">GitHub</a>
          </div>
        </div>
      </div>
      <div className="footer-section">
        Copyright ©2023 All rights reserved❣️ by Punya Prashun.
      </div>
    </div>
  )
}

export default Footer
