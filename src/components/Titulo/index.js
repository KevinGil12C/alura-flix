import styles from "./Titulo.module.css"

function Titulo({children}){
    return(
    <>
        <div className={styles.container}>
            {children}
        </div>  
    </>)
}

export default Titulo