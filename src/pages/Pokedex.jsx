import { useEffect } from "react";
import useFetch from "../hooks/UseFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer";
import "./styles/pokedex.css"

const Pokedex = () => {
  const trainerName = useSelector(states => states.trainerName);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const [pokemons, getAllPokemons] = useFetch(url);

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div>
      <h1>Bienvenido {trainerName}! Busca tu Pokémon</h1>
      <form action="">
        <input type="text" name="" id="" />
      </form>
      <section className="poke_container_class">
      <PokeContainer pokemons={pokemons?.results || []} />
      </section>
      
    </div>
  );
};

export default Pokedex;
