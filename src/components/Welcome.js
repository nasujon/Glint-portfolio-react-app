//import react
import React from 'react'
//import react router dom
import {Link} from 'react-router-dom';
//import images
import welcomeImg from '../assets/img/author/author2.png';

//import styles 
import {WelcomeSection, Title} from '../styles/WelcomeStyle'
const Welcome = () => {
  return (
    <WelcomeSection>
      <Title>
        <p>I am sujon mahamud.</p>
        <h1>Full-Stack <span>Web Application</span> Developer.</h1>
        
        <div className="socials">
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
          <li><Link to="/"></Link></li>
        </ul>
      </div>

      </Title>
      <div className="welcome-img">
        <img src={welcomeImg} alt="author" />
      </div>
    </WelcomeSection>
  )
}

export default Welcome
