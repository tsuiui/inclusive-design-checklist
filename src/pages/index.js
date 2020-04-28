import React, { useState } from "react"
import Intro from "../components/intro"
import Layout from "../components/layout"
import ChecklistContainer from "../components/checklist-container"

const IndexPage = () => {
  const [checklistStarted, setChecklistStarted] = useState(false)

  if (!checklistStarted) {
    return (
      <Layout>
        <Intro setChecklistStarted={setChecklistStarted} />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <ChecklistContainer />
      </Layout>
    )
  }
}

export default IndexPage
