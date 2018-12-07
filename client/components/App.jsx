import React, { Component } from 'react';

//styled-components
import MainPage from '../styles/MainPage';
import Header from '../styles/Header';
import HeaderName from '../styles/HeaderName'
import HeaderBorder from '../styles/HeaderBorder';
import NavBar from '../styles/NavBar';
import NavButton from '../styles/buttons/NavButton';
import Body from '../styles/Body';

import Footer from '../styles/Footer';

//react components
import FrontPage from './FrontPage'
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe'


//styles

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'frontPage'
    }

    this.changeView = this.changeView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option
    })
  }

  renderView() {
    if (this.state.view === 'frontPage') {
      return <FrontPage 
              viewChange={this.changeView}
              />;
    } else if (this.state.view === 'about') {
      return <AboutMe 
              viewChange={this.changeView}
              />;
    } else if (this.state.view === 'projects') {
      return <Projects/>
    } else if (this.state.view === 'contact') {
      return <ContactMe/>
    }
  }
  
  render () {
    return (
      <MainPage>
        {/* render header */}
        <div id="header">
          <Header>
            <HeaderName
            onClick={() => this.changeView('frontPage')}
            >
              <h2>Rafael Tongson</h2>
            </HeaderName>
            <NavBar>
              <NavButton 
              onClick={() => this.changeView('about')}
              >
                About Me
              </NavButton>
              <NavButton
              onClick={() => this.changeView('projects')}
              >
                Projects
              </NavButton>
              <NavButton
              onClick={() => this.changeView('contact')}
              >
                Contact Me
              </NavButton>
            </NavBar>
          </Header>
          <HeaderBorder></HeaderBorder>
        </div>
        {/* render body */}
        <Body id="body">
          {this.renderView()}
        </Body>
        {/* render footer */}
        <Footer>
          <p>&copy;Rafael Tongson. All rights reserved. | Site by: <a href="#" title="Rafael Tongson.">Rafael Tongson</a></p>
          {/* Add Contact List Here */}
        </Footer>
      </MainPage>
    )
  }
}

export default App;