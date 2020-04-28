import React, { useState } from "react"

import Layout from "../components/layout"
import ChecklistContainer from "../components/checklist-container"
import Question from "../components/question"
import Intro from "../components/intro"
import SEO from "../components/seo"

const IndexPage = () => {
  const [checklistStarted, setChecklistStarted] = useState(false)
  const [checklistType, setChecklistType] = useState(null)
  const [question, setQuestion] = useState(-1)
  const [optionSelected, setOptionSelected] = useState(false)

  const handleNextQuestion = () => {
    setOptionSelected(false)
    setQuestion(question + 1)
  }

  const handlePreviousQuestion = () => {
    setOptionSelected(false)
    setQuestion(question - 1)
  }

  if (!checklistStarted) {
    return (
      <Layout>
        <Intro setChecklistStarted={setChecklistStarted} />
      </Layout>
    )
  } else {
    if (question === -1) {
      return (
        <Layout>
          <div className="form-wrapper">
            <ChecklistContainer
              checklistType={checklistType}
              setChecklistType={setChecklistType}
              question={question}
              setOptionSelected={setOptionSelected}
            />
            {question >= 0 ? (
              <button onClick={() => handlePreviousQuestion()}>Back</button>
            ) : null}
            <button
              disabled={!optionSelected}
              onClick={() => handleNextQuestion()}
            >
              Next
            </button>
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <div className="question-wrapper">
            <Question question={question} checklistType={checklistType} />
            <button onClick={() => setQuestion(question - 1)}>Back</button>
            <button onClick={() => setQuestion(question + 1)}>Next</button>
          </div>
        </Layout>
      )
    }
  }
}

export default IndexPage
