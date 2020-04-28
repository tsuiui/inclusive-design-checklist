import React, { useState } from "react"
import SelectChecklistType from "./select-checklist-type"
import Question from "./question"
import { designQuestions } from "../data/questions"
import guidelines from "../data/guidelines"
import "./checklist-container.css"

export default () => {
  const [checklistType, setChecklistType] = useState(null)
  const [question, setQuestion] = useState(-1)
  const [optionSelected, setOptionSelected] = useState(false)
  const [checklistGuidelines, setChecklistGuidelines] = useState([])

  const handleNextQuestion = () => {
    setOptionSelected(false)
    setQuestion(question + 1)
  }

  const handleYes = () => {
    const guidelines = designQuestions[question].guidelines
    setChecklistGuidelines([...checklistGuidelines, ...guidelines])
    handleNextQuestion()
  }

  const handleViewChecklist = () => {
    checklistGuidelines.forEach(guideline => {
      console.log(guideline)
      let { link, title } = guidelines[guideline]
      console.log(title)
    })
  }

  const getCurrentQuestion = () => {
    if (question === -1) {
      return (
        <SelectChecklistType
          setOptionSelected={setOptionSelected}
          setChecklistType={setChecklistType}
          optionSelected={optionSelected}
          handleNextQuestion={handleNextQuestion}
        />
      )
    } else if (question === designQuestions.length) {
      return (
        <button onClick={() => handleViewChecklist()}>View my checklist</button>
      )
      return <h1>This is the last question</h1>
    } else {
      return (
        <Question
          question={designQuestions[question]}
          handleYes={handleYes}
          handleNextQuestion={handleNextQuestion}
        />
      )
    }
  }

  return <div className="checklist-container">{getCurrentQuestion()}</div>
}
