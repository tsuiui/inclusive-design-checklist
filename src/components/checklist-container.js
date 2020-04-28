import React from "react"
import SelectChecklistType from "./select-checklist-type"
import { questions } from "../data/questions"
import "./checklist-container.css"

const CHECKLIST_TYPE = {
  DESIGN: "design",
  DEVELOPMENT: "development",
  COMBINATION: "combination",
}

export default ({
  checklistType,
  setChecklistType,
  question,
  setOptionSelected,
}) => {
  return (
    <div className="checklist-container">
      {question === -1 ? (
        <SelectChecklistType
          setOptionSelected={setOptionSelected}
          setChecklistType={setChecklistType}
        />
      ) : null}
    </div>
  )
}
