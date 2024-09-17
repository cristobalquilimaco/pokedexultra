import { useEffect } from "react"
import useFetch from "../hooks/UseFetch"
import { useSelector } from "react-redux"
import PokeContainer from "../components/Pokedex/PokeContainer"

const Pokedex = () => {

    const trainerName = useSelector(state => state.trainerName )

    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    const [pokemons, getAllPokemons] = useFetch(url)

    useEffect(() => {
    getAllPokemons()
    }, [])
    
    console.log(pokemons)
  return (
    <div>Pokedex
        <h1>Bienvenido {trainerName} ! Busca tu pokemon</h1>
        <PokeContainer pokemons={pokemons?.results}/>
    </div>
  )
}

export default Pokedex