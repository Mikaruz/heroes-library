import { createContext } from "react";
import { AuthState } from "../interfaces/interfaces";

export type AuthContextProps = {
  authState: AuthState;
  login: (name: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
