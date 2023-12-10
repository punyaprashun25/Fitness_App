import React from 'react'
import './hero_section.css'
import video from '../assets/video.mp4';
const Hero_section = () => {
    return (
        <div className='hero-section'>

            <video src={video} type autoPlay loop muted playsInlineInline className='bg-video'>
                
            </video>

            <div className="text-section">
                <div className="text-heading">
                    <div className="line"></div>
                    <p className="heading">With FitMate</p>
                </div>
                <p className="quotes">BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE</p>
                <button className="explore">Explore More</button>
            </div>
            <div className="hero-section">

            </div>
        </div>
    )
}

export default Hero_section
