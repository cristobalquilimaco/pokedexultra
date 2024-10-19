import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"
import "./styles/header.css"
import { useSelector } from "react-redux"


const Header = () => {

const {name, avatar} = useSelector(states => states.trainerName);

  return (
    <header className="navbar">
      <div className="logo__section">
      <img className="img__logo" src={logo} alt="" />
      <Link to={"/pokedex"}><h1 className="logo">POKEDEX</h1></Link>
      </div>
      <div className="user__info">
        <p>{name}</p>
        <img className="avatar" src={avatar} alt="" />
      </div>
    </header>
  )
}

export default Header