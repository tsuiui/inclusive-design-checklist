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
  const [checklistComplete, setChecklistComplete] = useState(false)

  const restartChecklist = () => {
    setChecklistType(null)
    setQuestion(-1)
    setOptionSelected(false)
    setChecklistGuidelines([])
    setChecklistComplete(false)
    designQuestions.forEach(question => {
      question.addToChecklist = false
      question.visited = false
    })
  }

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
      setOptionSelected(true)
    }

    setQuestion(question - 1)
  }

  const handleSelection = e => {
    setOptionSelected(true)
  }

  const handleViewChecklist = () => {
    setChecklistComplete(true)
    const checklist = document.querySelector("#checklist")
    checklistGuidelines.forEach(guideline => {
      let { link, title } = guidelines[guideline]

      const listItem = document.createElement("li")
      listItem.innerText = title

      checklist.appendChild(listItem)
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
        <>
          {!checklistComplete && (
            <button onClick={() => handleViewChecklist()}>
              View my checklist
            </button>
          )}
          <ul id="checklist"></ul>
          <button onClick={() => restartChecklist()}>Restart checklist</button>
        </>
      )
    } else {
      return (
        <Question
          question={designQuestions[question]}
          handleSelection={handleSelection}
          handleNextQuestion={handleNextQuestion}
          handlePreviousQuestion={handlePreviousQuestion}
          optionSelected={optionSelected}
        />
      )
    }
  }

  return <div className="checklist-container">{getCurrentQuestion()}</div>
}
