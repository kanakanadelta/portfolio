import React from 'react';

// Styled-Components
import FrontPageDiv from '../styles/frontPage/FrontPage';
import TextBoxTrans from '../styles/textBoxes/TextBoxTrans';
import FrontPageTextArea from '../styles/frontPage/FrontPageTextArea';
import HelloFriend from '../styles/frontPage/HelloFriend';
import DropDown from '../styles/animations/DropDown';
import DropDown2 from '../styles/animations/DropDown2';

// React Components
import AniMe from './graphics/AniMe';



const FrontPage = props => {
  return (
    <FrontPageDiv>
      <FrontPageTextArea>
        <DropDown>
          <HelloFriend>Hello,</HelloFriend>
        </DropDown>
        <DropDown2
        style={{
          marginTop: '-30px'
        }}
        >
          <HelloFriend>Friend!</HelloFriend>
        </DropDown2>  
        <TextBoxTrans
        style={{
          marginTop: '-20px'
        }}
        >
          <h2> I'm Rafael!</h2>
          <ul>
            <li>Full-Stack Developer</li>
            <li>Front-End Enthusiast</li>
            <li>Bringing ideas to life!</li>
          </ul>
        </TextBoxTrans>
      </FrontPageTextArea>
      <AniMe/>
    </FrontPageDiv>
  )
}

export default FrontPage;