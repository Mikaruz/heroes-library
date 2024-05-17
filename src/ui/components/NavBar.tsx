import { NavLink } from "react-router-dom";
import "../styles.css";

export const NavBar = () => {
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
        <NavLink className="routes" to="/">
          <span className="material-symbols-outlined">search</span>
        </NavLink>

        <button>
          <span className="material-symbols-outlined">logout</span>
        </button>
      </div>
    </nav>
  );
};
