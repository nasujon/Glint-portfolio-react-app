import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className="logo">
        <Link to="/">SM<span>.</span></Link>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li><Link to="/">1.About</Link></li>
            <li><Link to="/works">2.Works</Link></li>
            <li><Link to="/contact">3.Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="socials">
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
