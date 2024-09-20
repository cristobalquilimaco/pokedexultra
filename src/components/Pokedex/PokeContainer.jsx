import Pokecard from "./Pokecard";
import PropsType from "prop-types"

const PokeContainer = ({ pokemons }) => {
  return (
    <div>
      {pokemons.map(pokemon => (
        <Pokecard
          key={pokemon.url}
          url={pokemon.url}
        />
      ))}
    </div>
  );
};

PokeContainer.PropsType = {
  pokemons: PropsType.array.isRequired,
  pokemon: PropsType.string.isRequired
}

export default PokeContainer;
