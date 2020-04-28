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

  const handleNextQuestion = (isChecklistType = false) => {
    if (!isChecklistType) {
      const guidelineSelected = document.querySelector("#yes").checked
      if (guidelineSelected) {
        const guidelines = designQuestions[question].guidelines

        designQuestions[question].addToChecklist = true
        setChecklistGuidelines([...checklistGuidelines, ...guidelines])
      } else {
        // If current guidelines contains the old answer
        // remove it
        const guidelines = designQuestions[question].guidelines
        if (checklistGuidelines.includes(guidelines[0])) {
          const filteredGuidelines = checklistGuidelines.filter(
            guideline => !guidelines.includes(guideline)
          )
          designQuestions[question].addToChecklist = false
        }
      }
      if (question + 1 < designQuestions.length) {
        if (designQuestions[question + 1].visited === true) {
          if (designQuestions[question + 1].addToChecklist === true) {
            document.querySelector("#yes").checked = true
          } else {
            document.querySelector("#no").checked = true
          }
          setOptionSelected(true)
        } else {
          document.querySelector("#yes").checked = false
          document.querySelector("#no").checked = false
          setOptionSelected(false)
        }
      }
      designQuestions[question].visited = true
    }

    setQuestion(question + 1)
  }

  const handlePreviousQuestion = () => {
    if (question - 1 >= 0) {
      if (designQuestions[question - 1].addToChecklist === true) {
        document.querySelector("#yes").checked = true
      } else {
        document.querySelector("#no").checked = true
      }
    }

    setQuestion(question - 1)
  }

  const handleSelection = e => {
    setOptionSelected(true)
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
          handleSelection={handleSelection}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
        />
      )
    }
  }

  return <div className="checklist-container">{getCurrentQuestion()}</div>
}
