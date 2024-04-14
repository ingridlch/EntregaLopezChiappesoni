const ItemListContainer = ({mensaje}) => {
  return (
    <div className="container-lg">
        <div className="row">
          <div className="col dancing-script text-center m-3">
            {mensaje}
          </div>
        </div>
    </div>    
  )
}
export default ItemListContainer;