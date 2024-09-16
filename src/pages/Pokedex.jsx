import { useEffect } from "react"
import useFetch from "../hooks/UseFetch"

const Pokedex = () => {

    const url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    const [pokemons, getAllPokemons] = useFetch(url)

    useEffect(() => {
    getAllPokemons()
    }, [])
    
    console.log(pokemons)
  return (
    <div>Pokedex</div>
  )
}

export default Pokedex