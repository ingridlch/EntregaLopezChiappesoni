import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import listado from "./json/listado.json";
import ItemDetail from "./ItemDetail";
import Cargando from "./Cargando";
import Error404 from "./Error404";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const [cargando, setCargando] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    setCargando(true);
    const getProducto = new Promise(resolve =>{
      setTimeout(()=>{
        resolve(listado.find(p =>p.id===parseInt(id)));
      },2000)
    })
    console.log('ItemDetailContainer: '+id);
    getProducto.then(resp =>{
      setProducto(resp);
      setCargando(false);
    })

  },[id])


  return (
    <div className="container-lg">
      <div className="row">
        { /* muestra si está cargando */
          cargando ? <Cargando /> : 
          /* al terminar la búsqueda si encontró el producto lo muestra, y si no indica que no está la página solicitada */
          (producto ? <div className="col"><ItemDetail producto={producto} /></div> : <Error404 />)
        }
      </div>
    </div>
  )
}
export default ItemDetailContainer;