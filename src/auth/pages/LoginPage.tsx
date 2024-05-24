import { useNavigate } from "react-router-dom";
import { useForm, useAuth } from "../../hooks";
import "./Login.css";

interface FormData {
  name: string;
}

export const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { name, onInputChange } = useForm<FormData>({
    name: "",
  });

  const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.trim().length <= 1) return;

    const lastPath = localStorage.getItem("lastPath") || "";

    login(name);

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <div className="login-layout">
      <div className="login-container">
        <h1>Welcome</h1>
        <p>Enter your name to access</p>
        <form onSubmit={onLogin}>
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            placeholder="Type your name!"
            value={name}
            onChange={onInputChange}
            autoComplete="false"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
