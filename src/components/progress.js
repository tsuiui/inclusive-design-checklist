import React from "react"
import "./progress.css"

export const Progress = ({ progress }) => (
  <progress className="progress" value={progress} max="100"></progress>
)
