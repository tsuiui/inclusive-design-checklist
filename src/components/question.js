import React from "react"

export default ({ question, checklistType }) => {
  return (
    <div>
      <h1>{`You selected the ${checklistType} checklist`}</h1>
    </div>
  )
}
