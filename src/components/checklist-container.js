import React from "react"
import SelectChecklistType from "./select-checklist-type"
import { questions } from "../data/questions"
import "./checklist-container.css"

const CHECKLIST_TYPE = {
  DESIGN: "design",
  DEVELOPMENT: "development",
  COMBINATION: "combination",
}

export default ({ checklistType, setChecklistType, question }) => {
  return (
    <div className="checklist-container">
      <h2 className="checklist__question">{questions[0].question}</h2>
      {question === 0 ? (
        <SelectChecklistType setChecklistType={setChecklistType} />
      ) : null}
    </div>
  )
}
