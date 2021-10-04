import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <div>
        <div className="logo">
            <h4>Navbar</h4>
        </div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Projects</a></li>
        </ul>
    </div>
  )
}

export default Navbar
