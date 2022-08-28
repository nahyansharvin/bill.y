import React from 'react'
import "./Navbar.css"
import Logo from './logo.png'

function Navbar() {
  return (
    <nav>
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-links">
            
        </div>
    </nav>
  )
}

export default Navbar