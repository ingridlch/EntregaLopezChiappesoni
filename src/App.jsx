import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NavBar from './components/NavBar'
import Error404 from './components/Error404';

function App() {
  const mensaje = "¿Y si probás nuestras delicias?";
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer mensaje={mensaje} />} />
        <Route path={"/category/:id"} element={<ItemListContainer mensaje={mensaje} />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"/*"} element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App