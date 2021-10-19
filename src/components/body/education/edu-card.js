import React from 'react'
import "./edu-card.css"

function EduCard({ item }) {
  return (
    <div className="edu-card">
      {/* <img src={item.companyLogo} alt="" className="edu-logo" /> */}
      <div className="edu-info">
        <label className="company-name">{item.company}</label>
        
        <div className="edu-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>

        <div className="edu-desc">
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default EduCard
