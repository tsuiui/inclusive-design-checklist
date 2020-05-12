import React, { useState } from "react"
import { SelectChecklistType, Layout } from "../components"

const ChecklistPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [checklistQuestions, setChecklistQuestions] = useState(null)
  const [optionSelected, setOptionSelected] = useState(false)

  const handleQuestion = showNextQuestion => {
    if (showNextQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  if (currentQuestionIndex === 0) {
    return (
      <Layout>
        <SelectChecklistType
          setChecklistQuestions={setChecklistQuestions}
          setOptionSelected={setOptionSelected}
        />
        <div className="button-container">
          <button
            disabled={!optionSelected}
            onClick={() => handleQuestion(true)}
          >
            Next
          </button>
        </div>
      </Layout>
    )
  }
}

export default ChecklistPage
