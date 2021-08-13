import React from 'react'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact/social-contact'
import "./contact.css"

function Contact() {
  return (
    <div className="contact">
      <Separator />
      
      <label className="section-title">Contact</label>

      <div className="contact-container">
        <div className="contact-left">
          <p>Available for hire.<br/>For any inquiries, please get in touch with me on LinkedIn.</p>
          <SocialContact />
        </div>
      </div>
    </div>
  )
}

export default Contact
