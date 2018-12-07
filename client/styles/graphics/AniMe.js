import styled from 'styled-components'

export default styled.div`
  
  .container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 65px;
    padding-left: 150px;
    padding-right: 150px;
    padding-bottom: 210px;
  }
  
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  /* Graphics */
  
  .faceCircle {
    height: 280px;
    width: 265px;
    background-color: #FFD47F;
    background-image: linear-gradient(#D17414, #FFD47F);
    border-radius: 50%;
    overflow: hidden;
  }
  
  .eyes {
    position: relative;
    margin-top: -150px;
    margin-left: -25px;
  }
  
  .leftEye, .rightEye {
    display: flex;
    position: absolute;
    height: 60px;
    width: 25px;
    margin-top: 5px;
    background-image: linear-gradient(#000, #111);
    border-radius: 15px;
    justify-content: space-between;
  }
  
  .leftEye {
    margin-left: -60px;
  }
  
  .rightEye{
    margin-left: 60px;
  }
  
  .eyeLine {
    position: absolute;
    width: 30px;
    height: 50px;
    border-radius: 50%;
    box-shadow: inset 7px 0px #000;
    -moz-box-shadow: inset 7px 0px #000;
    transform: rotate(90deg);
    margin-top: -10px;
    margin-left: -3px;
  }
  
  .brow {
    position: absolute;
    width: 20px;
    height: 75px;
    border-radius: 50%;
    box-shadow: inset 7px 0px #000;
    -moz-box-shadow: inset 7px 0px #000;
    transform: rotate(90deg);
    margin-top: -50px;
    margin-left: 2px;
  }
  
  .bangs {
    position: absolute;
    margin-bottom: -50px;
  }
  
  .bang {
    position: absolute;
    background-image: linear-gradient(#1C1C1C, #111111);
    height: 120px;
    width: 75px;
    margin-top: -140px;
    border-radius: 0px 0px 10px 50px;
  }
  
  #bang0 {
    position: absolute;
    margin-left: -140px;
    height: 150px;
    border-radius: 100px 5px 100px 15px;
  }
  
  #bang1{
    position: absolute;
    margin-left: -75px
  }
  #bang2{
    position: absolute;
    margin-left: -8px
  }
  #bang3{
    position: absolute;
    margin-left: 65px;
    border-top-right-radius: 100px;
    border-bottom-left-radius: 100px;
    height: 150px;
  }
  
  .hairBowl {
    position: absolute;
    height: 100px;
    width: 230px;
    background-color: #1C1C1C;
    margin-top: -165px;
    margin-left: -110px;
    border-top-left-radius: 50%; 
    border-top-right-radius: 50%;
  }
  
  .ponyBall {
    position: absolute;
    height: 100px;
    width: 100px;
    background-color: #121212;
    margin-top: -50px;
    margin-left: 200px;
    border-radius: 50px;
  }
  
  .pony {
    position: absolute;
    height: 200px;
    width: 100px;
    background-color: #121212;
    margin-left: 50px;
    border-radius: 0px 100px 5px 100px;
  }
  
  .ponyTail {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: inset 50px 0px #121212;
    -moz-box-shadow: inset 50px 0px #121212;
    transform: rotate(-50deg);
    margin-top: 100px;
    margin-left: 105px;
  }
  
  .ponyTie {
    position: absolute;
    width: 100px;
    height: 85px;
    border-radius: 50%;
    box-shadow: inset 25px 0px #F44842;
    -moz-box-shadow: inset 25px 0px #F44842;
    transform: rotate(-75deg);
    margin-top: -15px;
    margin-left: -12.5px;
  }
  
  /* Mouth */
  
  
  .mouth {
    display: flex;
    position: relative;
    background-color: #CE2222;
    height: 50px;
    width: 75px;
    margin-top: 80px;
    border-radius: 10px 10px 75px 75px;
    
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  .teeth {
    position: relative;
    background-color: #FCFCFC;
    height: 5px;
    width: 100%;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
  }
  
  .tongue {
    position: relative;
    background-color: #E85555;
    height: 20px;
    width: 50%;
    border-radius: 25px 25px 50px 50px;
  }
  
  /* End Head, Start Torso */
  
  .torso {
    position: absolute;
    background-color: #AF2A3C;
    height: 200px;
    width: 200px;
    margin-top: 290px;
    margin-left: 32.5px;
    border-radius: 50px 50px 0px 0px;
  
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
  
  .neck {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: inset 40px 20px #EAA359;
    -moz-box-shadow: inset 50px 0px #EAA359;
    transform: rotate(-115deg);
    margin-top: -15px;
  }
  
  .collar {
    position: absolute;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    box-shadow: inset 20px 20px #AF2A3C;
    -moz-box-shadow: inset 50px 0px #AF2A3C;
    transform: rotate(-135deg);
    margin-top: -15px;
  }
  
  /* Upper Body */
  
  .upperBody {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  
  .upperArm {
    overflow: visible;
    background-color: #EAA359;
    height: 150px;
    width: 50px;
    border-radius: 50px;
  }
  
  .sleeve {
    background-color: #AF2A3C;
    height: 80px;
    width: 60px;
    margin-left: -5px;
    border-radius: 50px 50px 0 0;
  }
  
  #leftArm {
    transform: rotate(45deg);
    margin-left: -50px;
  }
  
  #rightArm {
    transform: rotate(-45deg);
    margin-left: 200px;
  }
  
  .foreArm {
    height: 200px;
    width: 50px;
    margin-top: 25px;
    background-image: linear-gradient(#EAA359, #FFD47F);
    border-radius: 50px;
  }
  
  #star {
    position: absolute;
    font-size: 125px;
    color: #CF4D5F;
  }
  
  /* Eye Animation */
  
  .leftEye, .rightEye {
    animation: eye-blink 2s infinite;
  }
  
  @keyframes eye-blink {
    0%    { height: 60px; }
    42%   { height: 60px; }
    45%   { height: 1px; }
    50%   { height: 60px; }
    100%  { height: 60px; }
  }
  
  /* ForeArm transformation and Waving Animation */
  
  #leftForeArm {
    transform-origin: 50% 15%;
    transform: rotate(180deg);
    animation: arm-wave 5s infinite;
  }
  
  #rightForeArm {
  /*   margin-top: -10px;
    margin-left: 5px; */
    transform-origin: 50% 15%;
    transform: rotate(180deg);
    animation: arm-wave-reverse 5s infinite;
  }
  
  @keyframes arm-wave {
    0%    { transform: rotate(150deg) }
    50%   { transform: rotate(100deg) }
    100%    { transform: rotate(150deg) }
  } 
  
  @keyframes arm-wave-reverse {
    0%    { transform: rotate(-150deg) }
    50%   { transform: rotate(-100deg) }
    100%    { transform: rotate(-150deg) }
  } 
  
  /* Ponytail Animation */
  
  .ponyBall {
    animation: pony-swing 5s infinite;
  }
  
  @keyframes pony-swing {
    0%    { transform: rotate(10deg) }
    25%   { transform: rotate(-10deg) }
    50%   { transform: rotate(10deg) }
    75%   { transform: rotate(-10deg) }
    100%   { transform: rotate(10deg) }
  } 
  
  /* Header Footer Test */
  
  #header {
    border-bottom: solid 1px #000;
  }
  
  #footer {
    border-top: solid 1px #000;
  }
  /* Landing Animation */

  background-repeat: no-repeat;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;


  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translateX(50px);
    }
    100% {
      opacity: 1;
      -webkit-transform: translateX(0);
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
`