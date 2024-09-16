import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokedex" element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App