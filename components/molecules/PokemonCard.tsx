import { PokemonShort } from "@/interfaces";
import { FC } from "react";
import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemon: PokemonShort;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();
  const onClickHandler = () => {
    router.push(`/pokemonByName/${pokemon.name}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
      <Card onClick={onClickHandler}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.thumbnail} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
