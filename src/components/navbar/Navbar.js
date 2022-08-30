import React from 'react'
import "./Navbar.css"
import Logo from './logo.png'
import {Outlet} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="nav-links">
        </div>
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar