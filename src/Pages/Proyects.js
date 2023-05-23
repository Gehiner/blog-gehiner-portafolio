import { defer } from "react-router-dom";
import "../Styles/main.css";
import "../Styles/Media-Queries.css";
import Links from "../Components/Footer/Links";
import Redes from "../Components/Footer/Redes";
import Header from "../Components/Header/Header";
const Proyects=()=>{
    return(
        <div>
            <Header/>
            <main className="proyects-main">
                <h1>PORTAFOLIO</h1>
                <section className="proyects-container">
                    <a href="https://u3405-ukemochi-frontend-app.vercel.app/"> <img src="https://i.ibb.co/vcFxSNM/ukeMochi.webp" alt="UkeMochi" /></a>
                    <a href="https://gehiner.github.io/"> <img src="https://i.ibb.co/dQy7ZWJ/miBlog.webp" alt="Blog-Github" /></a>
                    <a href="https://gitlab.com/05401/vuelafacil"> <img src="https://i.ibb.co/d64Y8rh/Vuela-Facil.webp" alt="Vuela Facil" /></a>
                    <a href="https://gehiner.github.io/Yard-Sale-Curso-Practico-Platzi/"> <img src="https://i.ibb.co/7Xr5Nwc/YardSale.webp" alt="Yard-Sale" /></a>
                    <a href="https://github.com/Gehiner/BataBit-Platzi"> <img src="https://i.ibb.co/yfTtWR6/Batabit.webp" alt=" Batatabit" /></a>
                    <a href="https://github.com/Gehiner/Viking"> <img src="https://i.ibb.co/wSXJmNK/Vikingo.webp" alt="Vikingo" /></a>
                    <a href="https://github.com/Gehiner/GridPractica"> <img src="https://i.ibb.co/hgTLGYm/Reto-Platzi.webp" alt="Proyecto-Plazti" /></a>
                </section>
            </main>
            <footer>
                <Links></Links>
                <Redes></Redes>
            </footer>
        </div>
    )
};

export default Proyects;