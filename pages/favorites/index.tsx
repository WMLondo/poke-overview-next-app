import { NoFavorites } from "@/components/molecules";
import { FavoritePokemons } from "@/components/organisms";
import { Layout } from "@/components/template";
import { localFavorites } from "@/utils";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const FavoritePage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favorites Pokemons">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritePage;
