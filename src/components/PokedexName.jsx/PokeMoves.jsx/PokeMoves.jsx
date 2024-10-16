import PropTypes from 'prop-types';

const PokeMoves = ({ moves, primaryType }) => {
  return (
    <ul className='moves__list'>
      {moves.map(movesInfo => (
        <li className={`poke__move pokemon-type-${primaryType}`} key={movesInfo.move.url}>
          {movesInfo.move.name}
        </li>
      ))}
    </ul>
  );
};

PokeMoves.propTypes = {
  moves: PropTypes.array.isRequired,
  primaryType: PropTypes.string.isRequired,
};

export default PokeMoves;
