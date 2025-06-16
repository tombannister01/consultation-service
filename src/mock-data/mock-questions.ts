import type { Question } from "../types/Question";

const questionsByUser: Record<string, Question[]> = {
  user_1001: [
    {
      id: "ques_75153998",
      question: "What is the best way to improve my workflow?",
    },
    {
      id: "ques_75154001",
      question: "How can I integrate TypeScript into my project?",
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
