import styles from "./NotFound.module.css"
import error from "./notfound.jpeg"
function NotFound(){
    return(<>
        <section className={styles.container}>
            <img src={error}/>
            <p className={styles.text}>Página no encontrada</p>
        </section>
    </>)
}

export default NotFound