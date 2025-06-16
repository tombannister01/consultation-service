import { useContext } from "react";
import { UserContext } from "../context/userContextObject";

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
}; 