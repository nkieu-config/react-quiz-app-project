import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

export default function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}
