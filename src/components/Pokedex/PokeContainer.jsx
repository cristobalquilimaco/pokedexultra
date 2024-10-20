import PropTypes from 'prop-types';

import "./styles/pokeContainer.css"
import { useState } from 'react';
import Pokecard from './PokeCard';

const PokeContainer = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;


  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);


  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

  return (
    <div className='principal_container'>
      <div className='card_container'>
        {currentPokemons.map(pokemon => (
          <Pokecard
            key={pokemon.url}
            url={pokemon.url}
          />
        ))}
      </div>
      <div className='pagination'>
        <button className='btn__pag'
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button className='btn__pag'
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
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
