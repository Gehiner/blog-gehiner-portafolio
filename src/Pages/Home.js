import Header from "../Components/Header/Header";
import "../Styles/Media-Queries.css";
import "../Styles/Media-Queries.css";
import { Link } from "react-router-dom";
const Home=()=>{
    return(
        <div>
            <Header/>
            <main>
                <section>
                    <h1>Gehiner Ferley Sierra Rinc&oacute;n</h1>
                    <h2>Hola a todos soy Front-end Developer</h2>
                    <div>
                        <a href=""><img src="https://i.ibb.co/6XDnmX0/logotipo-de-github.webp" alt="GitHub" /></a>
                        <a href=""><img src="https://i.ibb.co/NxmFWfD/linkedin.webp" alt="LinkedIn" /></a>
                        <a href=""><img src="https://i.ibb.co/Bn4gYNm/logotipo-circular-de-facebook.webp" alt="Facebook" /></a>
                        <a href=""><img src="https://i.ibb.co/M8v9910/twitter.webp" alt="Twiter" /></a>
                    </div>
                </section>
                <section>
                    <a href="">
                        <img src="" alt="" />
                        <h2>Proyectos</h2>
                    </a>
                    <a href="">
                        <img src="" alt="" />
                        <h2>Habilidades</h2>
                    </a>
                    <a href="">
                        <img src="" alt="" />
                        <h2>Experiencia</h2>
                    </a>
                </section>
            </main>
        </div>
    )

};

export default Home;