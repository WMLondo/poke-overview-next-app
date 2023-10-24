import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

type FavoritePokemonsProps = {
  pokemons: number[];
};

export const FavoritePokemons: FC<FavoritePokemonsProps> = ({ pokemons }) => {
  const router = useRouter();

  const onClickHandler = (pokemonId: number) => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid.Container gap={2} justify="flex-start" direction="row">
      {pokemons.map((id) => {
        return (
          <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card
              hoverable
              clickable
              css={{ padding: 10 }}
              onClick={() => onClickHandler(id)}
            >
              <Card.Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width="100%"
                height={140}
              />
            </Card>
          </Grid>
        );
      })}
    </Grid.Container>
  );
};
