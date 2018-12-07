import React from 'react';

// Styled-Components
import CenterContainer from '../styles/containers/CenterContainer';
import FrontPageTextArea from '../styles/frontPage/FrontPageTextArea';
import HelloFriend from '../styles/frontPage/HelloFriend';

// Animations
import FadeRightDiv from '../styles/animations/FadeRightDiv'
import ContactContainer from '../styles/containers/ContactContainer'
import DropDown from '../styles/animations/DropDown';

// React Components


const ContactMe = props => {
  return (
    <CenterContainer>
      <FrontPageTextArea>
        <DropDown>
          <HelloFriend>Contact Me:</HelloFriend>
        </DropDown>
        <FadeRightDiv>
          <ContactContainer>
            <ul
            style={{
              listStyleType:'none'
            }}  
            >
              {/* E-mail */}
              <li>
                <img 
                src="https://i.imgur.com/GaCD7RW.png" 
                alt="e-mail"
                className='contactIcon'
                />
                <a 
                href="contact@rafael-t.com"
                target="_blank"
                >
                  contact@rafael-t.com
                </a>
              </li>
              {/* LinkedIn */}
              <li>
                <img 
                src="https://i.imgur.com/fvNSPi7.png" 
                alt="LinkedIn"
                className='contactIcon'
                />
                <a 
                href="https://www.linkedin.com/in/rafael-tongson/" 
                target="_blank"
                >
                  Connect with me on LinkedIn
                </a>
              </li>

              {/* Github */}
              <li>
                <img 
                src="https://i.imgur.com/CORwv92.png" 
                alt="GitHub"
                className='contactIcon'
                />
                <a 
                href="https://github.com/kanakanadelta"
                target="_blank"
                >
                  kanakanadelta on GitHub
                </a>
              </li>
              <li>  
                <img 
                src="https://i.imgur.com/vrH9S0b.png" 
                alt="twitter"
                className='contactIcon'
                />
                <a 
                href="https://twitter.com/raphiel_t"
                target="_blank"
                >
                  @raphiel_t on Twitter
                </a>
              </li>

              {/* Codepen */}
              <li>  
                <img 
                src="https://i.imgur.com/PDHxX7k.png" 
                alt="codepen"
                className='contactIcon'
                />
                <a 
                href="https://codepen.io/raphiel/"
                target="_blank"
                >
                  raphiel on CodePen.io
                </a>
              </li>
            </ul>
          </ContactContainer>
        </FadeRightDiv>
      </FrontPageTextArea>
    </CenterContainer>
  )
}

export default ContactMe;