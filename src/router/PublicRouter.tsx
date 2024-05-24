import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const PublicRoute = ({ children }: props) => {
  const { logged } = useAuth();
  return !logged ? children : <Navigate to="/" />;
};
