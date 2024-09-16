import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pokedex from "./pages/Pokedex"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokedex" element={<Pokedex/>}/>
      </Routes>
    </div>
  )
}

export default App