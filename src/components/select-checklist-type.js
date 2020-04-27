import React from "react"
import "./checklist-container.css"

export default ({ checklistType, setChecklistType }) => {
  return (
    <>
      <div className="radio-group">
        <input
          type="radio"
          id="design"
          name="checklist-type"
          value="design"
          onChange={() => setChecklistType("design")}
        />
        <label htmlFor="design">Design</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="development"
          name="checklist-type"
          value="development"
          onChange={() => setChecklistType("development")}
        />
        <label htmlFor="development">Development</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="combined"
          name="checklist-type"
          value="combined"
          onChange={() => setChecklistType("combination")}
        />
        <label htmlFor="combined">Both</label>
      </div>
    </>
  )
}
