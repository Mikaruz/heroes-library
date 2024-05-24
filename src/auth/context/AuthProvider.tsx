import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { User } from "../interfaces/interfaces";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user")!);

  return {
    logged: !!user,
    user: user,
  };
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider = ({ children }: props) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name: string) => {
    const user: User = {
      id: 1,
      name: name,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch({ type: "login", payload: user });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "logout" });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
