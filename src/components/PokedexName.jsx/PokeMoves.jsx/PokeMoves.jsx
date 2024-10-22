import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import LoadingPage from '../../../pages/Loading/LoadingPage';


const PokeMoves = ({ moves, primaryType }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (moves.length > 0) {
      setLoading(false); // Cambia a false si hay movimientos
    }
  }, [moves]);

  if (loading) {
    return <LoadingPage />;
  }

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
