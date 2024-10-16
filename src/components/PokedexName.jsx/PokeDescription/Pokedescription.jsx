
import PropTypes from 'prop-types';

const PokeDescription = ({ flavorTextEntries }) => {
  return (
    <div className='poke__description'>
      {flavorTextEntries
        .reduce((acc, entry) => {
          const text = entry.flavor_text.replace(/\f/g, ' ');
          if (!acc.includes(text)) {
            acc.push(text);
          }
          return acc;
        }, [])
        .slice(0, 5)
        .map((text, index) => (
          <p key={index}>{text}</p>
        ))}
    </div>
  );
};

PokeDescription.propTypes = {
  flavorTextEntries: PropTypes.array.isRequired,
};

export default PokeDescription;
