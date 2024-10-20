import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./styles/pokeSlider.css";
import axios from 'axios';
import './styles/pokecard.css';

const PokeSlider = ({ pokemons }) => {
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const details = await Promise.all(
                pokemons.map(async (pokemon) => {
                    const response = await axios.get(pokemon.url);
                    return response.data;
                })
            );

            const firePokemons = details.filter(pokemon =>
                pokemon.types.some(typeInfo => typeInfo.type.name === 'fire')
            );

            setPokemonDetails(firePokemons);
        };

        fetchPokemonDetails();
    }, [pokemons]);

    const nextPokemon = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pokemonDetails.length);
    };

    const prevPokemon = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pokemonDetails.length) % pokemonDetails.length);
    };

    const currentPokemon = pokemonDetails[currentIndex];
    const backgroundClass = currentPokemon?.types[0]?.type.name ? `type-${currentPokemon.types[0].type.name}` : '';
    

    return (
        <div className={`custom-carousel ${backgroundClass}`}>
            <div className="carousel-inner">
                {pokemonDetails.map((pokemon, index) => (
                    <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={pokemon.id}>
                        <img className='img__slider' src={pokemon.sprites?.other.home.front_default} alt={pokemon.name} />
                        <h1>{pokemon.name}</h1>
                        <ul className="pokemon-types">
                            {pokemon.types.map((typeInfo) => (
                                <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <button className="btn__car carousel-control-prev" onClick={prevPokemon}>
                &#10094; {/* Icono de anterior */}
            </button>
            <button className="btn__car carousel-control-next" onClick={nextPokemon}>
                &#10095; {/* Icono de siguiente */}
            </button>
        </div>
    );
};

PokeSlider.propTypes = {
    pokemons: PropTypes.array.isRequired,
};

export default PokeSlider;
