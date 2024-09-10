import { useEffect } from "react"
import usefecth from "../hooks/UseFetch"

const Pokedex = () => {
    const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const [pokemons, getAllPokemos] = usefecth(urlBase)
    
  useEffect(() => {
    getAllPokemons(urlBase)

  }, [urlBase]);
  
  
  
    return (
    <div>Pokedex</div>
  )
}

export default Pokedex