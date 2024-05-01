import Item from "./Item";

const ItemList = ({productosList}) => {
 
  return (
    <>{  
        productosList.map(producto =>(
          <Item key={producto.id} producto={producto} />
        ))
      }
    </>
  )
}
export default ItemList;