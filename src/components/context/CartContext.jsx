import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addItem = (item,quantity)=>{
    if(!isInCart(item.id)){
      setCart([...cart, {...item, quantity:quantity}]);
    } else {
      let itemFind = cart.find(p=>p.id===item.id);
      itemFind.quantity += quantity;
      setCart([...cart]);
    }
  }

  const removeItem = (itemId)=>{
    const newCart = cart.filter(p =>p.id!==itemId);
    setCart(newCart);
  }

  const clear = ()=>{
    setCart([]);
  }

  const isInCart = (itemId)=>{
    return cart.some(p => p.id===itemId);
  }

  const getCount = ()=>{
    return cart.reduce((count,p)=>count+=p.quantity,0);
  }

  const getTotalPrice = ()=>{
    return cart.reduce((total,p)=>total+=p.quantity*p.price,0)
  }

  return (
    <CartContext.Provider value={{cart, addItem, removeItem, clear, getCount, getTotalPrice}}>
      {children}
    </CartContext.Provider>
  )
}
export default CartContextProvider;