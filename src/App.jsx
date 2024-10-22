import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pokedex from "./pages/Pokedex"
import ProtectedRoutes from "./pages/ProtectedRoutes"
import './app.css';
import PokedexName from "./pages/PokedexName"
import Navbar from "./shared/Navbar/Header"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<><Navbar/><Pokedex /></>} />
            <Route path="/pokedex/:name" element={<><Navbar/><PokedexName /></>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App