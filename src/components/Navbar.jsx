import React from 'react'
// import './navbar.css'
const Navbar = () => {
  return (
    
        <div className="navbar h-20 bg-transparent text-white flex items-center justify-between pl-12 pr-24" >
          <div className="logo p-3 text-4xl font-bold">
            <p className="name">Fit<span className='name-part text-[#e62f2f]'>Mate</span></p>
          </div>
          <div className="links flex items-center gap-16 text-2xl font-normal">
            <a href="/" className=' hover:text-[#e62f2f]'>Home</a>
            <a href="/about" className=' hover:text-[#e62f2f]'>About</a>
            <a href="/contactus" className=' hover:text-[#e62f2f]'>Contact</a>
            <button className='login-btn text-white bg-[#e62f2f] py-2 px-6 rounded-md text-lg font-semibold'>Login</button>
          </div>
        </div>
  )
}

export default Navbar
