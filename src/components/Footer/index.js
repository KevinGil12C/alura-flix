import styles from "./Footer.module.css"
import logo from "./logo.png"

function Footer(){
    return(
        <>
            <footer className={styles.container}>
                <img src={logo}/>
            </footer>
        </>
    )
}

export default Footer