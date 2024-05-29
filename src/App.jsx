import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import Error from './components/Error';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

function App() {
  const mensaje = "¿Y si probás nuestras delicias?";
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer mensaje={mensaje} />} />
          <Route path={"/category/:id"} element={<ItemListContainer mensaje={mensaje} />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/*"} element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>  
  )
}
export default App