import { useEffect, useRef, useState } from "react";
import useFetch from "../hooks/UseFetch";
import PokeContainer from "../components/Pokedex/PokeContainer";
import "./styles/pokedex.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Pokedex = () => {
  const [selectValue, setSelectValue] = useState("all-pokemons");

  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const [pokemons, getAllPokemons, hasError, setPokemons] = useFetch(url);
  const urlTypes = "https://pokeapi.co/api/v2/type";
  const [types, getAllPokemonsTypes, hasErrorTypes] = useFetch(urlTypes)

  
  

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

    
  }, [selectValue, setPokemons, getAllPokemons]);

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
    <div className="search__pokemon">
      <h1 className="pokedex__title">Pokémon Catalog: The Ultimate Guide for Trainers</h1>
      <p className="pokedex__description">Dive into the fascinating world of Pokémon with our complete catalog. From the most iconic to the rarest, explore detailed descriptions, special abilities, and tips for capturing them. Perfect for trainers of all levels, this catalog is your ideal companion on the journey to becoming a Pokémon Master. Dare to meet your future travel companions!</p>
      <form className="poke__form" onSubmit={handleSubmit}>
        <input className="search__input" ref={searchPokemon} type="text" />
        <button className="search__btn" type="submit">Search</button>
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
