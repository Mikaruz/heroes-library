import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { FormEvent } from "react";
import queryString from "query-string";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroesByName(q as string);

  const showError: boolean = q!.length > 0 && heroes.length === 0;

  const {
    formState: { searchText },
    onInputChange,
  } = useForm({
    searchText: q as string,
  });

  const onSearchSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div className="search-layout">
      <form onSubmit={onSearchSubmit}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search a hero"
            autoComplete="off"
            name="searchText"
            value={searchText}
            onChange={onInputChange}
          />
          <button type="submit">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </form>

      <div className="error" style={{ display: showError ? "" : "none" }}>
        <p>No hero with {q}</p>
      </div>

      <div className="card-container">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};
