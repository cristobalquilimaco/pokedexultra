import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pokedex from "./pages/Pokedex"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route>
            <Route path="/pokedex" element={<Pokedex/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App