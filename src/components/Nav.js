import React from 'react'
import { Link } from 'react-router-dom';
import {NavContainer, Logo, NavMenu} from '../styles/NavStyles'

const Nav = () => {
  return (
    <NavContainer>
      <Logo>
        <Link to="/">SM<span>.</span></Link>
      </Logo>
      <NavMenu>
        <nav>
          <ul>
            <li><Link to="/">1.About</Link></li>
            <li><Link to="/works">2.Works</Link></li>
            <li><Link to="/contact">3.Contact</Link></li>
          </ul>
        </nav>
      </NavMenu>


      
    </NavContainer>
  )
}

export default Nav
