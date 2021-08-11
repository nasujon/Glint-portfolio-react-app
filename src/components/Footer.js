import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-menu">
          <ul>
              <li><Link>about me</Link></li>
              <li><Link>career</Link></li>
              <li><Link>blog</Link></li>
              <li><Link>gallery</Link></li>
              <li><Link>contact me</Link></li>
          </ul>
      </div>
      <div className="copyright">
          <p>Copyright © 2021 by <span> Sujon Mahamud </span></p>
      </div>
    </div>
  )
}

export default Footer
