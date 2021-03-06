import React from 'react'
import { ProjectData } from '../../../data/projects'
import Separator from '../../common/separator';
import ProjectCard from './project-card';
import "./projects.css"

function Projects() {

  // Data for the projects taken from project.js in data folder
  const data = ProjectData;

  return (
    <div className="projects">
      <Separator />
      <label className="section-title">Projects</label>
      <div>
        {data.map((project)=> {
          return <ProjectCard project={project} />;
        })}
      </div>
    </div>
  )
}

export default Projects
