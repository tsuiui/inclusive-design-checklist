import React from "react"
import { designQuestions, fullQuestions } from "../data/questions"

import "./checklist-container.css"

export const SelectChecklistType = ({
  setChecklistQuestions,
  setOptionSelected,
  handleNextQuestion,
  optionSelected,
  setRelevantQuestions,
}) => {
  const handleInputEvent = checklistType => {
    if (checklistType === "design") {
      setChecklistQuestions(designQuestions)
    } else {
      setChecklistQuestions(fullQuestions)
    }
    setOptionSelected(true)
  }
  return (
    <>
      <h2 className="checklist__question">
        Do you want to complete a UX design audit or a full accessibility audit?
      </h2>
      <p className="checklist__description">
        A full accessibility audit includes code whereas a UX design audit only
        includes design mockup guidelines.
      </p>
      <div className="radio-container">
        <div className="radio-group">
          <input
            type="radio"
            id="design"
            name="checklist-type"
            value="design"
            onChange={() => handleInputEvent("design")}
          />
          <label htmlFor="design">UX Design Audit</label>
        </div>
        <div className="radio-group">
          <input
            type="radio"
            id="full"
            name="checklist-type"
            value="full"
            onChange={() => handleInputEvent("full")}
          />
          <label htmlFor="full">Full Audit</label>
        </div>
      </div>
    </>
  )
}
