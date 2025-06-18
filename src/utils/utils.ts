import type { Question } from "../types/Question";

export const logAnswers = (questions: Question[], newAnswers: string[]) => {
  console.log(
    questions?.map((question, index) => ({
      question: question.question,
      answer: newAnswers[index],
    }))
  );
};
