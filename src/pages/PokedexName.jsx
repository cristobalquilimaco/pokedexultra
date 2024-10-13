import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import { useEffect } from "react";

const PokedexName = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  
  const [pokemon, getPokemonByName, hasError] = useFetch(url);

  useEffect(() => {
    getPokemonByName();
  }, [name, getPokemonByName]);


  return (
    <div>
      {
        hasError
        ? <h1>☠️ The pokemon <span>{name}</span> doesn´t exist</h1>
        : (
          <>
          <img src={pokemon?.sprites?.other.home.front_default} alt={pokemon?.name} />
          <h1>{pokemon?.name}</h1>
      </>
    )
  }
      </div>
  );
};

export default PokedexName;
