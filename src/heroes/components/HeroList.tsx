import { useMemo } from "react";
import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher, sortHeroesByName } from "../helpers";
import "./HeroList.css";

type HeroListProps = {
  publisher?: string;
};

export const HeroList = ({ publisher }: HeroListProps) => {
  const heroes = useMemo(() => {
    if (publisher !== undefined) {
      return getHeroesByPublisher(publisher);
    } else {
      return sortHeroesByName();
    }
  }, [publisher]);

  return (
    <div className="list-container">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
