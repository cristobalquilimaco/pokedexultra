import { useState } from 'react';
import PropTypes from 'prop-types';
import "./styles/PokedexNameDescription.css"; 
import "../Pokedex/styles/pokecard.css";
import PokeDescription from './PokeDescription/Pokedescription';
import PokeStats from './PokeStats/PokeStats';
import PokeMoves from './PokeMoves.jsx/PokeMoves';
import { Link } from 'react-router-dom';
import pokebol from '../../assets/images/pokebol.png';


const PokedexNameDescription = ({ speciesData, pokemon }) => {
  const [activeTab, setActiveTab] = useState('description');
  const primaryType = pokemon?.types[0]?.type.name;
  const backgroundClass = pokemon?.types[0]?.type.name ? `type-${pokemon.types[0].type.name}` : '';

  return (
    <section className='principal__poke_page'>
      <Link to={"/pokedex"} >
      <button className="button__back">
  <svg className="svgIcon" viewBox="0 0 384 512">
    <path
      d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
    ></path>
  </svg>
</button>
      </Link>

      <div className="pokedex-container">
        <div className={`img__poke-header ${backgroundClass}`} >
        <img className="pokebol__img__header" src={pokebol} alt="pokeball" />
    {pokemon?.sprites?.other?.home?.front_default ? (
      
        <img className='poke__img__info' src={pokemon.sprites.other.home.front_default} alt={pokemon.name} />
    ) : (
        <img src="placeholder-image-url" alt="Imagen" />
    )}
        </div>

    <h1 className='poke__name'>{pokemon?.name}</h1>
    <ul className="pokemon_list_type">
        {pokemon?.types.map(typeInfo => (
            <li key={typeInfo.type.url}>{typeInfo.type.name}</li>
        ))}
    </ul>
    {speciesData && (
        <div className='principal__poke-container'>
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
