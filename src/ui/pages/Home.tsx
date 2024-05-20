import { HeroCard } from "../../heroes/components/HeroCard";
import { sortHeroesByName } from "../../heroes/helpers/sortHeroesByName";

export const Home = () => {
  const heroes = sortHeroesByName();

  return (
    <div className="card-container">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
