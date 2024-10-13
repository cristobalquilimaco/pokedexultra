import { useParams } from "react-router-dom"

const PokedexName = () => {

  const { name } = useParams()

  return (
    <div>{name}</div>
  )
}

export default PokedexName