import React, { useState } from 'react';
import './header.css';
import Mobile from './mobile';
import Web from './web';

function Header() {
  
  // State boolean to determine if our mobile sidebar is open or not
  // useState is a react hook
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="header">
      <div className="logo">PLN</div>
      
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>

        <div className="mobile-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-menu-burger menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}  
        </div>

      </div>
    </div>
  );
}

export default Header;
