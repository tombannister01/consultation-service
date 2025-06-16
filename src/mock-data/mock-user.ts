import type { User } from "../types/User";

const mockUser: User = {
  id: "user_1001",
  firstName: "Tom",
  lastName: "Bannister",
  email: "tom.bannister@example.com",
};

export function getMockUserId(): User {
  return mockUser;
}
