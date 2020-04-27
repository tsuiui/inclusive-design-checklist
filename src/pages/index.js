import React, { useState } from "react"

import Layout from "../components/layout"
import ChecklistContainer from "../components/checklist-container"
import Intro from "../components/intro"
import SEO from "../components/seo"

const IndexPage = () => {
  const [checklistStarted, setChecklistStarted] = useState(false)
  return (
    <Layout>
      <SEO title="Home" />
      {!checklistStarted ? (
        <Intro setChecklistStarted={setChecklistStarted} />
      ) : null}
      {checklistStarted ? <ChecklistContainer /> : null}
    </Layout>
  )
}

export default IndexPage
