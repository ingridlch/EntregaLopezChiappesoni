import ItemCount from "./ItemCount";

const ItemDetail = ({producto})=>{
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={producto.pictureUrl} className="img-fluid rounded-start" alt={producto.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="dancing-script">{producto.title}</p>
            <h6 className="card-text">{producto.description}</h6>
            <h5>$ {producto.price}</h5>
            <ItemCount stockProducto={producto.stock} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemDetail;