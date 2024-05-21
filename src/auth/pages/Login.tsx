import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "";

    login("Mikaruz");

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <>
      <h1>Login</h1>

      <button onClick={onLogin}>Login</button>
    </>
  );
};
