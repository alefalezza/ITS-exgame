import type { QuestionProps } from "../components/Question";

export const questionsData: QuestionProps[] = [
  {
    questionText: "Quanto fa 2 + 2?",
    answers: [
      { id: "q1a", text: "3" },
      { id: "q1b", text: "4" },
      { id: "q1c", text: "5" },
      { id: "q1d", text: "Dipende dalla fantasia" },
    ],
  },
  {
    questionText: "Quanto fa 3 x 3?",
    answers: [
      { id: "q2a", text: "6" },
      { id: "q2b", text: "9" },
      { id: "q2c", text: "12" },
      { id: "q2d", text: "Dipende dalla fantasia" },
    ],
  },
  {
    questionText: "Quante caramelle rimangono se ne hai 10 e ne mangi 2?",
    answers: [
      { id: "q3a", text: "2" },
      { id: "q3b", text: "4" },
      { id: "q3c", text: "8" },
      { id: "q3d", text: "10 (le hai solo guardate)" },
    ],
  },
  {
    questionText: "Quante zampe hanno due giraffe e mezzo?",
    answers: [
      { id: "q4a", text: "6" },
      { id: "q4b", text: "8" },
      { id: "q4c", text: "10" },
      { id: "q4d", text: "Dipende dalla fantasia" },
    ],
  },
];
