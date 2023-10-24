import { Pokemon } from "@/interfaces";

export const getPokemonInfo = async (nameOrId: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameOrId}`);

  const result: Pokemon = await response.json();

  return {
    id: result.id,
    sprites: result.sprites,
    name: result.name,
  };
};
