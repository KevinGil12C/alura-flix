import styles from "./Card.module.css"

function Card({ children }) {
    return (<>
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <img src="http://img.youtube.com/vi/FyKPsua6Br8/maxresdefault.jpg" />
            </div>
            {children}
        </div>
    </>)
}

export default Card