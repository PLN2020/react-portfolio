import React from 'react'
import './mobile.css'

function Mobile({isOpen, setIsOpen}) {
  return (
    <div className='mobile'>
      <div className='close-icon' onClick={()=> setIsOpen(!isOpen)}>
        <i class="fi-rr-cross"></i>
      </div>
      <div className="mobile-options">
        <div className="mobile-option" onClick={()=> setIsOpen(!isOpen)}>
          <a href="#projects">
          <i class="fi-rr-edit option-icon"></i>Projects
          </a>
        </div>
        <div className="mobile-option" onClick={()=> setIsOpen(!isOpen)}>
          <a href="#skills">
          <i class="fi-rr-barber-shop option-icon"></i>Skills
          </a>
        </div>
        <div className="mobile-option" onClick={()=> setIsOpen(!isOpen)}>
          <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i>Work
          </a>
        </div>
        <div className="mobile-option" onClick={()=> setIsOpen(!isOpen)}>
          <a href="#contact">
          <i class="fi-rr-id-badge option-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default Mobile
