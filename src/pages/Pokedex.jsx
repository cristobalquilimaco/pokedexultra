import { useEffect, useState } from "react";
import axios from "axios";
import PokeContainer from "../components/Pokedex/PokeContainer";
import "./styles/pokedex.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Pokedex = () => {
    const [selectValue, setSelectValue] = useState("all-pokemons");
    const [pokemons, setPokemons] = useState(null);
    const [types, setTypes] = useState(null);
    const [hasError, setHasError] = useState(false);
    const [hasErrorTypes, setHasErrorTypes] = useState(false);
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
    const urlTypes = "https://pokeapi.co/api/v2/type";

    const getPokemons = async () => {
        try {
            const res = await axios.get(url);
            setPokemons(res.data);
        } catch (err) {
            console.error(err);
            setHasError(true);
        }
    };

    const getTypes = async () => {
        try {
            const res = await axios.get(urlTypes);
            setTypes(res.data);
        } catch (err) {
            console.error(err);
            setHasErrorTypes(true);
        }
    };

    useEffect(() => {
        getPokemons();
        getTypes();
    }, []);

    useEffect(() => {
        const fetchPokemons = async () => {
            if (selectValue === "all-pokemons") {
                getPokemons();
            } else {
                try {
                    const res = await axios.get(selectValue);
                    const data = {
                        results: res.data.pokemon.map(pokeInfo => pokeInfo.pokemon)
                    };
                    setPokemons(data);
                } catch (err) {
                    console.log(err);
                }
            }
        };
        fetchPokemons();
    }, [selectValue]);

    const searchPokemon = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = searchPokemon.current.value.trim().toLowerCase();
        navigate(`/pokedex/${inputValue}`);
    };

    const handleChangeType = (e) => {
        setSelectValue(e.target.value);
    };

    if (hasError || hasErrorTypes) {
        return <p>Error al cargar los datos.</p>;
    }

    return (
        <div className="search__pokemon">
            <h1 className="pokedex__title">Pokémon Catalog: The Ultimate Guide for Trainers</h1>
            <p className="pokedex__description">
            Dive into the fascinating world of Pokémon with our complete catalog, featuring detailed profiles of every Pokémon, including their types, abilities, evolutions, and habitats. Explore the various regions, discover rare and legendary creatures, and learn about their unique characteristics and moves. Whether you're a seasoned Trainer or a newcomer, our comprehensive guides, tips for battling, and strategies for catching them all will enhance your Pokémon journey. Join the adventure and immerse yourself in the rich lore and vibrant community surrounding this beloved franchise!...</p>
            <form className="poke__form_dex" onSubmit={handleSubmit}>
                <input className="search__input" ref={searchPokemon} type="text" />
                <button className="button">Search</button>
                <select onChange={handleChangeType} value={selectValue}>
                    <option value="all-pokemons">All Pokemons</option>
                    {types?.results.map(typeInfo => (
                        <option value={typeInfo.url} key={typeInfo.url}>
                            {typeInfo.name}
                        </option>
                    ))}
                </select>
            </form>
            <section className="poke_container_class">
                <PokeContainer pokemons={pokemons?.results || []} />
            </section>
        </div>
    );
};

export default Pokedex;
