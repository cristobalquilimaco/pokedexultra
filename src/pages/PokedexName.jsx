import { useParams } from "react-router-dom"
import useFetch from "../hooks/UseFetch"

const PokedexName = () => {

  const { name } = useParams()

  const url = "https://pokeapi.co/api/v2/pokemon/ditto"
  
  const [pokemon, getPokemonByName] = useFetch(url)

  return (
    <div>{name}</div>
  )
}

export default PokedexName