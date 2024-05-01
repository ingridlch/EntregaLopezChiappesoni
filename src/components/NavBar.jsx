import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import LogoPD from './../assets/images/logopuertodelicia2.png'

const NavBarList = () => {
  return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to={"/"}>Inicio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to={"/category/tortas"}>Tortas y tartas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to={"/category/minitortas"}>Mini tortas</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link text-dark" to={"/category/peques"}>Pequeñas dulzuras</NavLink>
        </li>
      </ul>
  )
}

const NavBar = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row">
          <div className="col"></div>
          <div className="col text-center">
            <Link to={"/"}>
              <img src={LogoPD} alt="Logo Puerto Delicia" width={280} />
            </Link>
          </div>  
          <div className="col d-flex align-items-center justify-content-end">
            <CartWidget />
          </div>
        </div>
        <div className="row">
          <div className="col bg-light">
            <NavBarList />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;