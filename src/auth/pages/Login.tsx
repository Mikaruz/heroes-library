import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", {
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
