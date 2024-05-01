import { Link } from 'react-router-dom'

const Error404 = () =>{
  return (
    <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className='mt-3 p-2 bg-light'>
              <img src="./../../public/images/404.jpg" alt="Error 404" />
              <h4>No encontramos la página solicitada</h4>
              <Link to={"/"} className="btn bg-body-secondary">Volver a la Página Principal</Link>
            </div>
          </div>
        </div>
    </div>      
  )
}
export default Error404;