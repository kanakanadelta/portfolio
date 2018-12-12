import React from 'react';

// Styled-Components
import FrontPageDiv from '../styles/frontPage/FrontPage';
import TextBox from '../styles/aboutMe/TextBox'
import Fifty50 from '../styles/containers/Fifty50';
import FadeRightDiv from '../styles/animations/FadeRightDiv'
import ImageContainer from '../styles/graphics/AboutMeImage';

// React Components


const AboutMe = props => {
  return (
    <FrontPageDiv>
      <Fifty50>
        <FadeRightDiv
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        className="leftSection"
        >
          <ImageContainer>
            <img 
            src="https://s3-us-west-1.amazonaws.com/rafaelsite/Raf_Icon.jpg" 
            alt="Rafael Art Portrait"
            />
          </ImageContainer>
          <p>art by: 
            <a 
            href="http://twitter.com/ClamitySam" 
            target="_blank"
            style={{
              color:'pink'
            }}
            >
            @ClamitySam
            </a>
          </p>
        </FadeRightDiv>
        <TextBox>
          <h2>About Rafael Tongson</h2>
          <p>
          I am a full-stack software engineer who flourishes in creative and collaborative environments and love the process of building applications and seeing ideas come to fruition.<br/><br/>I love to make client-side designs that people would find aesthetically pleasing and easy to use, while at the same time efficient, through my knowledge and enjoyment in lifelong-learning working across the stack and adding new tech into my existing skill-set. <br/><br/> New technologies and challenges that arise in our industry help me to grow as a software engineer, as I keep up with relevant technology for the ever-changing climate of this industry.
          </p>
          <a 
          id="resume-button"
          // onClick={()=> {props.viewChange('resume')}}
          href="https://drive.google.com/open?id=149U4WNkfYPPSOpadpmuDbzKj_p_tCL_2"
          target="_blank"
          >
            Click here to view my resume
          </a>
        </TextBox>
      </Fifty50>
    </FrontPageDiv>
  )
}

export default AboutMe;