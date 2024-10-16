import { useState } from 'react';
import PropTypes from 'prop-types';
import "./styles/PokedexNameDescription.css"; 
import "../Pokedex/styles/pokecard.css";
import PokeDescription from './PokeDescription/Pokedescription';
import PokeStats from './PokeStats/PokeStats';
import PokeMoves from './PokeMoves.jsx/PokeMoves';


const PokedexNameDescription = ({ speciesData, pokemon }) => {
  const [activeTab, setActiveTab] = useState('description');
  const primaryType = pokemon?.types[0]?.type.name;

  return (
    <section className='principal__poke_page'>
      <div className={`pokedex-container ${primaryType ? `${primaryType}-background` : ''}`}>
        {pokemon?.sprites?.other?.home?.front_default ? (
          <img className='poke__img__info' src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
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
          <div className='seecc'>
            <section className='button__section'>
              <button
                className={`poke__button pokemon-type-${primaryType}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button className={`poke__button pokemon-type-${primaryType}`} onClick={() => setActiveTab('stats')}>
                Stats
              </button>
              <button className={`poke__button pokemon-type-${primaryType}`} onClick={() => setActiveTab('moves')}>
                Moves
              </button>
            </section>
            {activeTab === 'description' && (
              <PokeDescription flavorTextEntries={speciesData.flavor_text_entries} />
            )}
            {activeTab === 'stats' && (
              <PokeStats stats={pokemon?.stats} />
            )}
            {activeTab === 'moves' && (
              <PokeMoves moves={pokemon?.moves} primaryType={primaryType} />
            )}
          </div>
        )}
      </div>
    </section>
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
