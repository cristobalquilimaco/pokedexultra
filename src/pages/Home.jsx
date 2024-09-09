
import { useEffect } from "react"
import useFetch from "../hooks/UseFetch"

const Home = ({url}) => {

const [ pokemon, getPokemonById,  ] = useFetch(url)

useEffect(() => {
getPokemonById()

    }, [])

  return (
    <div>Home</div>
  )
}

export default Home