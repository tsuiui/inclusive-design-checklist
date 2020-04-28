import React from "react"

export default ({ question, handleYes, handleNextQuestion }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <button onClick={() => handleYes()}>Yes</button>
      <button onClick={() => handleNextQuestion()}>No</button>
    </div>
  )
}
