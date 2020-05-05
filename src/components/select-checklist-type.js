import React from "react"
import {
  designQuestions,
  developmentQuestions,
  combinedQuestions,
} from "../data/questions"

import "./checklist-container.css"

export default ({
  setChecklistType,
  setOptionSelected,
  handleNextQuestion,
  optionSelected,
  setRelevantQuestions,
}) => {
  const handleInputEvent = checklistType => {
    setChecklistType(checklistType)
    if (checklistType === "design") {
      setRelevantQuestions(designQuestions)
    } else if (checklistType === "development") {
      setRelevantQuestions(developmentQuestions)
    } else {
      setRelevantQuestions(combinedQuestions)
    }
    setOptionSelected(true)
  }
  return (
    <>
      <h2 className="checklist__question">
        Do you want to check design or code accessibility?
      </h2>
      <div className="radio-container">
        <div className="radio-group">
          <input
            type="radio"
            id="design"
            name="checklist-type"
            value="design"
            onChange={() => handleInputEvent("design")}
          />
          <label htmlFor="design">Design</label>
        </div>
        <div className="radio-group">
          <input
            type="radio"
            id="development"
            name="checklist-type"
            value="development"
            onChange={() => handleInputEvent("development")}
          />
          <label htmlFor="development">Code</label>
        </div>
        <div className="radio-group">
          <input
            type="radio"
            id="combined"
            name="checklist-type"
            value="combined"
            onChange={() => handleInputEvent("combination")}
          />
          <label htmlFor="combined">Why not both!</label>
        </div>
      </div>
      <div className="button-container">
        <button
          disabled={!optionSelected}
          onClick={() => handleNextQuestion(true)}
        >
          Next
        </button>
        <button onClick={() => window.print()}>Print</button>
      </div>
    </>
  )
}
