import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import { useEffect } from "react";

const PokedexName = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  
  const [pokemon, getPokemonByName] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name, getPokemonByName]);


  return (
    <div>
      <img src={pokemon?.sprites?.other.home.front_default} alt={pokemon?.name} />
      <h1>{pokemon?.name}</h1>
    </div>
  );
};

export default PokedexName;
