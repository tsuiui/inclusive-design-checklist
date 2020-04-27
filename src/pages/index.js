import React, { useState } from "react"

import Layout from "../components/layout"
import ChecklistContainer from "../components/checklist-container"
import Question from "../components/question"
import Intro from "../components/intro"
import SEO from "../components/seo"

const IndexPage = () => {
  const [checklistStarted, setChecklistStarted] = useState(false)
  const [checklistType, setChecklistType] = useState(null)
  const [question, setQuestion] = useState(0)

  if (!checklistStarted) {
    return (
      <Layout>
        <Intro setChecklistStarted={setChecklistStarted} />
      </Layout>
    )
  } else {
    if (question === 0) {
      return (
        <Layout>
          <ChecklistContainer
            checklistType={checklistType}
            setChecklistType={setChecklistType}
            question={question}
          />
          <button onClick={() => setQuestion(question + 1)}>Next</button>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <Question question={question} checklistType={checklistType} />
          <button onClick={() => setQuestion(question - 1)}>Back</button>
          <button onClick={() => setQuestion(question + 1)}>Next</button>
        </Layout>
      )
    }
  }
}

export default IndexPage
