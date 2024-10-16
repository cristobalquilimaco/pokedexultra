import PropTypes from 'prop-types';

const PokeStats = ({ stats }) => {
  return (
    <ul className='stast__info'>
      {stats.map(statsInfo => {
        const percentage = (statsInfo.base_stat / 200) * 100; // Calcula el porcentaje
        return (
          <li className='poke__stats' key={statsInfo.stat.name}>
            <span className='stat__name'>{statsInfo.stat.name}</span>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${percentage}%` }} />
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
