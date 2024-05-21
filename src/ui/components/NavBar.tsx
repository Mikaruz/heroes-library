import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";

export const NavBar = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    navigate("/login"),
      {
        replace: true,
      };
  };

  return (
    <nav>
      <div className="nav-container">
        <NavLink className="routes" to="/">
          Heroes Library
        </NavLink>
        <NavLink className="routes" to="/marvel">
          Marvel
        </NavLink>
        <NavLink className="routes" to="/dc">
          DC
        </NavLink>
        <NavLink className="routes" to="/search">
          <span className="material-symbols-outlined">search</span>
        </NavLink>

        <button onClick={onLogout}>
          <span className="material-symbols-outlined">logout</span>
        </button>
      </div>
    </nav>
  );
};
