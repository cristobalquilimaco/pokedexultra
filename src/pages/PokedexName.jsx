import { useParams } from "react-router-dom";
import useFetch from "../hooks/UseFetch";
import { useEffect, useState } from "react";

const PokedexName = () => {
  const { name } = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const [pokemon, getPokemonByName, hasError] = useFetch(url);
  const [speciesData, setSpeciesData] = useState(null);

  useEffect(() => {
    const fetchSpeciesData = async () => {
      if (pokemon) {
        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`;
        const response = await fetch(speciesUrl);
        const data = await response.json();
        setSpeciesData(data);
      }
    };

    getPokemonByName();
    fetchSpeciesData();
  }, [name, getPokemonByName]);

  return (
    <div className="pokedex__name">
      {hasError ? (
        <h1>☠️ The Pokémon <span>{name}</span> doesnt exist</h1>
      ) : (
        <>
          <img src={pokemon?.sprites?.other?.home?.front_default} alt={pokemon?.name} />
          <h1>{pokemon?.name}</h1>
          {speciesData && (
            <div>
              <h2>Description:</h2>
              {speciesData.flavor_text_entries
                .reduce((acc, entry) => {
                  if (!acc.includes(entry.flavor_text.replace(/\f/g, ' '))) {
                    acc.push(entry.flavor_text.replace(/\f/g, ' '));
                  }
                  return acc;
                }, [])
                .slice(0, 5) 
                .map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PokedexName;
