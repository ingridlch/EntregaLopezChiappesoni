import CartWidget from './CartWidget'
import LogoPD from './../assets/images/logopuertodelicia2.png'

const NavBarList = () => {
  return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Tortas y tartas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Mini tortas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Pequeñas dulzuras</a>
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
            <img src={LogoPD} alt="Logo Puerto Delicia" width={280} />
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