import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import { useEffect, useState } from "react";
import ErrorPage from "./ErrorPage";
import PokedexNameDescription from "../components/PokedexName.jsx/PokedexNameDescription.jsx";

const PokedexName = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemonByName, hasError] = useFetch(url);
  const [speciesData, setSpeciesData] = useState(null);


  useEffect(() => {
    getPokemonByName();
  }, []);


  useEffect(() => {
    const fetchSpeciesData = async () => {
      if (pokemon && pokemon.name) { 
        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`;
        const response = await fetch(speciesUrl);
        const data = await response.json();
        setSpeciesData(data);
      }
    };

    fetchSpeciesData();
  }, [pokemon]); // Solo se ejecuta cuando 'pokemon' cambia

  return (
    <div className="pokedex__name">
      {hasError ? (
        <ErrorPage />
      ) : (
        <PokedexNameDescription speciesData={speciesData} pokemon={pokemon} />
      )}
    </div>
  );
};

export default PokedexName;
