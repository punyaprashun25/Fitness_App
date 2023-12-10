import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
        <div className="navbar" >
          <div className="logo">
            <p className="name">Fit<span className='name-part'>Mate</span></p>
          </div>
          <div className="links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contactus">Contact</a>
            <button className='login-btn'>Login</button>
          </div>
        </div>
    </>
  )
}

export default Navbar
