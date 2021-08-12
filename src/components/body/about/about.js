import React from 'react'
import SocialContact from '../../common/social-contact/social-contact'
import "./about.css"

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          About Info
          <br /><span>Second About Info Line</span>
          <br />Third About Info Line
        </div>
        <div className="about-photo">
          <img src={require("../../../assets/coding.png").default} alt="" className="picture" />
        </div>
      </div>
      <SocialContact />
    </div>
  )
}

export default About
