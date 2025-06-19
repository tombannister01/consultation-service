import type { Question } from "../types/Question";

const questionsByUser: Record<string, Question[]> = {
  user_1001: [
    {
      id: "ques_75153998",
      question: "Are you seeking Weight loss solutions?",
    },
    {
      id: "ques_75154001",
      question: "Do you have any dietary restrictions?",
    },
    {
      id: "ques_751539534",
      question: "Have you been diagnosed with diabetes?",
    },
    {
      id: "ques_751540363461",
      question: "Have you tried any weight loss treatments before?",
    },
    {
      id: "ques_484740363461",
      question: "Are you currently taking any medications?",
    },
  ],
  user_1002: [
    {
      id: "ques_75154005",
      question: "What are the latest trends in web development?",
    },
  ],
  user_1003: [
    { id: "ques_75154009", question: "How do I optimize my database queries?" },
  ],
};

export function getQuestionsByUserId(userId: string): Question[] {
  return questionsByUser[userId] || [];
}
