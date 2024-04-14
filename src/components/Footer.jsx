import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
const Footer = () => {
    return (
      <footer className="bg-dark-subtle text-dark d-flex flex-column align-items-center justify-content-center p-2 mt-2">
        <div>
          ¡Disfrutá los sabores que creamos para vos! ¡Te esperamos! 
          <a href="#" rel="noopener noreferrer" className="m-1">
            <img src={instagram} alt="instagram" width={12} className="text-white" />
          </a>
          <a href="#" rel="noopener noreferrer" className="m-1">
            <img src={facebook} alt="facebook" width={12} className="text-white" />
          </a>
        </div>
      </footer>
    )
}
export default Footer;