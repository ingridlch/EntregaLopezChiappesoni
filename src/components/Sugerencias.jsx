const SugerenciasBox = ({producto}) => {
  return (
    <div className="col">
          <div className="sugerencia">
            <img src={producto.imagen} alt={producto.nombre} className="img-fluid" />
            <div className="sugerencia-aclara">
              <div>
                <span className="dancing-script-m">{producto.nombre}</span>
                <p>{producto.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
  );
}

const Sugerencias = () => {
  const mininaranja = {nombre:"Mini delicia de chocolate y naranja", descripcion:"Base de brownie, suave crema de naranjas, y delicada cubierta de chocolate semi amargo, naranjas confitadas y almendras crocantes.", imagen:"./../../public/images/mininaranja.jpg"};
  const parisbrest = {nombre:"Paris Brest de pistachos y frutos rojos", descripcion:"Masa choux rellena con crema de pistachos y frescos tropezones de frutos rojos: un poste francés que te va a encantar!", imagen:"./../../public/images/parisbrest.jpg"};
  const baklawa = {nombre:"Baklawa con nueces", descripcion:"Masa filo con relleno de nueces embebido en aromático almíbar con mezcla de especias: una dulce exquisitez del lejano oriente.", imagen:"./../../public/images/baklawa.jpg"};
  return (
    <div className="container-lg bg-light rounded p-2">
      <div className="row">
        <div className="col">
          <p className="text-center h5">Te sugerimos</p>
        </div>
      </div>
      <div className="row">
          <SugerenciasBox producto={mininaranja} />
          <SugerenciasBox producto={parisbrest} />
          <SugerenciasBox producto={baklawa} />
      </div>
    </div>  
  );
}

export default Sugerencias