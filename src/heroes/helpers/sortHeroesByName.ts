import { heroes } from "../data/heroes";

export const sortHeroesByName = () => {
  return heroes.sort((a, b) => a.superhero.localeCompare(b.superhero));
};
