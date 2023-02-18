import Header from "../Components/Header/Header";
import "../Styles/Media-Queries.css";
import "../Styles/Media-Queries.css";
import Redes from "../Components/Footer/Redes";
import Links from "../Components/Footer/Links";
import Menu from "../Components/Main/Menu";

const AboutMe=()=>{
    return(
        <div>
            <Header></Header>
            <main className="experience-main aboutme-main">
                <section className="experience-main-container">
                <div className="experience--contend aboutme-contend">
                        <div className="experience--img aboutme-img">
                            <img src="https://i.ibb.co/6sTdmjh/fotor-2023-2-18-17-43-13.webp" alt="Foto de Perfil" />
                        </div>
                        <div className="experience--info">
                            <h1>Hola, mi nombre es Gehiner Sierra!</h1>
                            <br/>
                            <span>
                            Soy desarrollador web con énfasis en frontend, con experiencia en el desarrollo de plataformas, teniendo en cuenta la experiencia del usuario UX y el diseño de interfaces de usuario UI, liderando equipos de más de cinco personas , desarrollo de funcionalidades como filtros de productos, manejo de carrito de compras, dashboard de administrador (CRUD), paginado API y manejo de bases de datos relacionales y no relacionales.
                            </span>
                        </div>
                    </div>
                </section>
                <h2 className="aboutme-subtitle">
                    Conoce m&aacute; sobre m&Iacute;
                </h2>
                <Menu/>
            </main>
            <footer>
                <Links/>
                <Redes></Redes>
            </footer>
        </div>
    )
};

export default AboutMe;