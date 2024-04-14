const Carousel = () => {
  return (
    <div className="container">
        <div className="row">
        <div className="col">
        <div id="carouselExampleAutoplaying" className="carousel slide mx-auto" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./../../public/images/carousel11.jpg" className="d-block w-100" alt="Selva negra" />
            </div>
            <div className="carousel-item">
              <img src="./../../public/images/carousel12.jpg" className="d-block w-100" alt="Pie de limón" />
            </div>
            <div className="carousel-item">
              <img src="./../../public/images/carousel13.jpg" className="d-block w-100" alt="Mini cheese cake" />
            </div>
            <div className="carousel-item">
              <img src="./../../public/images/carousel14.jpg" className="d-block w-100" alt="Macarons" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
      </div>
    </div>      
    
  )
}
export default Carousel