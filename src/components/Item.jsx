import { Link } from "react-router-dom";

const Item = ({producto}) => {
  return (
		<div className="col-md-3">
      <Link to={"/item/"+producto.id} className="text-decoration-none">
        <div className="card mb-2 mt-2" >
          <img src={producto.pictureUrl} className="card-img-top" alt={producto.title} />
          <div className="card-body p-2">
            <p className="dancing-script-m p-1 m-0">{producto.title}</p>
            <h6>$ {producto.price}</h6>
          </div>
        </div>
      </Link>  
    </div>
	)
}
export default Item;