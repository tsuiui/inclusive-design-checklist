import React from "react"

export default ({ setChecklistStarted }) => (
  <>
    <p>
      Welcome to the inclusive design checklist. This initiative was started as
      a method for educating designers and developers about accessibility and
      removing the stigma that it's difficult to learn. To get started, click
      the start button below.
    </p>
    <button onClick={() => setChecklistStarted(true)}>Start</button>
  </>
)
