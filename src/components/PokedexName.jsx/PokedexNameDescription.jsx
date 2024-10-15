import PropTypes from 'prop-types';

const PokedexNameDescription = ({ speciesData, pokemon }) => {
  return (
    <div>
      <img src={pokemon?.sprites?.other?.home?.front_default} alt={pokemon?.name} />
      <h1>{pokemon?.name}</h1>
      {speciesData && (
        <div>
          <h2>Description:</h2>
          {speciesData.flavor_text_entries
            .reduce((acc, entry) => {
              if (!acc.includes(entry.flavor_text.replace(/\f/g, ' '))) {
                acc.push(entry.flavor_text.replace(/\f/g, ' '));
              }
              return acc;
            }, [])
            .slice(0, 5)
            .map((text, index) => (
              <p key={index}>{text}</p>
            ))}
        </div>
      )}
    </div>
  );
};

PokedexNameDescription.propTypes = {
  speciesData: PropTypes.shape({
    flavor_text_entries: PropTypes.arrayOf(
      PropTypes.shape({
        flavor_text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sprites: PropTypes.shape({
      other: PropTypes.shape({
        home: PropTypes.shape({
          front_default: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default PokedexNameDescription;
