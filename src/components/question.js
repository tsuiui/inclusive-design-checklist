import React from "react"

export default ({
  question,
  handleSelection,
  handleNextQuestion,
  handlePreviousQuestion,
  optionSelected,
}) => {
  return (
    <>
      <h2 className="checklist__question">{question.question}</h2>
      <div className="radio-container">
        <div className="radio-group">
          <input
            type="radio"
            id="yes"
            name="question-answer"
            value="yes"
            onChange={e => handleSelection(e)}
          />
          <label htmlFor="yes">Yes</label>
        </div>
        <div className="radio-group">
          <input
            type="radio"
            id="no"
            name="question-answer"
            value="no"
            onChange={e => handleSelection(e)}
          />
          <label htmlFor="no">No</label>
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => handlePreviousQuestion()}>Back</button>
        <button disabled={!optionSelected} onClick={() => handleNextQuestion()}>
          Next
        </button>
      </div>
    </>
  )
}
