import { useEffect, useState } from "react";

const ItemCount = ({stockProducto, onAdd}) => {
  const [cantidad, setCantidad] = useState(1);
  const [stock, setStock] = useState(0);

  const onAddCart = ()=>{
    if(cantidad<=stock){
      setStock(stock-cantidad);
      setCantidad(1);
      onAdd(cantidad);
    }
  }

  const restar = ()=>{
    if(cantidad>1) setCantidad(cantidad-1);
  }

  const sumar = ()=>{
    if(cantidad<stockProducto) setCantidad(cantidad+1);
  }

  useEffect(()=>{
    console.log("stock producto "+stockProducto);
    setStock(stockProducto);
  },[stockProducto])

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-outline-dark" onClick={restar}>-</button>
        <button type="button" className="btn btn-outline-dark">{cantidad}</button>
        <button type="button" className="btn btn-outline-dark" onClick={sumar}>+</button>
      </div>
      <button onClick={onAddCart} className={`btn m-2 btn-outline-${stockProducto>0 ? 'dark' : 'secondary'}`} disabled={ !(stockProducto>0) } >Agregar al carrito</button>
    </>
  )
}
export default ItemCount;