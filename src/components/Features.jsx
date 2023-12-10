import React from 'react'
import './features.css'
import Feature_card from './Feature_card'
const Features = () => {
  return (
    <div className="feature-container">
      <div className="features-box">
        <div className="text-heading">
          <div className="line"></div>
          <p className="heading">Our Features</p>
        </div>
        <div className="features">
          <Feature_card feature_detail={{feature_name: "Health Tracking"}}/>
          <Feature_card feature_detail={{feature_name: "AI Generated Diet Plan"}}/>
          <Feature_card feature_detail={{feature_name: "Exercise Guidance"}}/>
          <Feature_card feature_detail={{feature_name: "24x7 Support"}}/>
          <Feature_card feature_detail={{feature_name: "Affordable Price"}}/>
        </div>
      </div>
    </div>
  )
}

export default Features
