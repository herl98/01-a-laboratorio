import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import type{ Pokemon } from "../Types/Pokemon";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        // Obtiene los primeros 10 Pokémon
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );

        const data = await response.json();

        // Obtiene la información completa de cada Pokémon
        const pokemonData = await Promise.all(
          data.results.map(async (pokemon: { url: string }) => {
            const res = await fetch(pokemon.url);
            return res.json();
          })
        );

        setPokemons(pokemonData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading) return <h2>Cargando...</h2>;

  return (
    <div className="pokemon-container">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
        />
      ))}
    </div>
  );
};

export default PokemonList;