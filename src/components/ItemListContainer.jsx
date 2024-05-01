import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import Cargando from "./Cargando";
import listado from "./json/listado.json";

const ItemListContainer = ({mensaje}) => {
  const [productosList, setProductosList] = useState([]);
  const [cargando, setCargando] = useState(false);
  const {id} = useParams();

  useEffect(()=>{
    setCargando(true);
    const getProductos = new Promise(resolve =>{
      setTimeout(()=>{// si no se pasa la categoría filtra productos sugeridos
        resolve(id ? listado.filter(p => p.categoria===id) : listado.filter(p => p.sugerido===1));
      }, 2000)
    })
    console.log('entra '+id);
    getProductos.then(resp=>{
      setProductosList(resp);
      setCargando(false);
    })
  }, [id]);

  return (
    <div className="container-lg">
        {id ? "" : 
          /* en la página principal se muestra el carousel y sugerencias de productos */
          <>
            <Carousel />
            <div className="row">
              <div className="col dancing-script text-center m-3">{mensaje}</div>
              <p className="text-center h5">¡Tenemos exquisitas sugerencias!</p>
            </div>
          </>  
        }

        { /* muestra si está cargando y un aviso si no hay productos como resultado de la consulta */
          cargando ? <Cargando /> : (productosList.length===0  ? <div className="text-center">No se encontraron productos con este filtro</div> : "") 
        }

        <div className="row">
          <ItemList productosList={productosList} />
        </div>
    </div>    
  )
}
export default ItemListContainer;