import { createContext } from "react";
import type { User } from "../types/User";

type UserContextValue = {
  user: User | null;
  setUser: (user: User) => void;
};

export const UserContext = createContext<UserContextValue | undefined>(
  undefined
);
