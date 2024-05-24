import { Route, Routes } from "react-router-dom";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRouter";
import { PublicRoute } from "./PublicRouter";
import { Login } from "../auth";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="login/*"
        element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<Login />} />
            </Routes>
          </PublicRoute>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
