import React from "react"
import { questions } from "../data/questions"
import "./checklist-container.css"

export default () => {
  return (
    <div className="checklist-container">
      <h1>{questions[0].question}</h1>
      <div className="radio-group">
        <input type="radio" id="design" name="checklist-type" value="design" />
        <label htmlFor="design">Design</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="development"
          name="checklist-type"
          value="development"
        />
        <label htmlFor="development">Development</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="combined"
          name="checklist-type"
          value="combined"
        />
        <label htmlFor="combined">Both</label>
      </div>
    </div>
  )
}
