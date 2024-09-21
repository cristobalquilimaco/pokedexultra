import PropTypes from 'prop-types';
import Pokecard from './Pokecard';

const PokeContainer = ({ pokemons }) => {
  return (
    <div>
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


PokeContainer.defaultProps = {
  pokemons: []
};

export default PokeContainer;
