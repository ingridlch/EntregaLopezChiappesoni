import { useEffect, useState } from "react";

const ItemCount = ({stockProducto}) => {
  const [cantidad, setCantidad] = useState(1);
  const [stock, setStock] = useState(0);

  const onAdd = ()=>{
    if(cantidad<=stock){
      setStock(stock-cantidad);
      setCantidad(1);
      console.log('Se agregaron '+cantidad);
    }
  }

  const restar = ()=>{
    if(cantidad>1) setCantidad(cantidad-1);
  }

  const sumar = ()=>{
    if(cantidad<stock) setCantidad(cantidad+1);
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
      <button className={`btn m-2 btn-outline-${stock>0 ? 'dark' : 'secondary'}`} onClick={onAdd}>Agregar al carrito</button>
      
    </>
  )
}
export default ItemCount;