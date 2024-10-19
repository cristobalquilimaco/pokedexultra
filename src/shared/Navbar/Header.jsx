import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import "./styles/header.css"

const Header = () => {
  return (
    <header className="navbar">
        <img className="img__logo" src={logo} alt="" />
        <Link to={"/pokedex"}><h1 className="logo">POKEDEX</h1></Link>
    </header>
  )
}

export default Header