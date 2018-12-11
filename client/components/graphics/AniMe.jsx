import React from 'react';
import AniMeStyle from '../../styles/graphics/AniMe';

const AniMe = props => {
  return (
  <AniMeStyle>
  <div className="container">
    <div className="torso">
      <div className="neck"></div>
      <div className="collar"></div>
      <div className="upperBody">
        <div className="upperArm" id="leftArm">
          <div className="sleeve"></div>
          <div className="foreArm" id="leftForeArm"></div>
        </div>
        <div className="upperArm" id="rightArm">
          <div className="sleeve"></div>
          <div className="foreArm" id="rightForeArm"></div>
        </div>
      </div>
      <div id="star">
        <a style={{
          color:'#E85555'
          }}
          href="https://codepen.io/raphiel/pen/WYBORr"
          title="View me on Codepen!"
          target="_blank"
          >
        ☆  
        </a>
      </div>
    </div>

    <div className="head">

      <div className="faceCircle">
        <div className="ponyBall">
          <div className="pony"></div>
          <div className="ponyTail"></div>
          <div className="ponyTie"></div>
        </div>
      </div>

      <div className="bangs">
        <div className="hairBowl"></div>
        <div className="bang" id="bang0"></div>
        <div className="bang" id="bang1"></div>
        <div className="bang" id="bang2"></div>
        <div className="bang" id="bang3"></div>
      </div>
      <div className="eyes">
        <div className="leftEye">
          <div className="eyeLine"></div>
          <div className="brow"></div>
        </div>
        <div className="rightEye">
          <div className="eyeLine"></div>
          <div className="brow"></div>
        </div>
      </div>
      <div className="mouth">
        <div className="teeth"></div>
        <div className="tongue"></div>
      </div>
    </div>
  </div>
  </AniMeStyle> 
  )
}

export default AniMe;