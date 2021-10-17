import React from 'react'
import './body.css'
import About from './about/about'
import Contact from './contact'
import Projects from './projects/projects'
import Skills from './skills'
import Education from './education'

function Body() {
  return (
    <div className='body'>
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default Body
