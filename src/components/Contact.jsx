import React from 'react'
import './contact.css'
import Hero from '../assets/gallery2.png'
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="left-side">
        <div className="head-text">
          <div className="text-heading">
            <div className="line"></div>
            <p className="heading">Contact Us</p>
          </div>
        </div>
        <div className="contact-box">
          <p className="details"><span className='bold-text'>Name : </span>Punya Prashun</p>
          <p className="details"><span className='bold-text'>Address : </span>Knowledge Park-III, Greater Noida, Uttar Pradesh, 201308</p>
          <p className="details"><span className='bold-text'>Email : </span>punya.prasun.cs24@iilmcet.ac.in</p>
          <p className="details"><span className='bold-text'>Mobile : </span>+91 9999999999</p>
        </div>
      </div>
      <div className="right-side">
        <img src={Hero} alt="" />
      </div>
    </div>

  )
}

export default Contact
