import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../../types/User";
import type { Question } from "../../types/Question";
import { getMockUser } from "../../mock-data/mock-user";
import { getQuestionsByUserId } from "../../mock-data/mock-questions";
import { QuestionContext } from "./questionContextObject";

export function QuestionProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [questions, setQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    const fetchedUser = getMockUser();
    setUser(fetchedUser);
    if (fetchedUser) {
      setQuestions(getQuestionsByUserId(fetchedUser.id));
    }
  }, []);

  return (
    <QuestionContext.Provider value={{ user, questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
}

