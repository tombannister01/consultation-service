import { useContext } from "react";
import { QuestionContext } from "./questionContextObject";

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  return context;
};