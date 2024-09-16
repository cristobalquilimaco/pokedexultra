import { useRef } from "react"
import { setTrainerName } from "../store/slices/trainerName.Slice"
import { useDispatch } from "react-redux"

const Home = () => {

  const trainerNameRef = useRef()
  const dispatch = useDispatch()

  const handleSubmit = e =>{
    e.preventDefault()
    dispatch(setTrainerName(trainerNameRef.current.value.trim))
  }

  return (
    <div>
      <h1>POKEDEX</h1>
      <h2>Hi Trainer</h2>
      <h3>Press Star</h3>
      <form onSubmit={handleSubmit}>
        <input ref={trainerNameRef} type="text" />
        <button>Catch them all!</button>
        </form>  
    </div>
  )
}

export default Home