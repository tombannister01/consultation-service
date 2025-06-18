import { createContext } from "react";
import type { Question } from "../../types/Question";
import type { User } from "../../types/User";

type QuestionContextValue = {
  questions: Question[] | null;
  setQuestions: (questions: Question[]) => void;
  user: User | null;
};

export const QuestionContext = createContext<QuestionContextValue | undefined>(
  undefined
);
