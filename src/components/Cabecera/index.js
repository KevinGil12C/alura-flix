import { Link } from "react-router-dom"
import styles from "./Cabecera.module.css"
import logo from "./logo.png"
import CabeceraLink from "../CabeceraLink"
import Boton from "../Boton"

function Cabecera() {
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo AluraFlix"/>
                </section>
            </Link>
            <nav>
                <CabeceraLink url="./"> 
                    <Boton className={styles.botonHome}>HOME</Boton>
                </CabeceraLink>
                <CabeceraLink url="./nuevo_video">
                    <Boton className={styles.botonNuevoVideo}>NUEVO VIDEO</Boton>
                </CabeceraLink>
            </nav>
        </header>
    )
}

export default Cabecera
