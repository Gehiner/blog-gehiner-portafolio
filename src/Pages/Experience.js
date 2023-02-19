import Header from "../Components/Header/Header";
import "../Styles/Media-Queries.css";
import "../Styles/Media-Queries.css";
import Redes from "../Components/Footer/Redes";
import Links from "../Components/Footer/Links";

const Experience=()=>{
    return(
        <div>
            <Header/>
            <main className="experience-main">
                <section  className="experience-main-container">
                <div className="experience--contend">
                        <div className="experience--img">
                            <img src="https://i.ibb.co/F8ZJdR8/pexels-rfstudio-3825581.webp" alt="Ingeniero de Soporte" />
                        </div>
                        <div className="experience--info">
                            <h2>Ingeniero de Soporte</h2>
                            <br/>
                            <h3>Royher SAS &#40;dic. 2022 - actualidad  &#41;</h3>
                            <br/>
                            <br/>
                            <span>Dar solución a las incidencias que se presentan a nivel de software y hardwareo.</span>
                            <br/>
                            <span>Reportar periódicamente el desarrollo de cada solución brindada ante las incidencias presentadas a la gerencia y los clientes externos.</span>
                            <br/>
                            <br/>
                            <span>Administrar la suite de Microsoft 365 con el objetivo de asegurar el buen funcionamiento de las operaciones administrativas y logísticas.</span>
                        </div>
                    </div>
                    <div className="experience--contend">
                        <div className="experience--img">
                            <img src="https://i.ibb.co/vZTnjTk/pexels-lukas-574071.webp" alt="Desarrolador Web" />
                        </div>
                        <div className="experience--info">
                            <h2>Desarrollador Frontend - MINTIC</h2>
                            <br/>
                            <h3>Universidad Industrial de Santander &#40;abr. 2022 - nov. 2022 &#41;</h3>
                            <br/>
                            <span>Desarrollar funcionalidades de acuerdo con la necesidad de la aplicación en las cuales se implementaron tecnologías de frontend como HTML 5, CSS y Reactjs.
                            </span>
                            <br/>
                            <br/>
                            <span>Coordinar las tareas diarias de los proyectos para los equipos de frontend y backend.</span>
                            <br/>
                            <br/>
                            <span>Definir cada interfaz de las aplicaciones web y tiendas virtuales utilizando Figma.   </span>
                            <br/>
                            <br/>
                            <h3>Logros</h3>
                            <br/>
                            <span>Implementé un CRUD exitosamente mediante un API del Backend (NodeJs) que se conectaba a una base de datos no relacional en Atlas MongoDB.</span>
                            <br/>
                            <br/>
                            <span>Lideré el proyecto Uke Mochi y Vuela Fácil, que permite a los usuarios contar con una plataforma en la que pueden acceder a productos y servicios, para facilitar su proceso de compra. </span>
                            <br/>
                            <br/>
                            <span>Desarrollé más de 2 proyectos de diseño de interfaces, utilizando herramientas de programación como HTML, CSS, Javascript y Reactjs.</span>
                        </div>
                    </div>
                    <div className="experience--contend">
                        <div className="experience--img">
                            <img src="https://i.ibb.co/zFRV8fn/pexels-rodnae-productions-8198567.webp" alt="Productor Audiovisual" />
                        </div>
                        <div className="experience--info">
                            <h2>Productor Audiovisual </h2>
                            <br/>
                            <h3>Seminario San Alfonso &#40;mar. 2020 - dic. 2021 &#41;</h3>
                            <br/>
                            <span>Crear animaciones y videos utilizando  Illustrator, After Effects y Premiere para los streamings de la Parroquia Santísimo Redentor y Seminario San Alfonso.</span>
                            <br/>
                            <br/>
                            <span>Definir la parrilla de contenido y el guión  de cada producción de  la Parroquia Santísimo Redentor y Seminario San Alfonso.</span>
                            <br/>
                            <br/>
                            <h3>Logros</h3>
                            <br/>
                            <span>Implementé un sistema de streaming que generó un aumento en  la cantidad de suscriptores de 100 a 1000 en 3 semanas.</span>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Links></Links>
                <Redes></Redes>
            </footer>
        </div>
    )
};

export default Experience;