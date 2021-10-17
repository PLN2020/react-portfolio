import React from 'react'
import Separator from '../../common/separator'
import "./edu.css"
import { EducationData } from "../../../data/education"
import EduCard from './edu-card';

function Education() {
  const data = EducationData;
  return (
    <div className="edu">
      <Separator />
      <label className="section-title">Education</label>
      <div className="edu-list">
        {data.map((item) => {
          return <EduCard item = {item} />
        })}
      </div>
    </div>
  )
}

export default Education
