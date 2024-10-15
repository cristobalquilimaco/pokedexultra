



const PokedexNameDescription = ({speciesData, pokemon}) => {
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
    )}</div>
  )
}

export default PokedexNameDescription

