import { useEffect } from "react";
import useFetch from "../../hooks/UseFetch";
import PropTypes from 'prop-types';

const Pokecard = ({ url }) => {
    const [pokemon, getPokemonById] = useFetch(url);

    useEffect(() => {
        getPokemonById();
    }, []);




    return (
        <div>
            <header>
                <img src={pokemon?.sprites?.other.home.front_default} alt="" />
            </header>
            <section>
                <h3>{pokemon?.name}</h3>
                <ul>
                    {
                        pokemon?.types.map(typeInfo => (
                            <li key={typeInfo.url}>{typeInfo.type.name}</li>
                        ))
                    }
                </ul>
            </section>
            <footer>
                <ul>
                    {
                        pokemon?.stats.map(statsInfo =>(
                            <li key={statsInfo.stat.url}>
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
