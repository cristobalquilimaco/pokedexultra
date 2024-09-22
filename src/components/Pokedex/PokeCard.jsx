import { useEffect } from "react";
import useFetch from "../../hooks/UseFetch";
import PropTypes from 'prop-types';
import './styles/pokecard.css'; // Importa el archivo CSS

const Pokecard = ({ url }) => {
    const [pokemon, getPokemonById] = useFetch(url);

    useEffect(() => {
        getPokemonById();
    }, [getPokemonById]);

    // Determina el fondo basado en el primer tipo del Pokémon
    const backgroundClass = pokemon?.types[0]?.type.name ? `type-${pokemon.types[0].type.name}` : '';
    const darkBackgroundClass = pokemon?.types[0]?.type.name ? `type-${pokemon.types[0].type.name}-dark` : '';

    return (
        <div className={`pokecard ${backgroundClass}`}> {/* Aplica el fondo aquí */}
            <header>
                <img className="poke_card_img" src={pokemon?.sprites?.other.home.front_default} alt={pokemon?.name} />
            </header>
            <section>
                <h3 className={`pokecard_name ${darkBackgroundClass}`}>{pokemon?.name}</h3>
                <ul>
                    {
                        pokemon?.types.map(typeInfo => (
                            <li
                                key={typeInfo.type.url}
                                 // Aplica el fondo oscuro aquí
                            >
                                {typeInfo.type.name}
                            </li>
                        ))
                    }
                </ul>
            </section>
            <footer>
                <ul>
                    {
                        pokemon?.stats.map(statsInfo => (
                            <li key={statsInfo.stat.url}>
                                <span>{statsInfo.stat.name}</span>
                                <span>{statsInfo.stat.base_stat}</span>
                            </li>
                        ))
                    }
                </ul>
            </footer>
        </div>
    );
};

Pokecard.propTypes = {
    url: PropTypes.string.isRequired
};

export default Pokecard;
