import React from 'react'
import hero from '../assets/about.png'
import './about.css'

const About = () => {
  return (
    <div className="about-section">
      <div className="side-hero">
        <img src={hero} alt="Hero" />
      </div>
      <div className="about">
        <div className="text-heading">
          <div className="line"></div>
          <p className="heading">About Us</p>
        </div>
        <p className="aboutText">
        SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
        </p>
        <p className="comment">
        Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.
        </p>
        <button className='explore'>Start Today</button>
      </div>
    </div>
  )
}

export default About
