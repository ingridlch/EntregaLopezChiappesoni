import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import Error from "./Error";
import trash from "../assets/images/trash.svg";
import { Link } from "react-router-dom";

const Cart = () => {
  const {cart, removeItem, clear, getCount, getTotalPrice} = useContext(CartContext);
  
  if(getCount()==0){
    return <Error mensaje="No hay productos en el carrito" /> 
  } 
  
  return (
    <div className="container-lg">
      <div className="row">
        <div className="col">
          <table className="table table-hover">
            <thead>
              <tr className="table-secondary">
                <td colSpan={5} className="text-center">Carrito de compras </td>
                <td className="text-center"><button className="btn btn-sm btn-light" onClick={()=>clear()}>Vaciar carrito</button></td>
              </tr>
              <tr className="table-secondary">
                <td className="text-center" colSpan={2}>Producto</td>
                <td className="text-end">Cantidad</td>
                <td className="text-end">Precio unitario</td>
                <td className="text-end">Precio total</td>
                <td className="text-center">&nbsp;</td>
              </tr>
            </thead>
            <tbody>
              {cart.map(item =>(
                  <tr key={item.id}>
                    <td><img src={`./../../public/images/${item.img}.jpg`} alt={item.name} width={70} /></td>
                    <td>{item.name}</td>
                    <td className="text-end">{item.quantity} x</td>
                    <td className="text-end">$ {item.price}</td>
                    <td className="text-end">$ {item.quantity*item.price}</td>
                    <td className="text-center"><button className="btn" onClick={()=>removeItem(item.id)} title="quitar este producto"><img src={trash} alt="quitar" width={16} /></button></td>
                  </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="table-secondary">
                <th className="text-center" colSpan={4}>Total</th>
                <td className="text-end">$ {getTotalPrice()}</td>
                <td className="text-center"><Link to={"/checkout"} className="btn btn-light">Finalizar compra</Link></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Cart;