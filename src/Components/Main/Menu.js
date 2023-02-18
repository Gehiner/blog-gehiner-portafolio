import "../../Styles/main.css"
import "../../Styles/Media-Queries.css"
import Redes from "../Footer/Redes";
const Menu = ()=>{
    return(
            <section className="CV-options">
                <a href="/proyects">
                    <img src="https://i.ibb.co/6XXK7YX/web.webp" alt="Icono de Proyectos" />
                    <h2>Portafolio</h2>
                </a>
                <a href="/skills">
                    <img src="https://i.ibb.co/rM9v2ZZ/desarrollo-de-habilidades.webp" alt="Icono de Habilidades" />
                    <h2>Habilidades</h2>
                </a>
                <a href="/experience">
                    <img src="https://i.ibb.co/GsrJd1N/sitio-web.webp" alt="Icono de Experiencia" />
                    <h2>Experiencia</h2>
                </a>
            </section>
    )
};

export default Menu;