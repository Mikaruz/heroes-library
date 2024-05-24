import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

export const useAuth = () => {
  const { login, logout, authState } = useContext(AuthContext);
  const { user, logged } = authState;

  return {
    login,
    logout,
    user,
    logged,
  };
};
