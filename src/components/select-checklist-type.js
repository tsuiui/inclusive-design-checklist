import React from "react"
import "./checklist-container.css"

export default ({
  setChecklistType,
  setOptionSelected,
  handleNextQuestion,
  optionSelected,
}) => {
  const handleInputEvent = checklistType => {
    setChecklistType(checklistType)
    setOptionSelected(true)
  }
  return (
    <>
      <h2 className="checklist__question">
        Are you primarily a designer or a developer?
      </h2>
      <div className="radio-group">
        <input
          type="radio"
          id="design"
          name="checklist-type"
          value="design"
          onChange={() => handleInputEvent("design")}
        />
        <label htmlFor="design">A designer</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="development"
          name="checklist-type"
          value="development"
          onChange={() => handleInputEvent("development")}
        />
        <label htmlFor="development">A developer</label>
      </div>
      <div className="radio-group">
        <input
          type="radio"
          id="combined"
          name="checklist-type"
          value="combined"
          onChange={() => handleInputEvent("combination")}
        />
        <label htmlFor="combined">I do both!</label>
      </div>
      <button disabled={!optionSelected} onClick={() => handleNextQuestion()}>
        Next
      </button>
    </>
  )
}
