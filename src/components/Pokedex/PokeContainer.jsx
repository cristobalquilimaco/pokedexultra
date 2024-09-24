
import PropTypes from 'prop-types';
import Pokecard from './Pokecard';
import "./styles/pokeContainer.css"
import { useState } from 'react';

const PokeContainer = ({ pokemons }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calcular el índice de inicio y fin
  const indexOfLastPokemon = currentPage * itemsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - itemsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Número total de páginas
  const totalPages = Math.ceil(pokemons.length / itemsPerPage);

  return (
    <div>
      <div className='card_container'>
        {currentPokemons.map(pokemon => (
          <Pokecard
            key={pokemon.url}
            url={pokemon.url}
          />
        ))}
      </div>
      <div className='pagination'>
        <button 
          onClick={() => paginate(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button 
            key={index + 1} 
            onClick={() => paginate(index + 1)} 
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
        <button 
          onClick={() => paginate(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Siguiente
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
