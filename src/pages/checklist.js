import React, { useState } from "react"
import { SelectChecklistType, Layout, Progress } from "../components"
import guidelines from "../data/guidelines"

const ChecklistPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1)
  const [checklistQuestions, setChecklistQuestions] = useState(null)
  const [optionSelected, setOptionSelected] = useState(false)
  const [checklistGuidelines, setChecklistGuidelines] = useState([])
  const [progress, setProgress] = useState(0)

  const handleNextQuestion = () => {
    if (currentQuestionIndex === -1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setOptionSelected(false)
      return
    }
    const guidelineSelected = document.querySelector("#yes").checked
    if (guidelineSelected) {
      const guidelines = checklistQuestions[currentQuestionIndex].guidelines

      checklistQuestions[currentQuestionIndex].addToChecklist = true
      setChecklistGuidelines([...checklistGuidelines, ...guidelines])
    } else {
      const guidelines = checklistQuestions[currentQuestionIndex].guidelines
      if (checklistGuidelines.includes(guidelines[0])) {
        const filteredGuidelines = checklistGuidelines.filter(
          guideline => !guidelines.includes(guideline)
        )
        checklistQuestions[currentQuestionIndex].addToChecklist = false
        setChecklistGuidelines(filteredGuidelines)
      }
    }
    if (currentQuestionIndex + 1 < checklistQuestions.length) {
      if (checklistQuestions[currentQuestionIndex + 1].visited === true) {
        if (
          checklistQuestions[currentQuestionIndex + 1].addToChecklist === true
        ) {
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
    checklistQuestions[currentQuestionIndex].visited = true
    setProgress((currentQuestionIndex / checklistQuestions.length) * 100)
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex - 1 >= 0) {
      if (
        checklistQuestions[currentQuestionIndex - 1].addToChecklist === true
      ) {
        document.querySelector("#yes").checked = true
      } else {
        document.querySelector("#no").checked = true
      }
      setOptionSelected(true)
    }
    setProgress((currentQuestionIndex / checklistQuestions.length) * 100)
    setCurrentQuestionIndex(currentQuestionIndex - 1)
  }

  if (currentQuestionIndex === -1) {
    return (
      <Layout>
        <Progress progress={progress} />
        <SelectChecklistType
          setChecklistQuestions={setChecklistQuestions}
          setOptionSelected={setOptionSelected}
        />
        <div className="button-container">
          <button
            disabled={!optionSelected}
            onClick={() => handleNextQuestion()}
          >
            Next
          </button>
        </div>
      </Layout>
    )
  } else if (currentQuestionIndex === checklistQuestions.length - 1) {
    return (
      <Layout>
        <Progress progress={progress} />
        {checklistGuidelines.map(guideline => {
          let { link, title, goal, solution } = guidelines[guideline]
          return (
            <div className="checklist-item-wrapper">
              <h1>{title}</h1>
              <h2>Goal</h2>
              <p>{goal}</p>
              <h2>Solution</h2>
              <p>{solution}</p>
            </div>
          )
        })}
      </Layout>
    )
  } else {
    return (
      <Layout>
        <Progress progress={progress} />
        <h2 className="checklist__question">
          {checklistQuestions[currentQuestionIndex].question}
        </h2>
        <div className="radio-container">
          <div className="radio-group">
            <input
              type="radio"
              id="yes"
              name="question-answer"
              value="yes"
              onChange={() => setOptionSelected(true)}
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              id="no"
              name="question-answer"
              value="no"
              onChange={() => setOptionSelected(true)}
            />
            <label htmlFor="no">No</label>
          </div>
        </div>
        <div className="button-container">
          <button
            className="button--back"
            onClick={() => handlePreviousQuestion()}
          >
            Back
          </button>
          <button
            disabled={!optionSelected}
            onClick={() => handleNextQuestion()}
          >
            Next
          </button>
        </div>
      </Layout>
    )
  }
}

export default ChecklistPage
