import styles from "./Card.module.css"

function Card({ children, id, title, enlace, categoria }) {
    return (<>
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <iframe
                    width="100%"
                    height="100%"
                    src={enlace}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            </div>
            {children}
        </div>
    </>)
}

export default Card