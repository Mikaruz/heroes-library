import { Route, Routes } from "react-router-dom";

import { NavBar } from "../../ui/components/NavBar";
import { Home } from "../../ui/pages/Home";
import { Marvel } from "../pages/Marvel";
import { Dc } from "../pages/Dc";
import { Search } from "../pages/Search";
import { Hero } from "../pages/Hero";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marvel" element={<Marvel />} />
        <Route path="/dc" element={<Dc />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hero/:id" element={<Hero />} />
      </Routes>
    </>
  );
};
