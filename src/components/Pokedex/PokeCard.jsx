import { useEffect } from "react";
import useFetch from "../../hooks/UseFetch";
import PropTypes from 'prop-types';
import './styles/pokecard.css'; // Importa el archivo CSS
import pokebol from '../../assets/images/pokebol.png';

const Pokecard = ({ url }) => {
    const [pokemon, getPokemonById] = useFetch(url);

    useEffect(() => {
        getPokemonById();
    }, [getPokemonById]);


    const backgroundClass = pokemon?.types[0]?.type.name ? `type-${pokemon.types[0].type.name}` : '';
    const darkBackgroundClass = pokemon?.types[0]?.type.name ? `type-${pokemon.types[0].type.name}-dark` : '';

    return (
        <div className={`pokecard  ${backgroundClass}`}> {/* Aplica el fondo aquí */}
            <header className="poke_header">
                <img className="poke_card_img" src={pokemon?.sprites?.other.home.front_default} alt={pokemon?.name} />
                <img className="pokebol_img" src={pokebol} alt="" />
            </header>
            <section>
                <article className={`pokecard_name ${darkBackgroundClass}`}>
                <h3 className="name_text" >{pokemon?.name}</h3>
                </article>
                
                <ul className="pokemon_list_type">
                    {
                        pokemon?.types.map(typeInfo => (
                            <li
                                key={typeInfo.type.url}
                            >
                                {typeInfo.type.name}
                            </li>
                        ))
                    }
                </ul>
            </section>
            <footer>
                <ul className="pokemon_stats">
                    {
                        pokemon?.stats.map(statsInfo => (
                            <li className="stat__pokemon" key={statsInfo.stat.url}>
                                <span>{statsInfo.stat.name}</span>
                                <span>{statsInfo.base_stat}</span>
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
