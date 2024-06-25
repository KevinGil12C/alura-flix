import { Link } from "react-router-dom"
import styles from "./Card.module.css"

function Card({ children, id, color, capa, enlace }) {
    return (<>
        
            <div className={styles.container} style={{ '--border-color': color }}>
                <div className={styles.cardContainer}>
                    <a href={enlace} target="_blank"><img src={capa}/></a>
                </div>
                {children }
                
            </div>
    </>)
}

export default Card