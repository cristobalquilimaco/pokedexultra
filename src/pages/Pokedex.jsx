import { useEffect } from "react";
import useFetch from "../hooks/UseFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer";

const Pokedex = () => {
  const trainerName = useSelector(states => states.trainerName);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  const [pokemons, getAllPokemons] = useFetch(url);

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div>
      <h1>Bienvenido {trainerName}! Busca tu Pokémon</h1>
      {/* Asegúrate de que pokemons sea un objeto con results como un array */}
      <PokeContainer pokemons={pokemons?.results || []} />
    </div>
  );
};

export default Pokedex;
