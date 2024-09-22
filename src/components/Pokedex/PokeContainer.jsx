import PropTypes from 'prop-types';
import Pokecard from './Pokecard';
import "./styles/pokeContainer.css"

const PokeContainer = ({ pokemons}) => {
  return (
    <div className='card_container'>
      {pokemons.map(pokemon => (
        <Pokecard
          key={pokemon.url}
          url={pokemon.url}
        />
      ))}
    </div>
  );
};

PokeContainer.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default PokeContainer;