import styles from "./Titulo.module.css";

function Titulo({ children, color }) {
    const defaultColor = "#6BD1FF"; // Color por defecto para "frontend"
    const backgroundColor = color || defaultColor;

    return (
        <div className={styles.container} style={{ '--back-color': backgroundColor }}>
            {children}
        </div>
    );
}

export default Titulo;
