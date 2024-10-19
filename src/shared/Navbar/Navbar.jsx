import logo from "../../assets/images/logo.png"
import "./styles/navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className="logo">POKEDEX</h1>
        <img className="img__logo" src={logo} alt="" />
    </nav>
  )
}

export default Navbar