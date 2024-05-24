import { FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";
import "./SearchPage.css";

interface FormData {
  searchText: string | (string | null)[] | null;
}

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q as string);

  const showError: boolean = q!.length > 0 && heroes.length === 0;

  const { searchText, onInputChange } = useForm<FormData>({
    searchText: q,
  });

  const onSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="search-layout">
      <form className="search-container" onSubmit={onSearchSubmit}>
        <input
          type="text"
          placeholder="Search a hero"
          autoComplete="off"
          name="searchText"
          value={searchText as string}
          onChange={onInputChange}
        />
        <button type="submit">
          <span className="material-symbols-outlined">search</span>
        </button>
      </form>

      <div className="error" style={{ display: showError ? "" : "none" }}>
        <p>No hero with {q}</p>
      </div>

      <div className="search-results">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};
