import { useEffect } from "react";
import useFetch from "../../hooks/UseFetch";
import PropTypes from 'prop-types';

const Pokecard = ({ url }) => {
    const [pokemon, getPokemonById] = useFetch(url);

    useEffect(() => {
        getPokemonById();
    }, [getPokemonById]);


    return (
        <div>
            <header>
                <img src={pokemon?.sprites?.other.home.front_default} alt="" />
            </header>
            <section>
                <h3>{pokemon?.name}</h3>
            </section>
        </div>
    );
};

Pokecard.propTypes = {
    url: PropTypes.string.isRequired
};

export default Pokecard;
