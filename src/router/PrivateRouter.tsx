import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const PrivateRoute = ({ children }: props) => {
  const { logged } = useAuth();
  const { pathname, search } = useLocation();

  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
