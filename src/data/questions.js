export const designQuestions = [
  {
    question: "Does your design include animated or moving content?",
    answers: ["Yes", "No"],
    addToChecklist: false,
    guidelines: ["2.2.2"],
    visited: false,
  },
  {
    question: "Does your design include images or maps?",
    answers: ["Yes", "No"],
    addToChecklist: false,
    guidelines: ["1.1.1"],
    visited: false,
  },
  {
    question: "Does your design include any interactive elements?",
    description:
      "This includes elements such as links, settings, input fields, etc.",
    answers: ["Yes", "No"],
    guidelines: ["2.4.3", "2.4.4", "3.2.1", "3.2.2", "2.4.7"],
    visited: false,
    yesSubQuestion: [
      {
        question: "Are there any input fields",
        answers: ["Yes", "No"],
        addToChecklist: false,
        yesSubQuestions: [
          {
            question:
              "Does your design include private user data like username?",
            answers: ["Yes", "No"],
            addToChecklist: false,
            guidelines: ["3.3.4"],
            visited: false,
          },
        ],
        guidelines: ["3.3.1", "3.3.2", "3.3.3"],
        visited: false,
      },
    ],
    addToChecklist: false,
  },
  {
    question: "Does your design include text?",
    answers: ["Yes", "No"],
    addToChecklist: false,
    guidelines: ["1.4.3", "1.4.5"],
    visited: false,
  },
  {
    question: "Does your design include any time limits?",
    description: "This includes elements such as a countdown or timer.",
    answers: ["Yes", "No"],
    addToChecklist: false,
    guidelines: ["2.2.1"],
    visited: false,
  },
  {
    question:
      "Does your design include video, audio, or other time-based media?",
    answers: ["Yes", "No"],
    guidelines: ["1.1.1", "1.2.1", "1.2.2", "1.2.3", "1.2.4", "1.2.5"],
    visited: false,
    yesSubQuestion: [
      {
        question: "Does the audio automatically play?",
        answers: ["Yes", "No"],
        addToChecklist: false,
        guidelines: ["1.4.2"],
        visited: false,
      },
    ],
    addToChecklist: false,
  },
  {
    question: "Is your design intended for the web?",
    answers: ["Yes", "No"],
    addToChecklist: false,
    guidelines: ["2.4.5"],
    visited: false,
  },
]
