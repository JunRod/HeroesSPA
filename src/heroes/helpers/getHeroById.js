import { heroes } from "../data/heroes";

export const getHeroId = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};