import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import Cargando from "./Cargando";
import Error from "./Error";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(false);
  const {id} = useParams();

  /* producto vía firebase */
  useEffect(()=>{
    setCargando(true);
    const db  = getFirestore();
    const pro = doc(db, "items", id);
    getDoc(pro)
    .then(snapshot=>{
      if(snapshot.exists()){
        setProducto({id:snapshot.id, ...snapshot.data()});
      } else { console.log('no encontro')
        setProducto(null);
      }
    })
    .finally(()=>{setCargando(false);});
  }, [id]);


  return (
    <div className="container-lg">
      <div className="row">
        { /* muestra si está cargando */
          cargando ? <Cargando /> : 
          /* al terminar la búsqueda si encontró el producto lo muestra, y si no indica que no está la página solicitada */
          (producto 
            ? <div className="col"><ItemDetail producto={producto} /></div> 
            : <Error mensaje="No se encontró el producto" />
          )
        }
      </div>
    </div>
  )
}
export default ItemDetailContainer;