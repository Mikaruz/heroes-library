import { Route, Routes } from "react-router-dom";
import { Marvel } from "../heroes/pages/Marvel";
import { Dc } from "../heroes/pages/Dc";
import { Login } from "../auth/pages/Login";
import { NavBar } from "../ui/components/NavBar";
import { Home } from "../ui/pages/Home";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/dc" element={<Dc />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
