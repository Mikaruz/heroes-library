import { NavLink, useNavigate } from "react-router-dom";
import "./styles.css";

export const NavBar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
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
