export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string | null;
  results: PokemonShort[];
}

export interface PokemonShort {
  id: number;
  thumbnail: string;
  name: string;
  url: string;
  favorite: boolean;
}
