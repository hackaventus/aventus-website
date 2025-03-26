import React from 'react'
import Lottie from 'react-lottie'
import './css/tracksAnimation.css'

function TracksAnimation({animationData}) {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div className="track-animation-container">
      <Lottie options={defaultOptions} height={180} width={180} />
    </div>
  )
}

export default TracksAnimation