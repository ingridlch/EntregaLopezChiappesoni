import './App.css'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Sugerencias from './components/Sugerencias'

function App() {

  return (
    <>
      <NavBar />
      <Carousel />
      <ItemListContainer mensaje={"¿Y si probás nuestras delicias?"} />
      <Sugerencias />
      <Footer />
    </>
  )
}

export default App
