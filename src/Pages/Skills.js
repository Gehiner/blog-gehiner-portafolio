import "../Styles/main.css";
import "../Styles/Media-Queries.css";
import Links from "../Components/Footer/Links";
import Redes from "../Components/Footer/Redes";
import Header from "../Components/Header/Header";
const Skills=()=>{
    return(
        <div>
            <Header></Header>
            <main className="main-skill">
                <h1>Habilidades</h1>
                <section className="main-skill-container">
                    <div>
                        <img src="https://i.ibb.co/RY9f2GG/image-1.webp" alt="HTML5"/>
                        <span>HTML5</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/V9N8JfG/image-2.webp" alt="CC3"/>
                        <span>CC3</span>
                    </div>                    
                    <div>
                        <img src="https://i.ibb.co/vJznLfM/secuencia-de-comandos-de-java.webp" alt="JAVASCRIPT"/>
                        <span>JAVASCRIPT</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/9pHhQYB/image-3.webp" alt="REACT" />
                        <span>REACT</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/QfYZ4dS/18133.webp" alt="GIT" />
                        <span>GIT</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/VM1XzYT/image-7.webp" alt="GITHUB" />
                        <span>GITHUB</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/jTyx7nB/image-8.webp" alt="GITLAB"/>
                        <span>GITLAB</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/QXCJjk6/image-9.webp" alt="FIGMA"/>
                        <span>FIGMA</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/VCXQyL8/image-6.webp" alt="SCRUM"/>
                        <span>SCRUM</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/9gPr1WY/image-4.webp" alt="BOOTSTRAP"/>
                        <span>BOOTSTRAP</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/RTpd3nW/image-5.webp" alt="BASE DE DATOS" />
                        <span>BASE DE DATOS</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/ckmq8Nj/image-11.webp" alt="PREMIER PRO"/>
                        <span>PREMIER PRO</span>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/2dNC3vL/image-10.webp" alt="AFTER EFFECTS"/>
                        <span>AFTER EFFECTS</span>
                    </div>
                </section>
            </main>
            <footer className="footer-skills">
                <Links></Links>
                <Redes></Redes>
            </footer>
        </div>
    )
};

export default Skills;