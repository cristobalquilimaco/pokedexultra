import { useEffect, useRef} from "react";
import useFetch from "../hooks/UseFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer";
import "./styles/pokedex.css"
import { useNavigate } from "react-router-dom";

const Pokedex = () => {


  const trainerName = useSelector(states => states.trainerName);
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const [pokemons, getAllPokemons] = useFetch(url);

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  const searchPokemon = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = searchPokemon.current.value.trim().toLowerCase()
    navigate(`/pokedex/${inputValue}`)
  }

  return (
    <div>
      <h1>Bienvenido {trainerName}! Busca tu Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <input ref={searchPokemon} type="text" name="" id="" />
        <button>Search</button>
      </form>
      <select name="" id="">Pokemon</select>
      <section className="poke_container_class">
      <PokeContainer pokemons={pokemons?.results || []} />
      </section>
      
    </div>
  );
};

export default Pokedex;
