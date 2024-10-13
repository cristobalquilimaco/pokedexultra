import { useParams } from "react-router-dom"
import useFetch from "../hooks/UseFetch"
import { useEffect } from "react"

const PokedexName = () => {

  const { name } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${name}`
  
  const [pokemon, getPokemonByName] = useFetch(url)

  useEffect(() => {
    getPokemonByName()
  }, [name])
  

  return (
    <div>
      <img src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />
      <h1>{pokemon.name}</h1>
    </div>
  )
}

export default PokedexName