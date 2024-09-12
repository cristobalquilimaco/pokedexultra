import { useEffect } from "react"
import usefecth from "../hooks/UseFetch"

const Pokedex = () => {
    const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
    const [pokemon, getAllPokemos] = usefecth(urlBase)
    
  useEffect(() => {
    getAllPokemons(urlBase)

  }, [urlBase]);
  
  const handleClick = () =>{
    navigate(`/pokedex/${pokemon.name}`)
  }
  
  
    return (
      <article onClick={handleClick} className={`pokemon color__border-${pokemon?.types[0].type.name}`}>
      <header className={`pokemon__header bg-${pokemon?.types[0].type.name}`}>
        <img className="pokemon__sprite" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className="pokemon__body">
        <h3 className={`pokemon__name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <ul className="pokemon__types">
          {
            pokemon?.types.map(objType => (
              <li className="pokemon__type-specific" key={objType.type.url}>{objType.type.name}</li>
            ))
          }
        </ul>
        <ul className="pokemon__stats">
          {
            pokemon?.stats.map(objStat => (
              <li className="pokemon__stats-specific" key={objStat.stat.url}>
                <span className="pokemon__stats-label">{objStat.stat.name}</span>
                <span className={`pokemon__stats-value color-${pokemon?.types[0].type.name}`}>{objStat.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>

  )
}

export default Pokedex