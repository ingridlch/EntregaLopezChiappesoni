import { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const ItemDetail = ({producto})=>{
  const [cantidadAgregada,setCantidadAgregada] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAdd = (cantidad)=>{
    setCantidadAgregada(cantidad);
    // Se agrega el producto al carrito con la cantidad recibida como parametro
    addItem({id:producto.id,name:producto.title,price:producto.price,img:producto.pictureUrl},cantidad);
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={`./../../public/images/${producto.pictureUrl}.jpg`} className="img-fluid rounded-start" alt={producto.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="dancing-script">{producto.title}</p>
            <h6 className="card-text">{producto.description}</h6>
            <h5>$ {producto.price}</h5>
            {
              cantidadAgregada>0 ? (
                <Link to="/cart" className="btn m-2 btn-outline-dark">Terminar compra</Link>
              ) : (
                <ItemCount stockProducto={producto.stock} onAdd={onAdd} />
              )
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemDetail;