import React from 'react'
import './feature_card.css'
const Feature_card = ({feature_detail}) => {
  return (
    <p className="feature">
      {feature_detail.feature_name}
    </p>
  )
}

export default Feature_card
