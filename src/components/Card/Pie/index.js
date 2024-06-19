import styles from "./Pie.module.css"
import borrar from "./delete.png"
import actualizar from "./update.png"
function Pie(){
    return(
        <>
            <div className={styles.container}>
                <div className={styles.delete}>
                    <img src={borrar}/>
                    <h1>Borrar</h1>
                </div>
                <div className={styles.actualizar}>
                    <img src={actualizar}/>
                    <h1>Editar</h1>
                </div>
            </div>
        </>
    )
}

export default Pie