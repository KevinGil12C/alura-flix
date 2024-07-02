import { Link, useLocation } from "react-router-dom";
import styles from "./Cabecera.module.css";
import logo from "./logo.png";
import CabeceraLink from "../CabeceraLink";
import Boton from "../Boton";


import homeIMG from "./home.png";
import addIMG from "./add.png";
import homeActiveIMG from "./home_active.png";
import addActiveIMG from "./add_active.png";


function Cabecera() {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isNuevoVideo = location.pathname === "/nuevo_video";
   
    return (
        <header className={styles.cabecera}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo AluraFlix" />
                </section>
            </Link>
            <nav>
                <CabeceraLink url="/">
                    <Boton className={`${styles.botonHome} ${isNuevoVideo ? styles.active : ""}`}>
                        <p>HOME</p>
                        <img src={isHome ? homeIMG:homeActiveIMG} />
                    </Boton>
                </CabeceraLink>
                <CabeceraLink url="/nuevo_video">
                    <Boton className={`${styles.botonNuevoVideo} ${isNuevoVideo ? styles.active : ""}`}>
                        <p>NUEVO VIDEO</p>
                        <img src={isHome ? addIMG:addActiveIMG} />
                    </Boton>
                </CabeceraLink>
            </nav>
        </header>
    );
}

export default Cabecera;
