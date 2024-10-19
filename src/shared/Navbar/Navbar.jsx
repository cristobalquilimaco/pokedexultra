import logo from "../../assets/images/logo.png"

const Navbar = () => {
  return (
    <div>
        <h1 className="logo">POKEDEX</h1>
        <img className="img__logo" src={logo} alt="" />
    </div>
  )
}

export default Navbar