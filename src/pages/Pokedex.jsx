import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/UseFetch";
import { useSelector } from "react-redux";
import PokeContainer from "../components/Pokedex/PokeContainer";
import "./styles/pokedex.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Pokedex = () => {
  const [selectValue, setSelectValue] = useState("all-pokemons");
  const trainerName = useSelector(states => states.trainerName);

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const [pokemons, getAllPokemons, hasError, setPokemons] = useFetch(url);
  const urlTypes = "https://pokeapi.co/api/v2/type";
  const [types, getAllPokemonsTypes, hasErrorTypes] = useFetch(urlTypes);

  useEffect(() => {
    if (selectValue === "all-pokemons") {
      getAllPokemons();
    } else {
      axios.get(selectValue)
        .then(res => {
          const data = {
            results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
          };
          setPokemons(data);
        })
        .catch(err => console.log(err));
    }
  }, [selectValue, getAllPokemons, setPokemons]);

  useEffect(() => {
    getAllPokemonsTypes();
  }, [getAllPokemonsTypes]);

  const searchPokemon = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = searchPokemon.current.value.trim().toLowerCase();
    navigate(`/pokedex/${inputValue}`);
  };

  const handleChangeType = (e) => {
    setSelectValue(e.target.value);
  };

  if (hasError || hasErrorTypes) {
    return <p>Error al cargar los datos.</p>;
  }

  return (
    <div>
      <h1>Bienvenido {trainerName}! Busca tu Pokémon</h1>
      <form onSubmit={handleSubmit}>
        <input ref={searchPokemon} type="text" />
        <button type="submit">Search</button>
        <select onChange={handleChangeType}>
          <option value="all-pokemons">All Pokemons</option>
          {types?.results.map(typeInfo => (
            <option value={typeInfo.url} key={typeInfo.url}>
              {typeInfo.name}
            </option>
          ))}
        </select>
      </form>
      <section className="poke_container_class">
        <PokeContainer pokemons={pokemons?.results || []} />
      </section>
    </div>
  );
};

export default Pokedex;
