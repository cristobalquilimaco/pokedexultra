import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Pokedex from "./pages/Pokedex"
import ProtectedRoutes from "./pages/ProtectedRoutes"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path="/pokedex" element={<Pokedex/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App