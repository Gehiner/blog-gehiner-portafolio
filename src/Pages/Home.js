import Header from "../Components/Header/Header";
import "../Styles/Media-Queries.css";
import "../Styles/Media-Queries.css";
import Links from "../Components/Footer/Links";
import Menu from "../Components/Main/Menu";
import Redes from "../Components/Footer/Redes";
const Home=()=>{
    return(
        <div>
            <Header/>
            <main className="main-home">
                <section className="presentation-container">
                    <h1>Gehiner Ferley Sierra Rinc&oacute;n</h1>
                    <h2 className="presentation-container__subtitle">Hola a todos soy Front-end Developer</h2>
                    <Redes/>
                </section>
                <Menu></Menu>
            </main>
            <footer className="footer-main">
                <Links></Links>
            </footer>
        </div>
    )

};

export default Home;