import { useContext } from "react";
import cart from "../assets/images/cart.svg";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {getCount} = useContext(CartContext);

  if(getCount()>0){
    return (
      <Link to={"/cart"} className="btn btn-light position-relative m-3">
        <img src={cart} alt="Carrito" width={16} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          {getCount()}
        </span>
      </Link>
    )
  }
}
export default CartWidget