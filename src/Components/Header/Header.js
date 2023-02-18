import { Link } from "react-router-dom";
import "../../Styles/main.css"
const Header=()=>{
    return(
        <header>
            <nav>
                <div>
                    <img src="" alt="Logo de la p&aacute;gina" />
                </div>
                <div>
                    <Link to="">HOME</Link>
                    <Link to="">SOBRE M&Iacute;</Link>
                </div>
            </nav>
        </header>
    )
};

export default Header;