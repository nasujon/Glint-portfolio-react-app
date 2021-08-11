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
        <h1>Welcome to my <span>portfolio</span></h1>
        <p>Together we the people achieve more than any single person could ever do alone.</p>
        
        <Link to="/">Get Started</Link>

      </Title>
      <div className="welcome-img">
        <img src={welcomeImg} alt="author" />
      </div>
    </WelcomeSection>
  )
}

export default Welcome
