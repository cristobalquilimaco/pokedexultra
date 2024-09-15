
const Home = () => {

  const handleSubmit = e =>{
    e.preventDefault()
  }

  return (
    <div>
      <h1>POKEDEX</h1>
      <h2>Hi Trainer</h2>
      <h3>Press Star</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button>Catch them all!</button>
        </form>  
    </div>
  )
}

export default Home