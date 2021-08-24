import React from 'react'
import SocialContact from '../../common/social-contact/social-contact'
import "./about.css"

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, my name is
          <br /><span>Patrick</span>, and I am a
          <br />Web Developer.
        </div>
        <div className="about-photo">
          <a href="https://storyset.com/online" target="_blank" rel="noreferrer">
            <img src={require("../../../assets/coding.png").default} alt="" className="picture" />
          </a>
        </div>
      </div>
      <SocialContact />
    </div>
  )
}

export default About
