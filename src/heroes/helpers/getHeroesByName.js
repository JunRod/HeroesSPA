import { heroes } from "../data/heroes";

export const getHeroesByName = (query) => {
  query = query.toLocaleLowerCase().trim();

  if (query.length === 0) return [];

  return heroes.filter((heroe) => heroe.superhero.toLocaleLowerCase().includes(query));
};
