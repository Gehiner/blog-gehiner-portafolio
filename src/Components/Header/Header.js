import "../../Styles/main.css";
import "../../Styles/Media-Queries.css";
const Header=()=>{
    return(
        <header>
            <nav>
                <a href="/" className="logo-container">
                    <img src="https://i.ibb.co/TYkY1Mw/Copia-de-Logotipo-de-empresa-de-programaci-n-de-sistemas-y-tecnolog-a-copia.webp" alt="Logo de la p&aacute;gina" className="logo"/>
                </a>
                <div className="options-nav">
                    <a href="/">HOME</a>
                    <a href="/aboutme">SOBRE M&Iacute;</a>
                </div>
            </nav>
        </header>
    )
};

export default Header;