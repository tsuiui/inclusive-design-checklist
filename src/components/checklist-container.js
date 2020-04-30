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
    document.querySelector("#checklist").innerHTML = null
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
      let { link, title, goal, solution } = guidelines[guideline]
      const wrapper = document.createElement("div")
      wrapper.classList.add("checklist-item-wrapper")

      const titleLink = document.createElement("a")
      titleLink.href = link
      titleLink.classList.add("checklist-item-title")
      titleLink.innerText = title
      const titleNode = document.createElement("h1")
      titleNode.appendChild(titleLink)

      const goalTitle = document.createElement("h2")
      goalTitle.classList.add("checklist-sub-title")
      goalTitle.innerText = "Goal"

      const goalNode = document.createElement("p")
      goalNode.innerText = goal

      const solutionTitle = document.createElement("h2")
      solutionTitle.classList.add("checklist-sub-title")
      solutionTitle.innerText = "Solution"

      const solutionNode = document.createElement("p")
      solutionNode.innerText = solution

      wrapper.appendChild(titleNode)
      wrapper.appendChild(goalTitle)
      wrapper.appendChild(goalNode)
      wrapper.appendChild(solutionTitle)
      wrapper.appendChild(solutionNode)
      checklist.appendChild(wrapper)
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

  if (question === designQuestions.length) {
    return (
      <>
        {!checklistComplete && (
          <>
            <p>
              Your checklist has been generated! To view click the button below.
            </p>
            <button id="view-checklist" onClick={() => handleViewChecklist()}>
              View my checklist
            </button>
          </>
        )}

        <div id="checklist"></div>
        {checklistComplete && (
          <button onClick={() => restartChecklist()}>Restart checklist</button>
        )}
      </>
    )
  } else {
    return <div className="checklist-container">{getCurrentQuestion()}</div>
  }
}
