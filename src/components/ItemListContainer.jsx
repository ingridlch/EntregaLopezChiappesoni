import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import Cargando from "./Cargando";

const ItemListContainer = ({mensaje}) => {
  const [productosList, setProductosList] = useState([]);
  const [cargando, setCargando] = useState(false);
  const {id} = useParams();

  /* productos vía firebase */
  useEffect(()=>{
    setCargando(true);
    const db  = getFirestore();
    const coll = collection(db,"items");
    const q = id ? query(coll, where("categoria","==", id)) : query(coll, where("sugerido","==", true));
    getDocs(q)
    .then(snapshot=>{
      if(snapshot.size>0){
        setProductosList(snapshot.docs.map(item=>({id:item.id, ...item.data()})));
      } else {
        setProductosList([]);
      }
    })
    .finally(()=>{setCargando(false);});
    
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