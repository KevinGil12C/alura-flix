import Titulo from "../Titulo";
import styles from "./Banner.module.css";
import banner from "./banner.png";

function Banner() {
    return (
        <div className={styles.container} style={{
            backgroundImage: `linear-gradient(to right, rgba(10,7,38,0.6) 0%, rgba(34,113,209,0.4) 50%, rgba(34,113,209,0.2) 100%), url(${banner})`
        }}>
            <div className={styles.hero}>
                <Titulo>Front end</Titulo>
                <h1>Challenge React</h1>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </div>
            <section className={styles.video}>
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/1iJ5lof5kLM?si=UejKFefhPV4VL3i9" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </section>
        </div>
    );
}

export default Banner;
