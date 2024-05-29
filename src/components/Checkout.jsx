import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import Error from "./Error";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Link } from 'react-router-dom'

const Checkout = ()=>{
  const {cart, clear, getCount, getTotalPrice} = useContext(CartContext);
  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [email2,setEmail2] = useState("");
  const [orderId,setOrderId] = useState("");
  const [msg,setMsg] = useState("");

  const setCreateOrder = () =>{
    if(!(name!==''&&phone!==''&&email!==''&&email2!=='')){setMsg("Debe completar todos los datos");return;}
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!email.match(isValidEmail)){setMsg("Los emails deben tener un formato válido");return;}
    if(!email2.match(isValidEmail)){setMsg("Los emails deben tener un formato válido");return;}
    if(email!==email2){setMsg("Los emails deben coincidir");return;}

    const date = new Date();
    const order = {
      buyer: {name:name, phone:phone, email:email},
      items: cart.map(p =>({id:p.id, name:p.name, quantity:p.quantity, price:p.price})),
      date: `${date.getDate()}/${date.getMonth()<9?'0':''}${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()<10?'0':''}${date.getHours()}:${date.getMinutes()<10?'0':''}${date.getMinutes()}:${date.getSeconds()<10?'0':''}${date.getSeconds()}`,
      total: getTotalPrice()
    }
    const db = getFirestore();
    const ordersCollection = collection(db,"orders");
    addDoc(ordersCollection,order).then(({id})=>{
      setOrderId(id);
      clear();
    })
  }

  if(getCount()==0 && !orderId){
    return <Error mensaje="No hay productos en el carrito" /> 
  } 

  return (
    <div className="container-lg">
      <div className="row mt-3 p-2 bg-light">
        { !orderId
          ? <>
              <div className="col bg-secondary-subtle">
                <form>
                  <div className="mb-1">
                    <label className="form-label">Nombre y apellido</label>
                    <input type="text" className="form-control" onInput={({target})=>{setName(target.value.trim());setMsg("")}} autoFocus />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Teléfono</label>
                    <input type="text" className="form-control" onInput={({target})=>{setPhone(target.value);setMsg("")}} onKeyDown={(e) => {console.log(e.key);if(!(/[0-9]/.test(e.key)||e.key==="Backspace"||e.key==="Delete"||e.key==="ArrowLeft"||e.key==="ArrowRight"||e.key==="Tab"))e.preventDefault()}} />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" onInput={({target})=>{setEmail(target.value);setMsg("")}} />
                  </div>
                  <div className="mb-1">
                    <label className="form-label">Corroborar Email</label>
                    <input type="text" className="form-control" onInput={({target})=>{setEmail2(target.value);setMsg("")}} />
                  </div>
                  <div><p className="bg-warning-subtle">{msg}</p></div>
                  <div className="m-2 text-center">
                    <button type="button" className="btn btn-outline-dark btn-light" onClick={()=>setCreateOrder()}>Realizar compra</button>
                  </div>
                </form>
              </div>
              <div className="col">
                <table className="table table-hover">
                  <thead>
                    <tr className="table-secondary">
                      <td className="text-center" colSpan={2}>Producto</td>
                      <td className="text-end">Cant.</td>
                      <td className="text-end">P. unit.</td>
                      <td className="text-end">P. total</td>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map(item =>(
                        <tr key={item.id}>
                          <td><img src={`./../../public/images/${item.img}.jpg`} alt={item.name} width={50} /></td>
                          <td>{item.name}</td>
                          <td className="text-end">{item.quantity} x</td>
                          <td className="text-end">$ {item.price}</td>
                          <td className="text-end">$ {item.quantity*item.price}</td>
                        </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="table-secondary">
                      <th className="text-center" colSpan={4}>Total</th>
                      <td className="text-end">$ {getTotalPrice()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </>
          : <div className="col text-center">
              <div className="dancing-script m-3">¡Felicitaciones {name}!</div>
              <p className="h5 m-4">Su id de orden de compra es {orderId}</p>
              <Link to={"/"} className="btn bg-body-secondary">Volver a la Página Principal</Link>
            </div> 
        }
      </div>
    </div>
  )
}
export default Checkout;