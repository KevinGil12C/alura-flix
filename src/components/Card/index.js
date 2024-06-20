import styles from "./Card.module.css"

function Card({ children, id, color, capa, categoria }) {
    return (<>
        <div className={styles.container} style={{ '--border-color': categoria.color }}>
            <div className={styles.cardContainer}>
                <img src={capa}/>
            </div>
            {children}
        </div>
    </>)
}

export default Card