import React from "react"
import newPage from "../images/new-page.svg"

export const ChecklistItem = ({ guideline, guidelineParams }) => {
  const { link, title, goal, solution, impact } = guidelineParams
  return (
    <div className="checklist-item-wrapper" key={link}>
      <div className="checklist-title-wrapper">
        <label className="container">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
        <h1>{title}</h1>
        <div className={`impact impact--${impact.toLowerCase()}`}>{impact}</div>
      </div>
      <h2 className="checklist-goal">Goal</h2>
      <p>{goal}</p>
      <h2>Solution</h2>
      <p>{solution}</p>
      <a
        href={link}
        className="guideline-badge"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="guideline-badge-icon">
          <img
            src={newPage}
            aria-hidden="true"
            alt="Open guideline in a new page"
          />
        </span>
        Guideline {guideline} - {title}
      </a>
    </div>
  )
}
