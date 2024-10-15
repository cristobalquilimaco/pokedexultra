
import PropTypes from 'prop-types';
import "./styles/PokedexNameDescription.css"; // Asegúrate de tener este archivo para los estilos
import { useState } from 'react';

const PokedexNameDescription = ({ speciesData, pokemon }) => {
  const [activeTab, setActiveTab] = useState('description'); // Estado para controlar la pestaña activa
  const primaryType = pokemon?.types[0]?.type.name;

  return (
    <div className={`pokedex-container ${primaryType ? `${primaryType}-background` : ''}`}>
      {pokemon?.sprites?.other?.home?.front_default ? (
        <img src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
      ) : (
        <img src="placeholder-image-url" alt="Placeholder" />
      )}
      <h1>{pokemon?.name}</h1>
      <ul className="pokemon_list_type">
        {pokemon?.types.map(typeInfo => (
          <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
        ))}
      </ul>
      {speciesData && (
        <div>
          <section>
            <button onClick={() => setActiveTab('description')}>Description</button>
            <button onClick={() => setActiveTab('stats')}>Stats</button>
            <button onClick={() => setActiveTab('moves')}>Moves</button>
          </section>

          {activeTab === 'description' && (
            <div>
              {speciesData.flavor_text_entries
                .reduce((acc, entry) => {
                  const text = entry.flavor_text.replace(/\f/g, ' ');
                  if (!acc.includes(text)) {
                    acc.push(text);
                  }
                  return acc;
                }, [])
                .slice(0, 5)
                .map((text, index) => (
                  <p key={index}>{text}</p>
                ))}
            </div>
          )}

          {activeTab === 'stats' && (
            <ul>
              {pokemon?.stats.map(statsInfo => (
                <li key={statsInfo.stat.name}>
                  <span>{statsInfo.stat.name}</span>
                  <span>{statsInfo.base_stat}</span>
                </li>
              ))}
            </ul>
          )}

          {activeTab === 'moves' && (
            <ul>
              {pokemon?.moves.map(movesInfo => (
                <li key={movesInfo.move.url}>{movesInfo.move.name}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

PokedexNameDescription.propTypes = {
  speciesData: PropTypes.shape({
    flavor_text_entries: PropTypes.arrayOf(
      PropTypes.shape({
        flavor_text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired
    ).isRequired,
    sprites: PropTypes.shape({
      other: PropTypes.shape({
        home: PropTypes.shape({
          front_default: PropTypes.string,
        }),
      }),
    }),
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        stat: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
        base_stat: PropTypes.number.isRequired,
      })
    ).isRequired,
    moves: PropTypes.arrayOf(
      PropTypes.shape({
        move: PropTypes.shape({
          name: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default PokedexNameDescription;
