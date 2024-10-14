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
    fetchSpeciesData(); // Llamar aquí también
  }, [name, getPokemonByName]);

  useEffect(() => {
    if (pokemon) {
      const fetchSpeciesData = async () => {
        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`;
        const response = await fetch(speciesUrl);
        const data = await response.json();
        setSpeciesData(data);
      };

      fetchSpeciesData();
    }
  }, [pokemon]);

  return (
    <div>
      {hasError ? (
        <h1>☠️ The Pokémon <span>{name}</span> doesnt exist</h1>
      ) : (
        <>
          <img src={pokemon?.sprites?.other?.home?.front_default} alt={pokemon?.name} />
          <h1>{pokemon?.name}</h1>
          {speciesData && (
            <div>
              <h2>Flavor Text:</h2>
              {speciesData.flavor_text_entries.slice(1, 3).map((entry, index) => (
                <p key={index}>
                  {entry.flavor_text.replace(/\f/g, ' ')} {/* Remover caracteres de control */}
                </p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PokedexName;
