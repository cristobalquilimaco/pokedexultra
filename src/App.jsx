import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pokedex from "./pages/Pokedex"
import ProtectedRoutes from "./pages/ProtectedRoutes"
import "../src/app.css"
import PokedexName from "./pages/PokedexName"
import Nabvar from "./shared/Navbar/Nabvar"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<><Nabvar/><Pokedex /></>} />
            <Route path="/pokedex/:name" element={<><Nabvar/><PokedexName /></>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App