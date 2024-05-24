import { Route, Routes } from "react-router-dom";
import { Home, NavBar } from "../../ui";
import { DcPage, HeroPage, MarvelPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="/dc" element={<DcPage />} />
        <Route path="/hero/:id" element={<HeroPage />} />
      </Routes>
    </>
  );
};
