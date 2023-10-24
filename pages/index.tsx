import { Grid } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Layout } from "@/components/template";
import { PokemonShort, PokemonListResponse } from "@/interfaces";
import { PokemonCard } from "@/components/molecules";

interface Props {
  pokemons: PokemonShort[];
}

const HomePage: NextPage<Props> = (props) => {
  const { pokemons } = props;
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon: PokemonShort) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data: PokemonListResponse = await response.json();

  const pokemons: PokemonShort[] = data.results.map(
    (pokemon: { name: string; url: string }, index: number) => ({
      id: index + 1,
      name: pokemon.name,
      url: pokemon.url,
      thumbnail: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        index + 1
      }.svg`,
      favorite: false,
    })
  );

  return {
    props: { pokemons },
  };
};

export default HomePage;
