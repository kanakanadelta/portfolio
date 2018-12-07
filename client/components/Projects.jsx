import React, { Component } from 'react';

// Styled-Components
import TextBox from '../styles/projects/TextBox'
import Fifty50 from '../styles/containers/Fifty50';
import FadeRightDiv from '../styles/animations/FadeRightDiv'
import ProjectDiv from '../styles/projects/ProjectDiv';
import NavButton from '../styles/buttons/YellowButton';

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'mockloud'
    }
  }

  changeView(option) {
    this.setState({
      view: option
    })
  }

  renderView() {
    if (this.state.view === 'mockloud') {
      return (
        <FadeRightDiv
        className='image'>
          <img 
          src="https://tinyurl.com/mockloudimg"
          alt="mockkloud"
          style={{
            maxWidth: '100%'
          }}
          />
        </FadeRightDiv>
      )
    } else if (this.state.view === 'fmdb') {
      return (
        <FadeRightDiv
        className='image'>
          <img 
          src="https://tinyurl.com/fmdbloadtest"
          alt="fmdb load test"
          style={{
            maxWidth: '100%'
          }}
          />
        </FadeRightDiv>
      )
    }
  }

  renderInfo() {
    if(this.state.view === 'mockloud') {
      return (
        <TextBox>
          <h2>MockCloud</h2>
          <p>
          Our team made a webapp that emulates the look, feel, and functionality of a SoundCloud song page.
          </p>
          <p>
          Tech: React | NodeJS | Express| PostgreSQL | Docker | EC2 | S3 | Adobe XD
          </p>
          <ul>
            <li>Wireframed, prototyped, and made SVG files through Adobe Experience Design.</li>
            <li>Created the side-bar module of the webapp with the utilization of Styled-Components to help render dynamic pagination but also separate logic and styles.</li>
            <li>Automated build process with the use of the AWS' S3 and Grunt.</li>
            <li>Deployed micro-service with Docker on an AWS EC2 instance and bring together each of our teams' modules through a proxy server on another EC2 instance.</li>
          </ul>
          <a 
          id="resume-button"
          href="https://github.com/Stark-24"
          target="_blank"
          >
            View on GitHub
          </a>
          <br/>
        </TextBox>
      )
    } else if (this.state.view === 'fmdb') {
      return (
        <TextBox>
          <h2>Fake Movie Database</h2>
          <p>
          An IMDb movie page clone back-end that is stress tested, and scaled to optimization.
          </p>
          <p>
          Tech: React | NodeJS | MongoDB | Docker | Artillery | Loader.io | Nginx | EC2 | S3
          </p>
          <ul>
            <li>Scaled micro service to handle 4500 RPS with 10 million records of user data by deploying three Node servers with Nginx and Nginx caching.</li>
            <li>Reduced latency by 600% by re-writing back-end from Mongoose ODM to MongoDB Native Driver and indexing the required tables for read-only operations.</li>
            <li>Generated 10 million realistic records in optimal time through NodeJS' stream.</li>
          </ul>
          <a 
          id="resume-button"
          href="https://github.com/CoolKidsCrew/fec-imdb"
          target="_blank"
          >
            View on GitHub
          </a>
          <br/>
        </TextBox>
      )
    }
  }

  render() {
    return (
      <div 
        style={{
        display: 'flex',
        flexDirection:'column'
      }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '5px'
          }}
        >
          <NavButton
          onClick={()=>{this.changeView('mockloud')}}
          >
            Mockloud
          </NavButton>
          <br/>
          <NavButton
          onClick={()=>{this.changeView('fmdb')}}
          >
            FMDB
          </NavButton>
        </div>
        <ProjectDiv>
          <Fifty50
          className='info'
          >
          {this.renderView()}
          {this.renderInfo()}
        </Fifty50>
      </ProjectDiv>
      </div>
    )
  }
}

export default Projects;