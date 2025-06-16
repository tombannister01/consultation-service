import { useState } from "react";
import type { ReactNode } from "react";
import type { User } from "../types/User";
import { getMockUser } from "../mock-data/mock-user";
import { UserContext } from "./userContextObject";

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(getMockUser());

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}