import PropTypes from 'prop-types';
import './styles/pokeStats.css'; // Asegúrate de importar el archivo CSS
import "./styles/PokedexNameDescription.css";

const PokeStats = ({ stats }) => {
    return (
      <ul className='stast__info'>
        {stats.map(statsInfo => {
          const percentage = (statsInfo.base_stat / 200) * 100; // Calcula el porcentaje
          const statName = statsInfo.stat.name.replace('-', '_'); // Convierte guiones a guiones bajos para usar en la clase
          const className = `progress-bar-${statName}`; // Crea el nombre de la clase
  
          return (
            <li className='poke__stats' key={statsInfo.stat.name}>
              <span className='stat__name'>{statsInfo.stat.name}</span>
              <div className="progress-container">
                <div 
                  className={`progress-bar ${className}`} // Aplica la clase correspondiente
                  style={{ width: `${percentage}%` }} 
                />
              </div>
              <span className='stat__value'>{statsInfo.base_stat}</span>
            </li>
          );
        })}
      </ul>
    );
  };
  
  PokeStats.propTypes = {
    stats: PropTypes.array.isRequired,
  };
  
  export default PokeStats;
