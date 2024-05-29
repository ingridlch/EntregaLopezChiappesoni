import { Link } from 'react-router-dom'

const Error404 = ({mensaje='No encontramos la página solicitada'}) =>{
  return (
    <div className="container">
        <div className="row">
          <div className="col text-center">
            <div className='mt-3 p-2 bg-light'>
              <img src="./../../public/images/error.jpg" alt="Error" width={130} />
              <div className='h4 m-2'>{mensaje}</div>
              <Link to={"/"} className="btn bg-body-secondary">Volver a la Página Principal</Link>
            </div>
          </div>
        </div>
    </div>      
  )
}
export default Error404;