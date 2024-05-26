import { useLocation, useNavigate } from "react-router-dom";
import { HeroCard, getHeroesByName, sortHeroesByName } from "../../heroes";
import { useAuth, useForm } from "../../hooks";
import queryString from "query-string";
import { FormEvent } from "react";
import "./Home.css";

interface FormData {
  searchText: string | (string | null)[] | null;
}

export const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  let heroes = [];

  if (q) {
    heroes = getHeroesByName(q as string);
  } else {
    heroes = sortHeroesByName();
  }

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
      <div className="home-container">
        <div className="home-title">
          <h1 className="welcome">Welcome</h1>
          <h2 className="name">{user?.name}</h2>
        </div>
        <form className="search-container" onSubmit={onSearchSubmit}>
          <input
            type="text"
            placeholder="Search a hero..."
            autoComplete="off"
            name="searchText"
            value={searchText as string}
            onChange={onInputChange}
          />
          <span className="material-symbols-outlined">search</span>
        </form>
      </div>

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
