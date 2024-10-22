import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import LoadingPage from '../../../pages/Loading/LoadingPage';


const PokeDescription = ({ flavorTextEntries }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (flavorTextEntries.length > 0) {
      setLoading(false); // Cambia a false si hay entradas de texto
    }
  }, [flavorTextEntries]);

  if (loading) {
    return <LoadingPage />;
  }

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
