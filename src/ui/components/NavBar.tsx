import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import "./NavBar.css";

export const NavBar = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const onLogout = () => {
    logout();
    navigate("/login"),
      {
        replace: true,
      };
  };

  return (
    <nav className="nav-container">
      <NavLink className="nav-routes" to="/">
        Heroes Library
      </NavLink>
      <NavLink className="nav-routes" to="/marvel">
        Marvel
      </NavLink>
      <NavLink className="nav-routes" to="/dc">
        DC
      </NavLink>
      <button className="nav-button" onClick={onLogout}>
        <span className="material-symbols-outlined">logout</span>
      </button>
    </nav>
  );
};
